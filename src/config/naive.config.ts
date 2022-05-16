import { useMessage } from 'naive-ui'
import { App } from 'vue'
export function useNavieUI(app: App) {
  app.config.globalProperties.$message = useMessage()
}
