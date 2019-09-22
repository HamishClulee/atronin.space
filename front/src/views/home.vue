<template>
    <div class="home-con">
        <hero></hero>
        <div id="home-top"></div>
    </div>
</template>

<script>
    import hero from '../components/hero.vue'
    export default {
        name: 'home',
        components: {
            hero
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
        }
    }
</script>

<style lang="sass" scoped>
    .home-con
        width: 100%
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
</style>
