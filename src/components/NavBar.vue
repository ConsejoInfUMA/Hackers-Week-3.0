<template>
	<b-navbar fixed-top type="is-dark" id="navbar">
		<template slot="start">
			<b-navbar-item
				:class="ruta.name === rutaActual ? 'active' : ''"
				v-for="ruta in rutas"
				:key="ruta.path"
				tag="router-link"
				:to="ruta.path"
			>
				{{ ruta.name }}
			</b-navbar-item>
		</template>
		<template slot="end">
			<b-navbar-item
				target="_blank"
				href="https://twitter.com/HackersWeek"
			>
				<b-icon icon="twitter"></b-icon>
			</b-navbar-item>
			<b-navbar-item
				target="_blank"
				href="https://www.instagram.com/hackersweek"
			>
				<b-icon icon="instagram"></b-icon>
			</b-navbar-item>

			<b-navbar-item target="_blank" href="#">
				<b-icon icon="discord"></b-icon>
			</b-navbar-item>
		</template>
	</b-navbar>
</template>

<style scoped>
	#navbar {
		box-shadow: 0 0 3px #062933aa;
	}

	.active {
		font-weight: bold;
	}

	.active::before {
		position: absolute;
		content: '';
		height: 5px;
		bottom: 0;
		left: 0;
		right: 0;
		background: #2196ba;
	}
</style>

<script>
	export default {
		name: 'NavBar',
		computed: {
			rutas: function() {
				return this.$router.options.routes;
			},
			rutaActual: function() {
				return this.$route.name;
			}
		}
	};
</script>
