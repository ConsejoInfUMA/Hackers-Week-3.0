<template>
	<div class="column is-4-desktop is-6-tablet is-12-mobile">
		<div class="card">
			<div class="card-header">
				<h1 class="card-header-title title is-4">{{ info.nombre }}</h1>
			</div>
			<a target="_blank" :href="info.inscripcion">
				<div class="card-image">
					<tarjeta-tags :tags="tags" class="topTags" />
					<figure class="image is-5by4">
						<img :src="info.imagen" :alt="info.nombre" />
					</figure>
				</div>
			</a>
		</div>
	</div>
</template>

<style scoped>
	.card,
	.card-header {
		box-shadow: none;
	}

	.topTags {
		position: absolute;
		left: 1em;
		bottom: 1em;
		z-index: 2;
	}

	.card-image:hover {
		/* box-shadow: 10px 10px 45px 0px rgb(33 150 186 / 28%); */
		box-shadow: -10px -10px 45px 0px rgb(3 21 26 / 50%),
			10px 10px 45px 0px rgb(33 150 186 / 35%);
		transform: scale(1.01);
	}
	.card-image {
		transition: 0.1s all ease-in;
	}
	.card-image,
	.card-image img {
		border-radius: 15px;
		box-shadow: 0px 0px 45px 0px rgb(3 21 26 / 10%);
	}

	.card-image img {
		object-fit: cover;
	}

	.title {
		overflow: hidden;
		text-overflow: ellipsis;
		word-wrap: break-word;
	}
</style>

<script>
	import TarjetaTags from './TarjetaTags.vue';

	export default {
		name: 'Tarjeta',
		components: {
			TarjetaTags
		},
		props: {
			info: Object
		},
		data: comp => ({
			tags: [
				{
					iconName: 'clock',
					content: comp.fecha(comp.info.fechaHora)
				}
			],
			isModalActive: false
		}),
		methods: {
			fecha: f => {
				const date = new Date(f.seconds * 1000);
				const dias = [
					'Domingo',
					'Lunes',
					'Martes',
					'Miércoles',
					'Jueves',
					'Viernes',
					'Sábado'
				];

				console.log(date.getMinutes());
				const mes = 'Abril';

				let minutes = date.getMinutes();
				minutes = minutes <= 9 ? '0' + minutes : minutes;
				let momento = date.getHours() < 12 ? ' AM' : ' PM';

				return (
					dias[date.getDay()] +
					' ' +
					date.getDate() +
					' de ' +
					mes +
					', ' +
					date.getHours() +
					':' +
					minutes +
					momento
				);
			}
		}
	};
</script>
