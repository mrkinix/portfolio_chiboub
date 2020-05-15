<template>
  <div class="parent" @click="animate">
    <div class="a" :style="{width: width+'px', 
    transform: `rotate(${angle}deg)`, top: `${top}px`}"></div>
    <div class="a" :style="{opacity: opacity}"></div>
    <div class="a" :style="{width: width+'px', 
    transform: `rotate(-${angle}deg)`, top: `-${top}px`}"></div>
  </div>
</template>

<script>
import delay from "delay";

export default {
  data() {
    return {
      opacity: 1,
      angle: 0,
      width: 30,
      top: 0,
      visible: false,
    }
  },
  methods: {
    animate: async function() {
      if (this.visible) {
        this.reset()
        return
      }
      this.top = 10.6
      this.width = 35
      this.visible = true
      this.opacity = 0
      this.$emit('dropMenu', 1)
      for (let i = 0; i < 45; ++i) {
        this.angle += 1
        await delay(10)
      }
    },
    reset: async function() {
      for (let i = 0; i < 45; ++i) {
        this.angle -= 1
        await delay(10)
      }
      this.opacity = 1
      this.width = 30
      this.top = 0
      this.visible = false      
      this.$emit('dropMenu', 0)
    }
  },
}
</script>

<style lang="scss" scoped>
.parent {
  margin: 10.5px 0;
  cursor: pointer;
  margin-right: 5%;
  width: 30px;
  height: 30px;
  .a {
    position: relative;
    height: 3px;
    background: black;
    margin-bottom: 7px;
    width: 30px;
    border-radius: 4px;

  }
}
</style>
