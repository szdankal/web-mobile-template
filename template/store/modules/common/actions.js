import { getWXSignature } from '../../../api/common';
import { UPDATE_WX_SIGNATURE } from './mutation-types';

export default {
  async getWxSignature({ commit }, url) {
    const { data, status } = await getWXSignature(url)
    if (status === 200) {
      commit(UPDATE_WX_SIGNATURE, data)
    }
  },
}
