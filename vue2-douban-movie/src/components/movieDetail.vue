<template lang="html">
  <div id="detail">
    <img :src="detail.images.large" alt="what">

    <footer>
      <h1>{{ detail.title }}</h1>
      <p>上映时间：{{ detail.year }}</p>
      <p>原名：{{ detail.original_title }}</p>
      <p>导演：{{ directors }}</p>
      <p>类型：{{ genres }}</p>
      <p class="item-rating">
        <span class="rating-star" :style="detail.stars" v-if="detail.rating.average != 0"></span>
        <span>{{ detail.rating.average==0 ? '暂无评分' : detail.rating.average }}分</span>
        <p>{{ detail.wish_count}}人想看</p>
      </p>
    </footer>
    <p>{{ detail.summary }}</p>
  </div>
</template>

<script>
import { fetch } from '../fetch/api.js'
export default {
  data () {
    return {
      detail: {}
    }
  },
  created () {
    this.getDetail()
  },
  methods: {
    getDetail () {
      let url = '/douban/movie/subject/' + this.$route.params.id;
      fetch(url).then( res => {
        console.log(res)
        this.detail = res.data
        this.$set(this.detail, 'stars', { 'background-position-y':  Number(this.detail.rating.stars - 50) * 2.2 + 'px'})
      })
    }
  },
  computed: {
    genres () {
      return this.detail.genres && this.detail.genres.join(' / ')
    },
    directors () {
      let arr = [];
      this.detail.directors.forEach( val => {
        arr.push(val.name)
      })
      return arr && arr.join(' ')
    }
  }
}
</script>

<style lang="css">
#detail img {
  width: 1.4rem;
  margin: 0.2rem;
  float: left;
}
#detail > footer {
  padding: 0.3rem 0.2rem 0 0;
  font-size: 0.14rem;
}
#detail > p {
  padding: 0 0.2rem;
  font-size: 0.14rem;
  text-indent: 0.32rem;
  clear: both;
}
</style>
