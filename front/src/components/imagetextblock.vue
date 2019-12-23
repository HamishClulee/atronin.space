<template>
    <div class="block-con" :class="imgleft ? 'makerow' : 'reverse'" :style="{ backgroundColor: background }">
        <div class="img-con" @click="routeaway">
            <vueimage
                placeholder="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDM0Ljk2Mjc5OSAzNS42NjIwNTIiCiAgIGhlaWdodD0iMzUuNjYyMDUybW0iCiAgIHdpZHRoPSIzNC45NjI3OTltbSI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODAuODg2OTA5LC0xMTIuNTQ3NjIpIgogICAgIGlkPSJsYXllcjEiPgogICAgPHJlY3QKICAgICAgIHk9IjExMi41NDc2MiIKICAgICAgIHg9IjgwLjg4NjkwOSIKICAgICAgIGhlaWdodD0iMzUuNjYyMDUyIgogICAgICAgd2lkdGg9IjM0Ljk2Mjc5OSIKICAgICAgIGlkPSJyZWN0ODE1IgogICAgICAgc3R5bGU9Im9wYWNpdHk6MC43NjU5OTk5NTtmaWxsOiNkNmU3ZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNjE1MTI0OTQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiAvPgogIDwvZz4KPC9zdmc+Cg=="
                :imgsrc="imgsrc"
                :alttag="alttag">
            </vueimage>
        </div>
        <div class="text-con">
            <h2 :style="textdark ? { color: '#3F3F3C' } : { color: 'white' }" :class="textdark ? 'after-col' : ''">{{ texttitle }}</h2>
            <p :style="textdark ? { color: '#3F3F3C' } : { color: 'white' }" v-html="textbody"></p>
        </div>
    </div>
</template>

<script>
    import vueimage from './vueimage.vue'
    export default {
        name: 'imagetextblock',
        props: {
            imgleft: Boolean,
            texttitle: String,
            textbody: String,
            imgsrc: String,
            background: String,
            textdark: Boolean,
            routeto: String,
            alttag: String,
        },
        components: {
            vueimage
        },
        data () {
            return {
            }
        },
        mounted () {
        },
        methods: {
            routeaway() {
                this.$router.push({ path: this.routeto })
            }
        },
        computed: {
        }
    }
</script>

<style lang="sass" scoped>
    .makerow
        flex-direction: row
        @media (min-width: 0px) and (max-width: 980px)
            flex-direction: column-reverse
    .reverse
        flex-direction: row-reverse
        @media (min-width: 0px) and (max-width: 980px)
            flex-direction: column-reverse
    .block-con
        display: flex
        align-items: center
        justify-content: center
        padding: 30px 150px
        width: 100%
        @media (min-width: 0px) and (max-width: 540px)
            padding: 10px
    .img-con
        width: 48%
        @media (min-width: 0px) and (max-width: 980px)
            width: 80%
        @media (min-width: 0px) and (max-width: 540px)
            width: 98%
        img
            width: 100%
            transition: all 0.8s ease
            &:hover
                transform: scale(0.99)
                cursor: pointer
                transition: all 0.8s ease
    .text-con
        width: 45%
        padding: 20px
        @media (min-width: 540px) and (max-width: 980px)
            width: 80%
        @media (min-width: 0px) and (max-width: 540px)
            width: 98%
            padding: 5px
        h2
            color: $primary
            font-size: 4em
            font-weight: bold
            letter-spacing: 4px
            display: flex
            flex-direction: column
            @media (min-width: 0px) and (max-width: 540px)
                font-size: 2.2em
            @media (min-width: 540px) and (max-width: 780px)
                font-size: 3em
            &:after
                position: relative
                content: ""
                height: 3px
                width: 55px
                background-color: $font-dark
                top: 5px
                left: 3px
                @media (min-width: 0px) and (max-width: 520px)
                    width: 25px
        .after-col
            &:after
                background-color: $highlight !important
        p
            color: $font-light
            padding: 0 20px 0 40px
            font-family: 'Open Sans', sans serif
            @media (min-width: 0px) and (max-width: 540px)
                padding: 0 10px 0 10px
</style>
''