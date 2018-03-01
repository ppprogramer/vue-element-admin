import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: 'api/order/list',
    method: 'get',
    params: query
  })
}
