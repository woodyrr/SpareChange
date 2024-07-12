// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  pages: true,
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt"],
  css: [
    '@/assets/main.css',
  ],
  
})

// export default defineNuxtConfig({
//   runtimeConfig: {
//     appwriteKey: process.env.APPWRITE_KEY,
//     public: {
//       appwriteEndpoint: process.env.PUBLIC_APPWRITE_ENDPOINT,
//       appwriteProjectId: process.env.PUBLIC_APPWRITE_PROJECT,
//     },
//   },
// });

