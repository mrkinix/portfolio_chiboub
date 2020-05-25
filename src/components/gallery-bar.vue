<template>
    <div class="gb">
        <ul>
            <li v-for="item in categs" :key="item.id" @click="switchCateg(item)">{{item}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            categs: ['Abstract', 'Wallpaper', 'Website', 'Software', '3d', 'Video', 'music', 'Games',]
        }
    },
    methods: {
        switchCateg: function(item) {
            this.$emit('switchCateg', item)
        }
    },
}
</script>

<style lang="scss" scoped>
@import '../css/mobile.scss';

.gb {
    position: sticky;
    top: 0;
    background: rgba(255, 255, 255, 0.865);
    z-index: 999999;
    height: 35px;
    overflow: auto;
    overflow-y: hidden;
    ul {
        margin: 0;
        padding: 0;
        line-height: 35px;
        display: flex;
        justify-content: space-around;
        width: 90vw;
        margin-left: 5vw;
        font-size: .85rem;
        color: black;
        list-style: none;
        li:hover {
            text-decoration: underline;
            cursor: pointer;
        }
    }
}
</style>