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
    [
      'btn',
      'py-2 px-4 font-semibold inline-block rounded-lg shadow-md text-white bg-green-500 hover:bg-green-700 cursor-pointer disabled:(cursor-not-allowed !bg-gray-600) dark:(bg-green-700 hover:bg-green-900)',
    ],
    [
      'icon-btn',
      'text-gray4 hover:text-green5',
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
