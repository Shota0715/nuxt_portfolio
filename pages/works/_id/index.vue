<template>
  <div class="child">
    <div class="worksMainVisual">
      <div class="container container--lg worksMainVisual__inner">
        <div class="worksMainVisual__contents">
          <h1 class="worksMainVisual__title">{{ work.title }}</h1>
          <dl v-if="work.date" class="worksMainVisual__item">
            <dt class="worksMainVisual__itemName">掲載日</dt>
            <dd>
                <time
                    :datetime="work.date"
                    v-text="$dateFns.format(new Date(work.date), 'yyyy.MM.dd')"
                />
            </dd>
          </dl>
          <dl v-if="work.term" class="worksMainVisual__item">
            <dt class="worksMainVisual__itemName">制作期間</dt>
            <dd>{{ work.term }}</dd>
          </dl>
          <p v-if="work.overview">{{ work.overview }}</p>
        </div>
        <figure class="worksMainVisual__thumbnail">
          <img
            :width="work.thumbnail.width"
            :height="work.thumbnail.height"
            :src="work.thumbnail.url"
            :alt="work.title"
          />
        </figure>
      </div>
    </div>

    <!-- <ScrollView> -->
        <div class="container">
        <dl class="worksItem">
            <dt class="worksItem__title">URL</dt>
            <dd class="worksItem__contents">
            <a :href="work.url" target="_blank">{{ work.url }}</a>
            </dd>
        </dl>
        <dl class="worksItem">
          <dt class="worksItem__title">システム概要</dt>
          <dd class="worksItem__contents">{{ work.system }}</dd>
        </dl>
        <dl v-if="work.responsibility" class="worksItem">
            <dt class="worksItem__title">担当</dt>
            <dd class="worksItem__contents">{{ work.responsibility }}</dd>
        </dl>
        <dl class="worksItem">
            <dt class="worksItem__title">技術</dt>
            <dd class="worksItem__contents">{{ work.skill }}</dd>
        </dl>
        <dl v-if="work.tools" class="worksItem">
            <dt class="worksItem__title">ツール</dt>
            <dd class="worksItem__contents">{{ work.tools }}</dd>
        </dl>
        <dl class="worksItem">
            <dt class="worksItem__title">制作ポイント</dt>
            <dd class="worksItem__contents">{{ work.comment }}</dd>
        </dl>
        </div>

        <p class="button-area">
        <nuxt-link to="/works" class="buttonPrimary buttonPrimary--leftArrow"
            >back</nuxt-link
        >
        </p>
    <!-- </ScrollView> -->
    <FloatingButton />
  </div>
</template>

<script>
export default {
  async asyncData({ $microcms, params }) {
    const work = await $microcms.get({
      endpoint: `works/${params.id}`,
    })
    return {
      work,
    }
  },
}
</script>

<style lang="scss" scoped>
.worksMainVisual {
  padding: 5em 0;
  background-color: $base-color-secondary;
  margin-bottom: 2.5em;

  @include mq() {
    margin-bottom: 5em;
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: column-reverse;

    @include mq() {
      flex-direction: row;
    }
  }

  &__contents {
    @include mq() {
      width: 39.58%;
    }
  }

  &__thumbnail {
    width: 100%;
    margin-bottom: 1.75em;

    @include mq() {
      width: 56.25%;
    }

    img {
      width: 100%;
    }
  }

  &__title {
    font-size: fz(32);
    margin-bottom: 0.125em;
  }

  &__item {
    margin-bottom: 0.5em;
  }

  &__itemName {
    font-size: fz(18);
    font-weight: bold;
    margin-bottom: 0.222em;
  }
}

.worksItem {
  &__title {
    font-size: fz(24);
    font-weight: bold;
    margin-bottom: 0.333em;
  }

  &__contents {
    white-space: pre-wrap;

    span + span {
      &::before {
        content: '/';
        display: inline-block;
        margin: 0 0.5em;
      }
    }
  }

  + .worksItem {
    margin-top: 1.5em;
  }
}
</style>