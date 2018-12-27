<template>
  <div>
    <nuxt-child/>
    <tab-bar
      class="tab-bar"
      :tab-bar-data="tabBarData"/>
  </div>
</template>

<script>
import TabBar from '@/components/tab-bar';

export default {
  name: 'Index',
  data() {
    return {
      tabBarData: [
        {
          iconLight: 'ic_nav_gift_light.png', // 激活icon
          iconNormal: 'ic_nav_gift_normal.png', // 默认icon
          router: '/gift', // 路由
          title: '礼物', // tab名
        },
        {
          iconLight: 'ic_nav_order_light.png',
          iconNormal: 'ic_nav_order_normal.png',
          router: '/order',
          title: '订单',
        },
        {
          iconLight: 'ic_nav_store_light.png',
          iconNormal: 'ic_nav_store_normal.png',
          router: '/store',
          title: '商城',
        },
        {
          iconLight: 'ic_nav_user_light.png',
          iconNormal: 'ic_nav_user_normal.png',
          router: '/user',
          title: '用户',
        },
      ],
    }
  },
  components: {
    TabBar,
  },
  // fetch({ redirect }) {
  //   redirect(302, './sample')
  // },
}
</script>

<style scoped>
.tab-bar{
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
}
</style>
