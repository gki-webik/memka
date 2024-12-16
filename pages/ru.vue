<template>
  <main>
    <div class="block1">
      <div class="center">
        <div class="text">
          <h1>
            <span class="is-1">СОЗДАЙТЕ</span>
            <span class="is-2"> <span class="is-line">АЖ</span>ИОТАЖ </span>
            <span class="is-3">
              СРЕДИ ПОДПИСЧИКОВ  И ПРИВЛЕКИТЕ НОВЫХ ИНВЕСТОРОВ
            </span>
          </h1>
          <a href="#b2" class="lets_go">
            <span class="is-1"></span>ВПЕРЕД <span class="is-2"></span>
          </a>
        </div>
        <div class="hackerImg">
          <img src="/assets/images/1.gif" class="is-1" alt="" />
          <img src="/assets/images/2.png" class="is-2" alt="" />
        </div>
      </div>
    </div>
    <div class="block2" id="b2">
      <h2><span class="is-line">Ме</span>мы</h2>
      <div class="items">
        <div class="item is-1">
          <div class="text">
            ВЫДЕЛЯЙТЕСЬ ИЗ ТОЛПЫ И <br />
            ПРИВЛЕКАЙТЕ БОЛЬШЕ
          </div>
          <img src="/assets/images/3.png" alt="" loading="lazy" />
        </div>
        <div class="item is-2">
          <div class="text is-right">
            НОВЫХ ПОДПИСЧИКОВ И <br />
            ПОТЕНЦИАЛЬНЫХ КЛИЕНТОВ
          </div>
          <img src="/assets/images/4.gif" alt="" loading="lazy" />
        </div>
      </div>
    </div>
    <div class="block3" id="b3">
      <h2><span class="is-line">Ст</span>икеры</h2>
      <h3>ПРИМЕР ПРОЕКТОВ РЕАЛИЗОВАННЫХ НАШЕЙ СТУДИЕЙ</h3>
      <div class="items">
        <div v-for="(item, index) in block3Items" :key="index" class="item">
          <img :src="item.src" :class="item.class" alt="" loading="lazy" />
          <div :class="item.titleClass">
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="block4" id="b4">
      <h2><span class="is-line">Са</span>йты</h2>
      <h3>ПРИМЕР ПРОЕКТОВ РЕАЛИЗОВАННЫХ НАШЕЙ СТУДИЕЙ</h3>
      <div class="desktop">
        <div class="price">
          <div class="item" v-for="(site, index) in sites" :key="index">
            <div class="title">{{ site.title }}</div>
            <div class="cost">
              <span class="is-rcb">{{ site.cost }}</span
              >$
            </div>
          </div>
        </div>
        <div class="works">
          <img src="/assets/images/23.png" loading="lazy" class="is-1" alt="" />
          <img src="/assets/images/24.png" loading="lazy" class="is-2" alt="" />
        </div>
      </div>
      <div class="mobile">
        <div class="price">
          <table>
            <thead>
              <tr>
                <th>Название</th>
                <th>Стоимость</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(site, index) in sites" :key="index">
                <td class="title">{{ site.title }}</td>
                <td class="cost">
                  <span class="is-rcb">{{ site.cost }}</span
                  >$
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="works">
          <img src="/assets/images/23.png" loading="lazy" class="is-1" alt="" />
          <img src="/assets/images/24.png" loading="lazy" class="is-2" alt="" />
        </div>
      </div>
    </div>
    <div class="block5" id="b5">
      <h2>
        <span class="is-line"><span class="is-rcb">2</span>D</span> Сайты
      </h2>
      <h3>РАЗРАБОТКА ПЕРСОНАЖА В <span class="is-rcb">2</span>D И АНИМАЦИЯ</h3>
      <div class="items">
        <div class="item">
          <div class="phone">
            <img
              src="/assets/images/25.png"
              loading="lazy"
              class="is-1"
              alt=""
            />
            <img
              src="/assets/images/29.gif"
              loading="lazy"
              class="is-2"
              alt=""
            />
          </div>
          <img src="/assets/images/26.png" loading="lazy" class="is-3" alt="" />
        </div>
        <div class="item">
          <div class="phone">
            <img
              src="/assets/images/25.png"
              loading="lazy"
              class="is-1"
              alt=""
            />
            <img
              src="/assets/images/30.gif"
              loading="lazy"
              class="is-2"
              alt=""
            />
          </div>
          <img src="/assets/images/27.png" loading="lazy" class="is-3" alt="" />
        </div>
        <div class="item">
          <div class="phone">
            <img
              src="/assets/images/25.png"
              loading="lazy"
              class="is-1"
              alt=""
            />
            <img
              src="/assets/images/31.gif"
              loading="lazy"
              class="is-2"
              alt=""
            />
          </div>
          <img src="/assets/images/28.png" loading="lazy" class="is-3" alt="" />
        </div>
      </div>
      <div class="items is-2">
        <div class="item" v-for="(video, index) in videos" :key="index">
          <div class="phone">
            <img
              src="/assets/images/25.png"
              loading="lazy"
              class="is-1"
              @click="togglePlay(index)"
              alt=""
            />
            <video
              :ref="`video${index}`"
              class="is-2"
              :src="video.src"
              @click="togglePlay(index)"
              @ended="onVideoEnd(index)"
            ></video>
            <div class="cp" @click="togglePlay(index)">
              <img
                src="/assets/images/36.svg"
                loading="lazy"
                v-if="!video.isPlaying"
                class="play-button"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
