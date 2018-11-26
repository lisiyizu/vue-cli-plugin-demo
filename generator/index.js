const fs = require('fs-extra')
module.exports = (api, options) => {
  // 
  const addLine = (string, match, line) => {
    let lines = string.split(/\r?\n/g).reverse()
    let lastImportIndex = lines.findIndex(line => line.match(match))
    let alreadyAdded = lines.find(line => line.indexOf(line) > -1)

    if (!alreadyAdded) {
      lines[lastImportIndex] += `\n${line}`
      return lines.reverse().join('\n')
    }

    return string
  }

  api.extendPackage({
    dependencies: {
      "autoprefixer": "^6.7.7",
      "axios": "^0.15.3",
      "babel-polyfill": "^6.26.0",
      "blueimp-md5": "^2.10.0",
      "element-ui": "^2.3.9",
      "exceljs": "^1.6.2",
      "jsbarcode": "^3.9.0",
      "node-sass": "^4.9.0",
      "sass-bem": "^2.6.5",
      "sass-loader": "^7.0.1",
      "url-loader": "^1.1.2",
      "vue": "^2.5.17",
      "vue-cookies": "^1.5.6",
      "vue-i18n": "^8.2.1",
      "vue-loader": "^14.2.3",
      "vue-router": "^3.0.1",
      "vue-style-loader": "^2.0.0",
      "vuex": "^3.0.1",
      "webpack": "^4.24.0"
    },
    eslintConfig: {
      "root": false
    }
  })

  api.render(files => {
    Object.keys(files)
      .filter(path => path.startsWith('src/'))
      .forEach(path => delete files[path])
  })

  api.render('./template', options)

  api.onCreateComplete(() => {
    // 修改 ./public/index.html
    if (options.hasOwnProperty('projectName')) {
      const fs = require('fs')
      const htmlPath = api.resolve('./public/index.html')
      let html = fs.readFileSync(htmlPath, { encoding: 'utf8' })
      let lines = html.split(/\r?\n/g)
      lines = lines.map((line) => line.replace(/(<title>)[\S\s\t]*?(<\/title>)/gm, "$1" + options.projectName + "$2"))
      lines = lines.map((line) => line.replace(/<html/gm, '<html  package-time="<%= htmlWebpackPlugin.options.packpagetime %>"'))
      html = lines.join('\n')
      fs.writeFileSync(htmlPath, html, { encoding: 'utf8' })
    }

    // 
    const filesToDelete = []

    // 国际化
    if (!options.i18n) {
      filesToDelete.push("src/i18n.js")
      filesToDelete.push("src/locales")
      filesToDelete.push("src/components/HelloI18n.vue")
    }

    // 删除文件
    filesToDelete.filter(pathFile => {
      if (fs.existsSync(pathFile)) {
        // 删除文件 和 文件夹
        fs.remove(api.resolve(pathFile))
      }
    })
  })

}
