---
layout: ../../layouts/PostLayout.astro
title: How to customize Tailwind CSS Typography
publishDate: 2021-11-19T08:43:05.514Z
---
Tailwind CSS Typography provides a set of prose classes you can use to style your markdown posts. But sometimes the default styles are not enough to hit the mark. That's when Tailwind's customization API swoops in to save the day.

If you don't know what Typography is, you should read [How to style markdown with Tailwind CSS](https://ertas.dev/posts/how-to-style-markdown-with-tailwind-css/) to learn more.

Inline code styling that comes default with the plugin is one style that is replaced by many. It inserts back ticks before and after the inline code and makes it bold, instead of the more common approach:

`<h3> Concerning Wedding Registries </h3>`

The solution to this is customizing the `tailwind.config.js` file. This allows you to target specific Tailwind classes and adjust their default behavior.

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
		  	'code': {
              color: "#333",
			  // You can also use @apply to inline existing utility classes
			  "@apply bg-gray-50 text-gray-700": "",
            },
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            }
          }
        }
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
```

Above example is only modifying the look of the inline code blocks. But the same method applies when altering different selectors.

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#333',
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
          },
        },
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}

```

You can also add new modifiers by creating a new key under `typography`.

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      typography: {
        '3xl': {
          css: {
            fontSize: '1.875rem',
            h1: {
              fontSize: '4rem',
            },
            // ...
          },
        },
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
```

If you want to delve into more detail, you can check out the [repository](https://github.com/tailwindlabs/tailwindcss-typography).