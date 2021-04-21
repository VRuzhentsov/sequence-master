module.exports = {
  "comments": false,
  "env": {
    "main": {
      "presets": [
        ["@vue/babel-preset-app", {
          "targets": { "node": 7 }
        }]
      ]
    },
    "renderer": {
      "presets": [
        ["@vue/babel-preset-app", {
          "modules": false
        }]
      ]
    },
    "web": {
      "presets": [
        ["@vue/babel-preset-app", {
          "modules": false
        }]
      ]
    }
  },
  "plugins": ["transform-runtime"]
}
