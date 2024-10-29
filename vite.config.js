// vite.config.js
import { defineConfig } from 'vite'

import symfonyPlugin from 'vite-plugin-symfony';
import reactPlugin from '@vitejs/plugin-react';
import path from "path";

export default defineConfig({
    plugins: [
        reactPlugin(),
        symfonyPlugin({
            stimulus: true
        }),
    ],
    build: {
        rollupOptions: {
            input: {
                "app": "./assets/app.js",
            }
        },
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./assets"),
        },
    },
});