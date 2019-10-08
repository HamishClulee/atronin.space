<template>
    <div class="page-con">
        <div class="tags-con">
            <tagselect></tagselect>
        </div>
        <div class="gallery" :style="style">
            <rimage
                v-for="(v, n, i) in images"
                :key="n"
                :source="n"
                :alttext="v.alt"
                :index="i"
                :overlay="v.caption">
            </rimage>
        </div>
    </div>
</template>

<script>
import _manifest from '../imagemanifest.js'
import rimage from '../components/rimage'
import tagselect from '../components/tagselect'
export default {
    name: 'thevilla',
    components: { rimage, tagselect },
    data () {
        return {
            images: _manifest.images,
            style: {
                gridTemplateRows: `repeat(${this.length}, 20vw)`
            },
            length: this.getlen,
            activetag: null
        }
    },
    mounted () {
        this.$on('tag-selected', (n) => {
            this.activetag = n
            if (this.activetag !== null) {
                let res = {}
                for (let key in _manifest.images) {
                    if (_manifest.images.hasOwnProperty(key) && _manifest.images[key].tags.indexOf(n) !== -1) {
                        res[key] = _manifest.images[key]
                    }
                }
                this.images = res
            } else {
                this.images = _manifest.images
            }
        })
    },
    methods: {
    },
    computed: {
        getlen() {
            return Object.keys(this.images).length
        }
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
</style>
