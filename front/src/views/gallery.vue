<template>
    <div class="page-con">
        <gallerymodal v-if="showgallery" :index="index" :paths="paths"></gallerymodal>
        <h1>gallery</h1>
        <h5>Show images tagged with:</h5>
        <div class="tags-con">
            <tagselect></tagselect>
        </div>
        <div class="gallery" :style="{ gridTemplateRows: rowstyle }">
            <rimage
                v-for="(v, i) in images"
                :key="i"
                :source="v.path"
                :alttext="v.alt"
                :index="i">
            </rimage>
        </div>
        <div class=floating-button-con @click="gototop">
            <div class="round-button"></div>
        </div>
    </div>
</template>

<script>
import rimage from '../components/rimage'
import tagselect from '../components/tagselect'
import gallerymodal from '../components/gallerymodal.vue'
import { mapState } from 'vuex'
export default {
    name: 'gallery',
    components: { rimage, tagselect, gallerymodal },
    data () {
        return {
            images: [],
            length: this.$manifest.images.length,
            showgallery: false,
            paths: [],
            index: 0,
            rowcoef: 3,
            colwidth: '40vw',
        }
    },
    mounted () {
        this.setup()
        this.reset()
        this.shuffle()
        this.$on('tag-selected', n => {
            n !== null ? this.taggedlist(n) : this.reset()
        })
        this.$on('open-gallery', i => {
            this.index = i
            this.showgallery = true
        })
        this.$on('close-modal', () => {
            this.showgallery = false
        })
    },
    methods: {
        taggedlist(n) {
            this.clear()
            this.$manifest.images.forEach(element => {
                if (element.tags.indexOf(this.$manifest.TAGS[n]) !== -1) {
                    this.push(element)
                }                
            })
            this.length = this.images.length
            this.shuffle()
        },
        reset() {
            this.$manifest.images.forEach(element => { this.push(element) })
            this.length = this.$manifest.images.length / this.rowcoef
            this.shuffle()
        },
        push(elem) {
            this.images.push(elem)
            this.paths.push(elem.path)
        },
        clear() {
            this.images = []
            this.paths = []
        },
        gototop() {
            window.scrollTo(0, 0)
        },
        setup() {
            if (this.window_width < 860) {
                this.rowcoef = 2
                this.colwidth = '40vw'
            } else {
                this.rowcoef = 3
                this.colwidth = '20vw'
            }
        },
        shuffle() {
            let currentIndex = this.images.length, temporaryValue, randomIndex
            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex)
                currentIndex -= 1
                temporaryValue = this.images[currentIndex]
                this.images[currentIndex] = this.images[randomIndex]
                this.images[randomIndex] = temporaryValue
            }
        }
    },
    computed: {
        ...mapState(['window_width']),
        rowstyle() {
            return `repeat(${String(Math.ceil(this.length / this.rowcoef))}, ${String(this.colwidth)})`
        }
    },
    watch: {
        window_width() {
            this.setup()
        }
    }
}
</script>

<style lang="sass" scoped>
.gallery
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-template-rows: repeat(148, 20vw)
    grid-gap: 0
    width: 100%
    margin-left: auto
    margin-right: auto
    min-height: 60vh
    @media (min-width: 0px) and (max-width: 860px)
        grid-template-columns: repeat(2, 1fr)
h5
    text-align: center
.floating-button-con
    position: fixed
    height: 45px
    width: 45px
    border-radius: 50%
    background: $tertiary
    bottom: 30px
    right: 30px
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)
    cursor: pointer
    display: flex
    align-items: center
    justify-content: center
    &:hover
        box-shadow: 0 18px 32px rgba(0,0,0,0.35), 0 15px 15px rgba(0,0,0,0.30)
    .round-button
        width: 0
        height: 0
        border-left: 8px solid transparent
        border-right: 8px solid transparent
        border-bottom: 8px solid $light-background
        margin-bottom: 4px
        margin-right: 2px
        
</style>
