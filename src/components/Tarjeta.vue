<template>
	<div class="column is-4-desktop is-6-tablet is-12-mobile">
		<div class="card">
			<div class="card-image">
				<tarjeta-tags :tags="tags" class="topTags" />
				<figure class="image is-5by4">
					<img
						:src="info.imagen"
						alt="La imagen no se ha podido cargar"
					/>
				</figure>
			</div>
			<div class="card-content">
				<h1 class="title is-4">{{ info.titulo }}</h1>
				<h2 class="subtitle is-5">
					Por <a href="#">{{ info.persona }}</a>
				</h2>
				<section>
					<div class="buttons is-justify-content-space-between">
						<b-button
							@click="isModalActive = true"
							type="is-secondary"
							size="is-medium"
							>Saber m&aacute;s</b-button
						>
						<b-button
							tag="a"
							size="is-medium"
							target="_blank"
							:href="info.urlEvento"
							type="is-dark"
							>Registro</b-button
						>
					</div>
				</section>
			</div>
			<b-modal full-screen :active.sync="isModalActive">
				<ModalEvento
					:descripcion="info.descripcion"
					:fecha-hora="fecha(info.fechaHora)"
					:lugar="info.lugar"
					:persona="info.persona"
					:titulo="info.titulo"
				/>
			</b-modal>
		</div>
	</div>
</template>

<style scoped>
	.card:hover {
		box-shadow: 0px 10px 26px 0px rgb(3 21 26 / 12%);
	}

	.card {
		box-shadow: 0px 10px 26px 0px rgb(3 21 26 / 8%);
		transition: all 100ms ease-in;
	}

	.topTags {
		position: absolute;
		left: 1em;
		bottom: 1em;
		z-index: 2;
	}

	img {
		object-fit: cover;
		border-radius: 15px;
		box-shadow: 1px 10px 35px 0px rgb(3 21 26 / 6%);
	}

	.buttons {
		justify-content: space-between;
	}
</style>

<script>
	import ModalEvento from '@/components/ModalEvento';
	import TarjetaTags from './TarjetaTags.vue';

	export default {
		name: 'Tarjeta',
		components: {
			ModalEvento,
			TarjetaTags
		},
		props: {
			info: Object
		},
		data: comp => ({
			tags: [
				{
					iconName: 'map-marker',
					content: comp.info.lugar
				},
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
