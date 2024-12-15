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
          <a href="">Анимация</a>
          <a href="">Иллюстрация</a>
          <a href="">Мемы</a>
          <a href="">Стикеры</a>
          <a href="">Сайты</a>
          <a href="">Реклама</a>
          <a href="">Контакты</a>
        </nav>
        <div class="menuToggle" @click="menuToggle($event.target)">
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
  methods: {
    linkTo(path) {
      this.$router.push(path);
    },
    menuToggle(e) {
      let nav = this.$refs.nav;
      nav.classList.toggle("is-open");
      e.classList.toggle("is-open");
    },
  },
};
</script>