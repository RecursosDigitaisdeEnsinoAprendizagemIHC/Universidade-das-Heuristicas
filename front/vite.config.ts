import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const isProduction = process.env.NODE_ENV === `production`

const productionConfig = isProduction ? { https: true } : {}

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   ...productionConfig,
  //   proxy: {
  //     "/api": {
  //       target: "https://heuristica.herokuapp.com/",
  //       changeOrigin: true,
  //       secure: false,
  //       rewrite: (path) => path.replace(/^\/api/, ""),
  //     },
  //   },
  // },
  plugins: [vue()]
})
