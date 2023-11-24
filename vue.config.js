const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '/api': {
        target: `http://192.168.2.10:9000`,
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': '' // 重写请求
        // }
      }
    },
  },
  productionSourceMap: false
})

