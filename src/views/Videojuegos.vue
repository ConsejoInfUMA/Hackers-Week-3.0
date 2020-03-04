<template>
	<Seccion>
		<p>
			Los videojuegos estarán en la sala de grados A, edificio de
			biblioteca.
		</p>
		<hr />
		<article v-for="vid in videojuegos" :key="vid.nombre" class="media box">
			<figure class="media-left">
				<p class="image is-128x128">
					<img :src="vid.premio" />
				</p>
			</figure>
			<div class="media-content">
				<div class="content">
					<p>
						<strong>{{ vid.nombre }}</strong>
						<br />
						{{ time(vid.fechaHora) }}
					</p>
				</div>
				<nav class="level is-mobile">
					<div class="level-left buttons">
						<b-button
							tag="a"
							target="_blank"
							:href="vid.bases"
							size="is-small"
							type="is-primary"
							>Bases</b-button
						>
						<b-button
							tag="a"
							target="_blank"
							:href="vid.registro"
							size="is-small"
							type="is-primary"
							>Inscripcion</b-button
						>
					</div>
				</nav>
			</div>
		</article>
		<!--
		<b-table :data="videojuegos" :detailed="true">
			<template slot-scope="props">
				<b-table-column field="nombre" label="Videojuego">{{
					props.row.nombre
				}}</b-table-column>
				<b-table-column field="fechaHora" label="Fecha y hora">
					{{ time(props.row.fechaHora) }}
				</b-table-column>
			</template>
			<template slot="detail" slot-scope="props">
				<article class="media">
					<figure class="media-left">
						<p class="image is-128x128">
							<img :src="props.row.premio" />
						</p>
					</figure>
					<div class="media-content">
						<div class="content">
							<p>
								<strong>{{ props.row.nombre }}</strong>
								<br />
								{{ time(props.row.fechaHora) }}
								<br />
								Sala de grados a
							</p>
						</div>
						<nav class="level is-mobile">
							<div class="level-left buttons">
								<b-button size="is-small" type="is-primary"
									>Bases</b-button
								>
								<b-button size="is-small" type="is-primary"
									>Inscripcion</b-button
								>
							</div>
						</nav>
					</div>
				</article>
			</template>
		</b-table>
		-->
	</Seccion>
</template>

<style scoped>
	.content,
	.media-content {
		overflow: hidden;
	}
</style>

<script>
	import Seccion from '@/components/Seccion';
	import moment from 'moment';
	import { db } from '@/database';

	export default {
		data: () => ({
			videojuegos: []
		}),
		components: {
			Seccion
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
						this.videojuegos.push(change.doc.data());
					});
				});
		}
	};
</script>
