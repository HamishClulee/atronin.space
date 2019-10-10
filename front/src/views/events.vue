<template>
    <div class="page-con">
        <gallerymodal v-if="showgallery" :index="index" :paths="paths"></gallerymodal>
        <h1>Events</h1>
        <h3>BBQ's</h3>
        <p>
            Every two weeks we run a house BBQ, some food is provided, friends are encouraged to join
            and everyone is encouraged to bring some food.
        </p>
        <p>
            The BBQ has been a great success, everyone having a good time together,
            which helps give the Villa a warm and social feel.
        </p>
        <threeimagerow
            :row="0"
            :paths="[paths[0], paths[1], paths[2]]">
        </threeimagerow>
        <threeimagerow
            :row="0"
            :paths="[paths[3], paths[4], paths[5]]">
        </threeimagerow>
        <threeimagerow
            :row="2"
            :paths="[paths[6], paths[7], paths[8]]">
        </threeimagerow>
        <h3>Other Events - Coming Soon!</h3>
        <p>
            Over the next month we are going to try out cooking classes and tours, 
            and may add games nights or outings based on interest.
        </p>
    </div>
</template>

<script>
import threeimagerow from '../components/threeimagerow.vue'
import gallerymodal from '../components/gallerymodal.vue'
export default {
    name: 'events',
    components: {
        threeimagerow, gallerymodal,
    },
    data () {
        return {
            showgallery: false,
            index: 0,
            paths: [
                'bbq1.jpg',
                'bbq2.jpg',
                'bbq3.jpg',
                'bbq4.jpg',
                'bbq5.jpg',
                'bbq6.jpg',
                'bbq7.jpg',
                'bbq8.jpg',
                'bbq9.jpg',
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
