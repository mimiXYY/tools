const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
      '//api.opendota.com': {
        target: `https://api.opendota.com`, //openApiDota
        changeOrigin: true,
        // pathRewrite: {
          // '^//api.opendota.com': '' // 重写请求
        // }
      },
      '/v0': {
        target: `https://ygocdb.com/api`, //游戏王
        changeOrigin: true,
        // pathRewrite: {
        //   '^/api': '' // 重写请求
        // }
      },
    },
  },
  productionSourceMap: false
})

