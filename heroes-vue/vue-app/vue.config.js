module.exports = {
  configureWebpack: {
    devtool: 'source-map',
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:9697',
        ws: true,
        changeOrigin: true,
      },
    },
  },
};
