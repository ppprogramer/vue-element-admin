import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: 'api/transaction/list',
    method: 'get',
    params: query
  })
}
