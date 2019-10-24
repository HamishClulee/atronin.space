<template>
    <div class="page-con">
        <gallerymodal v-if="showgallery" :index="index" :images="images"></gallerymodal>
        <h1>Events</h1>
        <h3>BBQ's</h3>
        <p>
            Every two weeks we run the now legendary house BBQ, incredible food, awesome banter, best vibe ever.
        </p>
        <p>
            Some pics below, more on the <router-link :to="{ path: '/gallery'}">gallery page</router-link>.
        </p>
        <threeimagerow
            :row="0"
            :paths="[images[0], images[1], images[2]]">
        </threeimagerow>
        <threeimagerow
            :row="0"
            :paths="[images[3], images[4], images[5]]">
        </threeimagerow>
        <threeimagerow
            :row="2"
            :paths="[images[6], images[7], images[8]]">
        </threeimagerow>
        <threeimagerow
            :row="2"
            :paths="[images[9], images[10], images[11]]">
        </threeimagerow>
        <threeimagerow
            :row="2"
            :paths="[images[12], images[13], images[14]]">
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
            images: [
                'bbq10.jpg',
                'bbq11.jpg',
                'bbq12.jpg',
                'bbq13.jpg',
                'bbq14.jpg',
                'bbq15.jpg',
                'bbq16.jpg',
                'bbq17.jpg',
                'bbq18.jpg',
                'bbq19.jpg',
                'bbq20.jpg',
                'bbq21.jpg',
                'bbq22.jpg',
                'bbq23.jpg',
                'bbq24.jpg',
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
