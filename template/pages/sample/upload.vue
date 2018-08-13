<style lang="scss" scoped>
  .container{
    padding: 8px 8px;
  }
</style>

<template>
  <div>
    <image-upload
      :upload-token="token"
      :imglist.sync="imgList"
      :img-domain="imgDomain"/>
  </div>
</template>

<script>
import env from '~/configs/enviroment'
import Axios from 'axios'
import ImageUpload from '~/components/image-upload.vue'

export default {
  name: 'Upload',
  components: { ImageUpload },
  data() {
    return {
      imgList: [],
      token: '',
      imgDomain: env.imgDomain,
    }
  },
  created() {
    this.getUploadToken()
  },
  methods: {
    async  getUploadToken() {
      const { data } = await Axios.get('https://api-template.dankal.cn/v1/app/communal/qiniu')
      this.token = data.token
    },
  },
}
</script>
