const withLess = require('@zeit/next-less')
const lessToJs = require('less-vars-to-js')
const fs = require('fs')
const path = require('path')

const themeVariables = lessToJs(
  fs.readFileSync(
    path.resolve(__dirname, './assets/less/antd-custom.less'),
    'utf8'
  )
)

if (typeof require !== 'undefined') {
  require.extensions['.less'] = file => {}
}

module.exports = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
    modifyVars: themeVariables
  }
})
