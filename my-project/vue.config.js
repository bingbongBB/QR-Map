const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // https:true,
    proxy: {
      '/Registers': {
        target: 'https://localhost:8081',
        changeOrigin: true,
        
      }
    }
  },
  pluginOptions: {
    vuetify: {
			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
		}
  },
  
})
