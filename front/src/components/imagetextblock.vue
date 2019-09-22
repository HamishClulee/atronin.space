<template>
    <div class="block-con" :class="imgleft ? 'makerow' : 'reverse'">
        <div class="img-con">
            <img :src="imgsrc" /> 
        </div>
        <div class="text-con">
            <h2>{{ texttitle }}</h2>
            <p>{{ textbody }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'imagetextblock',
        props: {
            imgleft: Boolean,
            texttitle: String,
            textbody: String,
            imgsrc: String,
        },
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
        }
    }
</script>

<style lang="sass" scoped>
    .makerow
        flex-direction: row
    .reverse
        flex-direction: row-reverse
    .block-con
        display: flex
        align-items: center
        justify-content: center
        margin-bottom: 100px
    .img-con
        width: 48%
        img
            width: 100%
    .text-con
        width: 45%
        padding: 30px
        h2
            color: $primary
            font-size: 4em
            font-weight: bold
            letter-spacing: 4px
            -webkit-text-fill-color: white
            -webkit-text-stroke-width: 2.5px
            -webkit-text-stroke-color: $primary
        p
            color: $font-light
            padding: 0 30px
</style>
''