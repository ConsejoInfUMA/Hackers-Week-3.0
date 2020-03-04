<template>
	<div id="app">
		<NavBar />
		<transition name="fade">
			<router-view />
		</transition>
	</div>
</template>

<script>
	import NavBar from '@/components/NavBar';

	export default {
		computed: {
			ruta: function() {
				return this.$route.name;
			}
		},
		components: {
			NavBar
		}
	};
</script>
