export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Generate 404 error page
  generate: {
    fallback: '404.html'
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Dyvue',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: "google-site-verification", content: "w2tKgPWu24ur4xsvhTai56PK_2EU4nM5wLk0gy4QAe8" },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hey, I’m Dyvue 👋, I Build web apps for clients' },
      { property:"og:title", content:"Dyvue"},
      { property:"og:image", content:"https://romadhanedy.my.id/banner.png"},
      { property:"og:description", content:"Hey, I’m Dyvue 👋, I Build web apps for clients"},
      { property:"og:url", content:"https://romadhanedy.my.id"},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/sass/style.sass'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/vue@particles", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],


  // Google Analytics: setup
  googleAnalytics: {
    id: "UA-195249932-1", // Use as fallback if no runtime config is provided
    autoTracking: {
      screenview: true
    }
  },


  // Build Configuration: https://go.nuxtjs.dev/config-build
  globalName: "dyvueapp",
  globals: {
    id: globalName => `__${globalName}`,
  },
  build: {
    publicPath: "/__0x00000000000000000000000000000000",
    loaders: {
      cssModules: {
        modules: {
          localIdentName: "__0x[hash:64]"
        }
      }
    }
  },
}
