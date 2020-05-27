<template>
  <div class="blog">
      <topbar :pos="'fixed'"/>
  </div>
</template>

<script>
import topbar from '@/components/Top-bar.vue';
export default {
    components: {
        topbar
    }
}
</script>

<style lang="scss" scoped>
.blog {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgb(34, 34, 34);
    overflow: scroll;
    font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    overflow-x: hidden;
    background: black;
}

</style>