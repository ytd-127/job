import request from '@/utils/request'

export function getData(params) {
  return request({
    url: '/vue-admin-template/mtable/data',
    method: 'get',
    params
  })
}

export function getColumns(params) {
  return request({
    url: '/vue-admin-template/mtable/columns',
    method: 'get',
    params
  })
}
