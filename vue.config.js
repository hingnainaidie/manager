const path = require('path');
const resolve = (dir) => path.join(__dirname, dir); // 给public路径添加别名

//代理，解决跨域
module.exports = {
  assetsDir: "static", // 打包后静态资源目录，注意public文件下目录（别名）配置，index.html的icon路径
  devServer: {
    open: true,
    host: "localhost",
    port: 8080,
    https: false,
    proxy: {
      "/api": {
        target: "http://localhost:8081", //目标主机
        ws: true, //代理的WebSockets
        changeOrigin: true, //需要虚拟主机站点
        pathRewrite: {
          "^/api": "/"
        }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data:`@import "@/style/color.scss";`
      }
    }
  },
  productionSourceMap: false, // 生产环境map文件
}
