import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persist'
export default function () {
  const store = createPinia()
  store.use(piniaPersist)
  return store
}
