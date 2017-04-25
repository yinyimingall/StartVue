<template lang="html">
  <div id="moreMovies">
    <div class="m-title">
      <h1>{{ movieList.title }}</h1>
    </div>
    <ul>
      <li v-for="elem in movieList.subjects" class="movie-item">
        <router-link :to="{ name: 'movieDetail', params: { id: elem.id}}">
          <img :src="elem.images.small" alt="">
          <p>{{ elem.title }}</p>
          <p class="item-rating">
            <span class="rating-star" :style="elem.stars" v-if="elem.rating.average != 0"></span>
            <span>{{ elem.rating.average==0 ? '暂无评分' : elem.rating.average }}</span>
          </p>
          <p>
            导演：
            <span v-for="(director, index) in elem.directors">
              {{ director.name }} {{ index < elem.directors.length - 1 ? ' / ' : '' }}
            </span>
          </p>
          <p>
            主演：
            <span v-for="(cast, index) in elem.casts">
              {{ cast.name }} {{ index < elem.casts.length - 1 ? ' / ' : '' }}
            </span>
          </p>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { fetch } from '../fetch/api.js'
export default {
  data () {
    return {
      type: '123',
      movieList: {
        title: '',
        total: '',
        subjects: []
      }
    }
  },
  created () {
    this.type = this.$route.query.type;
    this.loadMore()
  },
  watch: {
    // '$route': 'loadMore'
  },
  methods: {
    loadMore () {
      let url = `/douban/movie/${this.type}`
      let sendData = {
        city: '杭州',
        start: 0
      }
      fetch(url, sendData).then(res => {
        this.movieList.title = res.data.title;
        this.movieList.total = res.data.total;
        let subjects = this.movieList.subjects = [...res.data.subjects];//这里...展开符相当与返回一个新数组而非原本引用
        subjects.forEach( val => {
          this.$set(val, 'stars', { 'background-position-y':  Number(val.rating.stars - 50) * 2.2 + 'px'})
        })
      })
    }
  }
}
</script>

<style lang="css">
.m-title h1 {
  line-height: 0.18rem;
  padding: 0.1rem;
  border-bottom: 2px solid rgba(3, 93, 58, 0.1);
}
.movie-item {
  position: relative;
  padding: 0.16rem;
  height: 1.2rem;
  padding-left: 1rem;
  border-bottom: 2px solid rgba(0, 57, 35, 0.1);
}
.movie-item img {
  position: absolute;
  top: 0.16rem;
  left: 0.16rem;
}
</style>
