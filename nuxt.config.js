export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'landing-air',
    htmlAttrs: {
      lang: 'pt-Br'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com'},
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,800;0,900;1,700&display=swap'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // '@/assets/scss/main.scss'
    'slick-carousel/slick/slick.css',
    'slick-carousel/slick/slick-theme.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/slick', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: {
    dirs: [
        '@/components',
        '@/components/banners',
        '@/components/ferramentas',
        '@/components/agilidade',
        '@/components/explicacao',
        '@/components/simulacao',
        '@/components/seguranca',
        '@/components/direcao',
        '@/components/conheca',
        '@/components/consolidador',
        '@/components/contato'
    ]
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: [
      '@/assets/scss/reset.scss',
      '@/assets/scss/variables.scss',
      '@/assets/scss/typography.scss',
      '@/assets/scss/colors.scss',
      '@/assets/scss/buttons.scss',
      '@/assets/scss/base.scss',
    ]
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: {
      analyzerMode: 'static'
    }
  }
}
