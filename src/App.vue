<template>
  <div id="app">
    <navBar class="nav"></navBar>
    <div class="content"><router-view></router-view></div>
  </div>
</template>

<script>
import navBar from "@/components/navBar";
export default {
  name: "App",
  components: {
    navBar,
  },
};
</script>

<style>
.content {
  position: relative;
  top: 60px;
  left: 250px;
  width: 85%;
  padding: auto;
}
.nav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 175px;
  background: #2c2e2f;
  z-index: 100;
  border-right: 1px solid #cccccc;
}
</style>
