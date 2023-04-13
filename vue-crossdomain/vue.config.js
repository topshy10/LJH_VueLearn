const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/api':{
        // target里面放入跨域的域名
        target:'http://iwenwiki.com/',
        changeOrigin:true
      }
    }
  }
})
