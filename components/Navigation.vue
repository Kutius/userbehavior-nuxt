<template>
	<header h-18 sticky top-0 w-full bg-opacity-80 backdrop-blur-lg>
		<div flex items-center h-full px-6 mx-auto max-w-7xl>
			<!-- TODO: nav aside -->
			<button flex justify-start lg:hidden w-12 h-12 items-center text-gray-400>
				btn
			</button>
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
