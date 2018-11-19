<template>
  <section class="container">
    <div class="form-block">
      <transition name="form">
        <div
          v-if="!next"
          class="form-child-block"
        >
          <div class="form-child-item">
            <span>手机号码</span>
            <input
              type="text"
              v-model="form.mobile"
              placeholder="请输入您的手机号码"
            >
          </div>
          <div class="form-child-item code">
            <span>验证码</span>
            <div>
              <input
                type="text"
                v-model="form.code"
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
            @click="handlerNextStep"
          >
            <span>下一步</span>
          </div>
        </div>
      </transition>
      <transition name="form">
        <div
          v-if="next"
          class="form-child-block"
        >
          <div class="form-child-item">
            <span>密码</span>
            <input
              type="text"
              v-model="form.password"
              placeholder="请输入密码"
            >
          </div>
          <div class="form-child-item code">
            <span>确认密码</span>
            <input
              type="text"
              v-model="form.repeat"
              placeholder="请再次输入密码"
            >
          </div>
          <div
            class="form-action-button"
            :class="{active: isPassword}"
            @click="handlerNextStep"
          >
            <span>注册</span>
          </div>
        </div>
      </transition>
    </div>
  </section>
</template>

<script>
import Validate from '../../jslibs/validate';

export default {
  data() {
    return {
      next: false,
      form: {
        mobile: '',
        code: '',
        password: '',
        repeat: '',
      },
      disabled: false,
      available: false,
      rolling: '获取验证码',
    };
  },

  computed: {
    activate() {
      return Validate.isMobile(this.form.mobile);
    },

    isPassword() {
      const { password, repeat } = this.form;

      if (!password || !repeat) {
        return false;
      }

      return password === repeat;
    },
  },

  destroyed() {
    clearInterval(this.time);
  },

  methods: {
    handlerNextStep() {
      this.next = !this.next;
    },

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
  },
};
</script>

<style lang='scss' scoped>
@import './template.scss';

.container {
  height: 100vh;
  padding: 0.36rem;
  padding-top: 0.98rem;
  background-color: #ffffff;
}

.form-block {
  display: flex;
}
</style>
