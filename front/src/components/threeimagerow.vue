<template>
    <div class="row-con">
        <figure
            v-for="(path, i) in paths"
            :key="i"
            @click="opengallery(i)"
            :class="'gallery-image-' + String(i)"
            v-show="vis(i)">
                <img 
                    :src="'https://atronin.space/images/' + path"
                    alt="image of @RONIN vila"
                    class="gallery__img"
                />
                <div class="overlay">
                    <h5 class="text">view gallery</h5>
                </div>
        </figure>
    </div>

</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'threeimagerow',
    props: {
        paths: Array,
        row: Number,
    },
    data () {
        return {
        }
    },
    mounted() {
    },
    methods: {
        opengallery(i) {
            this.$parent.$emit('open-gallery', i + (this.row * 3))
        },
        vis(i) {
            if (this.window_width < 760) {
                return i < 2
            } else {
                return true
            }
        } 
    },
    computed: {
        ...mapState(['window_width'])
    }
}
</script>
<style lang="sass" scoped>
figure
    margin: 10px
    position: relative
    @media (min-width: 0px) and (max-width: 1280px)
        margin: 5px
    &:hover
        cursor: pointer
        background-color: darken($dark-background, 10)
        img
            opacity: 0.2
        .overlay
            opacity: 1
.row-con
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-template-rows: repeat(1, 20vw)
    @media (min-width: 0px) and (max-width: 760px)
        grid-template-rows: repeat(2, 30vw)
        grid-template-columns: repeat(2, 1fr)
        height: 30vw
        overflow: hidden
    grid-gap: 0
    width: 100%
    margin-left: auto
    margin-right: auto
.gallery__img
    width: 100%
    height: 100%
    object-fit: cover
.gallery-item-0
    grid-column-start: 1
    grid-column-end: 2
    grid-row-start: 1
    grid-row-end: 2
.gallery-item-1
    grid-column-start: 2
    grid-column-end: 3
    grid-row-start: 1
    grid-row-end: 2
.gallery-item-2
    grid-column-start: 3
    grid-column-end: 4
    grid-row-start: 1
    grid-row-end: 2
img
    opacity: 1
    display: block
    width: 100%
    height: auto
    backface-visibility: hidden   
.overlay
    opacity: 0
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    -ms-transform: translate(-50%, -50%)
    text-align: center
h5
    color: $light-background
    line-height: 1.5
    border-bottom: 1px solid white
    padding-bottom: 15px
</style>