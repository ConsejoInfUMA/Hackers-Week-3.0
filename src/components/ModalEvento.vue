<template>
	<footer class="modal-card has-background-dark">
		<header class="modal-card-head has-background-dark">
			<div class="modal-card-header-title">
				<div>
					<h1
						class="title is-size-3-desktop has-text-white is-size-4-mobile"
					>
						{{ titulo }}
					</h1>
					<h2
						class="subtitle has-text-primary is-size-5-desktop is is-size-6-mobile"
					>
						Por {{ persona }}
					</h2>
				</div>
			</div>
		</header>
		<section class="modal-card-body">
			<article>
				<b-field group-multiline grouped>
					<div class="control">
						<b-taglist attached>
							<b-tag type="is-dark" size="is-medium">
								<b-icon
									icon="map-marker"
									type="is-primary"
								></b-icon>
							</b-tag>
							<b-tag type="is-primary" size="is-medium">{{
								lugar
							}}</b-tag>
						</b-taglist>
					</div>
					<div class="control">
						<b-taglist attached>
							<b-tag type="is-dark" size="is-medium">
								<b-icon icon="clock" type="is-primary"></b-icon>
							</b-tag>
							<b-tag type="is-primary" size="is-medium">{{
								fechaHora
							}}</b-tag>
						</b-taglist>
					</div>
				</b-field>
			</article>
			<hr />
			<article>
				<h1 class="title is-size-4 has-text-dark">
					Descripci&oacute;n
				</h1>
				<p>{{ descripcion }}</p>
			</article>
		</section>
		<footer class="card-footer">
			<div class="card-footer-item">
				<b-button type="is-primary" @click="$parent.close()"
					>Cerrar</b-button
				>
			</div>
		</footer>
	</footer>
</template>

<script>
	export default {
		name: 'ModalEvento',
		props: {
			titulo: String,
			persona: String,
			descripcion: String,
			fechaHora: String,
			lugar: String
		}
	};
</script>
