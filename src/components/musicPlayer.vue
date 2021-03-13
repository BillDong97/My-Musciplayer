<template>
  <div class="musicPlayer">
    <searchbar></searchbar>
    <div class="center">
      <songList></songList>
      <cover></cover>
      <commentList></commentList>
    </div>
    <audiocon></audiocon>
    <videocon></videocon>
  </div>
</template>

<script>
import searchbar from './searchbar.vue'
import songList from './songList.vue'
import cover from './cover.vue'
import commentList from './commentList.vue'
import audiocon from './audio.vue'
import videocon from './video.vue'

export default {
  name: 'musicPlayer',
  components: { searchbar, songList, cover, commentList, audiocon, videocon }
}
</script>

<style>
  .musicPlayer {
    background-color: rgba(158, 214, 221, 0.8);
    width:850px;
    height: 550px;
    margin:auto;
    margin-top: 80px;
    border:darkgray 2px solid;
  }
  .center {
    float: left;
    width:100%;
    height: 428px;
  }
</style>
