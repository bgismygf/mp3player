<template>
  <div>
<!-- 左邊 - 音樂播放器 -->
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-8 col-md-6 col-lg-5">
          <audio id="audio">
            <source id="s" src="../assets/music/WhereverYouAre.mp3" type="audio/mpeg" />
          </audio>
<!-- 專輯封面 -->
          <div class="bg-cover-c rounded-lg"
            style="background-image:url('https://i.kfs.io/album/global/21664553,0v1/fit/500x500.jpg');"></div>
<!-- 音樂名稱 -->
          <h1 class="h3 text-center text-white mt-3">ONE OK ROCK</h1>
          <h2 class="h3 text-center text-white mt-1">Wherever You Are</h2>
<!-- 播放按鈕 -->
          <div class="text-center mt-3">
            <a href="#"><i class="fas fa-step-backward text-white"></i></a>
            <a v-if="!playSwitch" class="text-white mx-5" href="#"
              @click.prevent="playOrStopSong(true)">
              <i class="fas fa-play"></i>
            </a>
            <a v-else class="mx-5" href="#"
              @click.prevent="playOrStopSong(false)">
              <i class="fas fa-pause text-white"></i>
            </a>
            <a href="#"><i class="fas fa-step-forward text-white"></i></a>
          </div>
<!-- 時間 -->
          <div class="d-flex justify-content-between">
            <span class="text-white">00:00</span>
            <span>00:00</span>
          </div>
<!-- 時間條 -->
          <div class="w-100 mt-2 rounded-pill border">
            <div class="bg-white" style="height:5px; width: 70%;"></div>
          </div>
<!-- 重播、音量、隨機 -->
          <div class="d-flex mt-4 justify-content-between w-100">
            <a href="#"><i class="fas fa-retweet text-white"></i></a>
            <div class="d-flex w-100 justify-content-center">
              <a v-if="true" href="#"><i class="fas fa-volume-down text-white"></i></a>
              <a v-else href="#"><i class="fas fa-volume-down text-white"></i></a>
              <div class="ml-2 w-50 align-self-center rounded-pill border">
                <div class="bg-white" style="height:5px; width: 50%;"></div>
              </div>
            </div>
            <a href="#"><i class="fas fa-random text-white"></i></a>
          </div>
        </div>
<!-- 右邊 - 音樂列表 -->
        <div class="col-12 col-sm-8 col-md-7 col-lg-5 mt-4 mt-lg-0">
              <div class="d-flex justify-content-between border-bottom border-white
                pb-3 cursor-pointer mb-4" v-for="(item, index) in songList" :key="index">
              <span class="text-white">
                {{ index + 1 }}. {{ item.title }} - {{ item.musicName }}
              </span>
              <a v-if="false" href="#"><i class="fas fa-play text-white"></i></a>
              <a v-else href="#"><i class="fas fa-pause text-white"></i></a>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Mp3Player',
  data() {
    return {
      playSwitch: false,
      currentlyPlaying: '../assets/music/WhereverYouAre.mp3',
      songList: [
        {
          title: 'ONE OK ROCK',
          musicName: 'Wherever You Are',
          fileName: 'WhereverYouAre',
          img: 'https://i.kfs.io/album/tw/328901,0v3/fit/500x500.jpg',
        },
        {
          title: 'ONE OK ROCK',
          musicName: 'The Beginning',
          fileName: '../assets/music/TheBeginning.mp3',
          img: 'https://i.kfs.io/album/tw/746878,0v3/fit/500x500.jpg',
        },
        {
          title: 'ONE OK ROCK',
          musicName: 'Mighty Long Fall',
          fileName: 'MightyLongFall',
          img: 'https://i.kfs.io/album/global/8518438,0v1/fit/500x500.jpg',
        },
        {
          title: 'ONE OK ROCK',
          musicName: 'Cry Out',
          fileName: 'CryOut',
          img: 'https://i.kfs.io/album/global/8518438,0v1/fit/500x500.jpg',
        },
        {
          title: 'ONE OK ROCK',
          musicName: 'Bedroom Warfare',
          fileName: 'BedroomWarfare',
          img: 'https://i.kfs.io/album/global/21664553,0v1/fit/500x500.jpg',
        },
        {
          title: 'ONE OK ROCK',
          musicName: 'Remake',
          fileName: 'Remake',
          img: 'https://i.kfs.io/album/tw/328916,0v1/fit/500x500.jpg',
        },
      ],
    };
  },
  methods: {
    playOrStopSong(judge) {
      const audio = document.querySelector('audio');
      const s = document.querySelector('#s');
      if (judge) {
        console.log('1', audio.currentSrc);
        console.log('1-1', s.currentSrc);
        // s.src = '../assets/music/MightyLongFall.mp3';
        // console.log('2', audio.currentSrc);
        // console.log('2-1', s.currentSrc);
        // console.log(audio.networkState);
        // audio.load();
        audio.play();
        // console.log(audio.networkState);
      } else {
        audio.pause();
      }
      this.playSwitch = judge;
      // console.log(this.$refs.s);
    },
  },
};
</script>

<style lang="scss" scoped>
.bg-cover-c {
  height: 300px;
  width: 300px;
  margin: 0 auto;
  background-size: cover;
  background-position: center center;
}

.cursor-pointer {
  cursor:pointer;
}
</style>
