<template>
  <div class="intro">
    <div class="container">
      <h1>
        Welcome, to my portfolio!
      </h1>
      <h3>Hi, I'm Hédi Chiboub, a 19 year old programmer.
        You can find more
        about me below.<br>This website is built by vue js.
      </h3>
      <a @click="scroll('#tlc')">Skills</a>
      - <a @click="scroll('.projects')">Projects</a>
      - <a @click="scroll('.about')">About</a>
      - <a @click="scroll('#timeline')">Timeline</a>
    </div>
    </div>
</template>

<script>
import $ from 'jquery'
export default {
  methods: {
    scroll: function(e) {
      $('.home').animate({
        scrollTop: $(e).offset().top
      }, 400);
    }
  },
}
</script>

<style lang="scss" scoped>
.intro {
  margin: 0;
  background: linear-gradient(to left, rgb(238, 255, 0), red);
  background: linear-gradient(to left, rgb(255, 175, 1), rgb(255, 3, 3));
  height: 30rem;
  width: 150rem;
  position: relative;
  left: calc(50% - 75rem);
  color: white;
  padding-top: 90px;
  padding-bottom: 90px;
  .container {
    position: absolute;
    left: calc(75rem - 40vw);
    width: 80vw;
  }
  h1 {
    font-size: 68px
  }
  a:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>