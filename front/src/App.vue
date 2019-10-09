<template>
  <div class="god-div">
      <div v-if="isauthed">
          <navbar></navbar>
          <gallerymodal v-if="showgallery" :index="index"></gallerymodal>
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
    import gallerymodal from './components/gallerymodal.vue'
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: 'app',
        components: {
            underconstruction,
            navbar,
            rfooter,
            gallerymodal,
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
        },
        computed: {
            ...mapGetters(['isauthed'])
        },
    }
</script>
<style lang="sass" scoped>
    .god-div
        overflow-x: hidden !important
</style>
