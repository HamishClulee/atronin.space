<template>
    <figure class="image-con">
        <img
            :src="placeholder"
            :id="`vue-image-${hash}`"
            :data-src="imgsrc"
            :alt="alttag"
            width="100%"
        />
    </figure>
</template>

<script>
export default {
    name: 'vueimage',
    props: {
        imgsrc: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            required: true,
        },
        alttag: {
            type: String,
            required: true,
        },
    },
    data () {
        return {
            windowwidth: 0,
            hash: Math.floor((Math.random() * 99999999) + 1),
        }
    },
    mounted() {
        const imageObserver = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting) {
                const lazyImage = entries[0].target
                lazyImage.src = lazyImage.dataset.src
            }
        });
        imageObserver.observe(document.getElementById(`vue-image-${this.hash}`));
    },
}
</script>
<style lang="sass" scoped>
img
    width: 100%
    object-fit: scale-down
figure
    margin: 0
    padding: 0
</style>
