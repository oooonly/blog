import { defineConfig } from 'unocss'
import presetUno from '@unocss/preset-uno'
import transformerVariantGroup from '@unocss/transformer-variant-group'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetUno({
      variablePrefix: 'only-'
    })
  ],
  transformers: [transformerVariantGroup()],
  shortcuts: [
    [
      /^only-badge-(.*)$/,
      ([, c], { theme }) => {
        return `bg-${c}-500 text-white border-(1 ${c}-400 solid) rounded-2 px-2 py-2 cursor-pointer`
      },
      { layer: 'components' }
    ],
    [
      /^only-card(?:-(.*))?$/,
      ([, c], { theme }) => {
        if (!c) {
          return 'flex flex-col p-5 rounded-2 shadow-md border-(2 solid #eee)'
        } else if (c === 'header') {
          return 'p-5 mb-5 rounded-2 border-(4 solid #eee) shadow-sm'
        } else if (c === 'body') {
          return 'px-4 py-4'
        }
        return ''
      },
      { layer: 'components' }
    ]
  ]
})
