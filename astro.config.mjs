// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Hyperfy.how',
			customCss: [
        './src/styles/custom.css',
			],
			social: {
				github: 'https://github.com/hyperfy-xyz',
				discord: 'https://discord.gg/SzPjsvk5',
				'x.com': 'https://x.com/hyperfy_io',
				farcaster: 'https://warpcast.com/~/channel/hyperfy',
				youtube: 'https://www.youtube.com/@hyperfy_xyz',
			},
			sidebar: [
				{
					label: 'Welcome',
					items: [
						{ label: 'Contribute to Docs', slug: 'welcome/contribute' },
						{ label: 'What is Hyperfy?', slug: 'welcome/what-is-hyperfy' },
						{ label: 'FAQs', slug: 'welcome/faq' },
					],
				},
				{
					label: 'Brand & Token',
					items: [
						{ label: 'Hyperfy Colors', slug: 'brand/colors' },
						{ label: '$Hyper Token', slug: 'brand/token' },
						{ label: 'Hyperball', slug: 'brand/hyperball' },
					],
				},
				{
					label: 'Socials',
					items: [
						{ label: 'Tweets', slug: 'socials/x' },
						{ label: 'Youtube', slug: 'socials/youtube' },
					],
				},
				{
					label: 'Quick Start',
					items: [
						{ label: 'Installation', slug: 'quickstart/installation' },
					],
				},
				{
					label: 'v2 Hosting',
					items: [
						{ label: 'Self Hosting', slug: 'hosting/self' },
						{ label: 'Hosting Providers', slug: 'hosting/providers' },
					],
				},
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started', slug: 'guides/getting-started' },
						{ label: 'Docs', slug: 'guides/docs' },
						{ label: 'Community Assets', slug: 'guides/assets' },
						{ label: 'Blender Exporter', slug: 'guides/blender-exporter' },
						{ label: 'Optimizing Assets', slug: 'guides/optimizing-assets' },
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
