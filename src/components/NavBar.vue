<template>
    <b-navbar fixed-top="" id="navbar">
        <template slot="start">
            <b-navbar-item href="#hero">
                <b-icon icon="home"></b-icon>
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
</style>

<script>
    export default {
        name: "NavBar"
    }
</script>
