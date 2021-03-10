<template>
  <div class="weatherSearch">
    <h1>{{ msg }}</h1>
    <input id = "city" type = "text" v-model = "city" @keyup.enter = "getWeather">
    <button class="search" @click = "getWeather">查询</button>
    <br>
    <div id="hot-key">
      <span>热门城市：</span>
      <a href="" @click.prevent="changeCity('北京')">北京</a>
      <a href=""  @click.prevent="changeCity('上海')">上海</a>
      <a href="" @click.prevent="changeCity('广州')">广州</a>
      <a href="" @click.prevent="changeCity('深圳')">深圳</a>
    </div>
    <ul class="record">
      <span id="record">搜索记录：</span>
      <li id="record" v-for="(item,index) in record" :key=index>{{ item }}</li>
    </ul>
    <ul class="weather-list">
      <li v-for='(item,index) in weatherList' :key=index >
        <div class="date"><span>{{ item.date }}</span></div>
        <div class="type"><span>{{ item.type }}</span></div>
        <div class="temp">
          <b>{{ item.low }}</b>
          ~
          <b>{{ item.high }}</b>
        </div>
        <div class="fengxiang">{{ item.fengxiang }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Weather',
  data () {
    return {
      msg: '天气查询',
      city: '请输入城市名称查询天气',
      weatherList: [],
      record: []
    }
  },
  methods: {
    getWeather: function () {
      // console.log(this.city)
      const that = this
      axios.get('http://wthrcdn.etouch.cn/weather_mini?city=' + this.city)
        .then(function (res) {
          console.log(res.data.data.forecast)
          that.weatherList = res.data.data.forecast
          that.record.push(that.city)
        }).catch((err) => { console.log(err); alert('请输入正确的城市名称！') })
    },
    changeCity: function (city) {
      this.city = city
      this.getWeather()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  text-decoration: none;
}
input {
  width: 200px;
}
span#record {
  text-align: left;
}
</style>
