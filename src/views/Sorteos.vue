<template>
	<Seccion>
		<div class="columns">
			<div class="column is-one-third">
				<Timeline
					id="HackersWeek"
					sourceType="profile"
					:options="{
						tweetLimit: '3',
						lang: 'es',
						align: 'center',
						conversation: 'none',
						chrome: 'noheader',
						cards: 'hidden'
					}"
				>
					<div class="spinner"></div
				></Timeline>
			</div>
		</div>
	</Seccion>
</template>

<style scoped>
	.timeline-Header,
	.timeline-InformationCircle-widgetParent {
		display: hidden;
	}
</style>

<script>
	import Seccion from '@/components/Seccion';
	import { Timeline } from 'vue-tweet-embed';

	export default {
		components: {
			Seccion,
			Timeline
		}
	};
</script>
