<template>
    <div class="block-con" :class="imgleft ? 'makerow' : 'reverse'" :style="{ backgroundColor: background }">
        <div class="img-con" @click="routeaway">
            <img :src="imgsrc" />
        </div>
        <div class="text-con">
            <h2 :style="textdark ? { color: '#3F3F3C' } : { color: 'white' }" :class="textdark ? 'after-col' : ''">{{ texttitle }}</h2>
            <p :style="textdark ? { color: '#3F3F3C' } : { color: 'white' }" v-html="textbody"></p>
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
            background: String,
            textdark: Boolean,
            routeto: String,
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
            routeaway() {
                this.$router.push({ path: this.routeto })
            }
        },
        computed: {
        }
    }
</script>

<style lang="sass" scoped>
    .makerow
        flex-direction: row
        @media (min-width: 0px) and (max-width: 980px)
            flex-direction: column-reverse
    .reverse
        flex-direction: row-reverse
        @media (min-width: 0px) and (max-width: 980px)
            flex-direction: column-reverse
    .block-con
        display: flex
        align-items: center
        justify-content: center
        padding: 30px 150px
        width: 100%
        @media (min-width: 0px) and (max-width: 540px)
            padding: 10px
    .img-con
        width: 48%
        @media (min-width: 0px) and (max-width: 980px)
            width: 80%
        @media (min-width: 0px) and (max-width: 540px)
            width: 98%
        img
            width: 100%
            transition: all 0.8s ease
            &:hover
                transform: scale(0.99)
                cursor: pointer
                transition: all 0.8s ease
    .text-con
        width: 45%
        padding: 20px
        @media (min-width: 540px) and (max-width: 980px)
            width: 80%
        @media (min-width: 0px) and (max-width: 540px)
            width: 98%
            padding: 5px
        h2
            color: $primary
            font-size: 4em
            font-weight: bold
            letter-spacing: 4px
            display: flex
            flex-direction: column
            @media (min-width: 0px) and (max-width: 540px)
                font-size: 2.2em
            @media (min-width: 540px) and (max-width: 780px)
                font-size: 3em
            &:after
                position: relative
                content: ""
                height: 3px
                width: 55px
                background-color: $font-dark
                top: 5px
                left: 3px
                @media (min-width: 0px) and (max-width: 520px)
                    width: 25px
        .after-col
            &:after
                background-color: $highlight !important
        p
            color: $font-light
            padding: 0 20px 0 40px
            font-family: 'Open Sans', sans serif
            @media (min-width: 0px) and (max-width: 540px)
                padding: 0 10px 0 10px
</style>
''