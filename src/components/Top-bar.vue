<template>
  <div class="top-bar">
    <h1>Chiboub</h1>
    <ul>
      <li @mouseover="buttonHover(0)" @mouseout="reset(0)">{{links[0]}}</li>
      <li @mouseover="buttonHover(1)" @mouseout="reset(1)">{{links[1]}}</li>
      <li @mouseover="buttonHover(2)" @mouseout="reset(2)">{{links[2]}}</li>
    </ul>
    <ham class="mobile"/>
  </div>
</template>

<script>
import ham from './hamburger.vue';

export default {
  data() {
    return {
      links: ['Blog', 'Gallery', 'Contact']
    }
  },
  components: {
    ham,
  },
  methods: {
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
}
@media screen and (max-width: 500px) {
  .mobile {
    display: block !important;
  }
  ul {
    display: none !important
  }
}
.mobile {
  display: none;
}
</style>
