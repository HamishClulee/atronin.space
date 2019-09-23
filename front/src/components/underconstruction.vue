<template>
    <div class="construction-con">
        <div class="hero-con">
            <div class="logo-con">
                <img src="https://atronin.space/images/logo-large-light.png" />
            </div>
            <h5>This site is currently under construction.</h5>
            <p>&#64;RONIN is a co-living Villa in <a @click="bottom">Canggu, Bali</a>.</p>
            <p>We have created an environment that drives productivity and provides the social element missing from a lot of nomads working adventures.</p>
            <p>Excellent internet, clean living spaces, helpful staff, comfortable chairs, a kitchen that encourages cooking and excellent people.</p>
            <p>If you would like to talk to us about taking a room or a desk @RONIN contact us on the whatsapp number below.</p>
            <h2>+62 812 384 114 64</h2>
        </div>
        <gmap-map
            :center="{ lat: -8.638259, lng: 115.150751}"
            :zoom="14"
            style="width: 100%; height: 600px">
            <gmap-marker
                :position="{ lat: -8.638259, lng: 115.150751}"
                :clickable="true"
                :draggable="true">
            </gmap-marker>
        </gmap-map>
    </div>
</template>

<script>
    import { NODE } from '../axios'
    export default {
        name: 'underconstruction',
        components: {
        },
        data () {
            return {
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
    .logo-con
        width: 100%
        margin-left: auto
        margin-right: auto
        img
            width: 50%
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
        background-color: $light-background
    .massive
        width: 90%
        margin-left: auto
        margin-right: auto
        font-size: 10em
        color: $primary
        overflow: hidden
        padding: 40px 0
        @media (min-width: 0px) and (max-width: 1280px)
            font-size: 8em
        @media (min-width: 0px) and (max-width: 780px)
            font-size: 4em
        .letter
            display: inline-block
            line-height: 1em
    h3
        color: $secondary
    h5
        color: $tertiary
        margin-top: -2vw
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
