<template>
    <div class="page-con">
        <h1>Words and images coming soon!</h1>
    </div>
</template>

<script>
    export default {
        name: 'thevilla',
        data () {
            return {
                currentId: null,
                items: [
                    {
                        id:'someid1',
                        src: 'https://atronin.space/images/IMG-20190516-WA0037.jpg',
                        thumbnail: 'https://atronin.space/images/IMG-20190516-WA0037.jpg',
                    },
                    {
                        id:'someid2',
                        src: 'https://atronin.space/images/IMG-20190516-WA0042.jpg',
                        thumbnail: 'https://atronin.space/images/IMG-20190516-WA0042.jpg',
                    },
                    {
                        id:'someid3',
                        src: 'https://atronin.space/images/IMG-20190516-WA0048.jpg',
                        thumbnail: 'https://atronin.space/images/IMG-20190516-WA0048.jpg'
                    },
                ]
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
h1
    padding-top: 100px
</style>
