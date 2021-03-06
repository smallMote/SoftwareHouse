module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  styleResources: {
    stylus: [
      // '~assets/stylus/base.styl'
    ]
  },
  css: [
    '~assets/font-awesome-4.7.0/css/font-awesome.min.css',
    '~node_modules/animate.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // 跨域处理
    '@nuxtjs/proxy',
    [
      'cookie-universal-nuxt',
      {
        alias: 'cookiz'
      }
    ]
  ],
  proxy: [
    [
      '/api', // 拦截目录
      {
        target: 'http://localhost:10086', // 代理api主机
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    ]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  */
  build: {
    extractCSS: {
      allChunks: true
    },
    extend (config, ctx) {
    }
  }
}
