<template>
<div>
  <div class="videocon" v-if="isPlayMV">
      <video :src="mvURL" controls autoplay></video>
  </div>
  <div class="mask" v-show="isPlayMV" @click="stopMV"></div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  name: 'videocon',
  computed: {
    ...mapState([
      'mvURL',
      'isPlayMV'
    ])
  },
  methods: {
    ...mapMutations([
      'stopMV'
    ])
  }

}
</script>

<style>
  .videocon {
    position: absolute;
    margin:0;
    left:0px;
    top:0px;
    width:100%;
    height: 100%;
    /* background-color: rgba(255, 255, 255, 0.185); */
    z-index: 11;
  }
  video {
    width:850px;
    height:540px;
  }
  .mask {
      position: fixed;
      left: 0px;
      top:0px;
      width:2000px;
      height:2000px;
      z-index: 10;
      background-color: rgba(158, 214, 221);
  }
</style>
