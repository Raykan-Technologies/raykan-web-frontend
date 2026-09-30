import { globalIgnores } from 'eslint/config'
import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript'
import pluginVue from 'eslint-plugin-vue'
import pluginOxlint from 'eslint-plugin-oxlint'
import skipFormatting from 'eslint-config-prettier/flat'

// To allow more languages other than `ts` in `.vue` files, uncomment the following lines:
// import { configureVueProject } from '@vue/eslint-config-typescript'
// configureVueProject({ scriptLangs: ['ts', 'tsx'] })
// More info at https://github.com/vuejs/eslint-config-typescript/#advanced-setup

export default defineConfigWithVueTs(
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,ts,mts,tsx}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**', '**/.nuxt/**', '**/.output/**']),

  ...pluginVue.configs['flat/essential'],
  vueTsConfigs.recommended,

  ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),

  {
    name: 'app/icon-components',
    files: ['src/components/icons/**/*.vue', 'src/components/file-icons/**/*.vue'],
    rules: { 'vue/multi-word-component-names': 'off' },
  },

  // Nuxt names layouts after their file (`default`, `guest`) and requires app.vue / error.vue
  {
    name: 'app/nuxt-files',
    files: ['src/layouts/*.vue', 'src/app.vue', 'src/error.vue'],
    rules: { 'vue/multi-word-component-names': 'off' },
  },

  skipFormatting,
)
