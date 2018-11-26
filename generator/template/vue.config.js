module.exports = {
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://localhost:8888',
        pathRewrite: { '^/api': '' },
        changeOrigin: true
      }
    }
  }
}
