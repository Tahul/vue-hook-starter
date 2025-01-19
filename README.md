# 🪝 vue-composable-starter

A minimalist starting point for your next Vue 3 composable.

- 🧩 **TypeScript** by default
- 📦 **PNPM** as package manager
- 🤹 Testing using [**Vitest**](https://vitest.dev)
- ☑️ Linting using [**@antfu/eslint-config**](https://github.com/antfu/eslint-config)
- 🌐 [**Nuxt 3**](https://nuxtjs.org) as a playground
- 📸 Playgrounds using [**Vite**](https://vitejs.dev) and [Nuxt](https://nuxt.com/)
- 🚚 Built using [**unbuild**](https://github.com/unjs/unbuild)
- 📚 Documentation using [**Vitepress**](https://vitepress.dev)

> Edit [variables](#to-do), implement, test, publish 🏎

## Commands

Build the package:

```bash
pnpm build
```

Run the development environment (vite):

```bash
pnpm dev
```

Run the docs:

```bash
pnpm dev:docs
```

Build the docs:

```bash
pnpm build:docs
```

Lint the package:

```bash
pnpm lint
```

Run test suite:

```bash
pnpm test
```

Start Nuxt dev environment:

```bash
pnpm dev:nuxt
```

Build Nuxt environment:

```bash
pnpm build:nuxt
```

Preview Nuxt environment:

```bash
pnpm start:nuxt
```

## Why

This repository is useful if you want to start a new Vue composable, or a general Vue package.

I used it personally for:

- [**@vueuse/motion**](https://github.com/vueuse/motion)
- [**@vueuse/gesture**](https://github.com/vueuse/gesture)
- [**@vueuse/sound**](https://github.com/vueuse/sound)

I try to keep it updated when I upgrade my own workflow!

## Workflow

I usually develop with the `dev:nuxt` command.

Your changes on any file will be reloaded by **Nuxt**, and you can start trying SSR capabilities of your composable easily!

The general Nuxt environment does not differ from a classic Vue app.

## To-Do

- [ ] Edit package.json `name`, `description`, `repository` and `author` keys.
- [ ] Rename all `vue-composable-starter` with your package name.
- [ ] Rename `VueComposableStarterPluginOptions` with your plugin options.
- [ ] Remove .vscode folder (containing recommended extensions)
- [ ] Edit README.md.
- [ ] Implement my composable.
- [ ] Test my composable.
- [ ] Document my composable.
- [ ] Publish on [NPM](npmjs.com), [awesome-vue](https://github.com/vuejs/awesome-vue), [vue-forum](https://forum.vuejs.org/), [Vue Discord](https://fr.vuejs.org/v2/guide/join.html).

## Contributing

You are more than welcome to improve this starter template.

Just submit your changes via pull request and I will review them before merging.

If you are making a fix on the template, you can use the `main` branch and send a pull request.

If you are adding a new features, please create a new branch with a name describing your feature (`my-new-feature`), push to your branch and then submit a pull request.
