<template>
    <figure
        @click="opengallery()"
        class="gallery__item"
        :style="style">
            <img 
                :id="`rimage-${hash}`"
                src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDM0Ljk2Mjc5OSAzNS42NjIwNTIiCiAgIGhlaWdodD0iMzUuNjYyMDUybW0iCiAgIHdpZHRoPSIzNC45NjI3OTltbSI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODAuODg2OTA5LC0xMTIuNTQ3NjIpIgogICAgIGlkPSJsYXllcjEiPgogICAgPHJlY3QKICAgICAgIHk9IjExMi41NDc2MiIKICAgICAgIHg9IjgwLjg4NjkwOSIKICAgICAgIGhlaWdodD0iMzUuNjYyMDUyIgogICAgICAgd2lkdGg9IjM0Ljk2Mjc5OSIKICAgICAgIGlkPSJyZWN0ODE1IgogICAgICAgc3R5bGU9Im9wYWNpdHk6MC43NjU5OTk5NTtmaWxsOiNkNmU3ZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNjE1MTI0OTQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiAvPgogIDwvZz4KPC9zdmc+Cg=="
                :data-src="`https://atronin.space/images/${source}`"
                :alt="alttext" class="gallery__img"
            />
              <div class="overlay">
                <h5 class="text">view gallery</h5>
            </div>
    </figure>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'rimage',
    props: {
        source: {
            type: String,
            required: false,
            default: '',
        },
        alttext: {
            type: String,
            required: false,
            default: '',
        },
        index: Number,
    },
    data () {
        return {
            style: {
                gridRowStart: this.rowstart,
                gridColumnStart: this.colstart,
                gridRowEnd: this.rowend,
                gridColumnEnd: this.colend,
            },
            hash: Math.floor((Math.random() * 99999999) + 1),
            rowcoef: 3,
        }
    },
    created() {
    },
    mounted() {
        const imageObserver = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting) {
                const lazyImage = entries[0].target
                lazyImage.src = lazyImage.dataset.src
            }
        });
        imageObserver.observe(document.getElementById(`rimage-${this.hash}`));
    },
    methods: {
        opengallery() {
            this.$parent.$emit('open-gallery', this.index)
        }
    },
    computed: {
        ...mapState(['window_width']),
        rowstart() {
            return String(Math.ceil((this.index + 1) / this.rowcoef))
        },
        colstart() {
            return String((this.index % this.rowcoef) + 1)
        },
        rowend() {
            return String(Math.ceil((this.index + 1) / this.rowcoef) + 1)
        },
        colend() {
            return String((this.index % this.rowcoef) + 2)
        }
    },
    watch: {
        window_width() {
            this.rowcoef = this.window_width < 860 ? 2 : 3
        }
    }
}
</script>
<style lang="sass" scoped>
figure
    margin: 10px
    position: relative
    @media (min-width: 0px) and (max-width: 1460px)
        margin: 5px
    &:hover
        cursor: pointer
        background-color: darken($dark-background, 10)
        img
            opacity: 0.2
        .overlay
            opacity: 1
.gallery__img
    width: 100%
    height: 100%
    object-fit: cover
img
    opacity: 1
    display: block
    width: 100%
    height: auto
    backface-visibility: hidden   
.overlay
    opacity: 0
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    -ms-transform: translate(-50%, -50%)
    text-align: center
h5
    color: $light-background
    line-height: 1.5
    border-bottom: 1px solid white
    padding-bottom: 15px
</style>