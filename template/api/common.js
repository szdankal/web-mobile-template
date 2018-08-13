/* eslint-disable no-unused-vars,import/prefer-default-export */
import env from '~/configs/enviroment'
import DKAxios from '~/jslibs/dk-axios'

export const uploadImg = data => DKAxios({
  url: env.uploadDomain,
  headers: {
    'content-type': 'multipart/form-data',
  },
  method: 'POST',
  data,
})
