<template>
  <main>
    <div class="block1">
      <div class="center">
        <div class="text">
          <h1>
            <span class="is-1">BUILD</span>
            <span class="is-2">
              <span class="is-line">HY</span>PE FOLLOWING
            </span>
            <span class="is-3"> AMONGST DEGENS AND RETAIL INVESTORS </span>
          </h1>
          <a href="#b2" class="lets_go">
            <span class="is-1"></span>LETS GO <span class="is-2"></span>
          </a>
        </div>
        <div class="hackerImg">
          <img src="/assets/images/1.gif" class="is-1" alt="" />
          <img src="/assets/images/2.png" class="is-2" alt="" />
        </div>
      </div>
    </div>
    <div class="block2" id="b2">
      <h2><span class="is-line">Me</span>mes</h2>
      <div class="items">
        <div class="item is-1">
          <div class="text">STAND OUT FROM THE CROWD</div>
          <img src="/assets/images/3.png" alt="" loading="lazy" />
        </div>
        <div class="item is-2">
          <div class="text is-right">
            AND MAXIMIZE SOCIAL MEDIA
            <br />
            GROWTH
          </div>
          <img src="/assets/images/4.gif" alt="" loading="lazy" />
        </div>
      </div>
    </div>
    <div class="block3" id="b3">
      <h2><span class="is-line">St</span>ickers</h2>
      <h3>JUST A FEW OF THE PROJECTS WE'VE WORKED WITH</h3>
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
      <h2><span class="is-line">Si</span>tes</h2>
      <h3>JUST A FEW OF THE PROJECTS WE'VE WORKED WITH</h3>
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
                <th>Title</th>
                <th>Cost</th>
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
        <span class="is-line"><span class="is-rcb">2</span>D</span> Animation
      </h2>
      <h3><span class="is-rcb">2</span>D CHARACTER DESIGN AND ANIMATION</h3>
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
    <div class="block6">
      <h2>
        <span class="is-line"><span class="is-rcb">3</span>D</span> Animation
      </h2>
      <h3><span class="is-rcb">3</span>D CHARACTER DESIGN AND ANIMATION</h3>
      <div class="items">
        <div class="item">
          <img src="/assets/images/37.png" loading="lazy" class="is-1" alt="" />
          <div class="description" @click="togglePlay2('video4')">
            <div class="title">
              Design <span class="is-rcb">3</span>D character
            </div>
            <div class="cost"><span class="is-rcb">350</span>$</div>
            <div class="bg"></div>
          </div>
        </div>
        <div class="item">
          <div class="video">
            <video
              poster="/assets/images/39.png"
              ref="video4"
              class="is-2"
              src="/assets/images/38.mp4"
              @click="togglePlay2('video4')"
              @ended="onVideoEnd2('video4')"
            ></video>
            <div class="cp" @click="togglePlay2('video4')">
              <img
                src="/assets/images/36.svg"
                loading="lazy"
                v-if="!isPlaying1"
                class="play-button"
                alt=""
              />
            </div>
          </div>
          <div
            class="description"
            v-if="!isPlaying1"
            @click="togglePlay2('video4')"
          >
            <div class="title">
              <span class="is-rcb">3</span>D animation (<span class="is-rcb"
                >15</span
              >
              seconds)
            </div>
            <div class="cost"><span class="is-rcb">350</span>$</div>
            <div class="bg"></div>
          </div>
        </div>
      </div>
    </div>
    <div class="block7">
      <div class="fullWidthVideo">
        <video
          ref="video5"
          class="is-2"
          src="/assets/images/32.mp4"
          @click="togglePlay3('video5')"
          @ended="onVideoEnd3('video5')"
        ></video>
        <div class="cp" @click="togglePlay3('video5')">
          <img
            src="/assets/images/36.svg"
            loading="lazy"
            v-if="!isPlaying2"
            class="play-button"
            alt=""
          />
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
          title: "Animated Stickers",
        },
        {
          src: "/assets/images/6.png",
          class: "is-6",
          titleClass: "title is-animated",
          title: "Animated Stickers",
        },
        {
          src: "/assets/images/7.png",
          class: "is-7",
          titleClass: "title is-animated",
          title: "Animated Stickers",
        },
        {
          src: "/assets/images/8.png",
          class: "is-8",
          titleClass: "title is-animated",
          title: "Animated Stickers",
        },
        {
          src: "/assets/images/9.png",
          class: "is-9",
          titleClass: "title is-animated",
          title: "Animated Stickers",
        },
        {
          src: "/assets/images/10.png",
          class: "is-10",
          titleClass: "title is-animated",
          title: "Animated Stickers",
        },
        {
          src: "/assets/images/11.png",
          class: "is-11",
          titleClass: "title is-mem",
          title: "Memes Stickers",
        },
        {
          src: "/assets/images/12.png",
          class: "is-12",
          titleClass: "title is-mem",
          title: "Memes Stickers",
        },
        {
          src: "/assets/images/13.png",
          class: "is-13",
          titleClass: "title is-mem",
          title: "Memes Stickers",
        },
        {
          src: "/assets/images/14.png",
          class: "is-14",
          titleClass: "title is-mem",
          title: "Memes Stickers",
        },
        {
          src: "/assets/images/15.png",
          class: "is-15",
          titleClass: "title is-mem",
          title: "Memes Stickers",
        },
        {
          src: "/assets/images/16.png",
          class: "is-16",
          titleClass: "title is-mem",
          title: "Memes Stickers",
        },
        {
          src: "/assets/images/17.png",
          class: "is-17",
          titleClass: "title is-mem",
          title: "Memes Stickers",
        },
        {
          src: "/assets/images/18.png",
          class: "is-18",
          titleClass: "title is-static",
          title: "Static Stickers",
        },
        {
          src: "/assets/images/19.png",
          class: "is-19",
          titleClass: "title is-static",
          title: "Static Stickers",
        },
        {
          src: "/assets/images/20.png",
          class: "is-20",
          titleClass: "title is-static",
          title: "Static Stickers",
        },
        {
          src: "/assets/images/21.png",
          class: "is-21",
          titleClass: "title is-static",
          title: "Static Stickers",
        },
        {
          src: "/assets/images/22.png",
          class: "is-22",
          titleClass: "title is-static",
          title: "Static Stickers",
        },
      ],
      sites: [
        { title: "The finished website for a meme-coin", cost: 1500 },
        { title: "Basic layout of the website", cost: 1000 },
        { title: "Website design", cost: 500 },
      ],
      videos: [
        { ref: "video1", src: "/assets/images/33.mp4", isPlaying: false },
        { ref: "video2", src: "/assets/images/34.mp4", isPlaying: false },
        { ref: "video3", src: "/assets/images/35.mp4", isPlaying: false },
      ],
      isPlaying1: false,
      isPlaying2: false,
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
    onVideoEnd(videoRef) {
      const videoData = this.videos.find((v) => v.ref === videoRef);
      if (videoData) {
        videoData.isPlaying = false;
      }
    },
    togglePlay2() {
      const videoRef = `video4`;
      const video = this.$refs.video4;
      if (video) {
        if (video.paused) {
          video.play();
          this.isPlaying1 = true;
        } else {
          video.pause();
          this.isPlaying1 = false;
        }
      } else {
        console.error(`Video element with ref ${videoRef} not found.`);
      }
    },
    onVideoEnd2() {
      const videoData = this.$refs.video4;
      if (videoData) {
        videoData.isPlaying1 = false;
      }
    },
    togglePlay3() {
      const videoRef = `video5`;
      const video = this.$refs.video5;
      if (video) {
        if (video.paused) {
          video.play();
          this.isPlaying2 = true;
        } else {
          video.pause();
          this.isPlaying2 = false;
        }
      } else {
        console.error(`Video element with ref ${videoRef} not found.`);
      }
    },
    onVideoEnd3() {
      const videoData = this.$refs.video5;
      if (videoData) {
        videoData.isPlaying2 = false;
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