<template>
    <footer class="footer-con">

        <div class="left-con">
            <h4>SUBSCRIBE TO OUR NEWSLETTER</h4>
            <p class="subscribe-validation-message" :class="{ 'subscribe-error' : subscribeError  }">{{ getSubscribeValidationMessage }} {{ validationMessage }}</p>
            <div class="input-con">
                <input class="input" type="text" placeholder="Enter your email..." v-model="localEmail">
                <button class="button" @click="handleSubscribe" :class="{ 'is-loading' : subscribe_in_progress }" :disabled="subscribe_in_progress">SUBSCRIBE</button>
            </div>
        </div>

        <div class="right-con">
            <h1>GET IN TOUCH</h1>
            <p><strong>E_</strong> info@atronin.space</p>
            <p><strong>P_</strong> +62 812 384 114 64</p>
            <p>Jalan Raya Canggu, Gang Pratama1, Canggu, Bali.</p>
        </div>

    </footer>
</template>
<script>
import { mapActions, mapGetters, mapState } from 'vuex'
export default {
    name: 'rfooter',
    data () {
        return {
            localEmail: '',
            subscribeError: false,
            validationMessage: ''
        }
    },
    methods: {
        ...mapActions(['NEW_SUBSCRIPTION_EMAIL']),
        handleSubscribe () {
            this.validationMessage = ''
            this.subscribeError = false
            /* eslint-disable */
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            if (!re.test(String(this.localEmail).toLowerCase())) {
                this.validationMessage = 'That looks like an invalid email address! Try again...'
                this.subscribeError = true
            } else {
                this.NEW_SUBSCRIPTION_EMAIL(this.localEmail)
                this.localEmail = ''
                this.subscribeError = false
            }
        }
    },
    computed: {
        ...mapGetters(['getSubscribeValidationMessage']),
        ...mapState(['subscribe_in_progress']),
    }
}
</script>
<style lang="sass" scoped>
.footer-con
    width: 100%
    color: $light-background
    background: url('https://atronin.space/images/footer.png')
    height: 50vh
    background-position: top
    background-repeat: no-repeat
    background-size: cover
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
input
    background-color: transparent
    width: 60%
    position: relative
    top: 6px
.button
    background-color: $highlight
    color: $light-background
.left-con
    width: 49%
.right-con
    width: 49%
</style>