<template>
  <section class="container">
    <div class="header-block">
      <div>
        <img
          src=""
          alt=""
        >
        <span>全选</span>
      </div>
      <span>编辑</span>
    </div>
    <dankal-slider-group>
      <dankal-slider>
        <template
          slot="content"
          slot-scope="scope"
        >
          <div class="product-item">
            <span>dala</span>
          </div>
        </template>
        <template
          slot="actions"
          slot-scope="scope"
        >
          <div>
            <span>删除</span>
          </div>
        </template>
      </dankal-slider>
    </dankal-slider-group>
    <div class="orders-block">
      <div>
        <span>合计:</span>
        <span>￥80.00</span>
      </div>
      <div>
        <span>结算(2)</span>
      </div>
    </div>
  </section>
</template>

<script>
import DankalSliderGroup from '../../components/dankal-slider-group';
import DankalSlider from '../../components/dankal-slider';

export default {
  data() {
    return {};
  },

  components: {
    DankalSliderGroup,
    DankalSlider,
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixins.scss';

$theme-color: #ffb131;

.header-block {
  @include flex-container;
  padding: 0.2rem 0.16rem;
  background-color: #ffffff;

  div {
    img {
      width: 0.4rem;
      height: 0.4rem;
    }

    span {
      font-size: 0.24rem;
    }
  }

  span {
    font-family: 0.28rem;
  }
}

.orders-block {
  @include flex-container;

  position: fixed;
  bottom: 0rem;
  width: 100%;

  div {
    flex-basis: 50%;
    @include flex-container;
    justify-content: center;
    height: 0.98rem;
  }

  div:nth-of-type(1) {
    background-color: #ffffff;

    span:nth-of-type(2) {
      color: $theme-color;
      font-size: 0.36rem;
    }
  }

  div:nth-of-type(2) {
    background-color: $theme-color;
    color: #ffffff;
  }
}
</style>
