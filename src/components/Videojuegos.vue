<template>
	<b-table :data="videojuegos" sort-icon="chevron-up">
		<template slot-scope="props">
			<b-table-column field="nombre" label="Videojuego">
				{{ props.row.nombre }}
			</b-table-column>
			<b-table-column field="fechaHora" label="Fecha y hora" sortable>
				{{
					new Date(
						props.row.fechaHora.seconds * 1000
					).toLocaleDateString()
				}}
			</b-table-column>
			<b-table-column>
				<b-button
					type="is-primary"
					@click="$buefy.modal.open(modal)"
					expanded
				>
					Detalles
				</b-button>
			</b-table-column>
		</template>
	</b-table>
</template>

<style></style>

<script>
	import { db } from '@/database';

	const modal = {
		props: [],
		template: `
		<div class="card box">
		<div class="card-content">
			<div class="content">
				<h1
					class="title is-size-3-desktop is-size-4-mobile has-text-dark"
				>
					{{ titulo }}
				</h1>
				<p class="subtitle is-size-5-desktop is is-size-6-mobile"></p>
				<b-field group-multiline grouped>
					<div class="control">
						<b-taglist attached>
							<b-tag type="is-dark">
								<b-icon
									icon="map-marker"
									type="is-primary"
								></b-icon>
							</b-tag>
							<b-tag type="is-primary">{{ lugar }}</b-tag>
						</b-taglist>
					</div>
					<div class="control">
						<b-taglist attached>
							<b-tag type="is-dark">
								<b-icon icon="clock" type="is-primary"></b-icon>
							</b-tag>
							<b-tag type="is-primary">{{ fechaHora }}</b-tag>
						</b-taglist>
					</div>
				</b-field>
				<h1
					class="title is-size-4-desktop is-size-5-mobile has-text-dark"
				>
					Descripci&oacute;n
				</h1>
				<p>{{ descripcion }}</p>
			</div>
		</div>
	</div>
		`
	};

	export default {
		data: () => ({
			videojuegos: []
		}),
		firestore() {
			return {
				videojuegos: db.collection('videojuegos').orderBy('fechaHora')
			};
		}
	};
</script>
