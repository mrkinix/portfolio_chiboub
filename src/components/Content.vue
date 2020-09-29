<template>
  <div class="content" id="tlc">
    <projects :scroll="scroll"/>
    <h1 id="skills" style="padding-top: 15vh;">Skills</h1>
    <div class="line" />
    <h2>These are the languages that I've experienced with so far</h2>
    <skills/>
  </div>
</template>

<script>
import $ from "jquery";
import delay from "delay";
import skills from "./skills";
import projects from "./Projects";

export default {
  components: {
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
