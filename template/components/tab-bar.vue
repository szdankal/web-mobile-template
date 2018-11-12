<template>
  <div class="tab-bar ba-color">
    <nuxt-link
      :to="item.router"
      class="tab"
      v-for="(item,index) in tabBarData"
      :key="index">
      <img
        :src="require(
          `../assets/images/tab-bar/${$route.path == item.router?item.iconLight:item.iconNormal}`
        )"
        alt="">
      <span
        class="normal-title"
        :class="{'active-title':$route.path == item.router}">
        {{ item.title }}
      </span>
    </nuxt-link>
  </div>
</template>


<script>
export default {
  props: {
    tabBarData: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
    }
  },
}
</script>

<style lang="scss" scoped>
.tab-bar{
  width: 100%;
  height:.98rem;
  background-color: rgb(233, 209, 200);//tab背景颜色
  display: flex;
  .tab{
    padding:.16rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    img{
      width: .32rem;
      height: 0.32rem;
    }
    .normal-title{
      font-size: .16rem;
      color: gray;//默认字体颜色
      &.active-title{
        color: #ffffff;//active字体颜色
      }
    }
  }
}
</style>
