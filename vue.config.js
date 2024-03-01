const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  devServer: {
    proxy: {
      '/list-api': {
        target: `https://api.opendota.com`, //openApiDota
        changeOrigin: true,
        pathRewrite: {
          '^/list-api': '' // 重写请求
        }
      },
      '/card-api': {
        target: `https://ygocdb.com`, //游戏王
        changeOrigin: true,
        pathRewrite: {
          '^/card-api': '' // 重写请求
        }
      },
    },
  },
  productionSourceMap: false
})

