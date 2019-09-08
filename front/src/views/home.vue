<template>
    <div class="home-con">
        <h1>Welcome home</h1>
        <div>
            <!-- <img :src="" /> -->
            <gallery :images="images" :index="index" @close="index = null"></gallery>
            <div
                class="image"
                v-for="(image, imageIndex) in images"
                :key="imageIndex"
                @click="index = imageIndex"
                :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }">
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
                    "require('../assets/social.jpg')"
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
