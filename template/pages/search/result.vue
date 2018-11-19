<template>
  <section class="container">
    <div class="search-header">
      <label for="">
        <img src="@/assets/images/ic_search.png">
        <input
          type="span"
          placeholder="请输入商品名称"
        >
        <img src="../../assets/images/ic_del.png">
      </label>
      <span>搜索</span>
    </div>
    <div class="search-option">
      <div @click="handlerStatus(1)">
        <span :class="{active: 1 === status}">综合</span>
      </div>
      <div @click="handlerStatus(2)">
        <span :class="{active: 2 === status}">销量</span>
      </div>
      <div @click="handlerStatus(3)">
        <span :class="{active: 3 === status}">价格</span>
        <div class="option-action-indicate">
          <span :class="{active: indicate.status && !indicate.record}" />
          <span :class="{active: indicate.status && indicate.record}" />
        </div>
      </div>
    </div>
    <dankal-bitmap />
  </section>
</template>

<script>
import DankalBitmap from '../../components/dankal-bitmap';

export default {
  data() {
    return {
      // eslint-disable-next-line
      bitmap: require('../../assets/images/pic_search.png'),
      status: 1,
      record: 1,
    };
  },

  components: {
    DankalBitmap,
  },

  computed: {
    indicate() {
      const { status, record } = this;

      return {
        status: status === 3,
        record: record % 2,
      };
    },
  },

  mounted() {
    const bitmap = this.$bitmap({
      icon: this.bitmap,
      tips: '抱歉，没有找到商品哦~',
    });

    setTimeout(() => {
      bitmap.destory();
    }, 1000);
  },

  methods: {
    handlerStatus(status) {
      if (status !== 3) {
        this.record = 1;
      }

      if (status === 3) {
        this.record += 1;
      }

      this.status = status;
    },
  },
};
</script>

<style lang="scss" scope>
@import './template.scss';

$heightlight-color: #f5a623;
$default-color: #9b9b9b;

.search-header {
  @include search-header;
}

.search-option {
  display: flex;
  align-items: center;
  height: 0.8rem;
  background-color: #ffffff;
  border-top: 1px solid #e1e1e1;

  & > div {
    flex-basis: 33.33333%;

    display: flex;
    align-items: center;
    justify-content: center;

    span {
      color: $default-color;
      transition: all 0.3s;
    }

    .active {
      color: $heightlight-color;
    }
  }
}

.option-action-indicate {
  display: flex;
  flex-direction: column;
  margin-left: 0.1rem;

  span {
    display: inline-block;
    width: 0rem;
    height: 0rem;
    border-left: 0.1rem solid transparent;
    border-right: 0.1rem solid transparent;
    border-bottom: 0.1rem solid $default-color;

    transition: all 0.3s;
  }

  span + span {
    margin-top: 0.04rem;
  }

  span:nth-of-type(2) {
    transform: rotate(180deg);
  }

  .active {
    border-bottom: 0.1rem solid $heightlight-color;
  }
}
</style>
