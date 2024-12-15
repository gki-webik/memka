<template>
  <div class="max_container">
    <Header
      :changeLang="changeLang"
      :getCurrentLang="getCurrentLang"
      :lang="lang"
    ></Header>
    <NuxtPage :getCurrentLang="getCurrentLang" />
    <Footer
      :changeLang="changeLang"
      :getCurrentLang="getCurrentLang"
      :lang="lang"
    ></Footer>
  </div>
</template>

<script>
import Header from "~/components/header.vue";
import Footer from "~/components/footer.vue";
export default {
  data() {
    return {
      lang: "ru",
    };
  },
  components: {
    Header,
    Footer,
  },
  mounted() {
    this.lang = this.getCurrentLang();
  },
  methods: {
    changeLang() {
      this.lang = this.lang === "ru" ? "en" : "ru";
      typeof window !== "undefined" &&
        window.localStorage &&
        localStorage.setItem("currentLang", this.lang);
    },
    getCurrentLang() {
      const storedLang =
        typeof window !== "undefined" &&
        window.localStorage &&
        localStorage.getItem("currentLang");
      return storedLang ? storedLang : "ru";
    },
  },
};
</script>