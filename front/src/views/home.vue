<template>
    <div class="home-con">
        <hero></hero>
        <div class="home-cont">
            <h1>YOU@RONIN</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
        <imagetextblock
            :imgleft="true"
            imgsrc="https://atronin.space/images/work1.jpg"
            texttitle="Co-Living"
            :textbody="body1"
            background="#212941"
            routeto="/colive">
        </imagetextblock>
        <imagetextblock
            :imgleft="false"
            imgsrc="https://atronin.space/images/social1.jpg"
            texttitle="Co-Working"
            :textbody="body2"
            background="#4EAA91"
            routeto="/cowork">
        </imagetextblock>
        <imagetextblock
            :imgleft="true"
            imgsrc="https://atronin.space/images/social4.jpg"
            texttitle="Events"
            :textbody="body3"
            background="#813754"
            routeto="/events">
        </imagetextblock>
        <blockpricing></blockpricing>
        <gmap-map
            :center="{ lat: -8.638259, lng: 115.150751}"
            :zoom="14"
            style="width: 100%; height: 300px">
            <gmap-marker
                :position="{ lat: -8.638259, lng: 115.150751}"
                :clickable="true"
                :draggable="true">
            </gmap-marker>
        </gmap-map>
    </div>
</template>

<script>
    import hero from '../components/hero.vue'
    import imagetextblock from '../components/imagetextblock.vue'
    import blockpricing from '../components/blockpricing.vue'
    export default {
        name: 'home',
        components: {
            hero,
            imagetextblock,
            blockpricing,
        },
        data () {
            return {
                body1: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                body2: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                body3: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
            font-size: 4.5em
            color: $font
            font-weight: bold
            letter-spacing: 4px
            @media (min-width: 0px) and (max-width: 540px)
                font-size: 2em
            @media (min-width: 540px) and (max-width: 780px)
                font-size: 3em
        width: 70%
        @media (min-width: 0px) and (max-width: 540px)
            width: 90%
        margin-left: auto
        margin-right: auto
        text-align: center
</style>
