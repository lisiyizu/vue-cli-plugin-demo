module.exports = [
  {
    type: 'input',
    name: 'projectName',
    message: '请输入项目名称'
  },
  {
    when: answers => answers.projectName,
    type: 'list',
    name: 'loginStyle',
    message: '请选择风格',
    choices: [
      { name: '风格一', value: '风格一' },
      { name: '风格二', value: '风格二' }
    ]
  },
  {
    type: 'confirm',
    name: 'i18n',
    message: '是否添加国际化',
    default: true
  }
]
