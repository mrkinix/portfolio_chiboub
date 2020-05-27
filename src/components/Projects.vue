<template>
  <div class="projects" :style="{background: `rgba(0, 0, 0, ${opacity})`}">
    <h1>Projects</h1>
    <div class="line2" />
    <h2>I enjoy creating stuff in my free time</h2>

    <div class="projects__container">
      <div @click="openUrl">
        <img :src="require('@/assets/doom.jpg')" >
        <h4 class="txt" >Doom's hero: Guitar hero like game using vuejs.</h4>
      </div>
      <div><h4 class="txt">Coming soon</h4></div>
      <div><h4 class="txt">Coming soon</h4></div>
    </div>

    <h1 class="about">About</h1>
    <div class="line2" />
    <h2>Back again at introducing myself.</h2>
    <img :style="{opacity: opacity + .9, cursor: 'unset'}" :src="require('@/assets/station.png')">
    <h3>Hey there, I'm a 19 year-old guy from Tunisia,
      I also got a Belgian nationality. I'm currently a high school student (math major).
      And as you guessed, I have a big passion for programming, but I also have other hobbies
      like playing the guitar, music composition, video/image editing, lifting...

    </h3>
  </div>
</template>

<script>
import $ from "jquery";
import delay from "delay";
import pacman from "@/components/pacman";
import projects from "./Projects";
export default {
  data() {
    return {
      opacity: 0.2,
      visible: false
    };
  },
  props: ["scroll"],
  watch: {
    scroll: async function() {
      if ($(".line2").offset().top < 350 && !this.visible) {
        this.visible = true;
        for (let i = 0; i < 40; ++i) {
          this.opacity += 0.02;
          await delay(10);
        }
      }
    }
  },
  methods: {
    openUrl: function() {
      window.open('https://dooms-hero.web.app/')
    }
  },
};
</script>

<style lang="scss" scoped>
@import '../css/mobile.scss';

h1 {
  margin: 0;
  font-size: 56px;
  line-height: 1.07143;
  font-weight: 600;
  letter-spacing: -0.005em;
  padding-bottom: 10px;
}

h2 {
  font-size: 17px;
  line-height: 1.47059;
  font-weight: 400;
}

h3 {
  color: rgb(198, 198, 198);
  position: relative;
  left: calc(75rem - 40vw);
  width: 80vw;
  max-width: 140rem;
}

.projects {
  width: 100%;
  height: auto;
  padding-bottom: 10vh;
  padding-top: 5vh;
  color: white;
  background: hsl(0, 0%, 0%);
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
}

.line2 {
  height: 2px;
  width: 90rem;
  left: 30rem;
  position: relative;
  background: rgb(181, 181, 181);
  margin-bottom: 10px;
}

.projects__container {
  margin: 5% 0;
  display: flex;
  position: relative;
  left: calc(75rem - 50vw);
  width: 100vw;
  max-width: 140rem;
  flex-wrap: wrap;
  justify-content: center;
  div {
    width: 45vw;
    max-width: 40rem;
    max-height: 40rem;
    margin: .5%;
    border-radius: 8px;
    margin-bottom: .5%;
    height: 45vw;
    background: rgb(24, 24, 24);
    position: relative;
  }
}
img {
  height: 100%;
  width: 100%;
  border-radius: 8px;
  opacity: .7;
  cursor: pointer;
  position: relative;
  object-fit: cover;
  top: 0;
  left: 0;
}

.txt {
  font-size: 40px;
  position: absolute;
  padding: 10px;
  cursor: pointer;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>