<template>
    <div class="tag-select">
        <div
            class="tag"
            v-show="active === null || active === n"
            v-for="(v, n, i) in $manifest.TAGS"
            :key="i"
            @click="tagselected(n)">
                #{{ v }}
        </div>
        <button
            class="button clear-tags"
            v-if="active !== null"
            @click="tagselected(null)">
                reset
        </button>
    </div>
</template>
<script>
export default {
    name: 'tagselect',
    data () {
        return {
            active: null
        }
    },
    methods: {
        tagselected(n) {
            this.active = n
            this.$parent.$emit('tag-selected', n)
        }
    }
}
</script>
<style lang="sass" scoped>
.tag-select
    display: flex
    flex-direction: row
    align-items: center
    justify-content: space-evenly
    flex-wrap: wrap
    width: 100%
    margin-left: auto
    margin-right: auto
.tag
    border: 1px solid $primary
    color: $highlight
    border-radius: 3px
    padding: 10px
    width: 100px
    display: flex
    align-items: center
    justify-content: center
    margin: 5px
    cursor: pointer
    @media (min-width: 0px) and (max-width: 520px)
        width: 60px
        padding: 5px
        font-size: 0.8em
        margin: 1px
.button.clear-tags
    width: 140px
    @media (min-width: 0px) and (max-width: 520px)
        width: 120px
        height: 32px
        line-height: 29px
        padding: 0
        font-size: 0.8em
        margin: 1px
</style>