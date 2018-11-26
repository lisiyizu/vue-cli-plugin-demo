const { addLine } = require('./lib')
module.exports = (api, options) => {
    // command
    api.registerCommand('test-task', {
    }, (args) => {
        console.log(args);
        console.log('args userInput：', args.userInput)
        console.log('args confirmBool：', args.confirmBool)
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
