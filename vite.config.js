import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'packages/pishgaman/pishgaman/src/resources/vue/Auth/app.js',
                'packages/pishgaman/pishgaman/src/resources/vue/test/app.js',
                'packages/pishgaman/pishgaman/src/resources/vue/departments/app.js',
                'packages/pishgaman/pishgaman/src/resources/vue/AccessLevel/app.js',
                'packages/pishgaman/pishgaman/src/resources/vue/Users/app.js',
                'packages/pishgaman/pishgaman/src/resources/vue/History/app.js',
                'packages/pishgaman/WorkReport/src/resources/vue/WorkReportApp.js',
            ],
            refresh: true,
        }),
        vue({
            template: {
                transformAssetUrls: {
                    base: null,
                    includeAbsolute: false,
                },
            },
        }),
    ],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm-bundler.js',
        },
    },
});
