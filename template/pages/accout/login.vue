<template>
  <section class="container">
    <div class="form-block">
      <header class="form-icon-block">
        <h1>SIGN IN</h1>
        <h3>登录</h3>
      </header>
      <div class="form-child-block">
        <div class="form-child-item">
          <span>手机号码</span>
          <input
            type="text"
            v-model="from.mobile"
            placeholder="请输入您的手机号码"
          >
        </div>
        <div class="form-child-item code">
          <span>验证码</span>
          <div>
            <input
              type="text"
              v-model="from.code"
              placeholder="请输入验证码"
            >
            <span
              class="form-clock-button"
              :class="{active: activate}"
              @click="handlerSendCode"
            >
              {{ rolling }}
            </span>
          </div>
        </div>
        <div
          class="form-action-button"
          :class="{active: activate}"
          @click="handlerUserLogin"
        >
          <span>登陆</span>
        </div>
      </div>
      <div class="form-method-block">
        <span>注册账号</span>
        <span>忘记密码</span>
      </div>
    </div>
    <div class="oauth-block">
      <div class="oauth-line-block">
        <span>or</span>
      </div>
      <div class="oauth-icon-block">
        <img
          src="../../assets/images/ic_wechat.png"
          alt=""
        >
      </div>
      <div class="oauth-protocal-block">
        <span>登录代表您已经同意</span>
        <span>《登录注册协议》</span>
      </div>
    </div>
  </section>
</template>

<script>
import Validate from '../../jslibs/validate';

export default {
  data() {
    return {
      from: {
        mobile: '',
        code: '',
      },
      disabled: false,
      modal: true,
      available: false,
      rolling: '获取验证码',
    };
  },

  computed: {
    activate() {
      return Validate.isMobile(this.from.mobile);
    },
  },

  destroyed() {
    clearInterval(this.time);
  },

  methods: {
    handleClockdown() {
      this.disabled = false;
      let counter = 59;
      this.rolling = '重新发送(60s)';

      this.time = setInterval(() => {
        if (counter === 0) {
          this.rolling = '获取验证码';
          clearInterval(this.time);
          this.disabled = true;
        } else {
          this.rolling = `重新发送(${counter}s)`;
          counter -= 1;
        }
      }, 1000);
    },

    handlerSendCode() {
      if (!this.activate) {
        this.$toast('请输入手机号码');
        return;
      }

      if (!this.disabled) {
        this.$toast('验证码已发送');
        return;
      }

      this.handleClockdown();
    },

    handlerUserLogin() {
      console.log('====================================');
      console.warn('login');
      console.log('====================================');
    },
  },
};
</script>

<style lang='scss' scoped>
@import './template.scss';

.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100vh;
  padding: 0.36rem;
  padding-top: 0.98rem;
  background-color: #ffffff;
}

.form-icon-block {
  margin-bottom: 0.84rem;

  h1 {
    font-size: 0.6rem;
    line-height: 0.84rem;
  }

  h3 {
    font-size: 0.48rem;
    line-height: 0.67rem;
  }
}

.form-method-block {
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-size: 0.28rem;
    color: #666666;
  }
}
</style>
