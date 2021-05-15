<p align="center">
  <img alt="PLC docs theme" src="static/logo.svg" height="100">
</p>

<h1 align="center">
  PLC docs theme
</h1>

<h3 align="center">
  Theme for PLC library documentation
</h3>

<p align="center">
  Write your PLC code and create a beautiful documentation website — at the same time, with the same tools.
</p>

## What is it good for?

As a [PLC](https://en.wikipedia.org/wiki/Programmable_logic_controller) software engineer you might need to write proper documentation for your *library components* (data types, function blocks) and *programs*.

Although some PLC vendors do have documentation tools integrated in their engineering tool, there is no industry standard and especially when having to maintain code on several PLC platforms you often still end up using a text processor such as Word to write the documentation.

> Writing PLC code is great fun, writing documentation really isn't.<br>
> — <cite>Bertus de Groot</cite>

Do you recognize this? Then the time is right to implement a <a href="https://www.writethedocs.org/guide/docs-as-code">docs-as-code</a> approach to your [PLC](https://en.wikipedia.org/wiki/Programmable_logic_controller)
coding workflow and use this theme to generate the documentation.

## Features

1. **Single source** - Maintenance made easy by having everything in one simple source directory structure, version controlled by GIT.
1. **Data driven** - Library components are created using `yaml` data files and `iecst` PLC code files.
1. **Keepin' it [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)** - Define often-used variables in a central place.
1. **Powerful sidebar** - Site navigation using an automagically built nested- and collapsible sidebar.
1. **Syntax highlighting** - [Highlight.js](https://highlightjs.org/static/demo/) with `IEC61131 Structured Text` support makes viewing code blocks pleasant for the eye.
1. **Tailwind CSS** - Using the [TailwindCSS](https://tailwindcss.com/) framework and its `Typography` plugin.
1. **Themeable** - Easily change colors and style to match your needs.
1. **PDF friendly** - Pages optimized for PDF printing.
1. **Mobile friendly** - Excellent support for small screens.
1. **Blog section** - todo
1. **Versioned sections** - todo

## Demo

- [todo](https://www.example.com/)

## Requirements

The PLC docs theme requires:

- Hugo (`> v0.81`)
- Node.js
- Tailwind CSS

### Hugo

Install the latest `hugo_extended` release from the [Hugo site](https://github.com/gohugoio/hugo/releases).

> `hugo_extended` includes support for PostCSS which is required for this theme.

### Node.js

Install the latest release from the [Node.js site](https://nodejs.org/en/download/).

### Tailwind CSS

Install globally (see [Hugo Docs](https://gohugo.io/hugo-pipes/postcss/)):

```sh
npm install -g postcss-cli autoprefixer
```

Install dependencies:

```sh
npm install
```

## Run

Start the development server of your choice:

**1) development environment**

- contains the full set of TailwindCSS classes (> 8Mb)
- page served at <localhost:1313>

```sh
npm run server-dev
```

**2) production environment**

- contains only the used TailwindCSS classes (CSS purged)
- published content same as for deploy (but CSS not minified and fingerprinted)
- page served at <localhost:1314>

```sh
npm run server-prod
```

After some initial build time (up to 20 seconds) the example site is now being served at the above mentioned address.

The server watches for changes and will rebuild (and refresh) the page automatically after every change. Keep an eye on the terminal output to see the progress of rebuilding.

### Troubleshooting

- If the rebuild is not executed automatically: `CTRL-c` to abort, then restart the development server and refresh the browser window when done
