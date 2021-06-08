// 代理列表
const PROXY_LIST = {
  "/dev": {
    target: "http://127.0.0.1:3000",
    changeOrigin: true,
    pathRewrite: {
      "^/dev": "/api"
    }
  },

  "/pro": {
    target: "https://dobettest.cn",
    changeOrigin: true,
    pathRewrite: {
      "^/pro": "/api"
    }
  }
};
module.exports = {
  configureWebpack: {
    devServer: {
      port: 8080,
      proxy: PROXY_LIST
    }
  }
}