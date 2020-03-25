module.exports = {
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    devtool: "source-map"
  },
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        publish: ["github"]
      }
    }
  }
};
