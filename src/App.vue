<template>
    <div id="app">
        <NavBarReduced />
        <Hero />
    </div>
</template>

<style lang="scss">
    html {
        scroll-behavior: smooth;
    }
</style>

<script>
    import NavBarReduced from "@/components/NavBarReduced";
    import Hero from '@/components/Hero.vue';

    export default {
        name: 'App',
        components: {
            NavBarReduced,
            Hero
        }
    }
</script>
