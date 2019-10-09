<template>
    <div class="page-con">
        <h1>Events</h1>
        <p>
            Some of our BBQ events are shown below. 
            Over the next month we are going to try out cooking classes and tours, 
            and may add games nights or outings based on interest.
        </p>
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
            :paths="[
                'bbq1.jpg',
                'bbq2.jpg',
                'bbq3.jpg',
            ]">
        </threeimagerow>
        <threeimagerow
            :paths="[
                'bbq4.jpg',
                'bbq5.jpg',
                'bbq6.jpg',
            ]">
        </threeimagerow>
        <threeimagerow
            :paths="[
                'bbq7.jpg',
                'bbq8.jpg',
                'bbq9.jpg',
            ]">
        </threeimagerow>
        <h3>Other Events - Coming Soon!</h3>
        <p>The main common area is on the first floor. It's fully enclosed and has aircon and a fan.
            The room has a co-working space with large desks and comfortable chairs, 
            a sitting area with a big screen smart TV(netflix included), and the kitchen.
        </p>
    </div>
</template>

<script>
import threeimagerow from '../components/threeimagerow.vue'
export default {
    name: 'events',
    components: {
        threeimagerow
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
