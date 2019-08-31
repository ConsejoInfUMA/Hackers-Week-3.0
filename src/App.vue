<template>
    <div id="app">
        <Hero/>
    </div>
</template>

<style lang="scss">
    html {
        scroll-behavior: smooth;
    }
</style>

<script>
    import Hero from '@/components/Hero.vue';

    export default {
        name: 'App',
        components: {
            Hero
        }
    }
</script>