@import "~/public/assets/styles/dist/min/index.min.css";
</style>

<script>
export default {
  data() {
    return {
      block3Items: [
        {
          src: "/assets/images/5.png",
          class: "is-5",
          titleClass: "title is-animated",
          title: "Анимированный стикер",
        },
        {
          src: "/assets/images/6.png",
          class: "is-6",
          titleClass: "title is-animated",
          title: "Анимированный стикер",
        },
        {
          src: "/assets/images/7.png",
          class: "is-7",
          titleClass: "title is-animated",
          title: "Анимированный стикер",
        },
        {
          src: "/assets/images/8.png",
          class: "is-8",
          titleClass: "title is-animated",
          title: "Анимированный стикер",
        },
        {
          src: "/assets/images/9.png",
          class: "is-9",
          titleClass: "title is-animated",
          title: "Анимированный стикер",
        },
        {
          src: "/assets/images/10.png",
          class: "is-10",
          titleClass: "title is-animated",
          title: "Анимированный стикер",
        },
        {
          src: "/assets/images/11.png",
          class: "is-11",
          titleClass: "title is-mem",
          title: "Мем стикер",
        },
        {
          src: "/assets/images/12.png",
          class: "is-12",
          titleClass: "title is-mem",
          title: "Мем стикер",
        },
        {
          src: "/assets/images/13.png",
          class: "is-13",
          titleClass: "title is-mem",
          title: "Мем стикер",
        },
        {
          src: "/assets/images/14.png",
          class: "is-14",
          titleClass: "title is-mem",
          title: "Мем стикер",
        },
        {
          src: "/assets/images/15.png",
          class: "is-15",
          titleClass: "title is-mem",
          title: "Мем стикер",
        },
        {
          src: "/assets/images/16.png",
          class: "is-16",
          titleClass: "title is-mem",
          title: "Мем стикер",
        },
        {
          src: "/assets/images/17.png",
          class: "is-17",
          titleClass: "title is-mem",
          title: "Мем стикер",
        },
        {
          src: "/assets/images/18.png",
          class: "is-18",
          titleClass: "title is-static",
          title: "Статичный стикер",
        },
        {
          src: "/assets/images/19.png",
          class: "is-19",
          titleClass: "title is-static",
          title: "Статичный стикер",
        },
        {
          src: "/assets/images/20.png",
          class: "is-20",
          titleClass: "title is-static",
          title: "Статичный стикер",
        },
        {
          src: "/assets/images/21.png",
          class: "is-21",
          titleClass: "title is-static",
          title: "Статичный стикер",
        },
        {
          src: "/assets/images/22.png",
          class: "is-22",
          titleClass: "title is-static",
          title: "Статичный стикер",
        },
      ],
      sites: [
        { title: "Готовый сайт для мем-коина", cost: 1500 },
        { title: "Базовая верстка сайта", cost: 1000 },
        { title: "Дизайн сайта", cost: 500 },
      ],
      videos: [
        { ref: "video1", src: "/assets/images/33.mp4", isPlaying: false },
        { ref: "video2", src: "/assets/images/34.mp4", isPlaying: false },
        { ref: "video3", src: "/assets/images/35.mp4", isPlaying: false },
      ],
    };
  },
  props: {
    getCurrentLang: {
      type: Function,
      required: true,
    },
  },
  methods: {
    togglePlay(index) {
      const videoRef = `video${index}`;
      const video = this.$refs[videoRef][0];
      if (video) {
        const videoData = this.videos[index];
        if (video.paused) {
          video.play();
          videoData.isPlaying = true;
        } else {
          video.pause();
          videoData.isPlaying = false;
        }
      } else {
        console.error(`Video element with ref ${videoRef} not found.`);
      }
    },
    onVideoEnd(index) {
      const videoData = this.videos[index];
      if (videoData) {
        videoData.isPlaying = false;
      }
    },
    onVideoEnd(videoRef) {
      const videoData = this.videos.find((v) => v.ref === videoRef);
      if (videoData) {
        videoData.isPlaying = false;
      }
    },
  },
  mounted() {
    if (this.getCurrentLang() === "en") {
      this.$router.replace("/en");
    }
  },
};
</script>