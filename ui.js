const path = require('path')
module.exports = api => {
  api.addClientAddon({
    id: 'app.route.test.client-addon',
    path: path.resolve(__dirname, './client-addon-dist')
    // Use the same port you configured earlier
    // url: 'http://localhost:8000/index.js'
    // path: '@vue/cli-ui-addon-webpack/dist'
  })

  // task
  api.addTask({
      name: "test-task",
      icon: "https://cli.vuejs.org/favicon.png",
      command: "vue-cli-service test-task",
      description: "test vue-cli-service task",
      prompts: [
        {
          name: "userInput",
          type: "input",
          default: "default",
          description: "请输入..."
        },
        {
          name: "confirmBool",
          type: "confirm",
          default: "true",
          description: "请确认"
        }
      ],
      onBeforeRun: async ({ answers, args }) => {
        args.push("--userInput", answers.userInput);
        args.push("--confirmBool", answers.confirmBool);
      }
  });

  api.addView({
    // 唯一的 id
    id: 'app.route.test.id',

    // 路由名称 (来自 Vue Router)
    // 使用 'ClientAddonApi.addRoutes' 方法中相同的名字 (详见之前的客户端 addon 章节)
    name: 'app.route.test.component',

    // 按钮图标 (material-icons)
    icon: 'pets',
    // 你也可以指定一个自定义图片 (详见之前的公共静态文件章节)：
    // icon: 'http://localhost:4000/_plugin/%40vue%2Fcli-service/webpack-icon.svg',

    // 按钮的提示文字
    tooltip: '测试UI'
  })
}
