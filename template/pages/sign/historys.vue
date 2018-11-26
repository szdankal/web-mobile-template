<template>
  <section class="container">
    <div class="history-list">
      <div
        class="history-item"
        @click="handlerNavigator('/recharge/history')"
      >
        <div>
          <span>购买押金桶</span>
          <span>2018-04-16 13:01:23</span>
        </div>
        <div>
          <span>余额：420</span>
          <span>-120.00</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },

  methods: {
    handlerNavigator(path) {
      this.$router.push({
        path,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixins.scss';

.history-list {
  background-color: #ffffff;
}

.history-item {
  padding: 0.32rem 0.4rem;

  div {
    @include flex-container;
  }

  div:nth-of-type(1) {
    margin-bottom: 0.1rem;

    span:nth-of-type(1) {
      font-size: 0.3rem;
      color: #333333;
    }

    span:nth-of-type(2) {
      font-size: 0.26rem;
      color: #999999;
    }
  }

  div:nth-of-type(2) {
    span:nth-of-type(1) {
      font-size: 0.26rem;
      color: #999999;
    }

    span:nth-of-type(2) {
      font-size: 0.38rem;
      color: #333333;
    }
  }
}

.history-item + .history-item {
  border-top: 1px solid #e5e5e5;
}
</style>
