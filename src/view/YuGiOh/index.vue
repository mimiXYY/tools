<template>
  <div><el-button type="primary" @click="paly">播放</el-button></div>
</template>

<script>
import Audio from "@/utils/audio";
export default {
  name: "YuGiOh",
  data() {
    return {
      src: [
        { name: "shuffle.ogg", howl: null },
        { name: "SE_CARD_MOVE_01.ogg", howl: null },
      ],
      audio: null,
    };
  },
  mounted() {
    this.createSound();
  },
  methods: {
    createSound() {
      this.audio = new Audio(this.src);
    },
    paly() {
      this.audio.play(0);
    },
  },
};
</script>

<style>
</style>