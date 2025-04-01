// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';



// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			editLink: {
				baseUrl: 'https://github.com/Innkeeping/Hyperfy.how/edit/main/',
			},
			title: 'Hyperfy.how',
			logo: {
        src: './src/assets/hyperfy-logo.svg',
      },
			favicon: '/assets/favicon.svg',
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
						{ label: 'History of Hyperfy', slug: 'welcome/hyperfy-history' },
					],
				},
				{
					label: 'Community',
					collapsed: true,
					items: [
						{ label: 'Open Source Contributors', slug: 'community/contributors' },
						{ label: 'Hyperfy Branding', slug: 'community/branding' },
						{ label: 'Video Tutorials Series', slug: 'community/tutorials' },
						{ label: 'Community Assets', slug: 'community/assets' },
						{ label: 'Community Projects', slug: 'community/projects' },


						{
							label: 'Builders Calls',
							collapsed: true,
							items: [
								{ label: 'All Calls', slug: 'community/calls' },
								{ label: '12 March 2025', slug: 'community/calls/12mar' },
								{ label: '5 March 2025', slug: 'community/calls/5mar' },
								{ label: '21 Feb 2025', slug: 'community/calls/21feb' },
								{ label: '13 Feb 2025', slug: 'community/calls/13feb' },
								{ label: '6 Feb 2025', slug: 'community/calls/6feb' },

							],
						},

						{
							label: 'Socials',
							collapsed: true,
							items: [
								{ label: 'Tweets', slug: 'socials/x' },
								{ label: 'Bluesky', slug: 'socials/bluesky' },
								{ label: 'Videos', slug: 'socials/videos' },

							],
						},




					],
				},
				{
					label: 'Setup',
					items: [
						{ label: 'Quick Start👩‍💻🚀 ', slug: 'setup/quickstart' },
						{ label: 'Detailed Installation 👶🤝', slug: 'setup/detailed' },

						{
							label: 'v2 Hosting',
							collapsed: true,
							items: [
								{ label: 'Self Hosting', slug: 'hosting/self' },
								{ label: 'Hosting Providers', slug: 'hosting/providers' },
							],
						},
					],
				},
				{
					label: 'FAQs',
					collapsed: true,
					items: [
						{ label: 'Developer FAQs', slug: 'faq/developer' },
						{ label: 'Creator FAQs', slug: 'faq/creator' },
					],
				},
				{
					label: 'Hyperfy v2 Docs',
					collapsed: true,
					items: [
								{ label: 'Getting Started', slug: 'docs/getting-started' },
								{ label: 'Models', slug: 'docs/models' },
								{ label: 'Commands', slug: 'docs/commands' },
								{ label: 'Scripts', slug: 'docs/scripts' },
								{ label: '.hyp Format', slug: 'docs/hyp-format' },
								{ label: 'Blender Scripts', slug: 'docs/blender-scripts' },

						{
							label: 'ref',
							collapsed: true,
							items: [
								// Each item here is one entry in the navigation menu.
								{ label: '-Index', slug: 'ref' },
								{ label: 'Action', slug: 'ref/action' },
								{ label: 'Anchor', slug: 'ref/anchor' },
								{ label: 'App', slug: 'ref/app' },
								{ label: 'Audio', slug: 'ref/audio' },
								{ label: 'Avatar', slug: 'ref/avatar' },
								{ label: 'Collider', slug: 'ref/collider' },
								{ label: 'Group', slug: 'ref/group' },
								{ label: 'LOD', slug: 'ref/lod' },
								{ label: 'Material', slug: 'ref/material' },
								{ label: 'Mesh', slug: 'ref/mesh' },
								{ label: 'Node', slug: 'ref/node' },
								{ label: 'Num', slug: 'ref/num' },
								{ label: 'Player', slug: 'ref/player' },
								{ label: 'Props', slug: 'ref/props' },
								{ label: 'rigidbody', slug: 'ref/rigid-body' },
								{ label: 'UI', slug: 'ref/ui' },
								{ label: 'UIText', slug: 'ref/ui-text' },
								{ label: 'UIView', slug: 'ref/ui-view' },
								{ label: 'UIImage', slug: 'ref/ui-image' },
								{ label: 'World', slug: 'ref/world' },
							],
						},
					],
				},
				{
					label: 'Guides/Resources',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Optimizing Assets', slug: 'guides/optimizing' },
						// { label: 'Docs', slug: 'guides/docs' },
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
