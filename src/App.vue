<template>
  <div id="app">
    <scoreEchart></scoreEchart>
  </div>
</template>

<script>
import scoreEchart from "@/components/scoreEchart";
export default {
  name: "App",
  components: {
    scoreEchart,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
