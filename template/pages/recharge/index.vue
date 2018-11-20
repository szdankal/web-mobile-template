<template>
  <section class="container">
    <div class="blance-block">
      <div @click="handlerNavigator('/recharge/historys')">
        <span>余额明细</span>
      </div>
      <span>账户余额</span>
      <span>
        <i>¥</i> 998.00
      </span>
    </div>
    <div class="recharge-block item-block">
      <div class="header-item">
        <img
          src="../../assets/images/ic_recharge.png"
          alt=""
        >
        <span>充值金额</span>
      </div>
      <div class="recharge-list-block">
        <label
          v-for="(item, i) in options"
          :key="i"
          class="recharge-item-block"
        >
          <input
            type="radio"
            name="recharge"
            :value="item"
            v-model="option"
          >
          <div>
            <span>
              <i>￥</i>200
            </span>
            <span>赠价值50礼券</span>
          </div>
        </label>
      </div>
      <div class="recharge-input-block">
        <i>￥</i>
        <input
          type="text"
          placeholder="请输入充值金额"
        >
      </div>
    </div>
    <div class="payment-block">
      <div class="header-item">
        <img
          src="../../assets/images/ic_payment.png"
          alt=""
        >
        <span>充值金额</span>
      </div>
      <div class="payment-list-block">
        <label
          v-for="(item, i) in payments"
          :key="i"
          class="payment-item-block"
        >
          <div>
            <img
              :src="item.icon"
              alt=""
            >
            <span>{{ item.name }}</span>
          </div>
          <input
            type="radio"
            name="payment"
            :value="item.type"
          >
          <img
            src="../../assets/images/ic_unselected.png"
            alt=""
          >
          <img
            src="../../assets/images/ic_selected.png"
            alt=""
          >
        </label>
      </div>
    </div>
    <p class="protocol-block">
      <span>点击立即充值，即表示已经同意</span>
      <span @click="handlerNavigator('/recharge/protcol')">《服务协议》</span>
    </p>
    <div class="payment-action-button">
      <span>立即充值</span>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      options: [1, 2, 3, 4],
      option: null,
      payments: [
        {
          // eslint-disable-next-line
          icon: require('../../assets/images/ic_wechat_icon.png'),
          type: 1,
          name: '微信支付',
        },
        {
          // eslint-disable-next-line
          icon: require('../../assets/images/ic_alipay.png'),
          type: 2,
          name: '支付宝支付',
        },
      ],
      amount: '',
    };
  },

  methods: {
    handlerNavigator(path) {
      this.$router.push({
        path,
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixins.scss';

$default-color: #deb761;

i {
  font-style: normal;
  font-weight: bold;
}

.container {
  background-color: #ffffff;
  padding: 0.56rem 0.3rem;
  min-height: 100vh;
}

.blance-block {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 6.9rem;
  height: 2.26rem;

  padding: 0rem 0.4rem;
  margin: 0 auto;
  margin-bottom: 0.5rem;

  background: linear-gradient(
    133deg,
    rgba(214, 186, 139, 1) 0%,
    rgba(222, 207, 170, 1) 100%
  );

  box-shadow: 0rem 0.06rem 0.1rem 0rem rgba(220, 201, 161, 1);
  border-radius: 0.12rem;

  span {
    color: #ffffff;
  }

  span:nth-of-type(1) {
    font-size: 0.32rem;
    margin-bottom: 0.15rem;
  }

  span:nth-of-type(2) {
    font-weight: bold;
    font-size: 0.6rem;

    i {
      font-size: 0.36rem;
    }
  }

  div {
    position: absolute;
    top: 0.35rem;
    right: 0rem;

    width: 1.68rem;
    height: 0.7rem;

    line-height: 0.7rem;
    text-align: center;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid #ffffff;
    border-right: 0px;
    border-top-left-radius: 0.35rem;
    border-bottom-left-radius: 0.35rem;

    span {
      font-size: 0.26rem;
    }
  }
}

.header-item {
  margin-bottom: 0.2rem;

  img {
    width: 0.4rem;
  }

  span {
    display: inline-block;
    margin-left: 0.3rem;
    font-size: 0.3rem;
    font-weight: bold;
  }
}

.recharge-block {
  margin-bottom: 0.5rem;
}

.recharge-list-block {
  @include flex-container;
  flex-wrap: wrap;

  .recharge-item-block {
    input {
      display: none;
    }

    div {
      @include flex-container;
      flex-direction: column;
      justify-content: center;
      margin-bottom: 0.2rem;

      width: 3.34rem;
      height: 1.42rem;
      border-radius: 0.12rem;
      border: 1px solid $default-color;
      transition: background-color 0.3s;

      span {
        color: $default-color;
        transition: all 0.3s;
      }

      span:nth-of-type(1) {
        i {
          font-size: 0.36rem;
        }

        font-size: 0.48rem;
        margin-bottom: 0.1rem;
      }

      span:nth-of-type(2) {
        font-size: 0.24rem;
      }
    }

    input:checked + div {
      background: linear-gradient(
        317deg,
        rgba(214, 186, 139, 1) 0%,
        rgba(222, 207, 170, 1) 100%
      );

      border: 0px;

      span {
        color: #ffffff;
      }
    }
  }
}

.recharge-input-block {
  @include flex-container;
  justify-content: center;

  width: 100%;
  height: 1rem;
  border-radius: 0.12rem;
  border: 1px solid $default-color;

  i {
    font-size: 0.32rem;
  }

  input {
    width: 2.34rem;
    font-size: 0.32rem;
    margin-top: 1px;
  }
}

.payment-block {
  margin-bottom: 0.46rem;
}

.payment-list-block {
  .payment-item-block {
    @include flex-container;

    input {
      display: none;
    }

    div {
      @include flex-container;
      justify-content: flex-start;

      img {
        width: 0.36rem;
      }

      span {
        display: inline-block;
        margin-left: 0.3rem;
        font-size: 0.3rem;
      }
    }

    img {
      width: 0.4rem;
    }

    img:nth-of-type(1) {
      display: inherit;
    }

    img:nth-of-type(2) {
      display: none;
    }

    input:checked ~ img:nth-of-type(1) {
      display: none;
    }

    input:checked ~ img:nth-of-type(2) {
      display: inherit;
    }
  }

  .payment-item-block + .payment-item-block {
    margin-top: 0.36rem;
  }
}

.protocol-block {
  margin-bottom: 0.52rem;

  span {
    font-size: 0.24rem;
  }

  span:nth-of-type(1) {
    color: #c1c1c1;
  }

  span:nth-of-type(2) {
    color: $default-color;
  }
}

.payment-action-button {
  width: 100%;
  height: 0.92rem;

  text-align: center;
  line-height: 0.92rem;

  background: $default-color;
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.08);
  border-radius: 0.1rem;

  span {
    font-size: 0.36rem;
    color: #ffffff;
  }
}
</style>
