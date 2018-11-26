const { addLine } = require('./lib')
module.exports = (api, options) => {
    // command
    api.registerCommand('hello', {
        '--bar': 'Thats a pretty argument'
      }, (args) => {
        console.log('Foo was called!', args)
      })

    // webpack细粒度控制
    api.chainWebpack(config => {
        config
            .plugin('html').tap(args => {
                args[0].packpagetime = new Date().format('yyyy-MM-dd hh:mm:ss')
                args[0].inject = true
                return args
            })
    });
}
