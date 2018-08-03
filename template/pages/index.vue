<template>
  <div>index{{ $store.state.cart.num }}
    <button @click="add">+</button>
  </div>
</template>

<script>
import { ADD_NUM } from '../store/modules/shopcart/mutation-types';

export default {
  name: 'Index',
  methods: {
    add() {
      this.$store.commit(ADD_NUM, 1)
    },
  },
}
</script>

<style scoped>

</style>
