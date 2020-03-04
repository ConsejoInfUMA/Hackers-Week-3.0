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
			<b-navbar-item
				target="_blank"
				href="https://firebasestorage.googleapis.com/v0/b/hackers-week-3-0.appspot.com/o/D3KVzH2XkAgA1W0.jpg?alt=media&token=37bc00b9-4cb5-41e6-832a-b25cfc2773d8"
			>
				Horario
			</b-navbar-item>
		</template>
	</b-navbar>
</template>

<style scoped>
	#navbar {
		box-shadow: 0 0 3px #062933aa;
	}

	.active {
		border-bottom: 2px solid #2196ba;
	}
	/*
	* {
		color: #062933 !important;
	}

	*:hover {
		color: #2196ba !important;
	}
	*/
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
