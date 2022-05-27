import { getCookie } from './helper'
export function getToken() {
  return getCookie('token')
}
