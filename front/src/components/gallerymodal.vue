<template>
    <div class="gallery-con">
        <div class="gallery-content">
            <img :src="'https://atronin.space/images/' + images[index].path" />
        </div>
    </div>
</template>
<script>
import _manifest from '../imagemanifest.js'
export default {
    name: 'gallerymodal',
    data() {
        return {
            images: _manifest.images,
            index: 0,
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
        max-height: 80vh
</style>