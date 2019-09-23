<template>
    <div class="block-con" :class="imgleft ? 'makerow' : 'reverse'" :style="{ backgroundColor: background }">
        <div class="img-con" @click="routeaway">
            <img :src="imgsrc" /> 
        </div>
        <div class="text-con" >
            <h2 :style="{ color: 'white' }">{{ texttitle }}</h2>
            <p :style="{ color: 'white' }">{{ textbody }}</p>
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
        padding: 70px
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
            border: 1px solid $secondary
            transition: all 0.8s ease
            &:hover
                transform: scale(0.98)
                cursor: pointer
                transition: all 0.8s ease
    .text-con
        width: 45%
        padding: 30px
        @media (min-width: 540px) and (max-width: 980px)
            width: 80%
        @media (min-width: 0px) and (max-width: 540px)
            width: 98%
        h2
            color: $primary
            font-size: 4em
            font-weight: bold
            letter-spacing: 4px
            display: flex
            flex-direction: column
            @media (min-width: 0px) and (max-width: 540px)
                font-size: 2.5em
            // -webkit-text-fill-color: white
            // -webkit-text-stroke-width: 2.5px
            // -webkit-text-stroke-color: $primary
            &:after
                position: relative
                content: ""
                height: 3px
                width: 55px
                background-color: $font-dark
                top: 5px
                left: 3px
        p
            color: $font-light
            padding: 0 20px 0 70px
            font-family: 'Open Sans', sans serif
            @media (min-width: 0px) and (max-width: 540px)
                padding: 0 10px 0 30px
</style>
''