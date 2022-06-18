<script setup lang="ts">
const props = defineProps<{
	name: string
	path: string
}>()
</script>

<template>
	<nuxt-link :to="props.path">
		<span
			text="base gray5"
			font='sans medium'
			relative
			inline-flex
			items-center
			justify-start
			rounded-md
			px-2
			py-1
		>
		<span>{{ props.name }}</span>
			
		</span>
	</nuxt-link>
</template>

<style scoped>
.router-link-active span {
	color: #fff;
	@apply bg-green-500 dark:bg-gray-700
}
</style>
