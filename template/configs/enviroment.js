/* eslint-disable no-unused-vars */
// 开发环境api域名
const devApiDomain = 'https://hjc-api.dankal.cn/v1/';
// 测试环境api域名
const stageApiDomain = '';
// 生产环境api域名
const proApiDomain = '';
// 七牛云华北区上传域名,华东去掉"-z2",华北改成"z1"
const uploadDomain = 'https://upload-z2.qiniup.com/';
// 开发环境图片域名
const devImgDomain = 'https://cdn.dankal.cn/';
// 生产环境图片域名
const proImgDomain = '';

module.exports = {
  apiDomain: devApiDomain,
  imgDomain: devImgDomain,
  uploadDomain,
};
