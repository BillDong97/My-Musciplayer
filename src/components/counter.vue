<template>
  <div>
      <button @click="decrease">-</button>
      <span>{{ count }}</span>
      <button @click="increase">+</button>
  </div>
</template>

<script>
export default {
  name: 'counter',
  methods: {
    increase: function () {
      if (this.count < 10) {
        this.count++
      } else {
        alert('别点啦，到头了！')
      }
    },
    decrease: function () {
      if (this.count > 0) {
        this.count--
      } else {
        alert('别点啦，到底了！')
      }
    }
  },
  data () {
    return {
      count: 0
    }
  }
}
</script>

<style scoped>
button{color:black;font:100px;margin:0};
div{margin:10px;}
</style>
