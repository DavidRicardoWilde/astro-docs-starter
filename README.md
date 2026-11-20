# Astro Docs Starter

A multilingual Astro template for open-source project documentation. Write pages in Markdown and get a responsive sidebar, language switching, light and dark themes, page search, and a table of contents.

## Quick start

Use Node.js 22.23.4 or later and pnpm 12.4.1.

### Use the GitHub template

Choose [Use this template](https://github.com/DavidRicardoWilde/astro-docs-starter/generate) to create your own repository. Clone it, then run the following in the repository root.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

You can also clone the starter directly and run the same commands.

### Create a project with Astro

Use `create astro` to scaffold a local project from this repository.

```sh
pnpm create astro@latest my-docs --template DavidRicardoWilde/astro-docs-starter --no-install --no-ai --yes
cd my-docs
pnpm install --frozen-lockfile
pnpm dev
```

Open the URL printed in the terminal. For a production preview, run `pnpm build` and then `pnpm preview`.

## Add the docs to a monorepo

### pnpm workspace

Run the scaffold command from your monorepo root. Use an unused directory under `apps/` if your workspace already has an `apps/docs` app.

```sh
pnpm create astro@latest apps/docs --template DavidRicardoWilde/astro-docs-starter --no-install --no-git --no-ai --yes
```

Make sure the root `pnpm-workspace.yaml` includes `apps/*` under `packages`. Remove the generated `apps/docs/pnpm-lock.yaml` and the `packageManager` field from `apps/docs/package.json` so the workspace manages both at the root. Keep `apps/docs/LICENSE` with the template code.

From the monorepo root, install dependencies and run the docs app.

```sh
pnpm install
pnpm --filter ./apps/docs dev
```

Run `pnpm --filter ./apps/docs build` to generate `apps/docs/dist/`.

### Turborepo

After adding the app to your workspace, create `apps/docs/turbo.json` to cache the Astro build output and run the dev server as a persistent task. See [Turborepo package configuration](https://turborepo.dev/docs/reference/package-configurations).

```json
{
  "extends": ["//"],
  "tasks": {
    "build": { "outputs": ["dist/**"] },
    "dev": { "cache": false, "persistent": true }
  }
}
```

Add `.turbo/` to the root `.gitignore` if it is missing. Run either command from the monorepo root.

```sh
pnpm exec turbo run dev --filter=./apps/docs
pnpm exec turbo run build --filter=./apps/docs
```

## Make it yours

1. Set your site title and GitHub repository URL in [src/site.ts](src/site.ts). Set `repository` to an empty string to hide the GitHub links. Replace [public/favicon.png](public/favicon.png) with your own icon.
2. Replace the samples in [src/content/docs](src/content/docs). Each locale has an `index.md` home and two example guides. A file such as `en/guides/install.md` becomes `/guides/install/`.
3. Add a title, description, and sidebar order to each page. Use second- and third-level headings for the page outline.

   ```md
   ---
   title: Installation
   description: Install and configure the project.
   order: 20
   ---

   ## Install the package

   Add your installation instructions here.
   ```

4. Keep the languages your project needs. The samples include English, Simplified Chinese, Traditional Chinese, Japanese, Korean, and Spanish. Remove an unused language's content folder to hide it, or add a locale in [src/site.ts](src/site.ts) and create its folder with an `index.md`. To change the unprefixed language, update `defaultLocale`.
5. Use the same relative Markdown path for translations. The language menu opens the matching page when it exists and otherwise opens that language's home page. Search covers titles and body text in the current language.

## Deploy

Run `pnpm build` to type-check the project and generate the static site in `dist/`. Publish that directory with your static host. If the site lives under a path such as `/my-project/`, set `base: '/my-project'` in [astro.config.mjs](astro.config.mjs). Use relative links in Markdown to keep them portable across base paths.

## Contributing

Search existing issues first. Choose the [matching issue form](https://github.com/DavidRicardoWilde/astro-docs-starter/issues/new/choose) for bugs, documentation feedback, or feature requests. For changes, see [CONTRIBUTING.md](CONTRIBUTING.md).

## License

[MIT](LICENSE). The layout and interactions are adapted from the [ToastKit documentation](https://github.com/DavidRicardoWilde/swiftui-toastkit/tree/main/docs) by David Wilde.
