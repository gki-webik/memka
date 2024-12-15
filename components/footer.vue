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
          @2024, Все права защищены
        </div>
        <nav>
          <a href="">Анимация</a>
          <a href="">Иллюстрация</a>
          <a href="">Мемы</a>
          <a href="">Стикеры</a>
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