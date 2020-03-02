<template>
	<b-table :data="informacion" detailed>
		<template slot-scope="props">
			<b-table-column field="nombre" :label="label">{{
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
						<h3 class="title is-5">Bases</h3>
						<p>{{ props.row.base }}</p>
					</div>
					<div class="column is-half">
						<h3 class="title is-5">Premio</h3>
						<img :src="props.row.premio" />
					</div>
				</div>
			</article>
		</template>
	</b-table>
</template>

<script>
	import { db } from '@/database';
	export default {
		data: () => ({
			informacion: []
		}),
		props: {
			coleccion: String,
			label: String
		},
		firestore() {
			return {
				informacion: db.collection(this.coleccion).orderBy('fechaHora')
			};
		}
	};
</script>

<style></style>
