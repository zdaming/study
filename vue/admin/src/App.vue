<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
  %h100 {
    height: 100%;
  }

  html, body, #app {
    @extend %h100;
  }
</style>
