<template>
    <div class="columns is-tablet is-multiline">
        <Evento
                :info="evento" :key="evento.titulo"
                v-for="evento in eventosSeccion"
        />
    </div>
</template>

<script>
    import Evento from "@/components/Evento";
    import {db} from '../database'

    export default {
        name: "Eventos",
        components: {
            Evento
        },
        data: function () {
            return {
                eventosSeccion: []
            }
        },
        props: {
            coleccion: String
        },
        firestore() {
            return {
                eventosSeccion: db.collection(this.coleccion).orderBy('fechaHora')
            }
        }
    }
</script>
