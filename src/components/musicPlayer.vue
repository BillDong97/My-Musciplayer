<template>
  <div class="musicPlayer">
    <searchbar></searchbar>
    <div class="center">
      <songList></songList>
      <cover></cover>
      <commentList></commentList>
    </div>
    <audiocon></audiocon>
  </div>
</template>

<script>
import searchbar from './searchbar.vue'
import songList from './songList.vue'
import cover from './cover.vue'
import commentList from './commentList.vue'
import audiocon from './audio.vue'

export default {
  name: 'musicPlayer',
  components: { searchbar, songList, cover, commentList, audiocon }
}
</script>

<style>
  .musicPlayer {
    background-color: rgba(158, 214, 221, 0.842);
    width:850px;
    height: 550px;
    position: fixed;
    left: 50%;
    margin-left:-425px;
    top:50%;
    margin-top:-277px;
    border:darkgray 2px solid;
  }
  .center {
    float: left;
    width:100%;
    height: 428px;
  }
</style>
