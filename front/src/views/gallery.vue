<template>
    <div class="page-con">
        <div class="tags-con">
            <tagselect></tagselect>
        </div>
        <div class="gallery" :style="style" v-if="!loading">
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
import _manifest from '../imagemanifest.js'
import rimage from '../components/rimage'
import tagselect from '../components/tagselect'
export default {
    name: 'gallery',
    components: { rimage, tagselect },
    data () {
        return {
            ogimages: _manifest.images,
            images: _manifest.images,
            tags: _manifest.TAGS,
            style: {
                gridTemplateRows: `repeat(${this.length}, 20vw)`
            },
            length: _manifest.images.length,
            loading: false,
        }
    },
    mounted () {
        this.$on('tag-selected', (n) => {
            this.loading = true
            if (n !== null) {
                this.images = []
                this.length = 0
                this.ogimages.forEach(element => {
                    if (element.tags.indexOf(this.tags[n]) !== -1) this.images.push(element)                
                })
                this.length = this.ogimages.length
            } else {
                this.ogimages.forEach(element => {
                    this.images.push(element)
                })
                this.length = this.ogimages.length
            }
            this.loading = false
        })
    },
    methods: {
    },
    computed: {
    }
}
</script>

<style lang="sass" scoped>
.page-con
    margin-top: 120px
.gallery
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-gap: 0
    width: 70%
    margin-left: auto
    margin-right: auto
    min-height: 80vh
</style>
