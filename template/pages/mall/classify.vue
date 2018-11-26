<template>
  <section class="container">
    <div class="classify-block">
      <div class="active">
        <span>大分类1</span>
      </div>
      <div>
        <span>大分类1</span>
      </div>
      <div>
        <span>大分类1</span>
      </div>
    </div>
    <div class="detail-block">
      <div class="search-container-block">
        <div class="search-block">
          <img
            src="../../assets/images/ic_search.png"
            alt=""
          >
          <input
            type="text"
            placeholder="搜索你需要的商品热门关键词"
          >
        </div>
      </div>
      <div class="classify-mapping-block">
        <div class="classify-mapping-child">
          <span>小分类1</span>
          <div />
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
};
</script>

<style lang="scss" scoped>
@import './template.scss';

.container {
  display: flex;
  background: rgba(255, 255, 255, 1);
}

.classify-block {
  height: 100vh;
  background-color: #f8f8f8;

  div {
    width: 2.2rem;
    height: 1.1rem;

    text-align: center;
    line-height: 1.1rem;
  }

  .active {
    color: #108ee9;
    box-shadow: 5px 0px 0px 0px #108ee9 inset;
    background: rgba(255, 255, 255, 1);
  }
}

.detail-block {
  position: relative;

  flex: 1;
  padding: 0rem 0.2rem;

  .search-container-block {
    position: absolute;
    right: 0rem;
    width: 100%;
    padding: 0.2rem 0.2rem;
    background-color: #f5f5f5;
  }

  .search-block {
    @include search-header;
    top: 0rem;

    justify-content: center;
    padding: 0.1rem 0.1rem;
    border-radius: 4px;
    background-color: #ffffff;
  }

  .classify-mapping-block {
    padding-top: 1.1rem;

    .classify-mapping-child {
      span {
        display: block;
        font-size: 0.3rem;
        font-weight: bold;

        margin-bottom: 0.1rem;
      }
    }
  }
}
</style>
