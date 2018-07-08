<template>
  <div id="app">
    <Navigation />
    <el-container>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  name: 'app',
  components: {
    Navigation
  }
}
</script>

<style>
body {
  margin: 0;
}
#app {
  font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
}
</style>