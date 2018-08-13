/* eslint-disable no-unused-vars */
const devApiDomain = 'https://hjc-api.dankal.cn/v1/' // 开发环境api域名
const stageApiDomain = '' // 测试环境api域名
const proApiDomain = '' // 生产环境api域名
const uploadDomain = 'https://upload-z2.qiniup.com/' // 七牛云华北区上传域名,华东去掉"-z2",华北改成"z1"
const devImgDomain = 'https://cdn.dankal.cn/' // 开发环境图片域名
const proImgDomain = '' // 生产环境图片域名

module.exports = {
  apiDomain: devApiDomain,
  imgDomain: devImgDomain,
  uploadDomain,
}
