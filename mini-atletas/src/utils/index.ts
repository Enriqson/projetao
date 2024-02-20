import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from '../../tailwind.config.js'

export const {theme: TAILWIND_THEME} = resolveConfig(tailwindConfig)
