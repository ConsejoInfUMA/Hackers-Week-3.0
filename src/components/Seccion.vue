<template>
	<section class="section">
		<div class="container">
			<h1 class="title has-text-dark">{{ ruta }}</h1>
			<slot />
		</div>
	</section>
</template>

<script>
	export default {
		name: 'Seccion',
		computed: {
			ruta: function() {
				return this.$route.name;
			}
		}
	};
</script>
