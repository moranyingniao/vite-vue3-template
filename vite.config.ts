import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  devServer: {
    // 设置代理
    proxy: {
      "/api": {
        target: "http://127.0.0.1:3000", // 域名
        // ws: true, // 是否启用websockets
        changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {
          "^/api": "/",
        },
      },
    //   "/muxiao": {
    //     target: "https://v.api.aa1.cn/api/api-wenan-gaoxiao", // 域名
    //     // ws: true, // 是否启用websockets
    //     changeOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
    //     pathRewrite: {
    //       "^/muxiao": "/",
    //     },
    //   },
    },
  }
})


