<template>
  <div id="app">
    <el-container>
      <el-aside width="auto"><sideBar /></el-aside>
      <el-container>
        <el-header>
          <div class="navbar">
            <i
              :class="isActive ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
              style="font-size: 20px"
              @click="opened()"
            ></i>
          </div>
        </el-header>
        <el-main
          ><keep-alive include="dotaQuery" :max="100"
            ><router-view></router-view></keep-alive
        ></el-main> </el-container
    ></el-container>
  </div>
</template>

<script >
import sideBar from "@/components/sideBar";
export default {
  name: "App",
  components: { sideBar, },
  data() {
    return {
      isActive: false,
    };
  },
  methods: {
    opened() {
      if (this.$store.state.app.opened) {
        this.$store.dispatch("app/toggleSideBar");
        this.isActive = !this.isActive;
      } else {
        this.$store.dispatch("app/closeSideBar");
        this.isActive = !this.isActive;
      }
    },
  },
};
</script>

<style scoped>
#app {
  height: 100vh;
}
.navbar {
  padding: 0px 20px;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
.el-header {
  padding: 0px;
  color: #333;
  line-height: 60px;
}

.el-aside {
  background-color: #545c64;
  color: #333;
}

.el-main {
  color: #333;
  height: calc(100vh - 60px);
}
</style>
