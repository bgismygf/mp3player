<template>
  <div>
    <div class="container mt-5">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-8 col-md-6 col-lg-5">
          <div class="bg-cover-c rounded-lg" style="background-image:url('https://upload.wikimedia.org/wikipedia/zh/0/0c/Niche_Syndrome_-_ONE_OK_ROCK_album_cover.png');"></div>
          <h1 class="h3 text-center text-white mt-3">ONE OK ROCK</h1>
          <h2 class="h3 text-center text-white mt-1">Wherever You Are</h2>
          <div class="text-center mt-4">
            <a href="#"><i class="fas fa-step-backward text-white"></i></a>
            <a v-if="false" class="text-white mx-5" href="#"><i class="fas fa-play"></i></a>
            <a v-else class="mx-5" href="#"><i class="fas fa-pause text-white"></i></a>
            <a href="#"><i class="fas fa-step-forward text-white"></i></a>
          </div>
          <div class="w-100 mt-4 rounded-pill border">
            <div class="bg-white" style="height:5px; width: 70%;"></div>
          </div>
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
        <div class="col-12 col-sm-8 col-md-7 col-lg-5 mt-4 mt-lg-0">
              <div class="d-flex justify-content-between border-bottom border-white
                pb-3 cursor-pointer mb-4">
              <span class="text-white">
                1. ONE OK ROCK - Wherever You Are
              </span>
              <a v-if="false" href="#"><i class="fas fa-play text-white"></i></a>
              <a v-else href="#"><i class="fas fa-pause text-white"></i></a>
            </div>

            <div class="d-flex justify-content-between border-bottom border-white
                pb-3 cursor-pointer mb-4">
              <span class="text-white">
                2. ONE OK ROCK - The Beginning
              </span>
              <a v-if="true" href="#"><i class="fas fa-play text-white"></i></a>
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
