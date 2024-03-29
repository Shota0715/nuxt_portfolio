<template>
  <div class="wrapper" ref="canvasWrapper">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { mapGetters, mapMutations } from "vuex";
import * as THREE from "three";
import { OrbitControls } from "../node_modules/three/examples/jsm/controls/OrbitControls";
import { randomRange } from "~/assets/ts/random";
const isElement = (x: any): x is Element => x instanceof Element;
@Component({
  computed: {
    ...mapGetters({
      shouldProcessBeTerminated: "particle/shouldProcessBeTerminated",
      isRunning: "particle/isRunning",
      shouldBeStopped: "particle/shouldBeStopped"
    })
  },
  methods: {
    ...mapMutations({
      addRunningIds: "particle/addRunningIds",
      moveRunningIdsToTerminateIds: "particle/moveRunningIdsToTerminateIds",
      start: "particle/start",
      stop: "particle/stop"
    })
  }
})
export default class ParticleCanvas extends Vue {
  public isRunning: any;
  public shouldBeStopped: any;
  public shouldProcessBeTerminated: any;
  public addRunningIds: any;
  public moveRunningIdsToTerminateIds: any;
  public start: any;
  public stop: any;
  @Prop() cameraController!: Element;
  mounted() {
    this.writeCanvas(false);
  }
  startCanvas() {
    this.start();
    this.writeCanvas(false);
  }
  regenerateCanvas() {
    this.writeCanvas(true);
  }
  
  writeCanvas(doRegenerateDots: boolean) {
    const { canvasWrapper } = this.$refs;
    if (!isElement(canvasWrapper)) return;
    const canvasWidth: number = canvasWrapper.clientWidth;
    const canvasHeight: number = canvasWrapper.clientHeight;
    const canvas = <HTMLCanvasElement>document.getElementById("canvas");
    // 形状データを作成
    const geometry = new THREE.Geometry();
    // 配置する範囲
    const SIZE = 3000;
    // 配置する個数
    const LENGTH = 1000;
    for (let i = 0; i < LENGTH; i++) {
      geometry.vertices.push(
        new THREE.Vector3(
          SIZE * (Math.random() - 0.5),
          SIZE * (Math.random() - 0.5),
          SIZE * (Math.random() - 0.5)
        )
      );
    }
    const scene = new THREE.Scene();
    for (let i = 0; i < 10; i++) {
      const material = new THREE.PointsMaterial({
        size: randomRange(20, 60),
        map: this.createCanvasMaterial(
          255,
          randomRange(146, 246),
          randomRange(101, 201),
          256,
          1,
          0.85
        ),
        transparent: true,
        depthWrite: false,
        blending: THREE.AdditiveBlending
      });
      const particles = new THREE.Points(geometry, material);
      particles.rotation.x = Math.random() * 6;
      particles.rotation.y = Math.random() * 6;
      particles.rotation.z = Math.random() * 6;
      scene.add(particles);
    }
    scene.fog = new THREE.Fog(0x313131, 50, 2000);
    scene.background = new THREE.Color(0x101010);
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    // particleの中心が画面外に出たとき突然particleが消失したように見えるのを防ぐため+100する
    renderer.setSize(canvasWidth + 100, canvasHeight + 100);
    const camera = new THREE.PerspectiveCamera(45, canvasWidth / canvasHeight);
    //camera.position.set(0, 0, 1000);

    let rotX = 0; // 角度
    let rotY = 0; // 角度
    let mouseX = 0; // マウス座標X
    let mouseY = 0; // マウス座標Y

    const controls = new OrbitControls(camera, canvas);
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.5;
    // 滑らかにカメラコントローラーを制御する
    controls.enableDamping = true;
    controls.dampingFactor = 0.2;
    controls.enableZoom = false;
    // start animation
    this.moveRunningIdsToTerminateIds();
    const pid = new Date().getTime();
    this.addRunningIds(pid);
    this.updateCanvas(this, renderer, pid)(
      scene,
      camera,
      controls,
      rotX,
      rotY,
      mouseX,
      mouseY
    );
  }

