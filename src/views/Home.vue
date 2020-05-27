<template>
  <div class="home" @scroll="handleScroll">
    <topbar/>
    <intro/>
    <cont :scroll="scroll"/>
  </div>
</template>

<script>
import topbar from '@/components/Top-bar.vue';
import intro from '@/components/Intro.vue';
import cont from '@/components/Content.vue';
import $ from 'jquery';

export default {
  data() {
    return {
      scroll: 2
    }
  },
  components: {
    topbar,
    cont,
    intro,
  },
  methods: {
    handleScroll: function() {
      this.scroll = $('.home').scrollTop()
    }
  },
};
</script>

<style lang="scss" scoped>
.home {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  margin: 0;
  overflow: scroll;
  overflow-x: hidden;
  background: rgb(255, 255, 255);
  font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}
@media screen and (max-width: 1032px) {
  .home {
    height: calc(100% + 44px);
  }
  html, body {
  overflow-x: hidden;

  }

}
</style>
