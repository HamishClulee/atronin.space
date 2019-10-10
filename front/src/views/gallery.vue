<template>
    <div class="page-con">
        <gallerymodal v-if="showgallery" :index="index" :paths="paths"></gallerymodal>
        <h1>gallery</h1>
        <h5>Show images tagged with:</h5>
        <div class="tags-con">
            <tagselect></tagselect>
        </div>
        <div class="gallery" :style="{ gridTemplateRows: `repeat(${Math.ceil(length / 3)}, 20vw)`}" >
            <rimage
                v-for="(v, i) in images"
                :key="i"
                :source="v.path"
                :alttext="v.alt"
                :index="i">
            </rimage>
        </div>
    </div>
</template>

<script>
import rimage from '../components/rimage'
import tagselect from '../components/tagselect'
import gallerymodal from '../components/gallerymodal.vue'
export default {
    name: 'gallery',
    components: { rimage, tagselect, gallerymodal },
    data () {
        return {
            images: [],
            gridTemplateRows: '',
            length: 148,
            showgallery: false,
            paths: [],
            index: 0,
        }
    },
    mounted () {
        this.reset()
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
        },
        reset() {
            this.$manifest.images.forEach(element => { this.push(element) })
            this.length = this.$manifest.images.length / 3
        },
        push(elem) {
            this.images.push(elem)
            this.paths.push(elem.path)
        },
        clear() {
            this.images = []
            this.paths = []
        }
    },
    computed: {
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
h5
    text-align: center
</style>
