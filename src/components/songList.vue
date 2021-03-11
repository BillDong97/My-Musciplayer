<template>
    <div class="songList">
    <ul>
        <li v-for="(item,index) in songList" :key=index @click.stop='playMusic(item)'>
            {{ item.name }} - <span v-for="(singer,index) in item.artists" :key=index> {{ singer.name }}</span>
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
      'playMusic'
    ])
  }
}
</script>

<style>
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
</style>
