<template>
    <div class="songList">
      <h4>歌曲列表</h4>
      <b v-if="!songList.length">快去搜索栏搜索<br>你喜欢的音乐吧！</b>
    <ul>
        <li v-for="(item,index) in songList" :key=index @click.stop='playMusic(item)'>
            {{ item.name }} - <span v-for="(singer,index) in item.artists" :key=index> {{ singer.name }}</span>
            <span v-if="item.mvid != 0" @click.stop="playMV(item)">【MV】</span>
        </li>
    </ul>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'songList',
  computed: {
    ...mapState([
      'songList'
    ])
  },
  methods: {
    ...mapActions([
      'playMusic',
      'playMV'
    ])
  }
}
</script>

<style scoped>
  .songList {
    float: left;
    width:25%;
    margin-left: 10px;
    margin-right: 20px;
    overflow: auto;
    height: inherit;
    background:url('../assets/images/line.png') right center no-repeat;
  }
  b {
    position: relative;
    top:125px;
  }
  .songList ul {
    padding-inline-start: 0px;
  }
  li {
    list-style-type: none;
    margin:6px;
    padding:4px;
    border-top: rgb(216, 211, 211) 1px solid;
    font-size: 12px;
  }
</style>
