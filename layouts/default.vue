<template>
	<div w-full>
    <Navigation />
    <main class="pb-20 px-10 text-center">
			<slot />
			<Footer />
			<div class="mt-5 mx-auto text-center opacity-25 text-sm">[Default Layout]</div>
		</main>
	</div>
</template>
