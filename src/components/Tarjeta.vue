<template>
	<div class="column is-4-desktop is-6-tablet is-12-mobile">
		<div class="card">
			<header class="card-header has-text-dark">
				<div class="card-header-title">
					<div>
						<h1 class="title is-6">{{ info.titulo }}</h1>
						<h2 class="subtitle is-6">
							{{ fecha(info.fechaHora) }}
						</h2>
					</div>
				</div>
			</header>
			<div class="card-image">
				<figure class="image is-5by4">
					<img
						:src="info.imagen"
						alt="La imagen no se ha podido cargar"
					/>
				</figure>
			</div>
			<footer class="card-footer">
				<div class="card-footer-item">
					<b-button
						@click="isModalActive = true"
						type="is-primary"
						expanded
						>Saber m&aacute;s</b-button
					>
				</div>
				<div class="card-footer-item">
					<b-button
						type="is-primary"
						tag="a"
						:href="info.urlEvento"
						target="_blank"
						expanded
						>Registro</b-button
					>
				</div>
			</footer>
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
	img {
		object-fit: cover;
	}

	.content {
		display: grid;
	}

	.title {
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		word-wrap: break-word;
		width: 100%;
	}
</style>

<script>
	import ModalEvento from '@/components/ModalEvento';

	export default {
		name: 'Tarjeta',
		components: {
			ModalEvento
		},
		data: () => ({
			isModalActive: false
		}),
		props: {
			info: Object
		},
		methods: {
			fecha: f => {
				const date = new Date(f.seconds * 1000);
				const dias = [
					'Lunes',
					'Martes',
					'Miercoles',
					'Jueves',
					'Viernes'
				];
				const mes = 'Abril';
				return (
					dias[date.getDay() - 1] +
					' ' +
					date.getDate() +
					' de ' +
					mes +
					', ' +
					date.getHours() +
					':' +
					date.getMinutes()
				);
			}
		}
	};
</script>
