<template>
  <main v-if="data">
    <div class="block1">
      <div class="center">
        <div class="text">
          <h1 class="is-rl">
            <span class="is-1">{{ data.block1.h1.part1 }}</span>
            <span class="is-2">
              <span class="is-line">{{ data.block1.h1.part2 }}</span
              >{{ data.block1.h1.part3 }}
            </span>
            <span class="is-3">{{ data.block1.h1.part4 }}</span>
          </h1>
          <a href="#b11" class="lets_go">
            <span class="is-1"></span>
            {{ data.block1.button.text }}
            <span class="is-2"></span>
          </a>
        </div>
        <div class="hackerImg">
          <img v-lazy="'/assets/media/1.gif'" class="is-1" alt="Хакер" />
          <img v-lazy="'/assets/media/2.png'" class="is-2" alt="Треугольник" />
        </div>
      </div>
    </div>
    <div class="block11" id="b11">
      <h2>
        <span class="is-line">{{ data.block11.h2.part1 }}</span
        >{{ data.block11.h2.part2 }}
      </h2>
      <div class="content">
        <img v-lazy="'/assets/media/45.png'" alt="Хакер" />
        <div class="text">
          <div>
            {{ data.block11.text }}
          </div>
        </div>
      </div>
    </div>
    <div class="block3" id="b3">
      <h2>
        <span class="is-line">{{ data.block3.h2.part1 }}</span
        >{{ data.block3.h2.part2 }}
      </h2>
      <h3>{{ data.block3.h3 }}</h3>
      <div class="items">
        <div
          v-for="(item, index) in data.block3.items"
          :key="index"
          class="item"
        >
          <img v-lazy="item.src" :class="item.class" :alt="'Мем_' + index" />
          <div :class="item.titleClass">
            <span>{{ item.title }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="block4" id="b4">
      <h2>
        <span class="is-line">{{ data.block4.h2.part1 }}</span
        >{{ data.block4.h2.part2 }}
      </h2>
      <h3>{{ data.block4.h3 }}</h3>
      <div class="works">
        <img
          v-for="(item, index) in data.block4.items"
          :key="index"
          v-lazy="'/assets/media/' + item.name"
          :class="item.class"
          :alt="'Сайт_' + index"
        />
      </div>
    </div>
    <div class="block5" id="b5">
      <h2>
        <span class="is-line">{{ data.block5.h2.part1 }}</span>
        {{ data.block5.h2.part2 }}
      </h2>
      <h3>{{ data.block5.h3 }}</h3>
      <div class="items">
        <div
          class="item"
          v-for="(item, index) in data.block5.items.images"
          :key="index"
        >
          <div class="phone">
            <img v-lazy="'/assets/media/25.png'" class="is-1" alt="Телефон" />
            <img :src="'/assets/media/' + item.img" class="is-2" alt="Мем" />
          </div>
          <img
            v-lazy="'/assets/media/' + item.hero"
            class="is-3"
            alt="Персонаж"
          />
        </div>
      </div>
      <div class="items is-2">
        <div
          class="item"
          v-for="(item, index) in data.block5.items.videos"
          :key="index"
        >
          <div class="phone" @click="togglePlay('video' + index, 2)">
            <img v-lazy="'/assets/media/25.png'" class="is-1" alt="Телефон" />
            <video
              :ref="`video${index}`"
              class="is-2"
              :poster="'/assets/media/poster_' + item.src + '.png'"
              v-lazy="'/assets/media/' + item.src"
              @click="togglePlay('video' + index, 2)"
              @ended="onVideoEnd('video' + index)"
            ></video>
            <div class="is-views">{{ item.views }}</div>
            <div
              class="cp"
              v-if="!videos[index].isPlaying"
              @click.stop="togglePlay('video' + index, 2)"
            >
              <img
                v-lazy="'/assets/media/36.svg'"
                class="play-button"
                alt="Кнопка"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="items is-3">
        <div class="video">
          <video
            ref="video942993"
            class="is-2"
            poster="/assets/media/poster_51.png"
            v-lazy="'/assets/media/51.mp4'"
            @click="togglePlay('video942993', 1)"
            @ended="onVideoEnd('video942993')"
          ></video>
          <div
            class="cp"
            v-if="!videos.find((v) => v.ref === 'video942993').isPlaying"
            @click.stop="togglePlay('video942993', 1)"
          >
            <img
              v-lazy="'/assets/media/36.svg'"
              class="play-button"
              alt="Кнопка"
            />
          </div>
        </div>
        <div class="video">
          <video
            ref="video772443"
            class="is-2"
            poster="/assets/media/poster_52.png"
            v-lazy="'/assets/media/52.mp4'"
            @click="togglePlay('video772443', 1)"
            @ended="onVideoEnd('video772443')"
          ></video>
          <div
            class="cp"
            v-if="!videos.find((v) => v.ref === 'video772443').isPlaying"
            @click.stop="togglePlay('video772443', 1)"
          >
            <img
              v-lazy="'/assets/media/36.svg'"
              class="play-button"
              alt="Кнопка"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="block6">
      <h2>
        <span class="is-line">{{ data.block6.h2.part1 }}</span>
        {{ data.block6.h2.part2 }}
      </h2>
      <h3>{{ data.block6.h3 }}</h3>
      <div class="items">
        <div class="item">
          <img v-lazy="'/assets/media/37.png'" class="is-1" alt="Мем" />
          <div class="description">
            <div class="title">
              {{ data.block6.description1 }}
            </div>
            <div class="bg"></div>
          </div>
        </div>
        <div class="item">
          <div class="video">
            <video
              poster="/assets/media/39.png"
              ref="video24645"
              class="is-2"
              v-lazy="'/assets/media/38.mp4'"
              @click="togglePlay('video24645', 1)"
              @ended="onVideoEnd('video24645')"
            ></video>
            <div
              class="cp"
              v-if="!videos.find((v) => v.ref === 'video24645').isPlaying"
              @click.stop="togglePlay('video24645', 1)"
            >
              <img
                v-lazy="'/assets/media/36.svg'"
                class="play-button"
                alt="Кнопка"
              />
            </div>
          </div>
          <div class="description" @click="togglePlay('video24645', 1)">
            <div class="title">
              {{ data.block6.description2 }}
            </div>
            <div class="bg"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="block7">
      <div class="fullWidthVideo">
        <video
          ref="video232401"
          class="is-2"
          poster="/assets/media/poster_32.png"
          v-lazy="'/assets/media/32.mp4'"
          @click="togglePlay('video232401', 1)"
          @ended="onVideoEnd('video232401')"
        ></video>
        <div
          class="cp"
          v-if="!videos.find((v) => v.ref === 'video232401').isPlaying"
          @click.stop="togglePlay('video232401', 1)"
        >
          <img
            v-lazy="'/assets/media/36.svg'"
            class="play-button"
            alt="Кнопка"
          />
        </div>
      </div>
      <div class="fullWidthVideo">
        <video
          ref="video82358"
          class="is-2"
          poster="/assets/media/poster_55.png"
          v-lazy="'/assets/media/55.mp4'"
          @click="togglePlay('video82358', 1)"
          @ended="onVideoEnd('video82358')"
        ></video>
        <div
          class="cp"
          v-if="!videos.find((v) => v.ref === 'video82358').isPlaying"
          @click.stop="togglePlay('video82358', 1)"
        >
          <img
            v-lazy="'/assets/media/36.svg'"
            class="play-button"
            alt="Кнопка"
          />
        </div>
      </div>
      <div class="fullWidthVideo">
        <video
          ref="video9293593"
          class="is-2"
          poster="/assets/media/54.png"
          v-lazy="'/assets/media/53.mp4'"
          @click="togglePlay('video9293593', 1)"
          @ended="onVideoEnd('video9293593')"
        ></video>
        <div
          class="cp"
          v-if="!videos.find((v) => v.ref === 'video9293593').isPlaying"
          @click.stop="togglePlay('video9293593', 1)"
        >
          <img
            v-lazy="'/assets/media/36.svg'"
            class="play-button"
            alt="Кнопка"
          />
        </div>
      </div>
    </div>
    <div class="block12" id="b12">
      <h2>
        <span class="is-line">{{ data.block12.h2.part1 }}</span
        >{{ data.block12.h2.part2 }}
      </h2>
      <div class="items">
        <div class="item">
          <img v-lazy="'/assets/media/56.jpg'" class="is-1" alt="K1" />
        </div>
        <div class="item">
          <img v-lazy="'/assets/media/57.jpg'" class="is-2" alt="K2" />
        </div>
      </div>
      <img v-lazy="'/assets/media/58.jpg'" class="is-3" alt="K3" />
    </div>
    <div class="block8" id="b8">
      <h2>
        <span class="is-line">{{ data.block8.h2.part1 }}</span
        >{{ data.block8.h2.part2 }}
      </h2>
      <div class="items">
        <div
          class="item"
          v-for="(item, index) in data.block8.items"
          :key="index"
        >
          <img v-lazy="'/assets/media/' + item.img" :alt="'Мем_' + index" />
          <div class="description">
            <div class="title">{{ item.description }}</div>
          </div>
        </div>
      </div>
      <h3>{{ data.block8.h3 }}</h3>
    </div>
    <div class="block9" id="b9">
      <h2>
        <span class="is-line">{{ data.block9.h2.part1 }}</span
        >{{ data.block9.h2.part2 }}
      </h2>
      <h3>{{ data.block9.h3 }}</h3>
      <div class="table">
        <table>
          <thead>
            <tr>
              <th>Название</th>
              <th>Описание</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(ad, index) in data.block9.ads" :key="index">
              <td class="title">{{ ad.title }}</td>
              <td class="description">{{ ad.description }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="block10" id="b10">
      <h2>
        <span class="is-line">{{ data.block10.h2.part1 }}</span
        >{{ data.block10.h2.part2 }}
      </h2>
      <div class="content">
        <div class="left">
          <img v-lazy="'/assets/media/41.png'" class="is-1" alt="ТГ" />
          <div class="tg">
            <img v-lazy="'/assets/media/42.png'" class="is-2" alt="Мем" />
            <a href="https://t.me/thememeprotocol">@thememeprotocol</a>
            <div class="bg"></div>
          </div>
        </div>
        <div class="right">
          <div class="top">
            <img v-lazy="'/assets/media/43.png'" class="is-1" alt="QR" />
            <img
              src="/assets/media/44.png"
              loading="lazy"
              class="is-2"
              alt="Хакер"
            />
          </div>
          <div class="bottom">
            {{ data.block10.text }}
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
import jsonData from "~/public/data.json";
export default {
  data() {
    return {
      data: null,
      aboutUs: "",
      block3Items: [],
      ads: [],
      sites: [],
      videos: [],
    };
  },
  methods: {
    async loadData(lang) {
      const data = jsonData[lang];
      this.data = data;
      this.videos = data.block5.items.videos.map((video, index) => ({
        ref: `video${index}`,
        isPlaying: false,
      }));
      const myVideos = [
        { ref: "video942993", isPlaying: false },
        { ref: "video772443", isPlaying: false },
        { ref: "video24645", isPlaying: false },
        { ref: "video232401", isPlaying: false },
        { ref: "video9293593", isPlaying: false },
        { ref: "video82358", isPlaying: false },
      ];
      this.videos = [...this.videos, ...myVideos];
    },
    togglePlay(index, type) {
      const videoRef = index;
      const video = this.$refs[videoRef];
      if (video) {
        const videoElement = type === 1 ? video : video[0];
        const videoData = this.videos.find((e) => e.ref === index);
        if (videoData) {
          if (videoElement.paused) {
            videoElement.play();
            videoData.isPlaying = true;
          } else {
            videoElement.pause();
            videoData.isPlaying = false;
          }
        }
      }
    },
    onVideoEnd(videoRef) {
      const videoData = this.videos.find((v) => v.ref === videoRef);
      if (videoData) {
        videoData.isPlaying = false;
      }
    },
  },
  props: {
    getCurrentLang: {
      type: Function,
      required: true,
    },
    lang: {
      type: String,
      required: true,
    },
  },
  watch: {
    lang(newLang) {
      this.loadData(newLang);
    },
  },
  async mounted() {
    this.loadData(this.lang);
  },
  directives: {
    lazy: {
      mounted(el, binding) {
        const options = {
          root: null,
          rootMargin: "1000px",
          threshold: 0,
        };

        const handleLazyLoad = (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const element = entry.target;
              if (element.tagName === "IMG" || element.tagName === "VIDEO") {
                element.src = binding.value;
              }
              observer.unobserve(element);
            }
          });
        };

        const observer = new IntersectionObserver(handleLazyLoad, options);
        observer.observe(el);
      },
    },
  },
};
</script>