const webpack = require('webpack')
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? './'
  : '/',
  chainWebpack: config => {
		config.plugin('provide').use(webpack.ProvidePlugin, [{
        'window.Quill': 'quill/dist/quill.js',
        'Quill': 'quill/dist/quill.js'
	    }]);
	},
  configureWebpack: {
    resolve: {
      alias:{
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'views': '@/views'
      }
    },
  },
  devServer: {
    proxy: {
      '/kita':{
        target:'http://192.168.2.116:8889',
        changeOrigin:true,
        pathRewrite:{
          '^/kita':''
        }
      }
    }
  }
}
