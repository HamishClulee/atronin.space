<template>
    <div class="page-con">
        <h1>The Villa</h1>
        <h3>Layout</h3>
        <p>
            Set out over two levels, with four rooms wrapped around the pool on the ground 
            floor and two rooms on the top floor that share a sunny balcony.
        </p>
        <threeimagerow
            :paths="[
                'downstairsgarden.jpg',
                'downstairspool.jpg',
                'fromgate.png',
            ]">
        </threeimagerow>    
        <h3>Common Areas</h3>
        <p>
            The main common area is on the first floor. It's fully enclosed and has aircon and a fan.
            The room has a co-working space with large desks and comfortable chairs, 
            a sitting area with a big screen smart TV(netflix included), and the kitchen.
        </p>
        <threeimagerow
            :paths="[
                'social4.jpg',
                'kitchen.jpg',
                'work2.jpg',
            ]">
        </threeimagerow>
        <h3>The Rooms</h3>
        <p>
            @RONIN has six rooms of varying size.
            All rooms have ensuites and are cleaned daily, and deep cleaned once per week.
        </p>
        <threeimagerow
            :paths="[
                'room4full.jpg',
                'room6couchandbed.jpg',
                'Room2BedWardrobe.png',
            ]">
        </threeimagerow>
    </div>
</template>

<script>
import threeimagerow from '../components/threeimagerow.vue'
export default {
    name: 'thevilla',
    components: {
        threeimagerow,
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
.page-con
    margin-top: 120px
    width: 75%
    margin-left: auto
    margin-right: auto
h1
    width: auto
    border-bottom: 1px solid $highlight
    padding-bottom: 15px
</style>
