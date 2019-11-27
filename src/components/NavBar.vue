<template>
    <b-navbar fixed-top="" id="navbar">
        <template slot="start">
            <b-navbar-item href="#hero">
                <b-button icon-left="home">Inicio</b-button>
            </b-navbar-item>
            <b-navbar-item target="_blank">
                <b-button tag="a" href="gs://hackers-week-3-0.appspot.com/" download icon-left="timetable">Horario</b-button>
            </b-navbar-item>
            <b-navbar-item href="#Conferencias">Conferencias</b-navbar-item>
            <b-navbar-item href="#Talleres">Talleres</b-navbar-item>
            <b-navbar-item href="#Videojuegos">Videojuegos</b-navbar-item>
            <b-navbar-item href="#Rol">Rol</b-navbar-item>
        </template>
        <template slot="end">
            <b-navbar-item href="http://u.uma.es/kz/" target="_blank">
                <b-button icon-left="star">Da una charla o conferencia</b-button>
            </b-navbar-item>
            <b-navbar-item href="http://u.uma.es/lJ/" target="_blank">
                <b-button icon-left="heart">Voluntariado</b-button>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<style scoped>
    * {
        color: #062933 !important;
    }

    *:hover {
        color: #2196ba !important;
    }

    button, a {
        border: 0 !important;
    }
</style>

<script>
    export default {
        name: "NavBar"
    }
</script>
