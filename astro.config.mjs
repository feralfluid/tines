// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'packofpuppies.com',
			social: [
				{ icon: 'blueSky', label: 'BlueSky', href: 'https://bsky.app/profile/feralfluid.bsky.social' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/feralfluid/tines' },
			],
			pagefind: false,
			tableOfContents: false,

			head: [
		    {
		      tag: 'link',
		      attrs: {
		        rel: 'icon',
		        type: 'image/png',
		        href: '/favicon/favicon-96x96.png',
		        sizes: '96x96',
		      },
		    },
		    {
		      tag: 'link',
		      attrs: {
		        rel: 'icon',
		        type: 'image/svg+xml',
		        href: '/favicon/favicon.svg',
		      },
		    },
		    {
		      tag: 'link',
		      attrs: {
		        rel: 'shortcut icon',
		        href: '/favicon/favicon.ico',
		      },
		    },
		    {
		      tag: 'link',
		      attrs: {
		        rel: 'apple-touch-icon',
		        href: '/favicon/apple-touch-icon.png',
		        sizes: '180x180',
		      },
		    },
		    {
		      tag: 'link',
		      attrs: {
		        rel: 'manifest',
		        href: '/favicon/site.webmanifest',
		      },
		    },
		  ],
		}),
	],
	site: 'https://packofpuppies.com',
});
