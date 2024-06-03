import { defineConfig } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  shortcuts: [
    [
      /^only-badge-(.*)$/,
      ([, c], { theme }) => {
        return `bg-${c}-500 text-white border border-2 border-solid border-${c}-400 rounded-2 px-2 py-2`
      },
      { layer: 'components' }
    ]
  ]
})
