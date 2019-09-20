<template>
    <section class="hero is-fullheight is-dark is-bold" id="hero">
        <div class="hero-body">
            <div class="container">
                <div class="text has-text-centered">
                    <h1 class="title is-size-4-mobile">HACKERS <span class="angles">&lt;&gt;</span> WEEK 7</h1>
                    <Countdown event_date="03/30/2020"/> <!-- M/D/Y -->
                </div>
            </div>
        </div>
        <vue-particles class="particles"
                       :clickEffect="false"
                       :hoverEffect="false"
                       :lineLinked="true"
                       :lineOpacity="0.5"
                       :linesDistance="120"
                       :linesWidth="1"
                       :moveSpeed="0.5"
                       :particleOpacity="0.5"
                       :particleSize="2"
                       :particlesNumber="80"
                       color="#2196ba"
                       linesColor="#2196ba"
                       hover-effect="grab"
                       hover-mode="true"
                       style="position: absolute; width: 100%; height: 100%;"
        >
        </vue-particles>
    </section>
</template>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Fira+Sans&display=swap');

    @font-face {
        font-family: nevis;
        src: url(../../public/nevis.ttf)
    }

    .text, .buttons {
        position: relative;
        z-index: 1 !important;
    }

    h1, h2 {
        color: #f5f5f5 !important;
    }

    h1 {
        font-family: nevis, cursive;
    }

    h2 {
        font-family: 'Fira Sans', sans-serif;
    }

    .particles {
        overflow-y: hidden;
        z-index: 0 !important;
    }

    .angles {
        color: #2196ba;
    }

    @media (min-width: 960px) {
        h1 {
            font-size: 4em;
        }
        h2 {
            font-size: 2em;
        }
    }

    @media (min-width: 1152px) {
        h1 {
            font-size: 6em;
        }
        h2 {
            font-size: 3em;
        }
    }
</style>

<script>
    import Countdown from './Countdown'

    export default {
        name: 'hero',
        components: {
            Countdown
        }
    }
</script>
