<template>
    <div class="tag-select">
        <div class="tag" v-for="(v, n, i) in tags" :key="i" @click="tagselected(n)">
            #{{ v }}
        </div>
    </div>
</template>
<script>
import _manifest from '../imagemanifest.js'
export default {
    name: 'tagselect',
    props: {
    },
    data () {
        return {
            tags: _manifest.TAGS,
        }
    },
    methods: {
        tagselected(n) {
            this.$parent.$emit('tag-selected', n)
        }
    },
    computed: {
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
    width: 70%
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
</style>