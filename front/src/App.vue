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
    import { mapActions, mapGetters } from 'vuex'
    export default {
        name: 'app',
        components: {
            underconstruction,
            navbar,
            rfooter,
        },
        created() {
            this.SESSION_CHALLENGE()
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
