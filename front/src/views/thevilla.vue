<template>
    <div class="page-con">
        <div class="gallery" :style="style">
            <rimage
                v-for="(v, n, i) in manifest.images"
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
export default {
    name: 'thevilla',
    components: { rimage },
    data () {
        return {
            manifest: _manifest,
            style: {
                gridTemplateRows: `repeat(${Object.keys(_manifest.images).length}, 20vw)`
            }
        }
    },
    mounted () {
        // debugger
    },
    methods: {
    },
    computed: {
    }
}
</script>

<style lang="sass" scoped>
.gallery
    margin-top: 150px
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-gap: 0
    width: 70%
    margin-left: auto
    margin-right: auto
figure
    margin: 10px
.gallery__img
    width: 100%
    height: 100%
    object-fit: cover
.gallery__item--1
    grid-row-start: 1
    grid-column-start: 1
    grid-row-end: 2
    grid-column-end: 2
.gallery__item--2
    grid-row-start: 1
    grid-column-start: 2
    grid-row-end: 2
    grid-column-end: 3
.gallery__item--2
    grid-row-start: 1
    grid-column-start: 3
    grid-row-end: 2
    grid-column-end: 4
</style>
