<template>
  <div class="page-container">
    <h1>second page</h1>
    <router-link to="/second/sub1">component 1</router-link>
    <router-link v-bind:to="{ name: 'sub2name'}">component 2</router-link>
    <router-link to="sub3">component 3</router-link>
    <div class="sub-compo">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
  .sub {
    width: 120px;
    height: 120px;
    background-color: #ff8a76;
    margin: 24px auto;
  }
</style>
