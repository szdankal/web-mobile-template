<template>
  <section class="dankal-tabs">
    <div
      v-for="(item, index) in options"
      :key="index"
      class="tab-item"
      :class="{active: (dot - 1 === index)}"
      :style="{'flex-basis': `${100 / options.length}%`}"
      @click="handlerUpdateDot(index)"
    >
      <slot :data="item" />
    </div>
    <div
      class="tab-slider"
      :style="{left: `${100 / options.length * dot - 50 / options.length}%`}"
    />
  </section>
</template>

<script>
export default {
  data() {
    return {
      dot: 1,
    };
  },

  props: {
    options: {
      type: Array,
      default: () => {},
    },
    current: {
      type: Number,
      default: 0,
    },
  },

  watch: {
    current(n) {
      this.dot = n + 1;
      this.$apply();
    },
  },

  methods: {
    handlerUpdateDot(index) {
      this.dot = index + 1;

      if (this.options.length) {
        this.$emit('select', this.options[index]);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.dankal-tabs {
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.3rem 0rem;

  background-color: #ffffff;
  border-bottom: 1px solid #eeeeee;

  .tab-item {
    text-align: center;
  }

  .tab-item.active {
    color: #108ee9;
  }

  .tab-slider {
    position: absolute;
    width: 1.2rem;
    height: 0.04rem;
    bottom: 0rem;
    background-color: #108ee9;
    transform: translate(-50%);

    transition: all 0.3s;
  }
}
</style>
