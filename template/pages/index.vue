<template>
  <div>
    index
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {};
  },
  fetch({ redirect }) {
    redirect(302, './sample');
  },
};
</script>

<style scoped>
</style>
