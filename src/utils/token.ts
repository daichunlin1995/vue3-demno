export function getToken() {
  const user = localStorage.getItem('user') || '{}'
  return JSON.parse(user).vToken || ''
}
