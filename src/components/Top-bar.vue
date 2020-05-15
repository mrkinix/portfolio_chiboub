<template>
  <div class="top-bar">
    <h1>Chiboub</h1>
    <ul class="hide">
      <li @mouseover="buttonHover(0)" @mouseout="reset(0)">{{links[0]}}</li>
      <li @mouseover="buttonHover(1)" @mouseout="reset(1)">{{links[1]}}</li>
      <li @mouseover="buttonHover(2)" @mouseout="reset(2)">{{links[2]}}</li>
    </ul>
    <ham @dropMenu="openDrop" class="mobile" ref="hamburger"/>
    <div class="dropMenu" v-if="drop">
      <ul>
        <li>{{links[0]}}</li>
        <li>{{links[1]}}</li>
        <li>{{links[2]}}</li>
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
      links: ['Blog', 'Gallery', 'Contact'],
      drop: false
    }
  },
  components: {
    ham,
  },
  methods: {
    test: function() {
      alert('a')
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
};
</script>

<style lang="scss" scoped>
.top-bar {
  position: sticky;
  top: 0;
  left: 0;
  height: 44px;
  width: 100%;
  z-index: 999;
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
      margin-left: 20px;
      font-size: 17px;
      cursor: pointer;
      width: 10ch;
      text-align: right;
      &:hover {
        color: rgb(41, 41, 41);
      }
    }
  }
  .dropMenu {
    position: fixed;
    top: 44px;
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
