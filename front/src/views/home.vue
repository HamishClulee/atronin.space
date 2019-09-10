<template>
    <div class="home-con">
        <h1 class="main-heading">@RONIN</h1>
        <h3 class="sub-heading">Work hard, live well, be productive and share your success with your peers.</h3>
        <div class="images-con">
            <gallery :images="images" :index="index" @close="index = null"></gallery>
            <div class="images">
                <div
                    class="image"
                    v-for="(image, imageIndex) in images"
                    :key="imageIndex"
                    @click="index = imageIndex"
                    :style="{
                        backgroundImage: 'url(' + image + ')',
                        width: '30vw',
                        height: '30vw',
                        backgroundPosition: 'top',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover'
                    }">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Gallery from '../components/gallery.vue'
    export default {
        name: 'home',
        components: {
            'gallery': Gallery
        },
        data () {
            return {
                images: [
                    "https://atronin.space/images/social.jpg",
                    "https://atronin.space/images/social1.jpg",
                    "https://atronin.space/images/social3.jpg",
                    "https://atronin.space/images/social4.jpg",
                    "https://atronin.space/images/work.jpg",
                    "https://atronin.space/images/work2.jpg",
                    "https://atronin.space/images/work1.jpg",
                ],
                index: null
            }
        },
        mounted () {
        },
        methods: {
        },
        computed: {
        }
    }
</script>

<style lang="sass" scoped>
    .main-heading
        color: $primary
        text-align: left
        width: 100%
        font-size: 7em
        letter-spacing: 3px
    .sub-heading
        color: $highlight
    .home-con
        padding: 10px
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
        p
            font-size: 1.3em
        h1
            @media (min-width: 0px) and (max-width: 780px)
                text-align: left
                width: 100%
    .image
        margin: 2px
        border: 1px solid $secondary
        transition: all 0.2s ease
        &:hover
            transform: scale(0.97)
            transition: all 0.2s ease
    .images
        display: flex
        flex-direction: row
        flex-wrap: wrap
        width: 100%
        margin-left: auto
        margin-right: auto
        display: flex
        align-items: center
        justify-content: center
        cursor: pointer
    .images-con
        width: 100%
        display: flex
        align-items: center
        justify-content: center
</style>
