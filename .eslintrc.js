/*
 * @Author: kevin
 * @Date: 2022-02-21 13:21:43
 * @LastEditors: kevin
 * @LastEditTime: 2022-03-17 11:30:43
 * @Description: Do not edit
 */
module.exports = {
  "root": true,
  "env": {
    "node": true
  },
  "extends": [
    "plugin:vue/vue3-essential",
    "eslint:recommended"
  ],
  "parserOptions": {
    "parser": "@babel/eslint-parser"
  },
  "rules": {
    'vue/multi-word-component-names': 0, // disable this rule just for views
  }
}
