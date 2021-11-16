---
layout: ../../layouts/PostLayout.astro
title: How to style markdown with Tailwind CSS
publishDate: 2021-11-16T22:17:34.145Z
---
Tailwind CSS comes with "an opinionated set of base styles" called Preflight. A helpful CSS reset built on top of [modern-normalize](https://github.com/sindresorhus/modern-normalize).

Margins, headings, lists, and many others get stripped from their defaults. Thus, achieving cross-browser consistency and an easier adaptation of your design system.

It all sounds helpful, until you need those defaults to style a markdown post.

In comes `@tailwindcss/typography`, a plugin with sensible typographic styles. It adds a set of `prose` classes to style content blocks like the one you are reading.

You can install it via npm or yarn:

```
# Using npm
npm install @tailwindcss/typography

# Using Yarn
yarn add @tailwindcss/typography
```

Then add the plugin to your `tailwind.config.js` file:

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
```

Finally, you can use the `prose` class to apply the markdown styling:

```html
<article class="prose lg:prose-xl">
  <h1>Welcome to Mars!</h1>
  <p>
    Although life on Mars is perfect in every single way, you might have some questions.
  </p>
  <p>
    Of course there’s air! Just don’t breathe it. And, with the crazy gravity situation, everyone can dunk!
  </p>
  <!-- ... -->
</article>
```

More information about the `prose` class and its modifiers can be found at the [repository](https://github.com/tailwindlabs/tailwindcss-typography).