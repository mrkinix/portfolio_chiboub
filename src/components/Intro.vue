<template>
  <div>
    <h1>
      Welcome, to my portfolio!
    </h1>
    <h3>Hi, I'm Hédi Ben Chiboub, a 19 year old programmer.
      You can find more
      about me below.
    </h3>
    <a>Timeline</a>
    - <a>Projects</a>
    - <a>Skills</a>
    - <a>About</a>
    - <a>TL;DR</a>
    </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
div {
  margin: 0;
  height: calc(85vh - 134px);
  background: rgb(14, 14, 14);
  width: 100vw;
  color: white;
  padding-top: 90px;
  h1 {
    font-size: 68px
  }
  a:hover {
    cursor: pointer;
    text-decoration: underline;
  }
}
</style>