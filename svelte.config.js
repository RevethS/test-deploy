import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter(),
		// Opt in to remote functions (`*.remote.ts`), used by the Sample Maker submit flow.
		experimental: {
			remoteFunctions: true
		},
		// Keep generated asset/import URLs relative so previews and custom domains
		// do not depend on a hard-coded deployment origin.
		paths: {
			relative: true
		},
		alias: {
			$config: 'src/lib/config.ts',
			$canvas: 'src/lib/ui/canvas'
		}
	}
};

export default config;
