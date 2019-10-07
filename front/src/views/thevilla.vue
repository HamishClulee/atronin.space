<template>
    <div class="page-con">
        <div class="gallery">
            <figure class="gallery__item gallery__item--1">
                <img src="https://atronin.space/images/work1.jpg" class="gallery__img" alt="Image 1">
            </figure>
            <figure class="gallery__item gallery__item--2">
                <img src="https://atronin.space/images/social1.jpg" class="gallery__img" alt="Image 2">
            </figure>
            <figure class="gallery__item gallery__item--3">
                <img src="https://atronin.space/images/social4.jpg" class="gallery__img" alt="Image 3">
            </figure>
            <!-- <figure class="gallery__item gallery__item--4">
                <img src="https://atronin.space/images/work1.jpg" class="gallery__img" alt="Image 4">
            </figure>
            <figure class="gallery__item gallery__item--5">
                <img src="https://atronin.space/images/social1.jpg" class="gallery__img" alt="Image 5">
            </figure>
            <figure class="gallery__item gallery__item--6">
                <img src="https://atronin.space/images/social4.jpg" class="gallery__img" alt="Image 6">
            </figure> -->
        </div>
    </div>
</template>

<script>
    export default {
        name: 'thevilla',
        data () {
            return {}
        },
        mounted () {
        },
        methods: {
        },
        computed: {
        }
    }
</script>

<style lang="sass" scoped>
img
    border: 1px solid lighten($secondary, 60)
.gallery
    margin-top: 150px
    display: grid
    grid-template-columns: repeat(3, 1fr)
    grid-template-rows: repeat(15, 20vw)
    grid-gap: 0
    width: 70%
    margin-left: auto
    margin-right: auto
figure
    margin: 10px
.gallery__img
    width: 100%
    height: 100%
    object-fit: cover
.gallery__item--1
    grid-column-start: 1
    grid-column-end: 2
    grid-row-start: 1
    grid-row-end: 2
.gallery__item--2
    grid-column-start: 2
    grid-column-end: 3
    grid-row-start: 1
    grid-row-end: 2
.gallery__item--2
    grid-column-start: 3
    grid-column-end: 4
    grid-row-start: 1
    grid-row-end: 2
</style>
