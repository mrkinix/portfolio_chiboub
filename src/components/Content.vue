<template>
  <div class="content" id="tlc">
    <h1 style="padding-top: 15vh;">Skills</h1>
    <div class="line" />
    <skills/>
    <projects :scroll="scroll"/>
    <h1 id="timeline" style="padding-top: 15vh;">Timeline</h1>
    <div class="line" />
    <h2>How I learned programming.</h2>
    <div class="parent">
      <div style="line-height: 44px">{{ state }}</div>
    </div>
    <div class="container">
      <div :style="{opacity: opacity }" class="hello-world">
        > Hello world!▮
      </div>
      <section :style="{ opacity: opacity }">
        In 2017 I started learning programming.
      </section>
    </div>
    <h3>Hence I learned programming basics and some C++.</h3>
    <a>Check my guide to learn programming ></a>
    <div class="game--region">
      <section class="text">
        Somewhere in 2018, I've got bored of printing stuff on a terminal so I decided to try
        something new. And since I was passionate about 3d modelling and a huge gamer at that time,
        I tried to develop my own games using UE4.
      </section>
      <button>My games</button>
      <button class="play">Tutorials</button>
      <pacman :start="start" />
    </div>
    <div class="vue">
      <section class="text">
        Summer 2018 was when I've discovered the world of web dev. I learned the basics of html, css,
        git and javascript then jumped into Vue Js. And from there, I eventually expanded my
        horizons and learned many other cool stuff. At the same time, I learned node and built some
        apps with express and mongoose. I also learned Python and used it different times to
        automate tasks.
        <br/><br/><br/>
        <a>My Node apps ></a>
        <a>My Python apps ></a>
        <a>My Vue apps ></a>
        <br/><br/><br/>
      </section>
    </div>
    <div class="now">
      <section style="padding-bottom: 5vh">
        During the Covid-19 lockdown, I got more and more free time, so I spent a good shunk of it on
        computer science. I revisited some programming languages that I haven't used for a while
        like C++, python etc... I learned new stuff like redis, scss, numpy, scipy, react, kotlin
        and android development, but my main focus is still web dev.
      </section>
      <a class="github" href="https://github.com/mrkinix/">Check my github page for open source projects ></a>
        <br/><br/><br/>
    </div>

  </div>
</template>

<script>
import $ from "jquery";
import delay from "delay";
import pacman from "./pacman";
import skills from "./skills";
import projects from "./Projects";

export default {
  components: {
    pacman,
    projects,
    skills
  },
  data() {
    return {
      pos: 0,
      opacity: 0,
      visible: false,
      state: "2017 - Hello world!",
      start: false
    };
  },
  props: ["scroll"],
  watch: {
    scroll: async function() {
      if (this.scroll > $(".container").offset().top + 100 && !this.visible) {
        this.visible = true;
        for (let i = 0; i < 10; ++i) {
          await delay(30);
          this.opacity += 0.1;
        }
      }
      if ($(".game--region").offset().top > 44) {
        this.state = "2017 - Hello world!";
      }
      if ($(".game--region").offset().top < 44) {
        this.state = "2018 - Game dev";
        this.start = true;
      }
      if ($(".vue").offset().top < 44) {
        this.state = "2019 - Web dev";
      }
      if ($(".now").offset().top < 44) {
        this.state = "2020 - Now...";
      }
      if ($(".projects").offset().top < 44) {
        this.state = "‌‌ ";
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../css/mobile.scss';

.content {
  margin: 0;
  width: 150rem;
  position: relative;
  left: calc(50% - 75rem);
  height: auto;
  color: rgb(19, 19, 19);
  background: rgb(227, 227, 227);
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
}

h1 {
  color: black;
  margin: 0;
  font-size: 56px;
  line-height: 1.07143;
  font-weight: 600;
  letter-spacing: -0.005em;
}

h2 {
  font-size: 17px;
  line-height: 1.47059;
  font-weight: 400;
}

.parent {
  position: sticky;
  top: 0;
  color: black;
  width: 100%;
  pointer-events: none;
  z-index: 9999;
  font-size: 20px;
}

.line {
  height: 2px;
  width: 90rem;
  left: 30rem;
  position: relative;
  background: rgb(181, 181, 181);
  margin-bottom: 10px;
}

button {
    height: 50px;
    background: rgb(234, 252, 184);
    border: none;
    font-size: 23px;
    border-radius: 12px;
    width: 140px;
    margin: 1rem;
    opacity: .9;
    cursor: pointer;
    &:hover {
        transform: scale(.96);
        opacity: 1
    }
}

.play {
  color: rgb(234, 252, 184);
  background: none;
  border: solid 1px rgb(234, 252, 184);
}

h3 {
    font-size: 30px;
    position: relative;
    left: calc(75rem - 40vw);
    width: 80vw;
}

a {
    color: rgb(0, 123, 255);
    cursor: pointer;
    width: 80vw;
}

.container {
    padding-top: 10vh;
    position: relative;
    margin-bottom: 10rem;
    display: flex;
    align-content: space-between;
    left: calc(75rem - 40vw);
    width: 80vw;
    max-width: 140rem;
    .hello-world {
        background: black;
        width: 50%;
        height: 20vw;
        padding: 20px;
        max-height: 150px;
        color: rgb(0, 215, 0);
        text-align: left;
        max-width: 30vw;
        border-radius: 12px;
        max-width: 600px;
    }
    section {
        font-size: 30px;
        padding: 0;
        margin: 0;
        text-align: left;
        width: 50%;
        vertical-align: top;
        padding-left: 20px;
        color: rgb(19, 19, 19);
    }
}


.text {
    color: white;
    padding: calc(5vw + 44px) 0;
    font-size: 30px;
    position: relative;
    left: calc(75rem - 40vw);
    width: 80vw;
    max-width: 140rem;
    &--left {
        position: unset;
        width: 40vw; 
        text-align: left; 
        padding-right: 5rem;
        font-size: 22px; 
    }
}

.part2 {
    flex-direction: row;
    align-content: center;
    position: relative;
    align-content: space-between;
    left: calc(75rem - 40vw);
    width: 80vw;
    max-width: 140rem;
    img {
        width: 40vw !important;
        max-width: 60rem;
    }
}

.game--region {
  background: #151c28;
  width: 100%;
  margin-top: 20vh;
  height: auto;
  min-height: calc(40vh + 5vw);
  padding-top: calc(20vh - 5vw);
  padding-bottom: 10vh;
}

.vue {
  width: 100%;
  padding-top: 10vh;
  margin: 0;
  height: auto;
  background: linear-gradient(to bottom, rgb(29, 37, 53), #3e3e3e);
  section {
    padding-bottom: 0;
    padding-top: 0;
  }
  a {
    margin: 10px 0;
    width: unset;
    display: block;
    color: rgb(38, 127, 216);
    cursor: pointer;
    text-align: right;
    font-size: 22px;
  }
}

.now {
    width: 100%;
    height: auto;
    color: white;
    background: linear-gradient(to top, rgb(10, 19, 31), #000000);
    padding: 10vh 0;
    font-size: 22px;
    section {
        position: relative;
        left: calc(75rem - 40vw);
        width: 80vw;
        max-width: 150rem;
    }
}

.github {
    position: absolute;
    left: calc(75rem - 40vw);
    width: 80vw;
}

</style>
