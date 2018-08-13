<style lang="scss" scoped>
  .imgs {
    p {
      position: relative;
      width: 1.93rem;
      height: 1.97rem;
      margin: 0.2rem 0.2rem;
      float: left;
      .upload_img {
        width: 1.9rem;
        height: 1.9rem;
        object-fit: cover;
      }
      .close {
        width: .4rem;
        height: .4rem;
        position: absolute;
        top: -.2rem;
        right: -.2rem;
      }
    }
    .add {
      width: 1.9rem;
      height: 1.9rem;
      margin: 0.2rem 0.2rem;
    }
  }
</style>

<template>
  <div class="imgs">
    <p
      v-for="(item,index) in imgList"
      :key="index"
    >
      <img
        class="upload_img"
        :src="imgDomain+item"
        alt="">
      <img
        class="close"
        src="../assets/images/ic_del.png"
        @click="onDeleted(index)" >
    </p>
    <img
      @click='onSelected'
      class="add"
      src="../assets/images/ic_add_pic.png"
      alt="">
    <input
      ref="input"
      type="file"
      id="file"
      accept="image/*"
      style="display:none;"
      @change="onFileChanged">
  </div>
</template>

<script>
/* eslint-disable no-new */

import utils from '~/jslibs/dk-utils'
import ImageCompressor from 'image-compressor.js'
import { uploadImg } from '~/api/common'

export default {
  name: 'ImageUpload',
  data() {
    return {
      imgList: [],
      toast: '',
    }
  },
  created() {
    this.toast = this.$createToast({
      txt: '上传中...',
      mask: true,
    })
  },
  props: {
    imgDomain: {
      type: String,
      default: '',
    },
    uploadToken: {
      type: String,
      default: '',
    },
    quatity: {
      type: Number,
      default: 0.6,
    },
  },
  methods: {
    onSelected() {
      this.$refs.input.click()
    },
    onDeleted(index) {
      this.imgList = utils.removeOfArray(index, this.imgList)
      this.$emit('update:imglist', this.imgList)
    },
    onFileChanged(e) {
      const file = e.target.files[0]
      if (!file) return
      new ImageCompressor(file, {
        quatity: this.quatity,
        success: (result) => { this.upload(result) },
        error: (error) => { this.$createToast({ txt: error.message, time: 1500 }).show() },
      })
      this.toast.show()
    },
    async upload(file) {
      const formData = new FormData()
      formData.append('token', this.uploadToken)
      formData.append('file', file)
      const res = await uploadImg(formData).catch(() => { });
      this.toast.hide()
      if (res.status === 200) {
        this.imgList.push(res.data.hash)
        this.$emit('update:imglist', this.imgList)
      }
    },
  },
}
</script>
