<template>
    <div class="note">
      <topbar :pos="'fixed'"/>
      <div class="container" v-if="!$route.params.id1">
        <h1>{{$route.params.id}}</h1>
        <ul v-for="item in NOTES" :key="item.id">
            <li @click="nav(item.name)">{{item.name}}</li>
        </ul>
      </div>
      <div v-else class="container">
        <h1 style="padding-top: 5%" >{{post.name}}</h1>
        <p style="padding-bottom: 0">{{post.date}}</p>
        <p style="padding-top: 0" v-html="post.content"></p>
      </div>
    </div>
</template>

<script>
import topbar from '@/components/Top-bar.vue';
import {NOTES} from '@/data/notes'
export default {
    components: {
        topbar
    },
    data() {
        return {
            NOTES: []
        }
    },
    mounted() {
        this.NOTES = NOTES.filter(item =>
            item.subCategory === this.$route.params.id)
    },
    methods: {
        nav: function(url) {
            this.$router.push(window.location.pathname + '/' +
            url.replace(/\s/g, ''))
        }
    },
    computed: {
        post: function() {
            let result = {}
            for (let item of this.NOTES) {
                if (this.$route.params.id1 === item.name.replace(/\s/g, '')) {
                    result = item
                }
            }
            return result
        }
    }
}
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1032px) {
  .note {
    height: calc(100% + 44px) !important;
  }
}
.note {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgb(34, 34, 34);
    overflow: scroll;
    font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    background: rgb(34, 34, 34);
    overflow-x: hidden;
    .container {
        color: white;
        height: calc(100%- 44px);
        width: 100%;
        position: relative;
        top: 44px;
    }
    ul {
        text-align: left;
        margin-left: 30%;
        font-size: 24px;
        cursor: pointer;
        text-decoration: underline;
    }
    p {
        text-align: left;
        padding: 5%;
    }
}

</style>