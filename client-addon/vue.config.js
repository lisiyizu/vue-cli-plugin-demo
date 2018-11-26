const { clientAddonConfig } = require('@vue/cli-ui')

module.exports = {
  ...clientAddonConfig({
    id: 'app.route.test.id',
    // Development port (default 8042)
    // 开发环境端口 (默认值 8042)
    port: 8042
  }),
  outputDir: '../client-addon-dist'
}
