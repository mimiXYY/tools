<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-button type="primary" @click="test()">测试</el-button>
        Header</el-header
      >
      <el-container>
        <el-aside width="auto"><sideBar /></el-aside>
        <el-main><router-view></router-view></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script >
import sideBar from "@/components/sideBar";
export default {
  name: "App",
  components: { sideBar },
  methods: {
    test() {
      console.log(this.$route);
    },
  },
};
</script>

<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  height: calc(100vh - 60px);
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: calc(100vh - 60px);
}
</style>
