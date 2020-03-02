<template>
	<div id="app">
		<NavBar />
		<Hero />
		<Seccion seccion="Conferencias">
			<Eventos coleccion="conferencias" />
		</Seccion>

		<Seccion seccion="Talleres">
			<Eventos coleccion="workshops" />
		</Seccion>

		<Seccion seccion="Videojuegos">
			<Videojuegos />
		</Seccion>

		<Seccion seccion="Rol">
			<Eventos coleccion="rol" />
		</Seccion>
		<Seccion seccion="Sorteos" class="has-text-centered">
			<Sorteos />
		</Seccion>
		<Footer />
	</div>
</template>

<script>
	import NavBar from '@/components/NavBar';
	import Hero from '@/components/Hero.vue';
	import Seccion from '@/components/Seccion';
	import Eventos from '@/components/Eventos';
	import Sorteos from '@/components/Sorteos';
	import Videojuegos from '@/components/Videojuegos';
	import Footer from '@/components/Footer';

	export default {
		name: 'App',
		components: {
			NavBar,
			Hero,
			Seccion,
			Eventos,
			Sorteos,
			Videojuegos,
			Footer
		}
	};
</script>
