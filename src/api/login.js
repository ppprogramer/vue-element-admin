import request from '@/utils/request'

export function loginByUsername(username, password) {
  const data = {
    username,
    password
  }
  return request({
    url: 'api/auth/login',
    method: 'post',
    data
  })
}

export function logout() {
  return request({
    url: '/login/logout',
    method: 'post'
  })
}

export function getUserInfo(token) {
  return request({
    url: 'api/user/info',
    method: 'get'
  })
}

export function refreshToken(refresh_token) {
  const data = {
    refresh_token
  }
  return request({
    url: 'api/auth/refreshToken',
    method: 'post',
    data
  })
}
