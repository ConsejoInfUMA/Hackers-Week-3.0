<template>
	<Seccion>
		<p class="block">
			Todos los torneos tendrán lugar en Discord. Las bases están
			disponibles en <a href="#">Discord</a>. <strong>Twich</strong>.
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
			veniam non deleniti ex error, unde esse nisi et est provident cumque
			quasi, beatae ducimus? Dolor autem hic perferendis voluptate
			reiciendis!
		</p>
		<div class="columns is-variable is-8 is-mobile is-multiline">
			<TarjetaTorneo :info="t" :key="t.nombre" v-for="t in torneos" />
		</div>
	</Seccion>
</template>

<script>
	import Seccion from '@/components/Seccion';
	import moment from 'moment';
	import { db } from '@/database';
	import TarjetaTorneo from '../components/TarjetaTorneo.vue';

	export default {
		data: () => ({
			torneos: []
		}),
		components: {
			Seccion,
			TarjetaTorneo
		},
		methods: {
			time(t) {
				moment.locale('es');
				return moment(t.seconds * 1000).format(
					'dddd DD [de] MMMM, hh:mm'
				);
			}
		},
		firestore() {
			db.collection('videojuegos')
				.orderBy('fechaHora')
				.onSnapshot({}, snapshot => {
					snapshot.docChanges().forEach(change => {
						let source = snapshot.metadata.fromCache
							? 'local cache'
							: 'server';
						console.log('Data came from ' + source);
						this.torneos.push(change.doc.data());
					});
				});
		}
	};
</script>
