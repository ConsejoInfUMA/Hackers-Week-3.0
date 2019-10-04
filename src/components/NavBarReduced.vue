<template>
    <b-navbar fixed-top="" id="navbar">
        <template slot="start">
            <b-navbar-item href="http://u.uma.es/kz/" target="_blank">
                <b-button type="is-dark" outlined icon-left="star">Da una conferencia o taller</b-button>
            </b-navbar-item>
            <b-navbar-item href="http://u.uma.es/lJ/" target="_blank">
                <b-button type="is-dark" outlined icon-left="heart">Se un voluntario</b-button>
            </b-navbar-item>
            <b-navbar-item href="https://www.twitter.com/hackersweek" target="_blank">
                <b-button type="is-dark" outlined icon-left="twitter">Twitter</b-button>
            </b-navbar-item>
            <b-navbar-item href="https://www.instagram.com/hackersweek" target="_blank">
                <b-button type="is-dark" outlined icon-left="instagram">Instagram</b-button>
            </b-navbar-item>
            <b-navbar-item href="https://www.facebook.com/hackersweek" target="_blank">
                <b-button type="is-dark" outlined icon-left="facebook">Facebook</b-button>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<style scoped>
    * {
        color: #062933 !important;
        transition: 200ms all;
    }

    /* button {border: 0} */

    *:hover {
        color: #2196ba !important;
    }
</style>

<script>
    export default {
        name: "NavBar"
    }
</script>
