<template>
  <section class="container">
    <div class="address-search-block">
      <div class="address-areas-select">
        <span>深圳市</span>
        <div />
      </div>
      <div class="address-search-input">
        <img
          src="../../../assets/images/ic_search.png"
          alt=""
        >
        <input type="text">
      </div>
    </div>
    <dankal-map :position="address">
      <dankal-map-location @center="handlerMapCenter" />
    </dankal-map>
    <div class="address-list-block">
      <div class="address-list-item">
        <p>花样年龙年广场</p>
        <div>
          <span>广东省深证市龙岗区龙城大道29号</span>
          <span>246m</span>
        </div>
      </div>
      <div class="address-list-item">
        <p>花样年龙年广场</p>
        <div>
          <span>广东省深证市龙岗区龙城大道29号</span>
          <span>246m</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import DankalMap from '@/components/dankal-map';
import DankalMapLocation from '@/components/dankal-map-location';

export default {
  data() {
    return {
      address: '深圳市龙岗区',
    };
  },

  components: {
    DankalMap,
    DankalMapLocation,
  },

  methods: {
    handlerMapCenter(center) {
      console.log(center);
    },
  },
};
</script>

<style lang="scss" scope>
.address-search-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 0.88rem;
  padding: 0rem 0.3rem;
  background-color: #ffffff;

  .address-areas-select {
    display: flex;
    align-items: center;

    span {
      font-size: 0.28rem;
    }

    div {
      width: 0.16rem;
      height: 0.16rem;
      border-left: 2px solid #000000;
      border-bottom: 2px solid #000000;
      margin-left: 0.16rem;
      margin-bottom: 0.1rem;

      transform: rotate(-45deg);
      transition: all 0.3s;
    }

    .active {
      margin-top: 0.1rem;
      transform: rotate(135deg);
    }
  }

  .address-search-input {
    flex: 1;
    display: flex;
    align-items: center;

    background: rgba(242, 242, 242, 1);
    height: 0.6rem;
    border-radius: 0.1rem;
    padding: 0rem 0.15rem;
    margin-left: 0.24rem;

    img {
      width: 0.26rem;
    }

    input {
      background: rgba(242, 242, 242, 1);
    }
  }
}
.address-list-block {
  padding: 0rem 0.3rem;
  background-color: #ffffff;

  .address-list-item {
    padding: 0.3rem 0rem;

    p {
      margin-bottom: 0.1rem;
    }

    div {
      display: flex;
      justify-content: space-between;

      color: #999999;
    }
  }

  .address-list-item + .address-list-item {
    border-top: 1px solid #e1e1e1;
  }
}
.dankal-map {
  height: 4rem;
}
</style>
