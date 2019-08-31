<template>
    <section class="hero is-fullheight is-dark is-bold" id="hero">
        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="title is-size-4-mobile">HACKERS &lt;&gt; WEEK 7</h1>
                <Countdown event_date="02/04/2020"/>
            </div>
        </div>
        <vue-particles :clickEffect="false"
                       :hoverEffect="false"
                       :lineLinked="true"
                       :lineOpacity="0.2"
                       :linesDistance="150"
                       :linesWidth="1"
                       :moveSpeed="1"
                       :particleOpacity="0.4"
                       :particleSize="3"
                       :particlesNumber="80"
                       color="#2196ba"
                       linesColor="#2196ba"
                       shapeType="polygon"
                       hover-effect="grab"
                       hover-mode="true"
                       style="position: absolute; width: 100%; height: 100%; z-index: 0"
        >
        </vue-particles>
    </section>
</template>

<style scoped>
    @media (min-width: 960px) {
        h1 {
            font-size: 4em;
        }
    }

    @media (min-width: 1152px) {
        h1 {
            font-size: 6em;
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
