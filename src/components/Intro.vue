<template>
  <div class="intro">
    <div class="container">
      <h1>
        Welcome, to my portfolio!
      </h1>
      <h3>Hi, I'm Hédi Chiboub, a 19 year old programmer.
        You can find more
        about me below.
      </h3>
      <a>Timeline</a>
      - <a>Projects</a>
      - <a>About</a>
    </div>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.intro {
  margin: 0;
  background: rgb(14, 14, 14);
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