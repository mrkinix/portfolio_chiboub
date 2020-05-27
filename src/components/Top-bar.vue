<template>
  <div class="top-bar" :style="{position: pos}">
    <h1> <router-link class="rl" to="/">
      Chiboub<span :style="{fontSize: '22px', color: COLOR}">{{PATH}}</span>
      </router-link></h1>
    <ul class="hide">
      <li :style="{width: linksInit[0].length + 2 + 'ch'}" @mouseover="buttonHover(0)" @mouseout="reset(0)">
        <router-link class="rl" to="/gallery">{{links[0]}}</router-link></li>
      <li :style="{width: linksInit[1].length + 2 + 'ch'}" @mouseover="buttonHover(1)" @mouseout="reset(1)" @click="mail">{{links[1]}}</li>
      <li :style="{width: linksInit[2].length + 2 + 'ch'}" @mouseover="buttonHover(2)" @mouseout="reset(2)">
        <router-link class="rl" to="/notes">{{links[2]}}</router-link></li>
      <li :style="{width: linksInit[3].length + 2 + 'ch'}" @mouseover="buttonHover(3)" @mouseout="reset(3)">
        <router-link class="rl" to="/blog">{{links[3]}}</router-link></li>
    </ul>
    <ham @dropMenu="openDrop" class="mobile" ref="hamburger"/>
    <div class="dropMenu" v-if="drop">
      <ul>
        <li><router-link class="rl" style="color: white" to="/gallery">{{links[0]}}</router-link></li>
        <li @click="mail">{{links[1]}}</li>
        <li><router-link class="rl" style="color: white" to="/notes">{{links[2]}}</router-link></li>
        <li><router-link class="rl" style="color: white" to="/blog">{{links[3]}}</router-link></li>
      </ul>
      <div style="height: 100%" @click="openDrop(2)"></div>
    </div>
  </div>
</template>

<script>
import ham from './hamburger.vue';

export default {
  data() {
    return {
      linksInit: ['Gallery', 'Contact', 'Notes', 'Blog'],
      links: ['Gallery', 'Contact', 'Notes', 'Blog'],
      drop: false,
      COLOR: 'red',
      PATH: ''
    }
  },
  props: ['pos'],
  components: {
    ham,
  },
  methods: {
    mail: function() {
      window.location.href = 'mailto:chiboub213@gmail.com'
    },
    openDrop: function(state=0) {
      if (state === 1) this.drop = true
      else {
        if (state === 2) {
          this.$refs.hamburger.reset()
        }
        this.drop = false
      }
    },
    buttonHover: function(id) {
      this.links[id] = '> ' + this.links[id]
      this.$forceUpdate()
    },
    reset: function(id) {
      this.links[id] = this.links[id].slice(2)
      this.$forceUpdate()
    } 
  },
  created() {
    this.PATH = window.location.pathname.slice(1).replace(/\s/g, '');
    if (this.PATH.includes('notes/')) this.PATH = 'notes'
    switch(this.PATH) {
      case 'notes':
        this.COLOR = '#b86518'
        break;
      case 'blog':
        this.COLOR = '#1885b8'
        break;
      case 'gallery':
        this.COLOR = '#209209'
        break;
    }
    this.$forceUpdate
  },
};
</script>

<style lang="scss" scoped>
.top-bar {
  position: relative;
  top: 0;
  left: 0;
  height: 44px;
  width: 100%;
  z-index: 9999;
  background: rgba(240,240,240, .8);
  display: inline-flex;
  justify-content: space-between;
  h1 {
    color: black;
    line-height: 44px;
    padding-left: 5%;
    margin: 0;
    text-align: left;
    cursor: pointer;
  }
  ul {
    margin: 0;
    margin-right: 5%;
    line-height: 44px;
    height: 50px;
    color: black;
    display: flex;
    justify-content: space-between;
    li {
      list-style-type: none;
      font-size: 17px;
      cursor: pointer;
      text-align: right;
      &:hover {
        color: rgb(41, 41, 41);
      }
    }
  }
  .dropMenu {
    position: fixed;
    top: 44px;
    padding-top: 10%;
    left: 0;
    height: calc(100% - 44px);
    width: 100%;
    background: rgba(0, 0, 0, 0.946);

    ul {
      width: 100%;
      margin: 0;
      height: auto;
      padding: 0;
      color: white;
      flex-direction: column;
      li {
        width: 100%;
        font-size: 26px;
        line-height: 31px;
        padding: 5vh 0;
        text-align: center;
        opacity: .9;
        margin: 0;
        vertical-align: middle;
        &:hover {
          opacity: 1;
          color: white;
        }
      }
    }
  }
  .rl {
    color: black;
    text-decoration: none;
  }
}
@media screen and (max-width: 500px) {
  .mobile {
    display: block !important;
  }
  .hide {
    display: none !important
  }
}
.mobile {
  display: none;
}
</style>
