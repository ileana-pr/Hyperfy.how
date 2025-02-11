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
				farcaster: 'https://warpcast.com/~/channel/hyperfy',
			},
			sidebar: [
				{
					label: 'Welcome',
					items: [
						{ label: 'Contribute Here', slug: 'welcome/contribute' },
					],
				},
				{
					label: 'Brand & Token',
					items: [
						{ label: 'Hyperfy Colors', slug: 'brand/colors' },
						{ label: '$Hyper Token', slug: 'brand/token' },
						{ label: 'Tweets', slug: 'brand/x' },
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'FAQs', slug: 'guides/faq' },
						{ label: 'Quick Start', slug: 'guides/quickstart' },
						{ label: 'Getting Started', slug: 'guides/getting-started' },
						{ label: 'Docs', slug: 'guides/docs' },
						{ label: 'Community Assets', slug: 'guides/assets' },
						{ label: 'ref/World', slug: 'guides/world' },
						{ label: 'Entity/App', slug: 'guides/entity' },
						{ label: '.hyp App Format', slug: 'guides/hyp-app-format' },
						{ label: 'Nodes', slug: 'guides/nodes' },
						{ label: 'Models', slug: 'guides/models' },
						{ label: 'Commands', slug: 'guides/commands' },
						{ label: 'Scripts', slug: 'guides/scripts' },
						{ label: 'Videos', slug: 'guides/videos' },
					],
				},
				{
					label: 'Resources',
					autogenerate: { directory: 'resources' },
				},
			],
		}),
	],
});
