import actions from './actions';
import * as getters from './getters';
import mutations from './mutations';

const state = {
  recommendGood: '', // 聊天页推荐商品
  hasNewMsg: false, // 是否有新的客服消息
  wxSignature: '',
};
export default {
  getters,
  state,
  actions,
  mutations,
};
