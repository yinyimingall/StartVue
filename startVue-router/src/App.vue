<template>
  <div id="app">
    <self-header></self-header>
    <hr>
    <router-link to="/">首页</router-link>
    <router-link to="/second">第二页</router-link>
    <router-link to="/third">第三页</router-link>
    <router-view></router-view>
    <hr>
    <self-footer></self-footer>
  </div>
</template>

<script>
  import header from './components/header.vue'
  import footer from './components/footer.vue'
export default {
  name: 'app',
  components: {
    'self-header': header,
    'self-footer': footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 960px;
  margin: auto;
}
.page-container {
  margin: auto;
  width: 560px;
  height: 240px;
  background-color: #649dff;
}
</style>
