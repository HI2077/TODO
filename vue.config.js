const path = require('path')
const resolve = (dir) => path.join(__dirname, dir)
module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
  chainWebpack: config => {
    config.resolve.alias // 添加别名
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@common', resolve('src/common'))
      .set('@config', resolve('src/config'))
      .set('@util', resolve('src/util'))
      .set('@api', resolve('src/api'))
      .set('@theme', resolve('theme'))
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            'font-size-sm': '13px',
            'font-size-md': '15px',
            'font-size-lg': '17px',
            'sidebar-width': '100%',
            'goods-action-button-danger-color': '#7232dd',
            'goods-action-button-warning-color': '#3eaf7c',
            'sidebar-background-color': '@white',
            'sidebar-selected-background-color': '#F1F3FA'
          }
        }
      }
    }
  }
}
