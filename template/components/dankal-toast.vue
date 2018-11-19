<template>
  <transition name="toast">
    <section
      v-if="status"
      class="dankal-toast"
    >
      <span>{{ message }}</span>
    </section>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      status: false,
      message: '',
    };
  },

  methods: {
    tip(message, time = 1000) {
      if (this.message) {
        this.status = false;
      }

      this.message = message;
      this.status = true;
      this.handlerTimeout(time);
    },

    handlerTimeout(time) {
      if (this.time) {
        clearTimeout(this.time);
      }

      this.time = setTimeout(() => {
        this.status = false;
      }, time);
    },
  },
};
</script>

<style lang="scss" scoped>
.dankal-toast {
  position: absolute;
  bottom: 5vh;
  left: 50%;
  transform: translate(-50%);

  max-width: 90vw;
  text-align: center;

  padding: 0.16rem;
  border: 10px;

  border-radius: 2px;
  background-color: #313131;

  span {
    color: #ffffff;
  }
}

.toast-enter-active,
.toast-leave-active {
  transition: opacity 0.5s;
}

.toast-enter,
.toast-leave-to {
  opacity: 0;
}
</style>
