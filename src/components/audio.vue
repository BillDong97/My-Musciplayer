<template>
    <div class="audio-con">
      <span><b>正在播放</b><br>{{ songPlaying }}</span>
      <audio :src="songUrl" @play="play" @pause="pause" controls loop autoplay></audio>
    </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'audiocon',
  computed: {
    ...mapState([
      'songUrl',
      'songPlaying'
    ])
  },
  methods: {
    ...mapMutations([
      'play',
      'pause'
    ])
  }
}
</script>

<style>
  /* 播放栏 */
  .audio-con {
    float:left;
    width: 100%;
    height: 64px;
    margin-top: 2px;
    background-color: #1eacda;
  }
  .audio-con span{
    display: inline-block;
    margin-top:5px;
    margin-left: 0;
    width:25%;
    height: inherit;
    padding:0;
  }

  audio {
    color:#1eacda ;
    width: 75%;
    height: inherit;
    margin-top:-4px;
    padding:0;
    float: right;
  }
  audio:focus{
    outline:none;
  }
</style>
