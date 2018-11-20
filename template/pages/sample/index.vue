<template>
  <section class="container">
    <div class="main-title">Dankal Template</div>
    <div class="sub-title-list">
      <span
        v-for="(item, i) in pages"
        :key="i"
        class="sub-title navigator-block"
        @click="handlerNavigator(item.path)"
      >
        {{ item.name }}
      </span>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: 'ivan',
      pages: [
        {
          path: '/notice/order',
          name: 'H5订单通知',
        },
        {
          path: '/recharge',
          name: '充值',
        },
        {
          path: '/search',
          name: '商品搜索',
        },
        {
          path: '/user',
          name: '个人中心',
        },
        {
          path: '/accout/login',
          name: '登录注册',
        },
      ],
    };
  },

  components: {},

  methods: {
    handlerNavigator(path) {
      this.$router.push({
        path,
      });
    },
  },
};
</script>

<style lang="scss">
@import '../../assets/styles/mixins.scss';

.main-title {
  text-align: center;
  font-size: 0.38rem;
  font-weight: bold;
  padding: 0.2rem 0;
}

.sub-title-list {
  @include flex-container;
  flex-direction: column;
}

.sub-title {
  padding: 0.3rem 0.2rem;
}

.navigator-block {
  width: 90vw;
  margin: auto;
  background-color: #ffffff;

  box-shadow: 0.02rem 0.02rem 0.04rem rgba($color: #000000, $alpha: 0.08);
}

.navigator-block + .navigator-block {
  margin-top: 0.1rem;
  border-radius: 0.04rem;
}
</style>
