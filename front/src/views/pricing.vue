<template>
    <div class="page-con">
        <h1>pricing</h1>
        <blockpricing :style="{ minHeight: '60vh' }"></blockpricing>
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

<style lang="sass" scoped></style>
