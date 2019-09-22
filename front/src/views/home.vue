<template>
    <div class="home-con">
        <hero></hero>
        <div class="home-cont">
            <h1>YOU@RONIN</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <imagetextblock :imgleft="true" imgsrc="https://atronin.space/images/work1.jpg" texttitle="Co Live" :textbody="body1"></imagetextblock>
        <imagetextblock :imgleft="false" imgsrc="https://atronin.space/images/social1.jpg" texttitle="Co Work" :textbody="body2"></imagetextblock>
        <imagetextblock :imgleft="true" imgsrc="https://atronin.space/images/social4.jpg" texttitle="Events" :textbody="body3"></imagetextblock>
        <pricing></pricing>
        <rfooter></rfooter>
    </div>
</template>

<script>
    import hero from '../components/hero.vue'
    import imagetextblock from '../components/imagetextblock.vue'
    import pricing from '../components/pricing.vue'
    import rfooter from '../components/rfooter.vue'
    export default {
        name: 'home',
        components: {
            hero,
            imagetextblock,
            pricing,
            rfooter,
        },
        data () {
            return {
                body1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                body2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                body3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
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
    .home-con
        width: 100%
        display: flex
        flex-direction: column
        align-items: center
        justify-content: center
    .home-cont
        margin-top: 40px
        margin-bottom: 50px
        h1
            margin-bottom: 30px
            font-size: 5em
            color: $font
            font-weight: bold
            letter-spacing: 4px
        width: 70%
        margin-left: auto
        margin-right: auto
        text-align: center
</style>
