<template lang="html">
  <div id="home">
    <div v-show="!isLoading">
      <div class="city">
        <span>坐标：{{ city }}</span>
      </div>
      <div class="releasing">
        <div class="title">
          <span>正在上映</span>
          <router-link :to="{ name: 'moreMovies', query: { type: 'in_theaters'}}">
            <div class="more">
              <span>更多</span><i class="arrow"></i>
            </div>
          </router-link>
        </div>
        <div class="list-main">
          <ul>
            <li v-for="elem in inTheaters.subjects" class="list-item">
              <router-link :to="{ name: 'movieDetail', params: { id: elem.id}}">
                <div class="item-content">
                  <img :src="elem.images.medium" class="item-img" alt="movie poster">
                  <p class="item-name">{{ elem.title }}</p>
                  <p class="item-rating">
                    <span class="rating-star" :style="elem.stars" v-if="elem.rating.average != 0"></span>
                    <span>{{ elem.rating.average==0 ? '暂无评分' : elem.rating.average }}</span>
                  </p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
      <div class="coming-soon">
        <div class="title">
          <span>即将上映</span>
          <router-link :to="{ name: 'moreMovies', query: { type: 'coming_soon'}}">
            <div class="more">
              <span>更多</span><i class="arrow"></i>
            </div>
          </router-link>
        </div>
        <div class="list-main">
          <ul>
            <li v-for="elem in comingSoon.subjects" class="list-item">
              <router-link :to="{ name: 'movieDetail', params: { id: elem.id}}">
                <div class="item-content">
                  <img :src="elem.images.medium" class="item-img" alt="movie poster">
                  <p>{{ elem.title }}</p>
                  <p>{{ elem.collect_count }}人想看</p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <loading v-show="isLoading"></loading>
  </div>

</template>

<script>
import { fetch } from '../fetch/api.js'
import loading from '../components/loading.vue'
export default {
  data () {
    return{
      isLoading: true,
      inTheaters: {
        url: 'douban/movie/in_theaters',
        title: '',
        type: '',
        subjects: []
      },
      comingSoon: {
        url: 'douban/movie/coming_soon',
        title: 'where city ?',
        type: '',
        subjects: []
      }
    }
  },
  mounted () {
    console.log('主页。。。mouted')
    this.isLoading = true;
    this.fetchShowing();
  },
  created () {
    console.log('home...created')
  },
  methods: {
    fetchShowing () {
      let url = this.inTheaters.url;
      let sendData = {
        city: '杭州',
        start: 0,
        count: 9
      }
      fetch(url, sendData).then( res => {
        let subjects = this.inTheaters.subjects = res.data.subjects.slice()
        subjects.forEach( val => {
          this.$set(val, 'stars', { 'background-position-y':  Number(val.rating.stars - 50) * 2.2 + 'px'})
        })
        this.inTheaters.title = res.data.title;
        console.log(res.data)
        this.fetchComingSoon()
      })
    },
    fetchComingSoon () {
      let url = this.comingSoon.url;
      let sendData = {
        city: '杭州',
        start: 0,
        count: 9
      }
      fetch(url, sendData).then( res => {
        this.comingSoon.subjects = res.data.subjects.slice();
        this.comingSoon.title = res.data.title;
        this.isLoading = false
      })
    }
  },
  computed: {
    city () {
      let str = this.inTheaters.title;
      return str.slice(str.search('-') + 1);
    }
  },
  components: {
    loading
  }
}
</script>

<style lang="css">
/*releasing header*/
.city {
  font-size: 0.14rem;
  color: #008652;
  margin-left: 0.14rem;
}
.title {
  position: relative;
  margin-top: 0.18rem;
  padding-left: 0.14rem;
  font-size: 0.16rem;
  height: 0.3rem;
  line-height: 0.3rem;
  border-bottom: 1px solid rgba(0, 134, 82, 0.3);
}
.more {
  color: #008652;
  position: absolute;
  top: 0;
  right: 0;
  width: 0.6rem;
  height: 0.3rem;
  margin-right: 0.06rem;
}
.arrow {
  position: absolute;
  width: 0.1rem;
  height: 0.1rem;
  transform: rotate(45deg);
  border-top: 2px solid #008652;
  border-right: 2px solid #008652;
  top: 0.1rem;
  left: 0.38rem;
}

/*mian list*/
.list-item {
  display: inline-block;
  width: 33.3%;
  padding-top: 0.1rem;
}
.item-content {
  text-align: center;
}
.item-img {
  width: 0.93rem;
  height: 1.29rem;
}
</style>
