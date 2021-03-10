<template>
  <div class="musicPlayer">
    <div class="searchbar">
      <img src="../assets/images/player_title.png" alt="">
      <input type="text" name="searchbar" id="searchbar" v-model="search" @keyup.enter="searchMusic">
    </div>
    <div class="center">
      <div class="songList">
        <ul>
            <li v-for="(item,index) in musicList" :key=index @click.stop='playMusic(item)'>
              {{ item.name }} - <span v-for="(singer,index) in item.artists" :key=index> {{ singer.name }}</span>
            </li>
        </ul>
      </div>
      <div class="cover">
        <img id="bar" src="../assets/images/player_bar.png" :class="isPlay?'play':'pause'">
        <div class="rotate" :class="{autoRotate:isPlay}">
          <img id="disc" src="../assets/images/disc.png" >
          <img id="pic" :src="picUrl" >
        </div>
      </div>
      <div class="commentList">
        <div class="content" >
          <dl v-for="(item,index) in commentList" :key="index">
            <dd><img :src="item.user.avatarUrl" alt="">{{ item.user.nickname }}</dd>
            <dt>{{ item.content }}</dt>
          </dl>
        </div>
      </div>
    </div>
    <div class="audio-con">
      <span><b>正在播放</b><br>{{ songPlaying }}</span>
      <audio :src="songUrl" @play="play" @pause="pause" controls loop autoplay></audio>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'musicPlayer',
  data () {
    return {
      musicList: [],
      search: '',
      songUrl: 'unknown',
      userAvatar: '',
      commentList: [],
      songPlaying: '',
      isPlay: false,
      picUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1781691707,1570613443&fm=26&gp=0.jpg'
    }
  },
  methods: {
    searchMusic: function () {
      const that = this
      this.musicList = []
      axios.get('https://autumnfish.cn/search?keywords=' + this.search)
        .then(res => {
          that.musicList = res.data.result.songs
          console.log(res)
        },
        err => {
          console.log(err)
          that.songPlaying = '对不起，您尚未连接到网络'
        }
        )
    },
    playMusic: function (item) {
      const that = this
      this.isPlay = 1
      this.songPlaying = item.name
      // 歌曲播放
      axios.get('https://autumnfish.cn/song/url?id=' + item.id)
        .then(res => {
          console.log(res)
          that.songUrl = res.data.data[0].url
        }).catch(err => console.log(err))
      // 歌曲评论
      axios.get('https://autumnfish.cn/comment/hot?type=0&id=' + item.id)
        .then(res => {
          console.log(res)
          that.commentList = res.data.hotComments
        },
        err => console.log(err)
        )
      // 获取封面
      axios.get('https://autumnfish.cn/album?id=' + item.id)
        .then(res => {
          console.log(res)
          that.picUrl = res.data.album.picUrl
        },
        err => {
          console.log(err)
          that.picUrl = 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1781691707,1570613443&fm=26&gp=0.jpg'
        })
    },

    play: function () {
      this.isPlay = true
    },
    pause: function () {
      this.isPlay = false
    }
  }
}
</script>

<style>
  body,
  ul {
    margin: 0px;
    padding: 0px;
  }
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

  /* 搜索栏 */
  .searchbar {
    height: 60px;
    background-color: #1eacda;
    z-index: 4;
  }
  .searchbar img {
    float: left;
    margin-left: 22px;
    margin-top: 15px;
  }
  .searchbar input {
    height:30px;
    width:200px;
    display: inline;
    float: right;
    font-size:15px;
    background-color: lightblue;
    text-indent: 15px;
    border:none;
    margin-top:15px;
    margin-right: 10px;
    border-radius: 16px;
  }
  input:focus {
    border:none;
  }

  .center {
    float: left;
    width:100%;
    height: 428px;
  }
  /* 歌曲栏*/
  .songList {
    float: left;
    width:25%;
    margin-left: 10px;
    margin-right: 20px;
    overflow: auto;
    height: inherit;
    background:url('../assets/images/line.png') right center no-repeat;
  }
  .songList ::-webkit-scrollbar {
    display: none;
  }
  .songList ul {
    padding-inline-start: 0px;
  }
  li {
    list-style-type: none;
    margin:6px;
    padding:4px;
    border-top: rgb(216, 211, 211) 1px solid;
  }
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

  /* 评论栏 */
  .commentList {
    float: right;
    width: 25%;
    height: inherit;
    margin-left: 10px;
    margin-right: 0px;
    overflow: auto;
    background:url('../assets/images/line.png') left center no-repeat;

  }

  .content {
    margin:5px;
  }
  dl {
    border-bottom: rgb(177, 174, 174) 1px solid;
    margin:0;
  }
  dd {
    margin-inline-start: 0;
    height: 30px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-weight: bold;
  }
  dd>img {
    width: 30px;
    float: left;
    height: 30px;
  }
  dt {
    text-indent: 2em;
    margin-top:5px;
    margin-bottom: 5px;
  }

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
