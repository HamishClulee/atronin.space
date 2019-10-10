<template>
    <div class="page-con">
        <gallerymodal v-if="showgallery" :index="index" :paths="paths"></gallerymodal>
        <h1>The Villa</h1>
        <h3>Layout</h3>
        <p>
            Set out over two levels, with four rooms wrapped around the pool on the ground 
            floor and two rooms on the top floor that share a sunny balcony.
        </p>
        <threeimagerow
            :row="0"
            :paths="[paths[0], paths[1], paths[2]]">
        </threeimagerow>    
        <h3>Common Areas</h3>
        <p>
            The main common area is on the first floor. It's fully enclosed and has aircon and a fan.
            The room has a co-working space with large desks and comfortable chairs, 
            a sitting area with a big screen smart TV(netflix included), and the kitchen.
        </p>
        <threeimagerow
            :row="0"
            :paths="[paths[3], paths[4], paths[5]]">
        </threeimagerow>
        <h3>The Rooms</h3>
        <p>
            @RONIN has six rooms of varying size.
            All rooms have ensuites and are cleaned daily, and deep cleaned once per week.
        </p>
        <threeimagerow
            :row="0"
            :paths="[paths[6], paths[7], paths[8]]">
        </threeimagerow>
    </div>
</template>

<script>
import threeimagerow from '../components/threeimagerow.vue'
import gallerymodal from '../components/gallerymodal.vue'
export default {
    name: 'thevilla',
    components: {
        threeimagerow, gallerymodal,
    },
    data () {
        return {
            index: 0,
            showgallery: false,
            paths: [
                'downstairsgarden.jpg',
                'downstairspool.jpg',
                'outdoor8.jpg',
                'social4.jpg',
                'living4.jpg',
                'living5.jpg',
                'room4full.jpg',
                'room6couchandbed.jpg',
                'room69.jpg',
            ]
        }
    },
    mounted () {
        this.$on('open-gallery', i => {
            this.index = i
            this.showgallery = true
        })
        this.$on('close-modal', () => {
            this.showgallery = false
        })
    },
    methods: {
    },
    computed: {
    }
}
</script>

<style lang="sass" scoped></style>
