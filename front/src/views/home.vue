<template>
    <div class="home-con">
        <h1>Welcome home</h1>
        <div>
            <gallery :images="images" :index="index" @close="index = null"></gallery>
            <div
                class="image"
                v-for="(image, imageIndex) in images"
                :key="imageIndex"
                @click="index = imageIndex"
                :style="{
                    backgroundImage: 'url(' + image + ')',
                    width: '600px',
                    height: '200px',
                    backgroundPosition: 'top',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover'
                }">
            </div>
        </div>
    </div>
</template>

<script>
    import Gallery from '../components/gallery.vue';
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
</style>
