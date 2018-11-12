/**
 * Created by ivancai on 2018/2/5.
 * 微信登录相关参数
 */
const BASE_REDIRECT_URL = 'https://open.weixin.qq.com/connect/oauth2/authorize';

const APP_ID = 'wxf3fa9181fe6317a7';

// app网页授权域名
const APP_DOMAIN = 'http://web-hjc.dankal.cn/';

// snsapi_base或snsapi_userinfo
const SCOPE = 'snsapi_userinfo';

// 可能需要携带的附加参数,目前大多业务暂时不需要用到，写死即可
const STATE = 'STATE';

const FINAL_URL = `${BASE_REDIRECT_URL}?appid=${APP_ID}&redirect_uri=${encodeURIComponent(
  APP_DOMAIN,
)}&response_type=code&scope=${SCOPE}&state=${STATE}#wechat_redirect`;

module.exports = {
  BASE_REDIRECT_URL,
  APP_ID,
  APP_DOMAIN,
  SCOPE,
  STATE,
  FINAL_URL,
};
