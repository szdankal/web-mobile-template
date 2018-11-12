/* eslint-disable no-unused-vars,import/prefer-default-export */
import env from '~/configs/enviroment'
import DKAxios from '~/jslibs/dk-axios'

export const getUploadToekn = () => DKAxios({
  url: 'https://api-template.dankal.cn/v1/app/communal/qiniu',
})

export const uploadImg = data => DKAxios({
  url: env.uploadDomain,
  headers: {
    'content-type': 'multipart/form-data',
  },
  method: 'POST',
  data,
})


export const getWXSignature = data => DKAxios({
  url: 'app/User/getShareSign',
  method: 'POST',
  data,
})
