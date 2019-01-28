// vue.config.js
module.exports = {
  // 选项...
  /* 使用vscode调试 */
  configureWebpack: {
    devtool: "source-map"
  },

  pluginOptions: {
    i18n: {
      locale: 'zh_CN',
      fallbackLocale: 'zh_CN',
      localeDir: 'locales',
      enableInSFC: true
    }
  }
};
