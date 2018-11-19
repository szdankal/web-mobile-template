<template>
  <section class="container">
    <div class="search-header">
      <label for="">
        <img src="@/assets/images/ic_search.png">
        <input
          type="span"
          placeholder="请输入商品名称"
        >
      </label>
      <span>搜索</span>
    </div>
    <div class="search-option">
      <div class="search-item-header">
        <span>热门搜索</span>
      </div>
      <div class="search-option-item">
        <span>智利车厘子</span>
      </div>
    </div>
    <div class="search-record">
      <div class="search-item-header">
        <span>搜索历史</span>
        <img src="@/assets/images/icon_clear.png">
      </div>
      <div class="search-record-item">
        <span>鲜鱼肉</span>
        <span>鲜鱼肉</span>
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

<style lang="scss" scope>
@import './template.scss';

.container {
  background-color: #ffffff;
}

.search-header {
  @include search-header;
}

.search-item-header {
  background-color: #f5f5f5;
  padding: 0.2rem 0.2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 0.28rem;
  }

  img {
    width: 0.42rem;
  }
}

.search-option-item {
  padding: 0.2rem;

  span {
    display: inline-block;
    font-size: 0.26rem;
    padding: 0.12rem 0.12rem;
    background-color: #f5f5f5;
    color: #999999;
  }
}

.search-record-item {
  padding: 0rem 0.2rem;

  span {
    display: block;
    padding: 0.2rem 0rem;
    color: #999999;
    font-size: 0.28rem;
  }

  span + span {
    border-top: 1px solid #e5e5e5;
  }
}
</style>
