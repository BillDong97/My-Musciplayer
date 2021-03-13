import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const state = {
  search: '',
  songList: [],
  commentList: [],
  songUrl: '',
  mvURL: '',
  songPlaying: '',
  isPlay: false,
  isPlayMV: false,
  picUrl: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1781691707,1570613443&fm=26&gp=0.jpg'
}

const mutations = {
  play (state) {
    state.isPlay = true
  },
  pause (state) {
    state.isPlay = false
  },
  playMV (state) {
    state.isPlayMV = true
    state.songUrl = ''
    state.isPlay = false
  },
  stopMV (state) {
    state.isPlayMV = false
    state.mvURL = ''
  },
  updateSearch (state, value) {
    state.search = value
  },
  setSongPlaying (state, {name}) {
    state.songPlaying = name
  },
  setSongList (state, {songList}) {
    state.songList = songList
  },
  setSongUrl (state, {url}) {
    state.songUrl = url
  },
  setCommentList (state, {commentList}) {
    state.commentList = commentList
  },
  setPicUrl (state, {url}) {
    state.picUrl = url
  },
  setMVURL (state, {url}) {
    state.mvURL = url
  }
}

const actions = {
  searchMusic ({state, commit}) {
    // 清空歌曲列表
    commit('setSongList', {songList: []})
    // 使用axios获取歌单并渲染到歌曲列表
    console.log(state.search)
    axios.get('https://autumnfish.cn/search?keywords=' + state.search)
      .then(res => {
        commit('setSongList', {songList: res.data.result.songs})
        console.log(res.data.result.songs)
      },
      err => {
        console.log(err)
        commit('setSongPlaying', {name: '对不起，您尚未连接到网络'})
      })
  },
  playMusic ({commit}, {name, id}) {
    // 改变播放状态
    commit('play')
    // 清空评论列表
    commit('setCommentList', {commentList: []})
    // 设置正在播放的歌曲
    commit('setSongPlaying', {name: name})
    // 将audio控件的url设置为点击的歌曲的url
    axios.get('https://autumnfish.cn/song/url?id=' + id)
      .then(res => {
        console.log(res)
        commit('setSongUrl', {url: res.data.data[0].url})
      }).catch(err => console.log(err))
      // 获取评论列表并渲染
    axios.get('https://autumnfish.cn/comment/hot?type=0&id=' + id)
      .then(res => {
        console.log(res)
        if (res.data.hotComments.length > 0) {
          commit('setCommentList', {commentList: res.data.hotComments})
        } else {
          commit('setCommentList', {commentList: [{content: '对不起，当前歌曲暂无评论'}]})
        }
      },
      err => console.log(err)
      )
    // 获取封面图片
    axios.get('https://autumnfish.cn/album?id=' + id)
      .then(res => {
        console.log(res)
        commit('setPicUrl', {url: res.data.album.picUrl})
      },
      err => {
        console.log(err)
        commit('setPicUrl', {
          url: 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1781691707,1570613443&fm=26&gp=0.jpg'
        })
      })
  },
  playMV ({commit}, {mvid}) {
    // 获取mvURL
    axios.get('https://autumnfish.cn/mv/url?id=' + mvid)
      .then(res => {
        // 改变MV播放状态
        commit('playMV')
        // 将mvURL赋给video的src属性
        console.log(res)
        commit('setMVURL', {url: res.data.data.url})
      }).catch(err => console.log(err))
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
