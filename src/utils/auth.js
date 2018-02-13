import Cookies from 'js-cookie'

export function getToken(key) {
  return Cookies.get(key)
}

export function setToken(key, value, expires_in) {
  return Cookies.set(key, value, { expires: expires_in })
}

export function removeToken(key) {
  return Cookies.remove(key)
}
