<template>
	<div class="columns is-variable is-8 is-mobile is-multiline">
		<Tarjeta
			:info="evento"
			:key="evento.titulo"
			v-for="evento in eventosSeccion"
		/>
	</div>
</template>

<script>
	import Tarjeta from '@/components/Tarjeta';
	import { db } from '@/database';

	export default {
		name: 'Eventos',
		components: {
			Tarjeta
		},
		data: function() {
			return {
				eventosSeccion: []
			};
		},
		props: {
			coleccion: String
		},
		firestore() {
			return {
				eventosSeccion: db
					.collection(this.coleccion)
					.orderBy('fechaHora')
			};
		}
	};
</script>
