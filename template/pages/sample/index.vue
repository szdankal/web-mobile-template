<template>
  <section>
    <p>
      Dankal Template
    </p>
    <ul>
      <nuxt-link
        v-for="item in list "
        :to="item.url"
        tag="li"
        :key="item.url">{{ item.name }}</nuxt-link>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      list: [{
        name: '1.地址选择器',
        url: 'sample/address-picker',
      },
      {
        name: '2.图片上传',
        url: 'sample/upload',
      }],
    }
  },
}
</script>

<style scoped lang="scss">
  p{text-align: center;font-size: .35rem;padding: .3rem 0;font-weight: bold}
  ul li{padding: 6px 10px}
</style>
