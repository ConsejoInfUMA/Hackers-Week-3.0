<template>
	<h2 class="subtitle is-size-4-mobile">
		30 de Marzo de 2020
		<br />
		<span>{{ message }}</span>
	</h2>
</template>

<script>
	export default {
		name: 'countdown',
		data: () => ({
			message: '',
			interval_time: 0
		}),
		props: {
			event_date: String
		},
		mounted() {
			if (this.time_to_date() > 0) {
				this.$options.interval = setInterval(
					this.countdown_msg,
					this.interval_time
				);
			}
		},
		methods: {
			countdown_msg() {
				let msg = '';
				let t = this.time_to_date();
				if (t > 0) {
					msg = 'QUEDAN ' + t + ' SEGUNDOS!';
					this.interval_time = 1000; // Espera 1 segundo
					if (t > 60) {
						t = Math.ceil(t / 60);
						msg = 'Quedan ' + t + ' Minutos!';
						this.interval_time = 1000 * 60; // Espera 1 minuto
						if (t > 60) {
							t = Math.ceil(t / 60);
							msg = 'Quedan ' + t + ' Horas!';
							this.interval_time = 1000 * 60 * 60; // Espera 1h
							if (t > 24) {
								t = Math.ceil(t / 24);
								msg = 'Nos vemos en ' + t + ' Dias';
							}
						}
					}
				}
				this.message = msg;
			},
			time_to_date() {
				let d = new Date(this.event_date);
				let n = Date.now();
				let df = d - n;
				return Math.ceil(df / 1000);
			}
		}
	};
</script>
