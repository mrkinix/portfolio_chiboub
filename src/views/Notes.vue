<template>
    <div class="notes">
        <TopBar :pos="'relative'"/>
        <div class="container">
            <div class="cont categ">
                <div style="color: white; padding-top:10px; cursor: pointer;
                text-decoration: underline" v-if="subMode" 
                @click="reset">Back</div>
                <h1>Categories A-Z</h1>
                <div class="btn--container" v-if="subMode">
                    <router-link class="btn"
                         v-for="(categ, idx) in items.sort()"
                        :key="categ.id"  :to="`notes/${categ}`">
                            {{categ}} 
                            <br>{{count_(idx)}}
                    </router-link>
                </div>
                <div class="btn--container" v-else>
                    <div class="btn" v-for="(categ, idx) in items.sort()"
                    :key="categ.id" @click="swCtg(categ)">
                        {{categ}} 
                        <br>{{count_(idx)}}
                    </div>
                </div>
            </div>
            <div class="cont latest" >
                <h2>Latest content:</h2>
                <ul v-for="item in NOTES" :key="item.id">
                    <li><router-link :to="'notes/' + item.subCategory +
                    '/' + item.name.replace(/\s/g, '')">
                    {{item.name}}</router-link></li>
                </ul>
            </div>
            <div style="height: calc(10vh - 22px)"/>
        </div>
    </div>
</template>

<script>
import TopBar from '@/components/Top-bar'
import {SUBCATEGS} from '@/data/categories'
import {NOTES} from '@/data/notes'

export default {
    components: {
        TopBar
    },
    data() {
        return {
            subMode: false,
            subCount: [],
            NOTES: NOTES,
            categ: ''
        }
    },
    methods: {
        swCtg: function(categ) {
            this.categ = categ
            this.subMode = true
        },
        reset: function () {
            this.subMode = false
        },
        countNotes: function(type) {
            const list = this.items
            let count = []
            for (let i=0; i<list.length;++i) count[i] = 0
            for (let item of NOTES) {
                count[list.sort().indexOf(item[type])] += 1
            }
            return count.map((item) => {
                if (item === 0) return ''
                else return `(${item})`
            })
        },
        count_: function(index) {
            if (this.subMode) return this.countNotes('subCategory')[index]
            return this.countNotes('category')[index]
        }
    },
    computed: {
        items: function() {
            if (this.subMode) {
                return SUBCATEGS[this.categ]
            }
            return ['Programming', 'Frameworks',
            'Software']
        },
    },
    created() {
        this.reset()
    },
}
</script>

<style lang="scss" scoped>
@import '../css/mobile2.scss';
@media screen and (max-width: 1032px) {
  .notes {
    height: calc(100% + 44px) !important;
  }
}
.notes {
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background: rgb(34, 34, 34);
    overflow: scroll;
    font-family: "SF Pro Text", "SF Pro Icons", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
    overflow-x: hidden;
    .container {
        height: 100%;
        height: auto;
        position: relative;
        left: 0;
        width: 100%;
        display: flex;
        flex-direction: row;
    }
    .cont {
        margin: calc(10vh - 22px) 0;
        background: rgb(41, 41, 41);
        border-radius: 4px;
    }
    .categ {
        margin-left: 5%;
        height: auto;
        width: 57.5%;
    }
    .latest {
        width: 30%;
        height: 0%;
        margin-left: 2.5%;
        
    }
    h1, h2 {
        color: white;
    }
    li {
        text-align: left;
        color: white;
        padding-bottom: 10px;
    }
    a {
        cursor: pointer;
        text-decoration: underline;
        color: rgb(80, 144, 182) !important;
        &:hover {
            color: rgb(122, 173, 203) !important;
        }
    }
    .btn--container {
        height: auto;
        margin: 10%;
        width: 80%;
        display: flex;
        flex-wrap:  wrap;
        flex-direction: row;
        .btn {
            height: 13vh;
            color: white !important;
            text-decoration: none;
            padding-top: 7vh;
            margin: 1.5vh;
            width: 20vh;
            border-radius: 4px;
            background: rgb(24, 24, 24);
            cursor: pointer;
            &:hover {
                background: rgb(19, 19, 19);
                transform: scale(.97);
            }
        }
    }
}
</style>