<template>
    <figure
        @click="opengallery(source)"
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
                gridRowStart: String(Math.ceil((this.index + 1) / 3)),
                gridColumnStart: String((this.index % 3) + 1),
                gridRowEnd: String(Math.ceil((this.index + 1) / 3) + 1),
                gridColumnEnd: String((this.index % 3) + 2),
            }
        }
    },
    mounted() {
        // console.log(String(Math.ceil((this.index + 1) / 3)), 
        // " / " ,
        // String((this.index % 3) + 1),
        // " / " ,
        // String(Math.ceil((this.index + 1) / 3) + 1),
        // " / " ,
        // String((this.index % 3) + 2),
        // "index: ",
        // this.index)
    },
    methods: {
        opengallery(path) {
            this.$root.$emit('open-gallery', path)
        }
    },
    computed: {
    }
}
</script>
<style lang="sass" scoped>
figure
    margin: 10px
    position: relative
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
    border: 1px solid lighten($secondary, 61)
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