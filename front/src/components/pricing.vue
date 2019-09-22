<template>
    <div class="pricing-con">
        <div class="item nightly">
            <h4 class="price">Nightly</h4>
            <h5 class="duration">300k</h5>
        </div>
        <div class="item weekly">
            <h4 class="price">Weekly</h4>
            <h5 class="duration">2 million</h5>
        </div>
        <div class="item monthly">
            <h4 class="price">Monthly</h4>
            <h5 class="duration">7 million</h5>
        </div>
    </div>
</template>
<script>
export default {
    name: 'pricing'
}
</script>
<style lang="sass" scoped>
.pricing-con
    display: flex
    flex-direction: column
    background-color: $light-background
    width: 100%
    padding: 40px
.item
    display: flex
    flex-direction: row
    align-items: center
    justify-content: center
    .price
        font-size: 4em
        display: flex
        justify-content: flex-end
        width: 300px
    .duration
        font-size: 4em
        padding-left: 30px
        color: $tertiary
        display: flex
        justify-content: flex-start
        width: 300px
</style>