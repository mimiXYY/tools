<template>
  <div id="app">
    <navBar class="nav"></navBar>
    <scoreEchart class="content"></scoreEchart>
  </div>
</template>

<script>
import scoreEchart from "@/components/scoreEchart";
import navBar from "@/components/navBar";
export default {
  name: "App",
  components: {
    scoreEchart,
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
  width: 200px;
  padding: 10px 14px;
  background: #6c757d;
  z-index: 100;
  border-right: 1px solid #cccccc;
}
</style>
