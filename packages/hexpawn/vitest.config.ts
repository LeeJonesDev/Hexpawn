import path from 'path'
import { configDefaults, defineConfig } from 'vitest/config'

export default defineConfig({
    test: {
        exclude: [...configDefaults.exclude, 'packages/template/*'],
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@/*': path.resolve(__dirname, './src/*'),
            '@Icons/*': path.resolve(__dirname, './src/Icons/*')
        },
    }
})
