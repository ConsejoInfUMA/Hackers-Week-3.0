<template>
	<Seccion>
		<Eventos :coleccion="coleccion" />
	</Seccion>
</template>

<script>
	import Seccion from '@/components/Seccion';
	import Eventos from '@/components/Eventos';

	export default {
		props: {
			coleccion: String
		},
		components: {
			Seccion,
			Eventos
		}
	};
</script>
