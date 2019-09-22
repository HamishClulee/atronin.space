<template>
    <div class="hero-con">
        <h1 class="massive">WE KNOW CO-DOING</h1>
        <div class="enter-con" v-scroll-to="'#home-top'">
            <h5>ENTER</h5>
            <div class="triangle">
                <div class="over-triangle"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'hero',
        components: {
        },
        data () {
            return {
            }
        },
        mounted () {
        },
        methods: {
            masuk() {
                window.scrollBy(0, -1000);
            }
        },
        computed: {
        }
    }
</script>

<style lang="sass" scoped>
.hero-con
    .massive
        color: $light-background
        font-size: 10em
        width: 45%
        margin-left: 35px
        font-weight: bold
        text-shadow: 2px 1px 0px $dark-background
    margin-top: 70px
    width: 100%
    background: url('https://atronin.space/images/hero.jpg')
    height: calc(100vh - 70px)
    background-position: top
    background-repeat: no-repeat
    background-size: cover
    display: flex
.enter-con
    // position: absolute
    // bottom: 20px
    // left: 50vw
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    animation: bounce 1s 3
    cursor: pointer
    h5
        color: $light-background
.triangle
    width: 0 
    height: 0 
    border-left: 10px solid transparent
    border-right: 10px solid transparent
    border-top: 10px solid $light-background
.over-triangle
    width: 0
    height: 0
    border-left: 5px solid transparent
    border-right: 5px solid transparent
    border-top: 5px solid white
    position: relative
    top: -10px
    left: -5px

@-webkit-keyframes bounce 
    0%, 20%, 50%, 80%, 100%
        -webkit-transform: translateY(0)
    40%
        -webkit-transform: translateY(-30px) 
    60%
        -webkit-transform: translateY(-20px)
 
@keyframes bounce 
    0%, 20%, 50%, 80%, 100%
        transform: translateY(0)
    40%
        transform: translateY(-30px)
    60%
        transform: translateY(-20px)

</style>