  //毎フレーム時に実行されるループイベント
  private updateCanvas = (
    self: any,
    renderer: THREE.WebGLRenderer,
    pid: number
  ) => (scene: THREE.Scene, camera: THREE.PerspectiveCamera, controls: any, rotX: number, rotY: number, mouseX: number, mouseY: number) => {
    // thisへはアクセスできないので注意
    if (self.shouldProcessBeTerminated(pid)) return;
    const recursion = () =>
      self.updateCanvas(self, renderer, pid)(
        scene,
        camera,
        controls,
        rotX,
        rotY,
        mouseX,
        mouseY
      );
    // main animation processing
    const time = Date.now() * 0.00005;
    for (let i = 0; i < scene.children.length; i++) {
      const object = scene.children[i];
      if (object instanceof THREE.Points) {
        if (i % 3 === 0)
          object.rotation.x = time * (i < 5 ? i + 1 : -(i + 1)) * 0.1;
        if (i % 3 === 1)
          object.rotation.y = time * (i < 5 ? i + 1 : -(i + 1)) * 0.1;
        if (i % 3 === 2)
          object.rotation.z = time * (i < 5 ? i + 1 : -(i + 1)) * 0.1;
      }
    }

    // マウス座標はマウスが動いた時のみ取得できる
    window.addEventListener("mousemove", (event) => {
      mouseX = event.pageX;
      //mouseY = event.pageY;
    });
    // マウスの位置に応じて角度を設定
    // マウスのX座標がステージの幅の何%の位置にあるか調べてそれを360度で乗算する
    const targetRotX = (mouseX / window.innerWidth) * 360;
    // マウスのY座標がステージの高さの何%の位置にあるか調べてそれを360度で乗算する
    //const targetRotY = (mouseY / window.innerHeight) * 360;
    // イージングの公式を用いて滑らかにする
    // 値 += (目標値 - 現在の値) * 減速値
    rotX += (targetRotX - rotX) * 0.4;
    //rotY += (targetRotY - rotY) * 0.4;
    // ラジアンに変換する
    const radianX = rotX * Math.PI / 180;
    //const radianY = rotX * Math.PI / 180;
    // 角度に応じてカメラの位置を設定
    camera.position.x = -1000 * Math.sin(radianX);
    camera.position.z = 1000 * Math.cos(radianX);
    //camera.position.y = 1000 * Math.sin(radianY);
    // 原点方向を見つめる
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    
    controls.update();
    renderer.render(scene, camera);
    if (!self.shouldBeStopped) {
      requestAnimationFrame(recursion);
    }
  };
  stopCanvas() {
    this.stop();
    this.moveRunningIdsToTerminateIds();
  }
  createCanvasMaterial(
    colorR: number,
    colorG: number,
    colorB: number,
    size: number,
    alpha: number,
    blur: number
  ) {
    const matCanvas = document.createElement("canvas");
    matCanvas.width = matCanvas.height = size;
    const matContext = matCanvas.getContext("2d")!;
    // create exture object from canvas.
    const texture = new THREE.Texture(matCanvas);
    // Draw a circle
    const center = size / 2;
    matContext.globalAlpha = alpha;
    const blurDistance = 1 - blur;
    const radgrad = matContext.createRadialGradient(
      center,
      center,
      0,
      center,
      center,
      center
    );
    radgrad.addColorStop(0, `rgba(${colorR}, ${colorG}, ${colorB}, 1)`);
    radgrad.addColorStop(
      blurDistance,
      `rgba(${colorR}, ${colorG}, ${colorB}, ${blurDistance})`
    );
    radgrad.addColorStop(1, `rgba(${colorR}, ${colorG}, ${colorB}, 0)`);
    matContext.fillStyle = radgrad;
    matContext.fillRect(0, 0, size, size);
    // need to set needsUpdate
    texture.needsUpdate = true;
    // return a texture made from the canvas
    return texture;
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: auto;
  top: -20px;
  height: 90vh;
  overflow: hidden;
  position: relative;
  background-color: rgb(31, 31, 31);
  canvas {
    background-color: rgb(31, 31, 31);
  }
}
</style>