<template>
  <div>
    <footer>
      <div class="content">
        <div class="logo">
          <img
            @click="linkTo('/')"
            src="/assets/images/logo.png"
            alt="Логотип"
          />
          <div><span class="is-rcb">@2024</span>, Все права защищены</div>
        </div>
        <nav>
          <a href="">Анимация</a>
          <a href="">Иллюстрация</a>
          <a href="#b2">Мемы</a>
          <a href="#b3">Стикеры</a>
          <a href="">Сайты</a>
          <a href="">Реклама</a>
          <a href="">Контакты</a>
        </nav>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@import "~/public/assets/styles/dist/min/footer.min.css";
</style>

<script>
export default {
  methods: {
    linkTo(path) {
      this.$router.push(path);
    },
  },
};
</script>