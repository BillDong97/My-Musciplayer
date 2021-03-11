<template>
  <div class="searchbar">
    <img src="../assets/images/player_title.png" alt="">
    <input type="text" name="searchbar" id="searchbar"
    v-model="search" @keyup.enter="searchMusic">
  </div>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
import { mapFields } from 'vuex-map-fields'

export default {
  name: 'searchbar',
  methods: {
    ...mapActions([
      'searchMusic'
    ]),
    ...mapMutations([
      'updateSearch'
    ])
  },
  computed: {
    ...mapFields([
      'search'
    ])
  }
}
</script>

<style>
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
</style>
