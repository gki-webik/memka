<template>
  <div>
    <header>
      <div class="content">
        <div class="logo">
          <img
            @click="linkTo('/')"
            src="/assets/media/logo.png"
            alt="Логотип"
          />
        </div>
        <nav ref="nav">
          <router-link
            to="#b11"
            @click="menuToggle"
            class="router-link-active"
            >{{ updateText.a11 }}</router-link
          >
          <router-link
            to="#b5"
            @click="menuToggle"
            class="router-link-active"
            >{{ updateText.a1 }}</router-link
          >
          <router-link
            to="#b8"
            @click="menuToggle"
            class="router-link-active"
            >{{ updateText.a2 }}</router-link
          >
          <router-link
            to="#b12"
            @click="menuToggle"
            class="router-link-active"
            >{{ updateText.a12 }}</router-link
          >
          <router-link
            to="#b3"
            @click="menuToggle"
            class="router-link-active"
            >{{ updateText.a4 }}</router-link
          >
          <router-link
            to="#b4"
            @click="menuToggle"
            class="router-link-active"
            >{{ updateText.a5 }}</router-link
          >
          <router-link
            to="#b9"
            @click="menuToggle"
            class="router-link-active"
            >{{ updateText.a6 }}</router-link
          >
          <router-link
            to="#b10"
            @click="menuToggle"
            class="router-link-active"
            >{{ updateText.a7 }}</router-link
          >
          <router-link @click="changeLang2()" to="" class="router-link-active">
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
        a12: "Создание персонажей",
        a4: "Стикеры",
        a5: "Сайты",
        a6: "Реклама",
        a7: "Контакты",
        a8: "Сменить язык",
        a11: "О Нас",
      },
      enText: {
        a1: "Animation",
        a2: "Illustration",
        a12: "Character Creation",
        a4: "Stickers",
        a5: "Sites",
        a6: "Setup campaign",
        a7: "Contact",
        a8: "Change language",
        a11: "About us",
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
    changeLang2() {
      this.changeLang();
      this.menuToggle();
    },
  },
};
</script>