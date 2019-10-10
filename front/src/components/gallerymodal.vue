<template>
    <div class="gallery-con">
        <div class="gallery-content">
            <div class="controls-con">
                <div class="close-x" @click="closemodal"></div>
            </div>
            <div class="carousel-con">
                <div class="caret-left-con" @click="goleft()"><i class="arrow left"></i></div>
                <img :src="source" :key="String(paths[d_index])"/>
                <div class="caret-left-con" @click="goright()"><i class="arrow right"></i></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'gallerymodal',
    props: {
        index: Number,
        paths: Array,
    },
    data() {
        return {
            d_index: this.index,
            base:'https://atronin.space/images/',
        }
    },
    methods: {
        goleft() {
            this.d_index === 0 ? this.d_index = this.paths.length -1 : this.d_index--
        },
        goright() {
            this.d_index === this.paths.length -1 ? this.d_index = 0 : this.d_index++
        },
        closemodal() {
            this.$parent.$emit('close-modal')
        },
        gotogallery() {
            this.$parent.$emit('close-modal')
            this.$router.push({ path: '/gallery'})
        }
    },
    computed: {
        source() { return this.base + this.paths[this.d_index] },
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
    top: 20%
    width: 100%
    text-align: center
    img
        height: auto
        max-height: 50vh
        max-width: 80vw
.carousel-con
    display: flex
    flex-direction: row
    width: 95%
    margin-left: auto
    margin-right: auto
    height: 60vh
    align-items: center
    justify-content: space-between
.controls-con
    h6
        color: $light-background
        cursor: pointer
    position: relative
    bottom: 80px
    display: flex
    justify-content: flex-end
    margin-right: 30px
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
.close-x
    color: $light-background
    cursor: pointer
    border-radius: 50%
    background: #323232
    font-size: 26px
    display: inline-block
    height: 50px
    width: 50px
    line-height: 0px
    padding: 0
    &:before
        content: "x"
        position: relative
        top: 21px


</style>