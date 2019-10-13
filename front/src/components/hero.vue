<template>
    <div class="hero-con" id="replace">
        <h1 class="massive">WE KNOW CO-DOING</h1>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'hero',
        components: {
        },
        data () {
            return {
            }
        },
        mounted () {
        },
        methods: {
        },
        computed: {
            ...mapState(['window_width'])
        }
    }
</script>

<style lang="sass" scoped>
.hero-con
    .massive
        color: $light-background
        font-size: 10em
        width: 45%
        margin-left: 35px
        font-weight: bold
        text-shadow: 2px 1px 0px $dark-background
        @media (min-width: 540px) and (max-width: 980px)
            margin-top: 20vh
            font-size: 7em
        @media (min-width: 0px) and (max-width: 540px)
            margin-top: 20vh
            font-size: 4em
    margin-top: 70px
    width: 100%
    background: url('https://atronin.space/images/social.jpg')
    height: calc(100vh - 70px)
    background-position: top
    background-repeat: no-repeat
    background-size: cover
    display: flex
</style>
