<template>
    <div class="pricing-con">
        <blockpricing></blockpricing>
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
    margin-top: 70px
</style>
