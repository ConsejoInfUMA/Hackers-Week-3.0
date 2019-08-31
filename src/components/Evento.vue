<template>
    <div class="column is-6-tablet is-3-desktop">
        <div class="card">
            <div class="card-image">
                <figure class="image is-square">
                    <img :src="info.imagen" alt="La imagen no se ha podido cargar">
                </figure>
            </div>
            <div class="card-content">
                <div class="media">
                    <div class="info media-content">
                        <p class="title is-5 has-text-dark">{{info.titulo}}</p>
                    </div>
                </div>
                <div class="content">
                    <time>{{fecha(info.fechaHora)}}</time>
                </div>
                <div class="buttons">
                    <b-button @click="isModalActive = true" class="is-primary max">Saber m&aacute;s</b-button>
                    <b-button class="is-primary">Registro</b-button>
                    <b-modal :active.sync="isModalActive">
                        <Modal
                                :descripcion="info.descripcion"
                                :fecha-hora="fecha(info.fechaHora)"
                                :lugar="info.lugar"
                                :persona="info.persona"
                                :titulo="info.titulo"
                        />
                    </b-modal>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    img {
        object-fit: cover;
    }

    .info {
        overflow: hidden;
        min-height: 3em;
    }
    .title {
        max-width: 90%;
        text-overflow: ellipsis;
    }
</style>

<script>
    import Modal from "@/components/Modal";

    export default {
        name: "Evento",
        components: {
            Modal
        },
        data: () => ({
            isModalActive: false
        }),
        props: {
            info: Object
        },
        methods: {
            fecha: f => {
                const date = new Date(f.seconds * 1000);
                const dias = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'];
                const mes = 'Abril';
                return dias[date.getDay() - 1] + ' ' + date.getDate() + ' de ' + mes + ', ' + date.getHours() + ':' + date.getMinutes()
            }
        }
    }
</script>
