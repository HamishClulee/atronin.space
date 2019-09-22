<template>
    <div class="navbar-con">
        <div class="navbar-left">
            <div class="logo-con">
                <img src="https://atronin.space/images/logo-small-dark.png" />
            </div>
        </div>
        <div class="navbar-right">
            <div class="text-item">
                <router-link :to="{ path: '/colive'}">colive</router-link>
            </div>
            <div class="text-item">
                <router-link :to="{ path: '/cowork'}">cowork</router-link>
            </div>
            <div class="text-item">
                <router-link :to="{ path: '/events'}">events</router-link>
            </div>
            <div class="text-item">
                <router-link :to="{ path: '/pricing'}">pricing</router-link>
            </div>
            <div class="text-item">
                <router-link :to="{ path: '/book'}">book</router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="sass" scoped>
.navbar-con, .navbar-left, .navbar-right
    display: flex
    flex-direction: row
    background-color: $dark-background
.navbar-con

.navbar-right
    align-items: center
    justify-content: flex-end
    width: 100%
    margin-right: 20px
.logo-con
    height: 80px
    display: flex
    align-items: center
    img
        height: 50px
.text-item
    padding: 0 20px
</style>