<template>
  <div class="god-div">
      <div v-if="isauthed">
          <navbar></navbar>
          <router-view></router-view>
      </div>
      <underconstruction v-else></underconstruction>
      <rfooter></rfooter>
  </div>
</template>

<script>
    import underconstruction from './components/underconstruction'
    import navbar from './components/navbar.vue'
    import rfooter from './components/rfooter.vue'
    import { mapActions, mapGetters, mapMutations } from 'vuex'
    export default {
        name: 'app',
        components: {
            underconstruction,
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
            this.SESSION_CHALLENGE()
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
            ...mapActions(['SESSION_CHALLENGE']),
            ...mapMutations(['SET_WINDOW_WIDTH']),
            widthChanged () {
                this.SET_WINDOW_WIDTH(window.innerWidth)
            },
        },
        computed: {
            ...mapGetters(['isauthed'])
        }
    }
</script>
<style lang="sass" scoped>
    .god-div
        overflow-x: hidden !important
</style>
