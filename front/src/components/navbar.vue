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

</style>