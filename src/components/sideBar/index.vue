<template>
  <div>
    <el-menu
      :router="true"
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      style="height: 100vh; border: 0px"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/home">
        <i class="el-icon-s-home"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <img src="@/assets/img/dota2.jpg" class="image" />
          <span>&nbsp;&nbsp;DOTA</span>
        </template>
        <el-menu-item index="/scoreEchart">DOTA分数</el-menu-item>
        <el-menu-item index="/manageScore">DOTA管理</el-menu-item>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <img
            src="@/assets/img/Yu-Gi-Oh.png"
            class="image"
            style="width: 18px; height: 23px"
          />
          <span>&nbsp;&nbsp;Yu-Gi-Oh!</span>
        </template>
        <el-menu-item index="/YuGiOh">决斗</el-menu-item>
        <el-menu-item index="/cardPairing">组卡</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script >
export default {
  name: "sideBar",
  data() {
    return {
      isCollapse: false,
    };
  },
  watch: {
    "$store.state.app.opened": {
      handler(newValue) {
        this.isCollapse = newValue; //控制侧边导航栏开关
      },
    },
  },
};
</script>

<style scoped>
.image {
  width: 18px;
  height: 18px;
  margin: 0px;
  margin-left: 3px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>