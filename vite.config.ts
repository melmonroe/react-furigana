import {defineConfig} from 'vite';
import {resolve} from 'path';
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts';

export default defineConfig({
    plugins: [react(), dts({
        include: ['src/index.ts', 'src/ReactFurigana.tsx']
    })],
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
