import react from '@vitejs/plugin-react'
import {resolve} from 'path';
import {defineConfig} from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [react(), dts()],
    build: {
        sourcemap: true,
        copyPublicDir: false,
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            formats: ['es', 'umd'],
            name: 'react-furigana'
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
