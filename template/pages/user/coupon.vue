<template>
  <section class="container">
    <div class="exchange-block">
      <input
        placeholder="优惠劵兑换码"
        type="text"
        v-model="code"
      >
      <div @click="handlerExchange">
        <span>兑换</span>
      </div>
    </div>
  </section>
</template>

<script>
import DankalTabs from '../../components/dankal-tabs';

export default {
  data() {
    return {
      code: '',
    };
  },

  components: {
    DankalTabs,
  },

  methods: {
    handlerExchange() {
      const { value } = this;
      console.log('====================================');
      console.log(value);
      console.log('====================================');
    },
  },
};
</script>

<style lang="scss" scope>
</style>
