<template>
  <div class="content" ref="nav">
    <header>
      <div class="bar"  @click="goRouter()">导航栏</div>
    </header>
    <div
      class="item"
      v-for="(i, key) in itemName.length"
      :key="key"
      @click="goRouter(key)"
    >
      <itemBar>{{ itemName[i - 1] }}</itemBar>
    </div>
  </div>
</template>

<script>
import itemBar from "./itemBar";
export default {
  name: "navBar",
  components: {
    itemBar,
  },
  data() {
    return {
      // 为对象，包含数组，数组中包含图片地址和标题内容
      itemName: ["DOTA分数图", "DOTA分数管理"],
      urlPath: ["scoreEchart", "manageScore"],
    };
  },
  methods: {
    // 跳转路由
    goRouter(key = "home") {
      if (typeof key === "number") {
        this.$router.push({ name: this.urlPath[key] });
      } else {
        // 回到首页
        this.$router.push({ name: "navHome" });
      }
    },
    // 改变导航栏
    changeNav(){
      // TODO 实现导航栏打开和关闭
    }
  },
};
</script>

<style>
header {
  color: #c6c9cf;
  font-size: 25px;
  line-height: 60px;
  text-align: center;
  border-bottom: 1px solid #c6c9cf;
  cursor: default;
}
.item {
  padding: 2px 10px;
}
</style>