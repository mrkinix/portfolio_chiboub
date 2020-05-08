<template>
  <div class="pacman" :style="{opacity: visib}">
    <div class="char--container">
      <div class="char--width" :style="{transform: `translateX(calc(${x}px + ${X}rem + ${x0}px))`}" >
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
            x: 0,
            X: 0,
            x0: 0,
            visib: 0,
            direction: 1,
            state: 'monster'
        }
    },
    mounted() {
        this.x = - $('.char--width').width()
    },
    watch: {
        start: async function() {
            this.visib = 1;
            for (let i = 0; i < 60; ++i) {
                this.X += 2.5
                this.x0 -= this.x / 60
                await delay(45)
            }
            await delay(100)
            this.direction = -1
            this.state = 'vulnerable'
            for (let i = 0; i < 60; ++i) {
                this.X -= 2.5
                this.x0 += this.x / 60
                await delay(45)
            }
            this.visib = 0;
        }
    },
}
</script>

<style lang="scss" scoped>
img {
    height: auto;
    width: 7vh;
    padding-right: 10rem;
}

.char--container {
    display: flex;
}
.pacman {
    padding-top: 10vh;
    width: auto;
    height: 7vh;
}
</style>