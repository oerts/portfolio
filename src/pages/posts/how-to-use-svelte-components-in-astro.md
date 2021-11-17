---
layout: ../../layouts/PostLayout.astro
title: How to use Svelte components in Astro
publishDate: 2021-11-17T14:01:03.678Z
---
Astro supports Svelte out of the box. All you need is the correct framework [renderer](https://github.com/snowpackjs/astro/tree/main/packages/renderers) and you are good to go.

A renderer is an npm package that handles two things; rendering and rehydrating HTML.

We need to install @astrojs/renderer-svelte plugin to make Svelte components work.

Install @astrojs/renderer-svelte via npm or yarn:

```bash
# Using npm
npm install @astrojs/renderer-svelte

# Using yarn
yarn add @astrojs/renderer-svelte
```

Add it to your `astro.config.mjs` in the `renderer` property.

```javascript
export default {
  // ...

  renderers: [
    // ...
    '@astrojs/renderer-svelte'
  ]
}
```

Now you can import your Svelte component as usual.

```javascript
---
	import Navigation from '../components/Navigation.svelte'
---

<Navigation />
```

For more information about renderers, take a look at the [documentation](https://docs.astro.build/reference/renderer-reference/).