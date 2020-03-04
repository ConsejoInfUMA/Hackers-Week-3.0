<template>
	<Seccion>
		<div class="columns">
			<div class="column is-half">
				<figure class="image">
					<img
						src="https://pbs.twimg.com/media/D6EtNY-WAAEiNCM?format=jpg&name=large"
					/>
				</figure>
			</div>
			<div class="column is-half">
				<b-table :data="partidas">
					<template slot-scope="props">
						<b-table-column field="nombre" label="Partida">{{
							props.row.nombre
						}}</b-table-column>
						<b-table-column field="master" label="Master">{{
							props.row.master
						}}</b-table-column>
						<b-table-column field="lugar" label="Lugar">{{
							props.row.lugar
						}}</b-table-column>
						<b-table-column field="fechaHora" label="Fecha y hora">
							{{
								new Date(
									props.row.fechaHora.seconds * 1000
								).toLocaleDateString()
							}}
						</b-table-column>
					</template>
				</b-table>
			</div>
		</div>
	</Seccion>
</template>

<style scoped>
	img {
		max-height: 40em;
		width: auto;
	}
</style>

<script>
	import Seccion from '@/components/Seccion';
	import { db } from '@/database';

	export default {
		data: () => ({
			partidas: []
		}),
		components: {
			Seccion
		},
		firestore() {
			return {
				partidas: db.collection('rol').orderBy('fechaHora')
			};
		}
	};
</script>
