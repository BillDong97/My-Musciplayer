<template>
   <!-- <h2 class="blue">这是 {{ user }} 的组件</h2> -->
   <button @click="increment">你点击了我 {{count}} 次</button>
</template>

<script>
export default {
  name: 'mC',
  methods: {
    increment: function () {
      this.count++
    }
  },
  data () {
    return {
      // user: 'Bill',
      count: 0
    }
  }
}
</script>

<style>

button{color:black;font:100px;margin:10px}
</style>
