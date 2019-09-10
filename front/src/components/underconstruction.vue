<template>
    <div class="construction-con">
        <div class="hero-con">
            <h1 class="massive">&#64;RONIN</h1>
            <h3>Co-living at its best.</h3>
            <h5>This site is currently under construction.</h5>
            <p>&#64;RONIN is a co-living Villa in <a @click="bottom">Canggu, Bali</a>.</p>
            <p>We have created an environment that drives productivity and provides the social element missing from a lot of nomads working adventures.</p>
            <p>Excellent internet, clean living spaces, helpful staff, comfortable chairs, a kitchen that encourages cooking and excellent people.</p>
            <p>If you would like to talk to us about taking a room or a desk @RONIN contact us on the whatsapp number below.</p>
            <h2>+62 812 384 114 64</h2>
        </div>
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
        <gmap-map
            :center="{ lat: -8.638259, lng: 115.150751}"
            :zoom="14"
            style="width: 100%; height: 600px">
            <gmap-marker
                :key="index"
                :position="{ lat: -8.638259, lng: 115.150751}"
                :clickable="true"
                :draggable="true">
            </gmap-marker>
        </gmap-map>
    </div>
</template>

<script>
    import { NODE } from '../axios'
    import Gallery from '../components/gallery.vue';
    export default {
        name: 'underconstruction',
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
            bottom () {
                window.scrollTo(0, 999999)
            },
            submit() {
                if (this.email === '') {
                    this.message = 'you need to enter an email'
                } else {
                    NODE.post('/api/subscribe', this.email)
                        .then(() => {
                            this.message = "We'll be in touch soon!"
                        })
                        .catch(() => {
                            this.message = "Something went wrong, try again later"
                        })
                }
            }
        },
    }
</script>
<style lang="sass" scoped>
    .hero-con
        width: 95%
        display: flex
        align-items: center
        justify-content: center
        flex-direction: column
        text-align: center
        margin-left: auto
        margin-right: auto
        // background: url('https://atronin.space/images/social.jpg')
        // height: 100vh
        // background-position: top
        // background-repeat: no-repeat
        // background-size: cover
        color: $link
    .construction-con
        width: 100%
        display: flex
        align-items: center
        justify-content: center
        flex-direction: column
        text-align: center
    .massive
        width: 90%
        margin-left: auto
        margin-right: auto
        font-size: 10em
        color: $primary
        overflow: hidden
        padding: 40px 0
        @media (min-width: 0px) and (max-width: 1280px)
            font-size: 10em
        @media (min-width: 0px) and (max-width: 780px)
            font-size: 5em
        .letter
            display: inline-block
            line-height: 1em
    h3
        color: $secondary
    h5
        color: $tertiary
    p
        color: $font
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
