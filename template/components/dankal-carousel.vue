<template>
  <section
    ref="container"
    class="dankal-carousel"
  >
    <div
      class="dankal-carousel-container"
      ref="curtain"
      :style="{
        transform: 'translate3d(-'+ distance +'px, 0, 0)',
        transitionTimingFunction: timing,
        transitionDuration: duration + 'ms',
      }"
    >
      <div
        v-for="(item, i) in _sources"
        :key="i"
        class="dankal-carousel-block"
        :class="{vertical: vertical}"
        :style="{width: `${width}px`}"
      >
        <slot :data="item" />
      </div>
    </div>
    <div class="dankal-carousel-indicate">
      <div
        v-for="(item, i) in sources"
        :key="i"
        class="dankal-indicate-block"
        :class="{active: index == i}"
      >
        <slot
          name="indicate"
          :data="item"
        />
        <span v-if="!$slots.indicate" />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      width: '',
      index: 0,
      timing: 'ease',
      duration: 0,
      distance: 0,
    };
  },

  props: {
    sources: {
      type: Array,
      required: true,
    },
    autoplay: {
      type: Boolean,
      default: true,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
    interval: {
      type: Number,
      default: 1000,
    },
  },

  computed: {
    _sources() {
      const { sources } = this;
      // sources.push(sources[0]);
      // sources.unshift(sources[sources.length - 1]);

      return [].concat(sources[sources.length - 1], sources, sources[0]);
    },
  },

  mounted() {
    const width = this.$refs.container.clientWidth;
    this.width = width;

    if (this.autoplay) {
      this.handlerAutoplay();
    }
  },

  destroyed() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  },

  methods: {
    handlerTransform(index) {
      this.index = index;
    },

    handlerAutoplay() {
      this.timer = setInterval(() => {
        this.index += 1;
        this.duration = 300;
        this.handlerTranslate();

        if (this.index === this.sources.length) {
          this.index = 0;
          this.handlerDuration(true);
        }
      }, 3000);
    },

    handlerTranslate() {
      const { width, index } = this;
      this.distance = width * index;
    },

    handlerDuration(status) {
      if (status) {
        this.durationTimer = setTimeout(() => {
          this.duration = 0;
          this.handlerTranslate();
        }, this.duration);
        return;
      }

      clearTimeout(this.durationTimer);
    },
  },
};
</script>

<style lang="scss" scoped>
.dankal-carousel {
  position: relative;
  white-space: nowrap;
  overflow: hidden;

  .dankal-carousel-container {
    .dankal-carousel-block {
      display: inline-block;
    }
  }

  .vertical {
    display: block;
  }

  .dankal-carousel-indicate {
    position: absolute;
    bottom: 0.2rem;
    left: 50%;
    transform: translate(-50%);

    display: flex;
    align-items: center;

    .dankal-indicate-block {
      span {
        display: inline-block;
        width: 0.15rem;
        height: 0.1rem;
        background-color: #c6c6c6;
        transition: all 0.3s ease;
      }
    }

    .dankal-indicate-block + .dankal-indicate-block {
      margin-left: 0.1rem;
    }

    .active {
      span {
        display: inline-block;
        width: 0.3rem;
        border-radius: 0;
        background-color: #ffffff;
      }
    }
  }
}
</style>
