<template lang="html">
  <div id="header">
    <div class="search">
      <span>douban</span>
      <input @keyup.enter="search" v-model="queryKey" type="text" placeholder="film you like">
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
        { title: 'Movies', path: 'home', isActive: true},
        { title: 'Other 1', path: 'other1', isActive: false},
        { title: 'Other 2', path: 'other2', isActive: false}
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
    }
  }
}
</script>

<style lang="css">
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
