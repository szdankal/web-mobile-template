<template>
  <section class="container">
    <div class="detail-list-block">
      <div class="detail-item-block">
        <span>流水号：</span>
        <span>20181114423141238412389</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },

  created() {
    const { query } = this.$route;
    if (!query.uuid) {
      console.log('====================================');
      console.warn(query);
      console.log('====================================');
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../../assets/styles/mixins.scss';
.container {
  background-color: #ffffff;
  min-height: 100vh;
}

.detail-list-block {
  padding: 0.36rem 0.42rem;
}

.detail-item-block {
  @include flex-container;

  span {
    font-size: 0.28rem;
  }

  span:nth-of-type(1) {
    color: #9b9b9b;
  }

  span:nth-of-type(2) {
    color: #4a4a4a;
  }
}
</style>
