<script setup lang="ts">
const asideStore = useAsideStore()
</script>

<template>
	<aside fixed z-50 lg:z-0 lg:static>
		<div h-full overflow-auto lg:overflow-visible>
			<!-- blur layer -->
			<Transition name="fade">
				<div
					v-if="asideStore.menuVisibility"
					@click.stop="asideStore.toggleMenu"
					class="fixed top-18 left-0 z-0 w-full h-full pointer-events-auto backdrop-blur-lg lg:hidden"
				/>
			</Transition>
			<!-- mobile -->
			<Transition name="slide-from-left-to-left">
				<div
					v-show="asideStore.menuVisibility"
					class="fixed top-18 left-0 bg-dark7 w-auto h-full min-w-2/5 min-h-screen"
					lg:hidden
					overflow-auto
					pointer-events-auto
					border="r gray7"
				>
					<AsideNav />
				</div>
			</Transition>
		</div>
	</aside>
</template>

<style scoped>
/* fade */
.fade-enter-active,
.fade-leave-active {
	transition: all 0.2s ease-out;
}
.fade-enter-from,
.fade-leave-to {
	opacity: 0;
}
/* slide */
.slide-from-left-to-left-enter-active,
.slide-from-left-to-left-leave-active {
	transition: all 0.2s ease-out;
}
.slide-from-left-to-left-enter-from,
.slide-from-left-to-left-leave-to {
	transform: translateX(-3rem);
	opacity: 0;
}
</style>
