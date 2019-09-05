<template>
    <div class="construction-con">
        <h1 class="massive">@RONIN</h1>
    </div>
</template>

<script>
    import { NODE } from '../axios'
    export default {
        name: 'underconstruction',
        data () {
            return {
                email: '',
                message: ''
            }
        },
        mounted () {
        },
        methods: {
            submit() {
                if (this.email === '') {
                    this.message = 'you need to enter an email'
                } else {
                    NODE.post('/api/subscribe', this.email)
                        .then(() => {
                            this.message = "We'll be in touch soon!"
                        })
                        .catch(() => {
                            this.message = "Something went wrong, try again later"
                        })
                }
            }
        },
    }
</script>
<style lang="sass" scoped>
    .construction-con
        height: 100vh
        display: flex
        align-items: center
        justify-content: center
        flex-direction: row
        text-align: center
        color: $link
        @media (min-width: 0px) and (max-width: 780px)
            flex-direction: column
    .massive
        width: 90%
        margin-left: auto
        margin-right: auto
        font-size: 15em
        color: $highlight
        overflow: hidden
        padding: 40px 0
        @media (min-width: 0px) and (max-width: 620px)
            font-size: 1.6em
        .letter
            display: inline-block
            line-height: 1em
</style>
