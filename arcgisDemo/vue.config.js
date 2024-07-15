'use strict'
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}
console.log(path);

// 文件的核心就是导出一个配置好的对象
module.exports = {
  // configureWebpack，可以修改一些配置项
  configureWebpack: {
    resolve: {
      alias: {
        '@': resolve('src')
      },
      fallback: {
        path: false,
      },
    }
  },
  lintOnSave: false //关闭eslint检查
  // chainWebpack，接受一个函数，允许对选项有更细的修改
}
