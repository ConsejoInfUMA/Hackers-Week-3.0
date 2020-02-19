<template>
	<b-navbar fixed-top id="navbar">
		<template slot="start">
			<b-navbar-item href="#hero">
				<b-button icon-left="home">Inicio</b-button>
			</b-navbar-item>
			<b-navbar-item target="_blank">
				<b-button
					tag="a"
					href="https://firebasestorage.googleapis.com/v0/b/hackers-week-3-0.appspot.com/o/D3KVzH2XkAgA1W0.jpg?alt=media&token=37bc00b9-4cb5-41e6-832a-b25cfc2773d8"
					target="_blank"
					icon-left="timetable"
					>Horario</b-button
				>
			</b-navbar-item>
			<b-navbar-item href="#Conferencias">Conferencias</b-navbar-item>
			<b-navbar-item href="#Talleres">Talleres</b-navbar-item>
			<b-navbar-item href="#Videojuegos">Videojuegos</b-navbar-item>
			<b-navbar-item href="#Rol">Rol</b-navbar-item>
			<b-navbar-item href="#Sorteos">Sorteos</b-navbar-item>
		</template>
	</b-navbar>
</template>

<style scoped>
	#navbar {
		box-shadow: 0 1px 6px #000000aa;
	}

	* {
		color: #062933 !important;
	}

	*:hover {
		color: #2196ba !important;
	}

	button,
	a {
		border: 0 !important;
	}
</style>

<script>
	export default {
		name: 'NavBar'
	};
</script>
