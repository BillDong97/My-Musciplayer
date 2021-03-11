<template>
  <div class="cover">
    <img id="bar" src="../assets/images/player_bar.png" :class="isPlay?'play':'pause'">
    <div class="rotate" :class="{autoRotate:isPlay}">
      <img id="disc" src="../assets/images/disc.png" >
      <img id="pic" :src="picUrl" >
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'cover',
  computed: {
    ...mapState([
      'isPlay',
      'picUrl'
    ])
  }
}
</script>

<style>
  /*封面栏*/
  .cover {
    width:44%;
    height:inherit;
    float: left;
    z-index: 8;
    top: 112px;
    border-radius: 75px;
  }

  .cover img#bar {
    position: absolute;
    left: 427px;
    top: 62px;
    z-index: 10;
    transform-origin: 12px 12px;
    transition: 1s;
  }
  .pause{
    transform: rotate(-25deg);
  }
  .play {
    transform: rotate(0 deg);
  }
  .rotate {
    float:left;
    position: relative;
  }
  .rotate img#pic {
    width: 150px;
    height: 150px;
    position: relative;
    left:0px;
    top:-126px;
    z-index: 8;
  }
  .rotate img#disc {
    position: relative;
    left:0px;
    top:80px;
    z-index: 9;
  }
  @keyframes rotate {
      0%{
        transform: rotateZ(0deg);
      }
      50%{
        transform: rotateZ(180deg);
      }
      100%{
        transform: rotate(360deg);
      }
    }
  .rotate {
    animation-name: rotate;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-duration:15s;
    animation-play-state: paused;
  }
  .autoRotate {
    animation-play-state: running;
  }
</style>
