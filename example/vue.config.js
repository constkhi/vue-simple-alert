module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-simple-alert" : "/",
  outputDir: "../docs",

  configureWebpack: {
    optimization: {
      //splitChunks: false
    }
  },
  filenameHashing: false,
  chainWebpack: config => config.resolve.symlinks(false)
};
