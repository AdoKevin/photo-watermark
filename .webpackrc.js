export default {
  publicPath: "./",
  env: {
    development: {
      extraBabelPlugins: ["dva-hmr"],
    },
  },
};
