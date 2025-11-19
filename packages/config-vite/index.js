// @ts-ignore
// Don't convert this to a ts file, because of this https://github.com/vitejs/vite/issues/5370
import { sveltekit } from '@sveltejs/kit/vite';
import { lingui } from '@lingui/vite-plugin';
import { defineConfig } from 'vite';

export default () => {
	return defineConfig(({ mode }) => ({
		plugins: [sveltekit(), lingui()],
		logLevel: 'info',
		build: {
			assetsInlineLimit: Infinity,
			sourcemap: mode === 'development',
			output: {
				sourcemap: mode === 'development',
			},
		},
		css: {
			preprocessorOptions: {
				scss: {
					api: 'modern-compiler',
				},
			},
		},
	}));
};
