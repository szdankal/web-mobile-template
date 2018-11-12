import {
  GOOD_RECOMMENT,
  UPDATE_MSG_HISTORY,
  UPDATE_HAS_NEW_MSG,
  UPDATE_WX_SIGNATURE,
} from './mutation-types';

export default {
  [GOOD_RECOMMENT](state, obj) {
    state.recommendGood = obj
  },
  [UPDATE_MSG_HISTORY](state, payload) {
    state.msgList = payload
  },
  [UPDATE_HAS_NEW_MSG](state, payload) {
    state.hasNewMsg = payload
  },
  [UPDATE_WX_SIGNATURE](state, payload) {
    state.wxSignature = payload
  },
}
