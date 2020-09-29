<template>
  <div class="intro">
    <div class="container">
      <h1>
        Welcome, to my portfolio!
      </h1>
      <h3>
        Hi, I'm Hédi Chiboub, a 19 year old web developer.
        You can find more
        about me below.
      </h3>
      <a @click="scroll('.projects')">Projects</a>
      - <a @click="scroll('.about')">About</a>
      - <a @click="scroll('#skills')">Skills</a>
      - <a @click="scroll('#contact')">Contact</a>
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
  background: linear-gradient(to bottom, rgb(3, 14, 50), rgb(36, 52, 71));
  height: 30rem;
  width: 150rem;
  position: relative;
  left: calc(50% - 75rem);
  color: white;
  padding-top: 45px;
  padding-bottom: 135px;
  .container {
    position: absolute;
    left: calc(75rem - 40vw);
    width: 80vw;
  }
  h1 {
    font-size: 88px
  }
  h3 {
    font-size: 25px;
  }
  a:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>