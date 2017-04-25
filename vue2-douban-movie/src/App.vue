<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
  </div>
</template>

<script>
import vHeader from './components/header.vue'
export default {
  name: 'app',
  components: {
    vHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  color: #2c3e50;
}
a {
  color: #000;
}
.rating-star{
    display: inline-block;
    width: 55px;
    height: 11px;
    background: url('https://img3.doubanio.com/f/shire/0147ca9efddcac80050854590d26bee587b008df/pics/rating_icons/ic_rating_s@2x.png') no-repeat;
    background-size: cover;
    background-position-x: 0;
  }
</style>
