// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  {
    files: ['./**/*.{ts,js,vue}'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    }
  },
)
