<script setup lang="ts">
const props = defineProps<{
	name: string
	path: string
}>()
const asideStore = useAsideStore()
</script>

<template>
	<nuxt-link :to="props.path" class="text-left">
		<span
			class="select-block relative inline-flex items-center justify-start rounded-md px-2 py-1"
			text="base gray6 dark:gray3"
			font="sans medium"
			@click="asideStore.toggleMenu"
		>
			<span>{{ props.name }}</span>
		</span>
	</nuxt-link>
</template>

<style scoped>
.router-link-active .select-block {
	color: #fff;
	@apply bg-green-500 dark:bg-sky-800;
}
</style>
