<template>
	<div class="card box">
		<div class="card-content">
			<div class="content">
				<h1
					class="title is-size-3-desktop is-size-4-mobile has-text-dark"
				>
					{{ titulo }}
				</h1>
				<p class="subtitle is-size-5-desktop is is-size-6-mobile">
					Por {{ persona }}
				</p>
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
</template>

<style scoped>
	.media,
	.media-content {
		overflow-y: hidden !important;
	}
</style>

<script>
	export default {
		name: 'Modal',
		props: {
			titulo: String,
			persona: String,
			descripcion: String,
			fechaHora: String,
			lugar: String
		}
	};
</script>
