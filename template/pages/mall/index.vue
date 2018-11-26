<template>
  <section class="container">
    <div class="search-block">
      <img
        src="@/assets/images/ic_search.png"
        alt=""
      >
      <input
        type="text"
        placeholder="搜索你需要的商品热门关键词"
        v-model="keyword"
      >
    </div>
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
    <div class="notice-block">
      <span>
        头条公告
      </span>
      <dankal-carousel
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
    </div>
    <div class="display-block">
      <div class="display-header-block">
        <span>推荐</span>
        <span>更多</span>
      </div>
      <div class="display-content-block">
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  </section>
</template>

<script>
import DankalCarousel from '../../components/dankal-carousel';

export default {
  data() {
    return {
      keyword: '',
      images: [
        'http://img.hb.aicdn.com/6af04574cdaa0ad06afc611fabbfde782b281f2e5539e-bkptqh',
        'http://img.hb.aicdn.com/2988863e2ea2579d1899aea4df846229f49f0d4c6bb1a-77e5tR',
        'http://img.hb.aicdn.com/4fec0a55c23b749641f457a2d4400abd9959af5663b6-vkNKEp',
      ],
      autoplay: true,
    };
  },

  components: {
    DankalCarousel,
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixins.scss';

.container {
  padding: 0.2rem 0.3rem;
}

.search-block {
  display: flex;
  align-items: center;
  width: 100%;

  padding: 0.2rem 0.24rem;
  margin-bottom: 0.2rem;
  border-radius: 0.04rem;
  background-color: #ffffff;

  img {
    width: 0.28rem;
  }

  input {
    flex: 1;
    font-size: 0.28rem;
    margin-left: 0.1rem;
  }
}

.dankal-carousel-block {
  width: 100%;
  height: 2rem;
  margin-bottom: 0.36rem;
}

.notice-block {
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;

  span {
    display: block;
    width: 0.72rem;
    font-size: 0.34rem;
    font-weight: bold;
    line-height: 0.48rem;
    white-space: normal;
  }

  .dankal-carousel {
    flex: 1;
    height: 0.96rem;
    margin-left: 0.3rem;
  }
}

.display-block {
  height: 3.85rem;
  background: rgba(255, 255, 255, 1);
  border-radius: 0.15rem;
  overflow: hidden;

  .display-header-block {
    @include flex-container;

    padding: 0.4rem 0.3rem;

    span:nth-of-type(1) {
      font-size: 0.34rem;
      font-weight: bold;
    }

    span:nth-of-type(2) {
      font-size: 0.28rem;
      color: #999999;
    }
  }

  .display-content-block {
    width: 100%;

    overflow-y: hidden;
    overflow-x: auto;
    white-space: nowrap;

    & > * {
      display: inline-block;
    }

    div {
      background-color: red;
      width: 208px;
      height: 208px;
    }

    div + div {
      margin-left: 0.2rem;
    }
  }
}

.template {
  width: 100vw;
  height: 240px;
}
</style>
