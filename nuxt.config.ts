export default defineNuxtConfig({
  app: {
    head: {
      title: "The Meme Protocol",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "robots", content: "index,follow" },
        {
          name: "description",
          content:
            "The Meme Protocol - Your ultimate source for memes and humor.",
        },
        {
          name: "keywords",
          content: "memes, humor, funny, jokes, entertainment",
        },
        { property: "og:title", content: "The Meme Protocol" },
        {
          property: "og:description",
          content: "Your ultimate source for memes and humor.",
        },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://thememeprotocol.com" },
        {
          property: "og:image",
          content: "/assets/media/socialWEB.jpeg",
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: "The Meme Protocol" },
        {
          name: "twitter:description",
          content: "Your ultimate source for memes and humor.",
        },
        {
          name: "twitter:image",
          content: "/assets/media/socialWEB.jpeg",
        },
        { name: "theme-color", content: "#0A1C0C" },
        { name: "msapplication-TileColor", content: "#0A1C0C" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
        { name: "apple-mobile-web-app-title", content: "The Meme Protocol" },
        {
          name: "msapplication-TileImage",
          content: "/assets/media/browserLogo.png",
        },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "color-scheme", content: "light" },
        { name: "viewport-fit", content: "cover" },
        { name: "bingbot", content: "index,follow" },
        { name: "yandex", content: "index,follow" },
        { name: "og:locale", content: "ru_RU" },
        { name: "og:site_name", content: "The Meme Protocol" },
      ],
      link: [
        { rel: "stylesheet", href: "/assets/styles/dist/min/all.min.css" },
        { rel: "manifest", href: "/site.webmanifest" },
        {
          rel: "icon",
          type: "image/png",
          href: "/assets/media/logo.png",
        },
        {
          rel: "icon",
          type: "apple-touch-icon",
          href: "/assets/media/logo.png",
        },
        {
          rel: "short icon",
          href: "/favicon.ico",
        },
        { rel: "canonical", href: "https://thememeprotocol.com" },
      ],
      script: [
        {
          src: "https://www.googletagmanager.com/gtag/js?id=G-S7GVP6C16F",
          async: true,
        },
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S7GVP6C16F');
          `,
        },
        {
          src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8054010191476916",
          async: true,
          crossorigin: "anonymous",
        },
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            url: "https://thememeprotocol.com",
            name: "The Meme Protocol",
          }),
        },
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
