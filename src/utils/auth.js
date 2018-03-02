import Cookies from 'js-cookie'

export function getToken(key) {
  return Cookies.get(key)
}

export function setToken(key, value, expires_in) {
  var inFifteenMinutes = 1
  if (expires_in) {
    inFifteenMinutes = new Date(new Date().getTime() + expires_in * 1000)
  }
  return Cookies.set(key, value, { expires: inFifteenMinutes })
}

export function removeToken(key) {
  return Cookies.remove(key)
}
