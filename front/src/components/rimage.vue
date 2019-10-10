<template>
    <figure
        @click="opengallery()"
        class="gallery__item"
        :style="style">
            <img 
                :src="'https://atronin.space/images/' + source"
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
            rowcoef: 3,
        }
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
            if (this.window_width < 860) {
                this.rowcoef = 2
            } else {
                this.rowcoef = 3
            }
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