// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'packofpuppies.com',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/feralfluid/tines' }],
			pagefind: false,
			tableOfContents: false,
		}),
	],
});
