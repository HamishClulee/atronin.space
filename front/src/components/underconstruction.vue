<template>
    <div class="construction-con">
        <!-- <div class="menu-con">
            <div class="menu-item">
                <router-link :to="{ name: 'live'}">live</router-link>
            </div>
            <div class="menu-item">
                <router-link :to="{ name: 'work'}">work</router-link>
            </div>
            <div class="menu-item">
                <router-link :to="{ name: 'play'}">play</router-link>
            </div>
        </div> -->
        <div class="hero-con">
            <h1 class="massive">&#64;RONIN</h1>
            <h5>&#64;浪人</h5>
        </div>

    </div>
</template>

<script>
    import { NODE } from '../axios'
    export default {
        name: 'underconstruction',
        data () {
            return {
                email: '',
                message: ''
            }
        },
        mounted () {
        },
        methods: {
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
        width: 100%
        display: flex
        align-items: center
        justify-content: center
        flex-direction: column
        text-align: center
        background: url('https://atronin.space/images/social.jpg')
        height: 100vh
        background-position: top
        background-repeat: no-repeat
        background-size: cover
        color: $link
    .menu-con
        width: 100%
        display: flex
        align-items: center
        justify-content: center
        flex-direction: row
        text-align: center
        height: 10vh
    .menu-item
        width: 33%
        border: 1px solid $highlight
        height: 10vh
        display: flex
        justify-content: center
        align-items: center
        text-align: center
        a
            font-size: 1.7em
            text-transform: capitalize
            color: $secondary
            font-family: $body-font
            letter-spacing: 2px
            display: flex
            justify-content: center
            flex-direction: row
            text-align: center
    .construction-con
        width: 100%
        display: flex
        align-items: center
        justify-content: center
        flex-direction: column
        text-align: center
        height: 100vh
    .massive
        width: 90%
        margin-left: auto
        margin-right: auto
        font-size: 10em
        color: $low-contrast
        overflow: hidden
        padding: 40px 0
        @media (min-width: 0px) and (max-width: 1280px)
            font-size: 10em
        @media (min-width: 0px) and (max-width: 780px)
            font-size: 5em
        .letter
            display: inline-block
            line-height: 1em
</style>
