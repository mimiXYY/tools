<template>
  <div>
    <nav>
      <header>
        <div class="bar">导航栏</div>
      </header>
      <div>
        <li v-for="(i, key) in 5" :key="key">
          <itemBar>{{ i }}:{{ key }}</itemBar>
        </li>
      </div>
    </nav>
  </div>
</template>

<script>
import itemBar from "./itemBar";
export default {
  name: "navBar",
  components: {
    itemBar,
  },
};
</script>

<style>
header {
  color: #c6c9cf;
  font-size: 25px;
  line-height: 50px;
  text-align: center;
}
</style>