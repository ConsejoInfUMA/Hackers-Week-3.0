<template>
    <div id="app">
        <NavBar/>
        <Hero/>
        <Seccion
                seccion="Conferencias"
        >
            <Eventos coleccion="conferencias"/>
        </Seccion>

        <Seccion
                seccion="Talleres"
        >
            <Eventos coleccion="talleres"/>
        </Seccion>

        <Seccion
                seccion="Videojuegos"
        >
            <Eventos coleccion="videojuegos"/>
        </Seccion>

        <Seccion
                seccion="Rol"
        >
            <Eventos coleccion="rol"/>
        </Seccion>
        <Footer/>
    </div>
</template>

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
