<template>
  <section class="container">
    <div class="address-from-block">
      <div class="address-from-item">
        <span>收货人：</span>
        <input
          type="text"
          maxlength="6"
          placeholder="请输入收货人的名字"
          v-model="address.name"
        >
      </div>
      <div class="address-from-item">
        <span>联系方式：</span>
        <input
          type="text"
          maxlength="11"
          placeholder="请输入联系方式"
          v-model="address.mobile"
        >
      </div>
      <div class="address-from-item selected">
        <div>
          <span>所在地区：</span>
          <span>dala</span>
        </div>
        <img
          src="../../../assets/images/ic_address.png"
          @click="handlerNavigatorRouter"
        >
      </div>
      <div class="address-from-item detailed cleaned">
        <span>详细地址：</span>
        <textarea v-model="address.detail">请输入收货地址</textarea>
      </div>
      <div class="address-from-item cleaned">
        <span>设为默认地址</span>
        <cube-switch v-model="address.default" />
      </div>
      <p class="address-from-tip">注：每次下单时会使用该地址</p>
    </div>
    <div class="address-action-button">
      <span>保存</span>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      address: {
        name: '',
        mobile: '',
        detail: '',
        default: false,
      },
    };
  },

  methods: {
    handlerNavigatorRouter() {
      this.$router.push({
        path: './location',
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.address-from-block {
  background-color: #ffffff;
  padding: 0rem 0.4rem;
  padding-bottom: 0.52rem;
  margin-top: 0.1rem;
  margin-bottom: 0.7rem;

  .address-from-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.2rem 0rem;

    span {
      display: inline-block;
      min-width: 1.6rem;
      font-size: 0.28rem;
    }

    & > input {
      flex: 1;
      font-size: 0.28rem;
    }
  }

  .detailed {
    display: inherit;

    span {
      margin-bottom: 0.2rem;
    }

    textarea {
      display: block;
      width: 100%;
      height: 2.22rem;
      border: 1px dotted #979797;
      padding: 0.3rem;
      border-radius: 2px;
    }
  }

  .cleaned {
    border: 0px !important;
  }

  .selected {
    img {
      width: 0.3rem;
    }
  }

  .address-from-tip {
    font-size: 0.24rem;
    color: #999999;
  }

  .address-from-item + .address-from-item {
    border-top: 1px solid #e9e9e9;
  }
}

.address-action-button {
  display: flex;
  align-items: center;
  justify-content: center;

  width: 6.75rem;
  height: 0.92rem;

  margin: 0 auto;
  background: rgba(74, 144, 226, 1);
  border-radius: 0.05rem;

  span {
    font-size: 0.32rem;
    color: #ffffff;
  }
}
</style>
