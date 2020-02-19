<template>
  <div class="column is-3-desktop is-6-tablet is-12-mobile">
    <div class="card">
      <div class="card-image">
        <figure class="image is-square">
          <img :src="info.imagen" alt="La imagen no se ha podido cargar" />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="info container media-content">
            <p class="title is-6 has-text-dark">{{ info.titulo }}</p>
            <p class="subtitle is-6">{{ fecha(info.fechaHora) }}</p>
          </div>
        </div>
        <div class="buttons">
          <b-button @click="isModalActive = true" class="is-primary max"
            >Saber m&aacute;s</b-button
          >
          <b-button
            class="is-primary"
            tag="a"
            :href="info.urlEvento"
            target="_blank"
            >Registro</b-button
          >
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

.title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-wrap: break-word;
  width: 17em;
}
</style>

<script>
import Modal from "@/components/Modal";

export default {
  name: "Tarjeta",
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
      const dias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
      const mes = "Abril";
      return (
        dias[date.getDay() - 1] +
        " " +
        date.getDate() +
        " de " +
        mes +
        ", " +
        date.getHours() +
        ":" +
        date.getMinutes()
      );
    }
  }
};
</script>
