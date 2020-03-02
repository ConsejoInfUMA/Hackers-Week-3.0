<template>
	<section class="hero is-fullheight-with-navbar is-dark is-bold" id="hero">
		<div class="hero-body">
			<div class="container">
				<div class="has-text-centered">
					<h1 class="title is-size-4-mobile">
						HACKERS <span class="angles">&lt;&gt;</span> WEEK 7
					</h1>
					<Countdown event_date="03/30/2020" />
					<!-- M/D/Y -->
				</div>
			</div>
		</div>
		<vue-particles
			class="particles"
			:clickEffect="false"
			:hoverEffect="false"
			:lineLinked="true"
			:lineOpacity="0.5"
			:linesDistance="120"
			:linesWidth="1"
			:moveSpeed="0.6"
			:particleOpacity="0.8"
			:particleSize="2"
			:particlesNumber="80"
			color="#2196ba"
			linesColor="#2196ba"
			hover-effect="grab"
			hover-mode="false"
		>
			re
		</vue-particles>
	</section>
</template>

<style scoped>
	@import url('https://fonts.googleapis.com/css?family=Fira+Sans&display=swap');

	@font-face {
		font-family: nevis;
		src: url(../assets/nevis.ttf);
	}

	h1 {
		font-family: nevis, cursive;
	}

	h2 {
		font-family: 'Fira Sans', sans-serif;
	}

	.particles {
		position: absolute;
		top: 0;
		height: 100%;
		width: 100%;
		object-fit: cover;
		overflow: hidden;
		z-index: 0 !important;
	}

	.angles {
		color: #2196ba;
	}

	h1 {
		font-size: 6em;
	}
	h2 {
		font-size: 3em;
	}
</style>

<script>
	import Countdown from './Countdown';

	export default {
		name: 'hero',
		components: {
			Countdown
		}
	};
</script>
