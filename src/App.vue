<template>
    <div id="app">
        <NavBarRRSS />
        <Hero />
    </div>
</template>

<style lang="scss">
    html {
        scroll-behavior: smooth;
    }
</style>

<script>
    import NavBarRRSS from "@/components/NavBarRRSS";
    import Hero from '@/components/Hero.vue';

    export default {
        name: 'App',
        components: {
            NavBarRRSS,
            Hero
        }
    }
</script>
