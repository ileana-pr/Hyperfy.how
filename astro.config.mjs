// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'The Hype',
			customCss: [
        './src/styles/custom.css',
			],
			social: {
				github: 'https://github.com/hyperfy-xyz',
				discord: 'https://discord.gg/SzPjsvk5',
				'x.com': 'https://x.com/hyperfy_io',
			},
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Contribute Here', slug: 'guides/contribute' },
						{ label: 'Hyperfy Branding', slug: 'guides/branding' },
						{ label: 'Docs', slug: 'guides/docs' },
						{ label: 'Commands', slug: 'guides/commands' },
						{ label: 'Scripts', slug: 'guides/scripts' },
						{ label: '$Hyper Token', slug: 'guides/token' },
						{ label: 'Videos', slug: 'guides/videos' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
