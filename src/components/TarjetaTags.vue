<template>
	<b-field group-multiline grouped>
		<div class="control" v-for="(tag, index) in tags" :key="index">
			<b-taglist attached>
				<b-tag type="is-dark" size="is-medium">
					<b-icon :icon="tag.iconName" type="is-primary"></b-icon>
				</b-tag>
				<b-tag type="is-dark" size="is-medium">{{ tag.content }}</b-tag>
			</b-taglist>
		</div>
	</b-field>
</template>

<script>
	export default {
		name: 'ModalEvento',
		props: {
			tags: {
				type: Array
			}
		}
	};
</script>

<style></style>
