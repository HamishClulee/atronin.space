<template>
<div class="god-div">
    <navbar></navbar>
    <router-view></router-view>
    <rfooter></rfooter>
</div>
</template>

<script>
    import navbar from './components/navbar.vue'
    import rfooter from './components/rfooter.vue'
    import { mapMutations } from 'vuex'
    export default {
        name: 'app',
        components: {
            navbar,
            rfooter,
        },
        data() {
            return {
                showgallery: false,
                index: 0,
            }
        },
        created() {
            // this.SESSION_CHALLENGE()
        },
        mounted() {
            window.addEventListener('resize', this.widthChanged)
            this.widthChanged()
            this.$root.$on('close-modal', () => {
                this.showgallery = false
            })
            this.$root.$on('open-gallery', (index) => {
                this.index = index
                this.showgallery = true
            })
        },
        methods: {
            // ...mapActions(['SESSION_CHALLENGE']),
            ...mapMutations(['SET_WINDOW_WIDTH']),
            widthChanged () {
                this.SET_WINDOW_WIDTH(window.innerWidth)
            },
        },
        computed: {
            // ...mapGetters(['isauthed'])
        }
    }
</script>
<style lang="sass" scoped>
    .god-div
        overflow-x: hidden !important
</style>
