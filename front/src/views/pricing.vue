<template>
    <div class="pricing-con">
        <blockpricing :style="{ height: '60vh' }"></blockpricing>
    </div>
</template>

<script>
import blockpricing from '../components/blockpricing.vue'
    export default {
        name: 'pricing',
        components: {
            blockpricing,
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
.pricing-con
    padding-top: 20vh
    background-color: $light-background
</style>
