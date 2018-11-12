<template>
  <div>
    <nuxt/>
  </div>
</template>
<script>
let loading = ''
export default {
  created() {
    this.initGlobalCubeUi()
  },
  methods: {
    /**
     * 注入cube-ui常用组件到全局window对象
     */
    initGlobalCubeUi() {
      // type可选择:correct,error,warn,loading,txt
      window.toast = (msg, type = 'txt') => {
        this.$createToast({
          txt: msg,
          type,
          time: 1000,
        }).show();
      };
      window.showLoading = () => {
        loading = this.$createToast({
          txt: '加载中...',
          mask: true,
          time: 0,
        })
        loading.show()
      }
      window.hideLoading = () => {
        loading.hide()
      }
    },
  },
};
</script>

<style>
</style>
