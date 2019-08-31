<template>
    <section class="section" v-bind:id="seccion">
        <div class="container">
            <h1 class="title has-text-dark">{{seccion}}</h1>
            <p>
                {{descripcion}}
            </p>
        </div>
        <br>
        <div class="container">
            <slot></slot>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Seccion",
        props: {
            seccion: String,
            descripcion: String
        }
    }
</script>