<template>
  <div>
    <footer>
      <div class="content">
        <div class="logo">
          <img
            @click="linkTo('/')"
            src="/assets/media/logo.png"
            alt="Логотип"
          />
          <div><span class="is-rcb">@2024</span>, Все права защищены</div>
        </div>
        <nav ref="nav">
          <router-link to="#b11" class="router-link-active">{{
            updateText.a11
          }}</router-link>
          <router-link to="#b5" class="router-link-active">{{
            updateText.a1
          }}</router-link>
          <router-link to="#b8" class="router-link-active">{{
            updateText.a2
          }}</router-link>
          <router-link to="#b12" class="router-link-active">{{
            updateText.a12
          }}</router-link>
          <router-link to="#b3" class="router-link-active">{{
            updateText.a4
          }}</router-link>
          <router-link to="#b4" class="router-link-active">{{
            updateText.a5
          }}</router-link>
          <router-link to="#b9" class="router-link-active">{{
            updateText.a6
          }}</router-link>
          <router-link to="#b10" class="router-link-active">{{
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
      </div>
      <div class="is-blur"></div>
    </footer>
  </div>
</template>

<style scoped>
@import "~/public/assets/styles/dist/min/footer.min.css";
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
  },
};
</script>