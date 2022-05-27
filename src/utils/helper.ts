import Cookies from 'js-cookie'
import JsEncrypt from 'jsencrypt'
/**
 *
 * @description 获取数据真实类型
 * @param data 形参 待获取的数据
 */
export function getDataType(data: any) {
  return Object.prototype.toString.call(data).slice(8, -1)
}

/**
 * @description: cookie 存储
 */

export function getCookie(key: string) {
  return Cookies.get(key)
}
export function setCookie(key: string, val: string) {
  return Cookies.set(key, val)
}
export function removeCookie(key: string) {
  return Cookies.remove(key)
}

// 密码加密

export function setPwdEncrypt(publicKey: string, password: string) {
  const encryptor = new JsEncrypt()
  encryptor.setPublicKey(publicKey)
  return encryptor.encrypt(password)
}

// 解密
export function getPwdEncrypt() {}

// 生成随机字符串
export function getRandomStr(len = 6) {
  const str = 'abcdefghijklmnopqrstuvwxyz1234567890'
  let result = ''
  for (let i = 0; i < len; i++) {
    result += str[Math.floor(Math.random() * str.length)]
  }
  return result
}
