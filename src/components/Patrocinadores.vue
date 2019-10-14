<template>
    <section class="section">
        <div class="container">
            <h1 class="title has-text-dark">Nuestros patrocinadores</h1>
            <div class="columns is-vcentered is-centered">
                <div class="column">
                    <img src="../static/ciklum.png" />
                </div>
                <div class="column">
                    <img src="../static/gdg.png" />
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    img {
        object-fit: scale-down;
        max-height: 5em;
    }
</style>

<script>
export default {
    name: 'patrocinadores'
}
</script>