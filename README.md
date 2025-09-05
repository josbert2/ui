# Bookforce Desing

Free up your time with pre-built classes that update site-wide automatically. Focus on building, not fixing.

```bash
pnpm install
pnpm dev
```

![github follow](https://img.shields.io/github/followers/Tailus-UI?style=social)
[![Open github repo](https://img.shields.io/badge/github-open-blue?style=flat)](https://github.com/Tailus-UI/)
[![Open the website](https://img.shields.io/badge/website-open-blue?style=flat)](https://html.tailus.io/)
[![twiter follow](https://img.shields.io/twitter/follow/tailusui?style=social)](https://twitter.com/tailus_ui)
[![linkedin follow](https://img.shields.io/badge/linkedin-follow-blue?style=flat)](https://www.linkedin.com/company/tailus-ui/)

## Documentation

[Docs](https://html.tailus.io/get-started/installation)

## Project Structure

The project is built with Astro, which searches for `.astro` or `.md` files in the `src/pages/` directory. Each page is displayed as a route based on its file name.

Astro/React/Vue/Svelte/Preact components must be placed in the `src/components/` directory.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :----------------------| :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:3000`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
