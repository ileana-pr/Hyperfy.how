New updates

*You can click 'Edit Page' on the bottom of any page to go directly to it in repo and prompt you to fork*

Hyperfy.how is a living community resource for [Hyperfy v2.](https://github.com/hyperfy-xyz/hyperfy)

It will continue to evolve as Hyperfy v2 progresses. (with your help! 🚀)

Easily add resources in markdown to the appropriate .md or .mdx file.  If needed, create a new file.  Be sure to start with frontmatter format of all others, for templates go to `src/templates` and copy paste into appropriate folder.  Add folder if needed.


For sidebar and routing, you will need to add to astro.config.mjs. Order is based on astro.config.mjs.  Easiest is to copy from above and edit.  You can have nested sidebars.  You can have an index.md/mdx in a nested folder.

For example, `guides/web3` will direct to `guides/web3/index`.  You don't need to say index, and it will url to guides/web3.

---

For images, recommend to convert to .webp [Image Magick is one great way](https://imagemagick.org/)  or [Photopea is another](https://www.photopea.com/).  Both free and open-source tools.

Drop images in `public/assets`

`[![name](/assets/photo.webp)](/assets/photo.webp)` in .md/.mdx file will display image and allow it to be clicked to enlarge.


For embeds, badges, asides - check the `/src/templates/example.mdx`

---

Fork and clone

```sh frame="none"
git clone [your-repo-url]
cd [your-repo-name]
```

```sh frame="none"
pnpm install
pnpm dev
```
http://localhost:4321/


[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/innkeeping/hyperfy.how/tree/main/)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/innkeeping/hyperfy.how/tree/main/)


---

All PR merges will auto-build via netlify and deploy live.

---

### Starlight on Astro

Site is built using [Starlight on Astro](https://starlight.astro.build/)

For tips on using asides, badges, embeds, etc -- check the docs or find in this repo and copy.

When using any import/components, file must be .mdx

---

### Expressive Code

[Expressive code](https://expressive-code.com/key-features/syntax-highlighting/) is built into Starlight for code blocks/steps.


---


[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

```
pnpm create astro --template starlight
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/starlight/tree/main/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/starlight/tree/main/examples/basics)
[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/withastro/starlight&create_from_path=examples/basics)
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fwithastro%2Fstarlight%2Ftree%2Fmain%2Fexamples%2Fbasics&project-name=my-starlight-docs&repository-name=my-starlight-docs)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro + Starlight project, you'll see the following folders and files:

```
.
├── public/
├── src/
│   ├── assets/
│   ├── content/
│   │   ├── docs/
│   └── content.config.ts
├── astro.config.mjs
├── package.json
└── tsconfig.json
```

Starlight looks for `.md` or `.mdx` files in the `src/content/docs/` directory. Each file is exposed as a route based on its file name.

Images can be added to `src/assets/` and embedded in Markdown with a relative link.

Static assets, like favicons, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Check out [Starlight’s docs](https://starlight.astro.build/), read [the Astro documentation](https://docs.astro.build), or jump into the [Astro Discord server](https://astro.build/chat).

[Expressive Code is installed in Starlight already](https://expressive-code.com/installation/#starlight)
