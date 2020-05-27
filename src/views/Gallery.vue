<template>
    <div class="home">
        <topbar :pos="'relative'"/>
        <gallerybar @switchCateg="switchToCateg"/>
        <div class="img" :style="{display: categoryMode}">
            <h1>Free assets</h1>
            <h2>Search by keyword, year, type...</h2>
            <input v-model="searchKeyword" @keydown.enter="search(searchKeyword)">
            <button @click="search(searchKeyword)">Go</button>
            <h2 style="font-size: 14px; top:calc(60% + 30px); padding: 0 10%; width: 80%">Suggestions:
                <span style="text-decoration: underline; margin-right: 4px; cursor: pointer" 
                v-for="item in suggest" :key="item.id" @click="search(item)">
                {{item}}</span>
            </h2>
        </div>
        <div class="content">
            <h3>{{(searchMode && searchKeyword) ? searchKeyword : 'Last 9 creations' }}</h3>
            <div class="container2">
                <div class="cont" v-for="item in info"
                :key="item.id" @click="setPic(item.url)"
                :style="{ backgroundImage: 'url(' + require(`@/assets/${item.url}`) + ')'    }">
                    <ul class="info">
                        <li>Name: {{item.name}}</li>
                        <li>Year: {{item.year}}</li>
                        <li>Type: {{item.type}}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="pic--highlight" v-if="pic">
            <div class="close" @click="setPic(false)"></div>
            <div class="pic--container">
                <img :src="require(`@/assets/${pic}`)">
            </div>
        </div>
    </div>
</template>


<script>
import topbar from '@/components/Top-bar.vue';
import gallerybar from '@/components/gallery-bar.vue';
import {data} from '@/data/gallery.js'
import $ from 'jquery'
export default {
    data() {
        return {
            info: data,
            pic: '',
            searchKeyword: '',
            searchMode: false,
            categoryMode: 'block',
            result: [],
            suggest: ['2020', 'wallpaper', 'abstract', 'red', 'photoshop', 'black', 'dark', 'desktop']
        }
    },
    components: {
        topbar,
        gallerybar
    },
    methods: {
        setPic: function(pic) {
            this.pic = pic
        },
        search: function(sugg, categ=false) {
            this.searchKeyword = sugg
            this.result = []
            this.searchMode = true
            for (const value of data) {
                if (categ) {
                    if (value.type.includes(this.searchKeyword.toLowerCase())) {
                        this.result.push(value)
                    }
                }
                else {
                    if (value.keywords.includes(this.searchKeyword)) {
                        this.result.push(value)
                    }
                }
            }
            this.info = []
            for (const value of this.result) {
                this.info.push(value)
            }
            $('.home').animate({
                scrollTop: $(".content").offset().top
            }, 400);
        },
        switchToCateg: function(category) {
            this.categoryMode = 'none'
            this.searchKeyword = category
            this.searchMode = true
            this.search(category, true)

        }
    },
    watch: {
        searchKeyword: function() {
            if (!this.searchKeyword) this.info = data
        }
    },
}
</script>


<style lang="scss" scoped>
@import '../css/mobile.scss';
@media screen and (max-width: 1032px) {
  .home {
    height: calc(100% + 44px) !important;
  }
}
.home {
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: 100%;
    margin: 0;
    overflow: scroll;
    overflow-x: hidden;
    background: rgb(227, 227, 227);
    font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    .img {
        position: relative;
        height: calc(100vh - 44px);
        background: linear-gradient(270deg, #ff5200,#f9aa00,rgb(255, 72, 0));
        background-size: 800% 800%;
        -webkit-animation: animated--background 24s ease infinite;
        -moz-animation: animated--background 24s ease infinite;
        animation: animated--background 24s ease infinite;
    }
    img {
        height: 100%;
        width: 100%;
        opacity: .86;
        object-fit: cover;
    }
    h1, input, h2 {
        position: absolute;
        color: white;
        width: 100%;
    }
    h1 {
        top: calc(60% - 10rem);
        font-size: 48px;
    }
    h2 {
        line-height: 20px;
        top: calc(60% - 5rem);
    }
    input {
        width: calc(60% - 1rem);
        border: solid rgb(203, 203, 203) .75px;
        height: 2rem;
        color: black;
        padding-left: 1rem;
        border-radius: 12px;
        top: 60%;
        left: 20%;
        background: rgba(255, 255, 255, 0.575);
    }
    button {
        position: absolute;
        top: calc(60% + .75px);
        height: calc(2rem + 1.5px);
        width: 3.5rem;
        cursor: pointer;
        font-size: 1.05rem;
        z-index: 99;
        border-radius: 0 12px 12px 0;
        color: rgb(2, 2, 2);
        border: none;
        background: rgb(182, 182, 182);
        left: calc(80% - 3.5rem + 1.5px);
        &:hover {
            background: rgb(211, 253, 211);
        }
    }
    .container2 {
        position: relative;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-content: center;
        align-items: center;
        left: calc(75rem - 40vw);
        width: 80vw;
        max-width: 140rem;
        .cont {
            height: 25vw;
            margin-bottom: 1vw;
            width: 25vw;
            background: rgb(33, 33, 33);
            max-width: 45rem;
            background-position: center; /* Center the image */
            background-repeat: no-repeat; /* Do not repeat the image */
            background-size: cover;
            max-height: 45rem;
            &:hover {
                cursor: pointer;
                .info {
                    display: block;
                }
            }
        }
        .info {
            color: white;
            height: calc(100% - 5rem);
            width: calc(100% - 5rem);
            list-style: none;
            text-align: left;
            padding-left: 5rem;
            padding-top: 5rem;
            display: none;
            background: rgba(0, 0, 0, 0.712);
            margin: 0;
        }
    }
    .content {
        margin: 0;
        padding-top: 15vh;
        width: 150rem;
        position: relative;
        background: rgb(249, 249, 249);
        min-height: calc(70vh - 44px);
        left: calc(50% - 75rem);
        height: auto;
        padding-bottom: 15vh;
    }
    h3 {
        font-size: 42px;
    }
    .pic--highlight {
        position: fixed;
        height: 100%;
        top: 0;
        margin: 0;
        padding: 0;
        width: 100%;
        left: 0;
        overflow: auto;
        .close {
            position: fixed;
            height: 100%;
            top: 0;
            margin: 0;
            padding: 0;
            width: 100%;
            left: 0;
            background: rgba(0, 0, 0, 0.658);
        }
        z-index: 99999999;
        overflow-x: hidden;
        .pic--container {
            height: auto;
            margin-top: 50px;
            margin-bottom: 50px;
            margin-left: 10%;
            width: 80%;
            left: 0;
            background: rgb(216, 216, 216);
            display: flex;
            flex-direction: row;
            img {
                height: auto;
                width: 100%;
                position: relative;
                left: 0;
            }
        }
    }
}
@-webkit-keyframes animated--background {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes animated--background {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes animated--background {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
</style>