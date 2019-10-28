<template>
    <div class="block-con">
        <div class="pricing-con">
            <div class="item nightly">
                <h4 class="duration">Nightly</h4>
                <h5 class="price">300k</h5>
            </div>
            <div class="item weekly">
                <h4 class="duration">Weekly</h4>
                <h5 class="price">2 million</h5>
            </div>
            <div class="item monthly">
                <h4 class="duration">Monthly</h4>
                <h5 class="price">7 million</h5>
            </div>
        </div>
        <h5>All our rooms have ensuites.</h5>
        <h5>All rooms are cleaned daily with new linens every few days</h5>
        <div class="cta-con">
            <router-link 
                tag="button"
                :to="{ path: '/book'}"
                class="button cta">
                book a room
            </router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'blockpricing'
}
</script>
<style lang="sass" scoped>
.cta-con
    width: 100%
    display: flex
    align-items: center
    justify-content: center
    .button
        width: 50%
        min-width: 200px
        margin: 15px auto
        background-color: $highlight
        color: $light-background
.block-con
    padding-top: 40px
    padding-bottom: 40px
    text-align: center
    background-color: white
    width: 100%
.pricing-con
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    background-color: white
    width: 100%
    margin-left: auto
    margin-right: auto
    @media (min-width: 0px) and (max-width: 480px)
        flex-direction: column
.item
    display: flex
    width: 25%
    flex-direction: column
    align-items: center
    justify-content: center
    background-color: white
    border: 2px solid lighten($font, 60)
    border-radius: 5px
    margin: 5px
    padding: 50px 10px
    @media (min-width: 0px) and (max-width: 480px)
        width: 80%
    .price
        font-size: 2em
        color: $tertiary
        display: flex
        @media (min-width: 0px) and (max-width: 740px)
            font-size: 1.3em
    .duration
        font-size: 3em
        display: flex
        flex-direction: column
        &:after
            position: relative
            content: ""
            height: 2px
            width: 35px
            background-color: $primary
            top: 5px
            left: 2px
        @media (min-width: 0px) and (max-width: 740px)
            font-size: 1.2em
</style>