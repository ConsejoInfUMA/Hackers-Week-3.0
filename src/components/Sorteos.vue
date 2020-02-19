<template>
	<div class="columns is-centered">
		<div class="column is-half">
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
</template>

<style scoped>
	.timeline-Header,
	.timeline-InformationCircle-widgetParent {
		display: hidden;
	}
</style>

<script>
	import { Timeline } from 'vue-tweet-embed';

	export default {
		components: {
			Timeline
		}
	};
</script>
