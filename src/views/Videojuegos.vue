<template>
	<Seccion>
		<b-table :data="videojuegos" :detailed="true">
			<template slot-scope="props">
				<b-table-column field="nombre" label="Videojuego">{{
					props.row.nombre
				}}</b-table-column>
				<b-table-column field="fechaHora" label="Fecha y hora">
					{{
						new Date(
							props.row.fechaHora.seconds * 1000
						).toLocaleDateString()
					}}
				</b-table-column>
			</template>
			<template slot="detail" slot-scope="props">
				<article class="media">
					<div class="columns">
						<div class="column is-half">
							<h3 class="title is-5">Premio</h3>
							<img :src="props.row.premio" />
						</div>
						<div class="column is-half">
							<h3 class="title is-5">Bases</h3>
							<p>{{ props.row.base }}</p>
						</div>
					</div>
				</article>
			</template>
		</b-table>
	</Seccion>
</template>

<script>
	import Seccion from '@/components/Seccion';
	import { db } from '@/database';

	export default {
		data: () => ({
			videojuegos: []
		}),
		components: {
			Seccion
		},
		firestore() {
			return {
				videojuegos: db.collection('videojuegos').orderBy('fechaHora')
			};
		}
	};
</script>
