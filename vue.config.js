// const path = require('path')  //引入node模块
// const resolve = (dir)=>path.join(__dirname, dir)

// const BASE_URL = process.env.NODE_ENV === 'procution'?'/iview-admin':'/'
// //判断当前环境是开发环境还是真实环境
// module.exports = {
//   lintOnSave: false,
//   baseUrl: BASE_URL,
//   chainWebpack: config =>{
//     config.resolve.alias
//       .set('@',resolve('src'))  //@代表src路径
//       .set('_c', resolve('src/components'))
//   },
//   procutionSourceMap:false,
//   //打包的时候不生成Map文件，加快打包设置
//   devServer: {
//     proxy: "http://localhost:4000"  //代理的URL，开发服务器请求静态资源引向这个地址。
//   }
// }

const path = require('path')
const resolve = dir => path.join(__dirname, dir)

const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iview-admin/' : '/'

module.exports = {
  lintOnSave: false,
  baseUrl: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('_c', resolve('src/components'))
  },
  // 打包时不生成.map文件
  productionSourceMap: false,
  devServer: {
    proxy: 'http://localhost:4000'
  }
}