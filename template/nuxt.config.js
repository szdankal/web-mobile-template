const pkg = require('./package');

module.exports = {
  mode: 'spa', // 移动端项目都为spa模式
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1,user-scalable=no',
      },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
    script: [
      {
        src:
          'https://webapi.amap.com/maps?v=1.4.10&key=8d316f00a97d1a70b223694f6a18b91f',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#e8864c' },
  transition: {
    name: 'router-fade',
    mode: 'out-in',
  },
  /*
   ** Global CSS
   */
  css: ['assets/styles/app.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: 'plugins/plugins.js', ssr: false },
    { src: 'plugins/vuex-persistedstate.js', ssr: false },
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],

  /*
   ** Build configuration
   */
  build: {
    plugins: [],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // eslint-disable-next-line no-param-reassign
      config.resolve.alias['cube-ui'] = 'cube-ui/lib';
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }
    },
  },
};
