module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/e-portfolio/" : "/",
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    devtool: "source-map",
  },
};
