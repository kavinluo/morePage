const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'dist',
  pages: {
    admin: {
      // 应用入口配置，相当于单页面应用的main.js，必需项
      entry: 'src/pages/Admin/main.js',
      // 应用的模版，相当于单页面应用的public/index.html，可选项，省略时默认与模块名一致
      template: 'public/admin.html',
      // 编译后在dist目录的输出文件名，可选项，省略时默认与模块名一致
      filename: 'admin.html'
    },
    index: {
      entry: 'src/pages/Index/main.js',
      template: 'public/index.html',
      filename: 'index.html'
    }
  },

})
