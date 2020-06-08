
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: '泛员网',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no'},
      { hid: 'description', name: 'description', content: '泛员网' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: '/js/flexible.js', type: 'text/javascript', charset: 'utf-8'
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/font.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vant.js', ssr: true },
    { src: '~/plugins/animate.js' },
    { src: '~/plugins/vue-awesome-swiper', mode: 'client' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios'
  ],
  axios: {
    proxy: true
  },
  proxy: {
    '/api': { 
      target: 'http://120.25.151.145:8899', // 目标接口域名
      pathRewrite: {
        '^/api': '/', // 把 /api 替换成 /
        changeOrigin: true // 表示是否跨域
      }    
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    postcss:[
      require("postcss-px2rem-exclude")({
        remUnit: 75,
        exclude: /node_modules/i
      })
      // require('autoprefixer')
    ],
  }
}
