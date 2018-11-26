<template>
  <section class="container">
    <div class="orders-block">
      <div>
        <span>合计：</span>
        <span>¥255</span>
      </div>
      <div>
        <span>提交订单</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import './template.scss';

$theme-color: #ffb131;

.orders-block {
  @include orders-block;

  div:nth-of-type(1) {
    flex: 1;
    justify-content: flex-end;
    padding: 0rem 0.6rem;
    background-color: #ffffff;

    span:nth-of-type(2) {
      color: $theme-color;
    }
  }

  div:nth-of-type(2) {
    width: 2.6rem;
    color: #ffffff;
    background-color: $theme-color;
  }
}
</style>
