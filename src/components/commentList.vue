<template>
<div class="commentList">
    <div class="content" >
        <dl v-for="(item,index) in commentList" :key="index">
            <dd><img v-if=item :src="item.user.avatarUrl" alt="">{{ item.user.nickname }}</dd>
            <dt>{{ item.content }}</dt>
        </dl>
    </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'commentList',
  computed: {
    ...mapState([
      'commentList'
    ])
  }
}
</script>

<style>
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
</style>
