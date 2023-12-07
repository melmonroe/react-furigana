import {defineConfig} from 'vite';
import {resolve} from 'path';
import react from '@vitejs/plugin-react'

export default defineConfig({
    plugins: [react()],
    build: {
        sourcemap: true,
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            formats: ['es', 'umd'],
            name: 'react-furigana',
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM'
                },
            },
        },
    },
    test: {
        globals: true,
        environment: 'jsdom'
    },
})
