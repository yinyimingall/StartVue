<template lang="html">
  <div id="header">
    <div class="search">
      <span>豆瓣</span>
      <input @keyup.enter="search" v-model="queryKey" type="text" placeholder="search movie">
    </div>
    <ul class="lists">
      <li v-for="(elem, index) in tabPages" class="nav-list" @click="selected(elem, index)" :class="{ active: elem.isActive}">
        <router-link :to="elem.path">{{ elem.title }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'header',
  data () {
    return {
      queryKey: '',
      tabPages: [
        { title: '电影', path: '/', isActive: true},
        { title: '读书', path: '/other1', isActive: false},
        { title: '关于', path: '/other2', isActive: false}
      ]
    }
  },
  methods: {
    selected (elem, index) {
      this.tabPages.forEach( val => {
        this.$set(val, 'isActive', false)
      })
      this.tabPages[index].isActive = true;
      // this.$set(elem, 'isActive', true)
    },
    search () {
      this.$router.push({ path: '/movieSearch/', query: { 'queryKey': this.queryKey }})
      this.queryKey = ''
    }
  }
}
</script>

<style lang="css">
.search {
  height: 0.4rem;
}
.search span {
  font-size: 0.2rem;
  font-weight: 600;
  line-height: 0.4rem;
  padding-left: 0.2rem;
}
.search input {
  width: 1.8rem;
  height: 0.24rem;
  position: absolute;
  top: 0.08rem;
  right: 0.3rem;
  border-radius: 20px;
  padding-left: 12px;
  border: none;
  background-color: rgb(242, 242, 242);
}
.nav-list {
  display: inline-block;
  line-height: 0.4rem;
  height: 0.4rem;
  width: 33.3%;
  text-align: center;
}
.nav-list a {
  display: inline-block;
  width: 100%;
  color: #1f093d;
  font-weight: bold;
  text-decoration: none;
}
.active {
  border-bottom: 2px solid #008652;
}
</style>
