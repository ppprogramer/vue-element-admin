import request from '@/utils/request'

export function fetchList(query) {
  return request({
    url: '/article/list',
    method: 'get',
    params: query
  })
}

export function fetchArticle() {
  return request({
    url: '/article/detail',
    method: 'get'
  })
}

export function fetchPv(pv) {
  return request({
    url: '/article/pv',
    method: 'get',
    params: { pv }
  })
}

export function createArticle(data) {
  return request({
    url: '/article/create',
    method: 'post',
    data
  })
}

export function updateArticle(data) {
  return request({
    url: '/article/update',
    method: 'post',
    data
  })
}

export function articleIndex(data) {
  return request({
    url: '/api/article',
    method: 'get',
    params: data
  })
}

export function articleShow(data) {
  return request({
    url: '/api/article/' + data.id,
    method: 'get'
  })
}
export function articleEdit(data) {
  return request({
    url: '/api/article/' + data.id,
    method: 'patch'
  })
}
