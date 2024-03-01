<template>
  <div><slot></slot></div>
</template>

<script>
export default {
  props: ["msg"],
};
</script>

<style scoped>
div:hover {
  background: black;
  border-radius: 5px;
}
div {
  padding-left: 20px;
  color: #c6c9cf;
  font-size: 14px;
  text-align: left;
  line-height: 43px;
  cursor: default;
}
</style>