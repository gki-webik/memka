<template>
  <div class="video-container">
    <video
      ref="video"
      class="video-player"
      :src="videoSrc"
      @click="togglePlay"
      @ended="onVideoEnd"
    ></video>
    <img
      src="/assets/images/36.svg"
      v-if="!isPlaying"
      @click="togglePlay"
      class="play-button"
      alt=""
    />
  </div>
</template>
  
  <script>
export default {
  data() {
    return {
      videoSrc: "/assets/images/32.mp4",
      isPlaying: false,
    };
  },
  methods: {
    togglePlay() {
      const video = this.$refs.video;
      if (video.paused) {
        video.play();
        this.isPlaying = true;
      } else {
        video.pause();
        this.isPlaying = false;
      }
    },
    onVideoEnd() {
      this.isPlaying = false;
    },
  },
};
</script>
  
  <style scoped>
.video-container {
  position: relative;
  width: 100%;
  max-width: 640px;
  margin: 0 auto;
  background-color: #000;
  cursor: pointer;
}

.video-player {
  width: 100%;
  border-radius: 8px;
}

.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  cursor: pointer;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>