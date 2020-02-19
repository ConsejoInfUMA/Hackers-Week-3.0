<template>
	<footer class="footer has-background-dark">
		<div class="container is-fluid">
			<div class="columns">
				<div class="column">
					<h2 class="title is-5">Donde encontrarnos</h2>
					<p>Consejo de Estudiantes - ETSI Inform&aacute;tica</p>
					<p>Blvd. Louis Pasteur, 35</p>
					<p>Despacho 3.2.B1</p>
					<p>29071 Campus de Teatinos</p>
					<p>M&aacute;laga</p>
				</div>
				<div class="column has-text-centered-desktop is-one-quarter">
					<h2 class="title is-5">Nuestras redes sociales</h2>
					<b-button
						expanded
						icon-left="twitter"
						type="is-primary"
						outlined
						>Twitter</b-button
					>
					<b-button
						expanded
						icon-left="instagram"
						type="is-primary"
						outlined
						>Instagram</b-button
					>
					<b-button
						expanded
						icon-left="facebook"
						type="is-primary"
						outlined
						>Facebook</b-button
					>
				</div>
			</div>
		</div>
	</footer>
</template>

<style scoped>
	p,
	h2 {
		color: white;
	}

	button {
		border: 0;
		margin-right: 2em;
	}

	footer {
		padding: 2em 5em;
	}
</style>
