<template>
    <footer class="footer-con">

        <div class="right-con">
            <h2>GET IN TOUCH</h2>
            <p><strong>E_</strong> info@atronin.space</p>
            <p><strong>P_</strong> +62 812 384 114 64</p>
            <p>Jalan Raya Canggu, Gang Pratama1, Canggu, Bali.</p>
        </div>

    </footer>
</template>
<script>
export default {
    name: 'rfooter',
    data () {
        return {
        }
    },
    methods: {
    },
    computed: {
    }
}
</script>
<style lang="sass" scoped>
.footer-con
    width: 100%
    color: $light-background
    background: url('https://atronin.space/images/footer.jpg')
    height: 50vh
    background-position: top
    background-repeat: no-repeat
    background-size: cover
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    @media (min-width: 0px) and (max-width: 740px)
        flex-direction: column
        height: auto
        padding-top: 40px
        padding-bottom: 40px
.input-con
    @media (min-width: 0px) and (max-width: 740px)
        flex-direction: column
input
    background-color: transparent
    width: 50%
    position: relative
    top: 6px
    @media (min-width: 0px) and (max-width: 740px)
        width: 90%
        font-size: 1.2em
        position: static
        margin-bottom: 5px
.button
    background-color: $highlight
    color: $light-background
    @media (min-width: 0px) and (max-width: 740px)
        width: 90%
        font-size: 1.2em
.left-con
    width: 49%
    @media (min-width: 0px) and (max-width: 740px)
        flex-direction: row
        width: 90%
.right-con
    width: 49%
    @media (min-width: 0px) and (max-width: 740px)
        flex-direction: row
        width: 90%
</style>