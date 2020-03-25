module.exports = {
  transpileDependencies: ["vuetify"],
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        publish: ["github"],
        mac: {
          artifactName: "iQOS Desktop"
        }
      }
    }
  }
};
