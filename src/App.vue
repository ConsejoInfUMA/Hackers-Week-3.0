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
        <Patrocinadores />
        <Footer/>
    </div>
</template>

<script>
    import NavBar from '@/components/NavBar';
    import Hero from '@/components/Hero.vue';
    import Seccion from "@/components/Seccion";
    import Eventos from "@/components/Eventos";
    import Patrocinadores from "@/components/Patrocinadores"
    import Footer from '@/components/Footer';

    export default {
        name: 'App',
        components: {
            NavBar,
            Hero,
            Seccion,
            Eventos,
            Patrocinadores,
            Footer
        }
    }
</script>
