<template>
	<nav lg:flex gap-4 items-center h-full font-sans hidden>
		<a
			v-for="item in maps"
			:key="item.path"
			:href="item.path"
			class="font-medium px-2 py-1"
		>
			{{ item.name }}
		</a>
	</nav>
</template>

<script setup lang="ts">
const maps = [
	{
		name: 'Processing Log',
		path: '/processing-log',
	},
	{
		name: 'DataMap',
		path: '/datamap',
	},
	{
		name: 'Analysis',
		path: '/analysis',
	},
	{
		name: 'Visibility',
		path: '/visibility',
	},
]
</script>
