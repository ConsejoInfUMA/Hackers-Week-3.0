<template>
    <div id="app">
        <NavBar/>
        <Hero/>
        <Seccion
                seccion="Conferencias"
                descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. "
        >
            <Eventos coleccion="conferencias"/>
        </Seccion>

        <Seccion
                seccion="Talleres"
                descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. "
        >
            <Eventos coleccion="talleres"/>
        </Seccion>

        <Seccion
                seccion="Videojuegos"
                descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. "
        >
            <Eventos coleccion="videojuegos"/>
        </Seccion>

        <Seccion
                descripcion="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. "
                seccion="Rol"
        >
            <Eventos coleccion="rol"/>
        </Seccion>
        <Footer/>
    </div>
</template>

<style lang="scss">
    html {
        scroll-behavior: smooth;
    }

    // Import Bulma's core
    @import "~bulma/sass/utilities/_all";

    // Set your colors
    // $primary: #8c67ef;
    $primary: #2196ba;
    $dark: #062933;

    // Setup $colors to use as bulma classes (e.g. 'is-twitter')
    $colors: (
            "dark": ($dark, $dark-invert),
            "primary": ($primary, $primary-invert)
    );

    // Links
    $link: $primary;
    $link-invert: $primary-invert;
    $link-focus-border: $primary;

    // Import Bulma and Buefy styles
    @import "~bulma";
    @import "~buefy/src/scss/buefy";

</style>

<script>
    import NavBar from '@/components/NavBar';
    import Hero from '@/components/Hero.vue';
    import Seccion from "@/components/Seccion";
    import Eventos from "@/components/Eventos";
    import Footer from '@/components/Footer';

    export default {
        name: 'App',
        components: {
            NavBar,
            Hero,
            Seccion,
            Eventos,
            Footer
        }
    }
</script>
