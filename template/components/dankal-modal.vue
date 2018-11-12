<template>
  <section
    class="dankal-modal"
    :class="{active: status}"
  >
    <div class="modal-shadows" />
    <div class="modal-content">
      <slot />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      status: false,
    };
  },

  methods: {
    handlerUpdateStatus() {
      this.status = !this.status;
    },
  },
};
</script>

<style lang="scss" scope>
.dankal-modal {
  position: fixed;
  top: 0px;
  width: 100%;
  height: 100%;
  transform: translate(0%, -100%);
  transition: all 0.3s;

  .modal-shadows {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }

  .modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.dankal-modal.active {
  transform: translate(0%, 0%);
}
</style>
