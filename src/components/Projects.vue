<template>
  <div class="projects" :style="{background: `rgba(0, 0, 0, ${opacity})`}">
    <h1>Projects</h1>
    <div class="line2" />
    <h2>I enjoy creating stuff in my free time</h2>

    <div class="projects__container">
      <div class="cont--proj">
        <h4 class="txt" >Doom's hero</h4>
        <div class="container--flex">
          <p>
            A guitar hero alike game featuring the song: Rip and Tear by Doom.
            <br>This game was a big challenge because I had to get the right timing for each
            note, I learned through it that even 25ms does matter.
            <br>
            <br>
            <a href="https://github.com/mrkinix/Dooms-Hero">Source code</a>
          {{' | '}}<a href="https://dooms-hero.web.app/">Demo</a>
            <br>
            <br>
              <img style="width: auto !important" :src="require('@/assets/logos/vue.png')">
              <img style="width: auto !important" :src="require('@/assets/logos/html.png')">
              <img style="width: auto !important" :src="require('@/assets/logos/js.png')">
              <img style="width: auto !important" :src="require('@/assets/logos/sass.png')">
              <img style="width: auto !important" :src="require('@/assets/logos/firebase.png')">
          </p>
          <img :src="require('@/assets/doomsHero.png')">
        </div>
      </div>
      <!-- -->
      <div class="cont--proj">
        <h4 class="txt" >Snake Machine learning</h4>
        <div class="container--flex">
          <p>
            In the beginning, I created a snake game using vue js, then
            I wanted to implement some machine learning to it. But since
            I didn't have enough understanding of the subject yet, it didn't
            work. I'll try to improve the algorithm once I study ML better.
            <br>
            <br>
            <a href="https://github.com/mrkinix/snakeML/tree/master/src">Source code</a>
          {{' | '}}<a href="https://snakeml-64cfd.firebaseapp.com">Demo</a>
            <br>
            <br>
              <img style="width: auto !important" :src="require('@/assets/logos/vue.png')">
              <img style="width: auto !important" :src="require('@/assets/logos/html.png')">
              <img style="width: auto !important" :src="require('@/assets/logos/js.png')">
              <img style="width: auto !important" :src="require('@/assets/logos/css.png')">
              <img style="width: auto !important" :src="require('@/assets/logos/firebase.png')">
          </p>
          <img :src="require('@/assets/snakeML.png')">
        </div>
      </div>
      <!-- -->
      <div class="cont--proj">
        <h4 class="txt" >Blog (coming soon)</h4>
        <div class="container--flex">
          <p>
            Still in development. This blog has login/signin features as well
            as commenting/liking etc... 
            <br>
            <br>
            <a href="#">Source code</a>
          {{' | '}}<a href="#">Demo</a>
            <br>
            <br>
              <img style="width: auto !important" :src="require('@/assets/logos/vue.png')">
              <img style="width: auto !important" :src="require('@/assets/logos/html.png')">
              <img style="width: auto !important" :src="require('@/assets/logos/js.png')">
              <img style="width: auto !important" :src="require('@/assets/logos/sass.png')">
              <img style="width: auto !important" :src="require('@/assets/logos/node.png')">
              <img style="width: auto !important" :src="require('@/assets/logos/mongo.png')">
              <img style="width: auto !important" :src="require('@/assets/logos/firebase.png')">
          </p>
          <img :src="require('@/assets/blog.png')">
        </div>
      </div>
      <!-- -->
    </div>
  
    <h1 class="about">About</h1>
    <div class="line2" />
    <h2>Back again at introducing myself.</h2>
    <img :style="{opacity: opacity + .9, cursor: 'unset'}" :src="require('@/assets/station.png')">
    <h3>Hey there, I'm a 19 year-old guy from Tunisia,
      I also got a Belgian nationality. I'm currently a high school student (math major).
      I speak French, Arabic, English, some German and programming languages.
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
  .cont--proj {
    width: 100vw;
    margin: .5%;
    border-radius: 8px;
    margin-bottom: .5%;
    padding-bottom: 5%;
    max-height: 40rem;
    background: rgb(9, 15, 63);
    position: relative;
  }
}

a {
  color: rgb(68, 111, 255);
  &:hover {
  color: rgb(106, 146, 255);
  }
}

.container--flex {
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  p {
    margin-left: 10%;
    height: 100%;
    width: 40%;
    img {
      height: 2rem;
      width: auto;
    }
  }
  img {
    margin-left: 5%;
    height: 100%;
    width: 35%;
    border-radius: 8px;
    opacity: .7;
    object-fit: cover;
  }
}

.txt {
  font-size: 40px;
  text-decoration: underline;
  padding: 0 40px;
}
</style>