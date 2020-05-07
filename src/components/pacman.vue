<template>
  <div class="pacman">
    <div class="char--container">
      <div :style="{transform: `translateX(${x}vw)`}" >
        <img :style="{transform: `scaleX(${direction})`}" 
            :src="require(`@/assets/${state}.png`)">
        <img :style="{transform: `scaleX(${direction})`}" 
            :src="require(`@/assets/${state}2.png`)">
        <img :style="{transform: `scaleX(${direction})`}" 
            :src="require('@/assets/pacman.png')">
      </div>
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import delay from 'delay';

export default {
    props: ['start'],
    data() {
        return {
            x: -35,
            direction: 1,
            state: 'monster'
        }
    },
    watch: {
        start: async function() {
            for (let i = 0; i < 70; ++i) {
                this.x += 2
                await delay(30)
            }
            await delay(100)
            this.direction = -1
            this.state = 'vulnerable'
            for (let i = 0; i < 80; ++i) {
                this.x -= 2
                await delay(30)
            }
        }
    },
}
</script>

<style lang="scss" scoped>
img {
    height: 7vh;
    width: auto;
    padding-right: 10vw;
}

.char--container {
    display: flex;
}
.pacman {
    padding-top: 10vh;
    width: 100vw;
    height: 7vh;
}
</style>