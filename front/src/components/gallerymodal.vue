<template>
    <div class="gallery-con">
        <div class="gallery-content">
            <div class="controls-con">
                <h6 @click="gotogallery">view gallery</h6>
                <h6 @click="closemodal">close</h6>
            </div>
            <div class="carousel-con">
                <div class="caret-left-con" @click="goleft()"><i class="arrow left"></i></div>
                <img :src="source" :key="index"/>
                <div class="caret-left-con" @click="goright()"><i class="arrow right"></i></div>
            </div>

        </div>
    </div>
</template>
<script>
import _manifest from '../imagemanifest.js'
export default {
    name: 'gallerymodal',
    props: {
        opensource: String,
    },
    data() {
        return {
            images: _manifest.images,
            index: 0,
            source: 'https://atronin.space/images/' + this.opensource,
            base:'https://atronin.space/images/',
        }
    },
    methods: {
        goleft() {
            if (this.index === 0)
                this.index = this.images.length -1
            else
                this.index--
            this.source = this.base + this.images[this.index].path
        },
        goright() {
            if (this.index === this.images.length -1)
                this.index = 0
            else
                this.index++
            this.source = this.base + this.images[this.index].path
        },
        closemodal() {
            this.$root.$emit('close-modal')
        },
        gotogallery() {
            this.$root.$emit('close-modal')
            this.$router.push({ path: '/thevilla'})
        }
    }
}
</script>
<style lang="sass" scoped>
.gallery-con
    height: 100%
    width: 100%
    position: fixed
    z-index: 1
    top: 0
    left: 0
    background-color: rgb(0,0,0)
    background-color: rgba(0,0,0, 0.9)
    overflow-x: hidden
    transition: 0.5s
.gallery-content
    position: relative
    top: 15%
    width: 100%
    text-align: center
    img
        height: 60vh
        max-width: 70vw
.carousel-con
    display: flex
    flex-direction: row
    width: 95%
    margin-left: auto
    margin-right: auto
    height: 100%
    align-items: center
    justify-content: space-between
.controls-con
    h6
        color: $light-background
        cursor: pointer
    display: flex
    flex-direction: row
    align-items: center
    justify-content: space-between
    width: 30%
    margin-left: auto
    margin-right: auto
    height: 50px
i
  border: solid white
  border-width: 0 2px 2px 0
  display: inline-block
  padding: 10px
  cursor: pointer
.right
  transform: rotate(-45deg)
  -webkit-transform: rotate(-45deg)
.left
  transform: rotate(135deg)
  -webkit-transform: rotate(135deg)
</style>