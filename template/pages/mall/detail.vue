<template>
  <section class="container">
    <dankal-carousel
      class="dankal-carousel-block"
      :sources="images"
      :autoplay="autoplay"
    >
      <template slot-scope="scope">
        <img
          class="template"
          :src="scope.data"
          alt=""
          srcset=""
          style="width: 100%;"
        >
      </template>
    </dankal-carousel>
    <div class="detail-block">
      <p>3件装 MEDIHEAL美迪惠尔N.M剂 水库保湿面膜</p>
      <p>3件装 MEDIHEAL美迪惠尔N.M剂 水库保湿面膜</p>
      <p>
        <span>¥19.9</span>
        <span>¥22.9</span>
      </p>
    </div>
    <div class="action-list-block">
      <div class="action-block">
        <p>
          <span>领券</span>
          <span>满200减10</span>
        </p>
        <img
          src="../../assets/images/ic_location_enter.png"
          alt=""
        >
      </div>
      <div class="action-block">
        <p>
          <span>规格</span>
          <span>10片/盒</span>
        </p>
        <img
          src="../../assets/images/ic_location_enter.png"
          alt=""
        >
      </div>
    </div>
    <div class="board-block">
      <dankal-tabs :options="options">
        <template slot-scope="scope">
          <span>{{ scope.data.name }}</span>
        </template>
      </dankal-tabs>
    </div>
    <div class="orders-block">
      <div>
        <div>
          <img
            src=""
            alt=""
          >
          <span>收藏</span>
        </div>
        <div>
          <img
            src=""
            alt=""
          >
          <span>购物车</span>
        </div>
      </div>
      <div>
        <span>加入购物车</span>
        <span>立即购买</span>
      </div>
    </div>
  </section>
</template>

<script>
import DankalCarousel from '../../components/dankal-carousel';
import DankalTabs from '../../components/dankal-tabs';

export default {
  data() {
    return {
      images: [
        'http://img.hb.aicdn.com/6af04574cdaa0ad06afc611fabbfde782b281f2e5539e-bkptqh',
        'http://img.hb.aicdn.com/2988863e2ea2579d1899aea4df846229f49f0d4c6bb1a-77e5tR',
        'http://img.hb.aicdn.com/4fec0a55c23b749641f457a2d4400abd9959af5663b6-vkNKEp',
      ],
      autoplay: true,
      options: [
        {
          name: '详情',
        },
        {
          name: '评价',
        },
      ],
    };
  },

  components: {
    DankalCarousel,
    DankalTabs,
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixins.scss';

.dankal-carousel {
  height: 4.5rem;
}

.detail-block {
  padding: 0.3rem 0.4rem;
  margin-bottom: 0.2rem;
  background-color: #ffffff;

  p:nth-of-type(1) {
    font-size: 0.42rem;
    line-height: 0.6rem;
  }

  p:nth-of-type(2) {
    color: #999999;
    font-size: 0.28rem;
    line-height: 0.4rem;

    margin-bottom: 0.1rem;
  }

  p:nth-of-type(3) {
    span {
      display: inline-block;
    }

    span:nth-of-type(1) {
      color: #f24724;
      font-size: 0.52rem;
    }

    span:nth-of-type(2) {
      color: #9b9b9b;
      font-size: 0.38rem;
      text-decoration: line-through;
      margin-left: 0.35rem;
    }
  }
}

.action-list-block {
  margin-bottom: 0.2rem;
}

.action-block {
  @include flex-container;
  padding: 0.2rem 0.3rem;
  background-color: #ffffff;

  p {
    span {
      display: inline-block;

      font-size: 0.28rem;
    }

    span:nth-of-type(2) {
      margin-left: 0.2rem;
    }
  }

  img {
    width: 0.16rem;
  }
}

.action-block + .action-block {
  border-top: 1px solid #e5e5e5;
}
</style>
