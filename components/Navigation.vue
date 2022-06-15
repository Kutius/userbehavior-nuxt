<script lang="ts" setup>
const asideStore = useAsideStore()
</script>

<template>
	<header h-18 sticky top-0 w-full bg-opacity-80 backdrop-blur-lg>
		<div flex items-center h-full px-6 mx-auto max-w-7xl>
			<!-- TODO: nav aside -->
			<button
				lg:hidden
				items-center
				text-3xl
				icon-btn
				i-carbon:add
				transition-all-500
				transform
				hover:rotate-135
				@click="asideStore.toggleMenu"
			/>

			<div flex="~ 1" lg:justify-start justify-center>
				<Logos />
			</div>
			<NavMenu />
			<div flex justify-end lg:flex-1>
				<Operations />
			</div>
		</div>
	</header>
</template>
