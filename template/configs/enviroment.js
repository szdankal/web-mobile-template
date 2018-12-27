/* eslint-disable no-unused-vars */
const devApiDomain = 'https:/api.dankal.cn/v1/' // 开发环境api域名
const stageApiDomain = '' // stage环境api域名
const proApiDomain = '' // 生产环境api域名
const uploadDomain = 'https://upload-z2.qiniup.com/' // 默认这个是七牛云华南区上传域名,华东区去掉"-z2",华北区改成"z1"
const imgDomain = 'https://cdn.dankal.cn/' // 图片域名

module.exports = {
  apiDomain: devApiDomain,
  imgDomain,
  uploadDomain,
}
