<template>
  <div>
    <header>
      <div class="content">
        <div class="logo">
          <img
            @click="linkTo('/')"
            src="/assets/images/logo.png"
            alt="Логотип"
          />
        </div>
        <nav ref="nav">
          <router-link to="/" class="router-link-active">{{
            updateText.a1
          }}</router-link>
          <router-link to="/illustration" class="router-link-active">{{
            updateText.a2
          }}</router-link>
          <router-link to="#b2" class="router-link-active">{{
            updateText.a3
          }}</router-link>
          <router-link to="#b3" class="router-link-active">{{
            updateText.a4
          }}</router-link>
          <router-link to="/sites" class="router-link-active">{{
            updateText.a5
          }}</router-link>
          <router-link to="/advertising" class="router-link-active">{{
            updateText.a6
          }}</router-link>
          <router-link to="/contacts" class="router-link-active">{{
            updateText.a7
          }}</router-link>
          <router-link
            :to="getCurrentLang() === 'ru' ? '/en' : '/ru'"
            @click="changeLang"
            class="router-link-active"
          >
            {{ updateText.a8 }}
          </router-link>
        </nav>
        <div class="menuToggle" @click="menuToggle">
          <span class="is-1"></span>
          <span class="is-2"></span>
        </div>
      </div>
      <div class="is-blur"></div>
    </header>
  </div>
</template>

<style scoped>
@import "~/public/assets/styles/dist/min/header.min.css";
</style>

<script>
export default {
  data() {
    return {
      ruText: {
        a1: "Анимация",
        a2: "Иллюстрация",
        a3: "Мемы",
        a4: "Стикеры",
        a5: "Сайты",
        a6: "Реклама",
        a7: "Контакты",
        a8: "Сменить язык",
      },
      enText: {
        a1: "Animation",
        a2: "Illustration",
        a3: "Memes",
        a4: "Stickers",
        a5: "Sites",
        a6: "Setup campaign",
        a7: "Contact",
        a8: "Change language",
      },
    };
  },
  props: {
    changeLang: {
      type: Function,
      required: true,
    },
    getCurrentLang: {
      type: Function,
      required: true,
    },
    lang: {
      type: String,
      required: true,
    },
  },
  computed: {
    updateText() {
      return this.lang === "ru" ? this.ruText : this.enText;
    },
  },
  methods: {
    linkTo(path) {
      this.$router.replace(path);
    },
    menuToggle(event) {
      let nav = this.$refs.nav;
      nav.classList.toggle("is-open");
      event.currentTarget.classList.toggle("is-open");
    },
  },
};
</script>