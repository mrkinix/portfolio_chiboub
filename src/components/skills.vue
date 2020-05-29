<template>
  <div class="skills">
      <div class="container c0">
          <p>Level 0: From time to time I would need StackOverflow (currently mastering)</p>
          <div class="flex--container">
              <img :src="require('@/assets/logos/vue.png')">
              <img :src="require('@/assets/logos/js.png')">
              <img :src="require('@/assets/logos/html.png')">
              <img :src="require('@/assets/logos/css.png')">
              <img :src="require('@/assets/logos/sass.png')">
              <img :src="require('@/assets/logos/node.png')">
              <img :src="require('@/assets/logos/mongo.png')">
          </div>
      </div>
      <div class="container c1">
          <p>Level 1: I use Google because I keep forgetting a method's name (how to push item to an array etc)</p>
          <div class="flex--container">
              <img :src="require('@/assets/logos/python.png')">
              <img :src="require('@/assets/logos/pascal.jpg')">
              <img :src="require('@/assets/logos/typescript.png')">
              <img :src="require('@/assets/logos/c++.png')">
          </div>
      </div>
      <div class="container c2">
          <p>Level 2: I frequently use Google for help but I manage to make things work</p>
          <div class="flex--container">
              <img :src="require('@/assets/logos/react.png')">
              <img :src="require('@/assets/logos/kotlin.png')">
              <img :src="require('@/assets/logos/android.png')">
          </div>
      </div>
      <div class="container c3">
          Level 3: I have somehow managed to create a Hello world app (currently learning)
          <div class="flex--container">
              <img :src="require('@/assets/logos/rust.png')">
              <img :src="require('@/assets/logos/php.png')">
              <img :src="require('@/assets/logos/laravel.png')">
          </div>
      </div>
      <div class="container c4">
      I use photoshop to make my UI designs and for creating wallpapers, git for version control, github to
      share my code, vs code as ide, c4d for 3d modelling (check gallery), Adobe illustrator for
      logos and After effects for svg animations.
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.skills {
  width: 100%;
  height: auto;
  padding-bottom: 10vh;
  padding-top: 5vh;
  background: rgb(227, 227, 227);
  font-family: "SF Pro Display", "SF Pro Icons", "Helvetica Neue", "Helvetica",
    "Arial", sans-serif;
}

.container {
    height: auto;
    padding-bottom: 12px;
    width: 80vw;
    background: rgb(143, 14, 186);
    position: relative;
    left: calc(75rem - 40vw);
    max-width: 80%;
    border-radius: 12px;
    margin-bottom: 20px;
    padding-top: 12px;
}

p {
    margin: 0 12px;
}

.c0 {
    background: black;
    color: white
}
.c1 {
    background: rgb(20, 20, 20);
    color: white
}
.c2 {
    background: rgb(40, 40, 40);
    color: white
}
.c3 {
    background: rgb(60, 60, 60);
    color: white
}
.c4 {
    background: black;
    color: white;
    padding: 24px;
    width: calc(80vw - 48px);
    max-width: calc(80% - 48px)
}
ul {
    text-align: left;
    margin: 0 12px;
}

.flex--container {
    height: auto;
    width: 100%;
    margin: 3rem 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    img {
        height: 50%;
        max-height: 100px;
        width: auto;
    }
}

@media screen and (min-width: 150rem) {
    // big screen
    .container {
        left: 10%;
    }
}

@media only screen and (max-width: 768px) {
    // mobile
    .container {
        left: calc(75rem - 48vw);
        width: 94vw;
    }
    .c4 {
        width: calc(94vw - 48px);
    }
    .flex--container {
        img {
            height: 50px;
            margin-top: calc(10vh - 25px)
        }
    }
}
</style>