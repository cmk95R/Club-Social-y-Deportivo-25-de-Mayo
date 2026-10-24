import { join } from 'node:path'

export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  runtimeConfig: {
    public: {
      brand: {
        name: 'Club 25 de Mayo — Natatorio Martínez',
        tagline: 'Pileta climatizada, escuela de natación y pileta libre en Martínez',
      },
      contactEmail: 'natatorio@club25demayo.com.ar',
      emailjs: {
        serviceId: '',
        templateId: '',
        publicKey: '',
        toEmail: 'natatorio@club25demayo.com.ar',
      },
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/image',
    (_options, nuxt) => {
      nuxt.hook('modules:done', () => {
        const postcssOptions =
          nuxt.options.postcss ??
          (nuxt.options.build as { postcss?: { postcssOptions?: { plugins?: Record<string, unknown> } } })
            ?.postcss?.postcssOptions ??
          (nuxt.options.build as { postcss?: { plugins?: Record<string, unknown> } })?.postcss
        const plugins = postcssOptions?.plugins
        const tailwindPlugin = plugins?.tailwindcss
        if (
          typeof tailwindPlugin === 'string' &&
          tailwindPlugin.includes('.nuxt/tailwind/postcss.mjs')
        ) {
          plugins!.tailwindcss = join(nuxt.options.rootDir, 'tailwind.config.js')
        }
      })
    },
  ],
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },
  app: {
    head: {
      title: 'Natatorio Club 25 de Mayo — Martínez | Pileta Climatizada',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Natatorio del Club Social y Deportivo 25 de Mayo de Martínez. Pileta climatizada todo el año, escuela de natación infantil y adultos, pileta libre y aquagym en Rodríguez Peña 941, Martínez.' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png?v=2' },
        { rel: 'apple-touch-icon', href: '/favicon.png?v=2' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Open+Sans:wght@400;500;600&display=swap' }
      ]
    }
  }
})
