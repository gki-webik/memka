export default defineNuxtConfig({
  app: {
    head: {
      title: "Главная страница",
      titleTemplate: "%s - Memka",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "robots", content: "index,follow" },
      ],
    },
  },
  css: [],
  components: true,
  devServer: {
    port: 3000,
  },
  compatibilityDate: "2024-12-15",
});
