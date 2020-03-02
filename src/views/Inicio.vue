<template>
	<Hero />
</template>

<script>
	// @ is an alias to /src
	import Hero from '@/components/Hero';

	export default {
		name: 'Home',
		components: {
			Hero
		}
	};
</script>
