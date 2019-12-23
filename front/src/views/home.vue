<template>
    <div class="home-con">
        <hero></hero>
        <div class="home-cont">
            <h1>YOU@RONIN</h1>
            <p>
                Ronin is a co-work-co-live villa in Canggu. We are focused on providing the best possible experience for 
                digital nomads. Made by Nomads, for Nomads.
            </p>
            <p>
                @RONIN, A six
                bedroom villa, filled with awesome people, set up for co-working. 100Mbps fiberoptic internet, 
                lots of desk space and comfortable chairs. All rooms are well furnished and spacious with private bathrooms. The kitchen is enclosed and fully equiped.
                We've made the environment, now you can focus on getting shit done.
            </p>
            <div class="cta-con">
                <router-link 
                    tag="button"
                    :to="{ path: '/book'}"
                    class="button cta">
                    book A ROOM
                </router-link>
            </div>
        </div>
        <imagetextblock
            :imgleft="true"
            imgsrc="https://atronin.space/images/outdoor9.jpg"
            texttitle="Co-Living"
            :textbody="body1"
            background="#212941"
            routeto="/gallery"
            alttag="The ground floor of the villa and pool">
        </imagetextblock>
        <imagetextblock
            :imgleft="false"
            imgsrc="https://atronin.space/images/social1.jpg"
            texttitle="The Villa"
            :textdark="true"
            :textbody="body2"
            background="#fff"
            routeto="/thevilla"
            alttag="digital nomads working in our co-working space">
        </imagetextblock>

        <imagetextblock
            :imgleft="true"
            imgsrc="https://atronin.space/images/bbq13.jpg"
            texttitle="Events"
            :textbody="body3"
            background="#813754"
            routeto="/events"
            alttag="People socialise around the pool at a bbq">
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
                body1: `<p>Live where you work.</p><p>No commute, no office politics, just great people and no barriers to achieving your goals.</p><p>Need a gym? Bali MMA, CrossFit Wanderlust and Nirvana Strength are less than 5 mins away from the Villa.</p>`,
                body2: `<p>Spacious rooms, clean ensuite bathrooms, quality furnishings.</p><p>Take a dip in the pool!</p><p>Cook in comfort in an enclosed kitchen, which has everything you need, including ample bench space.</p>`,
                body3: `<p>BBQ's around the pool?</p><p>Tours with one of our staff members?</p><p>Incredible networking potential?</p><p>Cooking classes for awesome local dishes?</p><p>We do it all.</p>`,
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
