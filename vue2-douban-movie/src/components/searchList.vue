<template lang="html">
  <div id="search">
    <div class="s-title">
      <h1>{{ searchList.title }}</h1>
      <p>共{{ searchList.total }}个电影</p>
    </div>
    <ul>
      <li v-for="elem in searchList.subjects" class="movie-item">
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
    <loading v-show="isLoading"></loading>
  </div>
</template>

<script>
import loading from '../components/loading.vue'
import { fetch } from '../fetch/api.js'
export default {
  data () {
    return {
      queryKey: '123',
      searchList: {
        title: '',
        total: '',
        subjects: []
      },
      isLoading: true
    }
  },
  created () {
    this.queryKey = this.$route.query.queryKey
    this.load()
  },
  methods: {
    load () {
      let url = `douban/movie/search?q=${this.queryKey}`
      fetch(url, { params: { start: 0 }}).then( res => {
        console.log(res.data)
        this.searchList.title = res.data.title;
        this.searchList.total = res.data.total;
        let subjects = this.searchList.subjects = [...res.data.subjects]
        subjects.forEach( val => {
          this.$set(val, 'stars', { 'background-position-y':  Number(val.rating.stars - 50) * 2.2 + 'px'})
        })
        this.isLoading = false
      })
    }
  },
  components: {
    loading
  }
}
</script>

<style lang="css">
.s-title {
  padding: 0.16rem 0.16rem 0;
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
