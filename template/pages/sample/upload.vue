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
import ImageUpload from '~/components/image-upload'
import { getUploadToekn } from '~/api/common';

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
      const { data } = await getUploadToekn()
      this.token = data.token
    },
  },
}
</script>
