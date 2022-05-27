/*
 * @Author       : daichunlin
 * @Date         : 2022-05-12 20:32:37
 * @LastEditors  : daichunlin
 * @LastEditTime : 2022-05-27 15:24:45
 * @Description  : vite 配置
 * @FilePath     : /vue3-project/vite.config.ts
 */
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from 'vite-plugin-mock'
// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname)
  return {
    plugins: [
      vue(),
      Components({
        resolvers: [NaiveUiResolver()]
      }),
      viteMockServe({
        mockPath: './src/mock',
        supportTs: true
      })
    ],
    css: {
      preprocessorOptions: {
        less: {
          additionalData: `@import '@/assets/less/variable.less';`
        }
      }
    },
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        '/#/': resolve(__dirname, './src/types')
      }
    },
    base: env.VITE_BASE_URL,
    server: {
      port: 3000,
      open: true,
      cors: true
    }
  }
})
