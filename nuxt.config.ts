// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    '@nuxtjs/sanity'
  ],
  sanity: {
    projectId: 'drjvsy8w',
    useCdn: true,
  },
})
