import {
	defineConfig,
	presetAttributify,
	presetIcons,
	presetTypography,
	presetUno,
	presetWebFonts,
	transformerDirectives,
	transformerVariantGroup,
} from 'unocss'

export default defineConfig({
	shortcuts: [
		// [
		// 	'btn',
		// 	'px-4 py-1 rounded inline-block bg-teal-600 text-white cursor-pointer hover:bg-teal-700 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
		// ],
		[
			'btn',
			'py-2 px-4 font-semibold inline-block rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 cursor-pointer disabled:(cursor-not-allowed !bg-gray-600) dark:(bg-green-700 hover:bg-green-900)',
		],
		[
			'icon-btn',
			'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
		],
	],
	presets: [
		presetUno(),
		presetAttributify(),
		presetIcons({
			scale: 1.2,
		}),
		presetTypography(),
		presetWebFonts({
			fonts: {
				sans: 'DM Sans',
				serif: 'DM Serif Display',
				mono: 'DM Mono',
			},
		}),
	],
	transformers: [transformerDirectives(), transformerVariantGroup()],
})
