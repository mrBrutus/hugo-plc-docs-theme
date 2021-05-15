<h1 align="center">
  <span>
    <img alt="PLC docs theme" src="static/logo.svg" height="100">
    PLC docs theme
  </span>
</h1>

<h3 align="center">
  A theme for PLC library documentation
</h3>

<p align="center"><em>
  Write your PLC code and create a beautiful documentation website — at the same time, with the same tools.
</em></p>

## About

As a [PLC](https://en.wikipedia.org/wiki/Programmable_logic_controller) software engineer you might need to write proper documentation for your *library components* (data types, function blocks) and *programs*.

Although some PLC vendors do have documentation tools integrated in their engineering tool, there is no industry standard and especially when having to maintain code on various PLC platforms you often end up using a text processor such as Word to write the documentation.

> Writing PLC code is great fun, writing documentation really isn't.<br>
> — <cite>Bertus de Groot</cite>

Do you recognize this? Then the time is right to implement a <a href="https://www.writethedocs.org/guide/docs-as-code">docs-as-code</a> approach to your [PLC](https://en.wikipedia.org/wiki/Programmable_logic_controller)
coding workflow and use this theme to generate the documentation.

## Features

1. **Single source** - Maintenance made easy by having everything in one simple source directory structure, version controlled by GIT.
1. **Data driven** - Library components are described using `yaml` data files and `iecst` PLC code files.
1. **Keepin' it [DRY](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself)** - Define often-used variables just once (in a central `common.yaml` file).
1. **Powerful sidebar** - Site navigation using an *automagically* built nested- and collapsible sidebar.
1. **Syntax highlighting** - [Highlight.js](https://highlightjs.org/static/demo/) with support for `IEC61131 Structured Text` makes code blocks pleasant to the eye.
1. **Tailwind CSS** - Built with the [TailwindCSS](https://tailwindcss.com/) framework and its `Typography` plugin.
1. **Customizable** - Easily change colors and styles to match your branding.
1. **PDF friendly** - Pages are optimized for PDF printing (on Chromium based browsers).
1. **Mobile friendly** - Excellent support for small screens.

## Demo

- [plc-docs-theme.netlify.app](https://plc-docs-theme.netlify.app/)

## Requirements

The PLC docs theme has the following requirements:

1. **Hugo** - The static site generator.
    Install the latest `hugo_extended` release from the [Hugo site](https://github.com/gohugoio/hugo/releases). Make sure the version is *at least* `v0.81`.

    > The **extended** version of Hugo includes support for `PostCSS` which is **a must** for this theme.

1. **Node.js** - `npm` is used for package management/dependencies and for running scripts.

    Install the latest release from the [Node.js site](https://nodejs.org/en/download/).

1. **Tailwind CSS** - for building and purging the css files

    Install globally (see [Hugo Docs](https://gohugo.io/hugo-pipes/postcss/)):

    ```sh
    npm install -g postcss-cli autoprefixer
    ```

## Get started

### 1) Install dependencies

```sh
npm i
```

### 2) Run the exampleSite

Start Hugo's local server for the environment of your choice:

1. **development**

    - all pages and content visible (including the know-how protected parts)
    - contains the full set of TailwindCSS classes (> 8Mb)
    - page served at <localhost:1313>

    ```sh
    npm run dev
    ```

1. **production**

    - only pages and content intended for the customers visible (know-how protected parts not available)
    - contains only the used TailwindCSS classes (CSS purged)
    - page served at <localhost:1314>

    ```sh
    npm run prod
    ```

After some initial build time (up to 20 seconds) the example site is now being served at the above mentioned address.

The Hugo server watches for changes and will rebuild (and refresh) the page automatically after every change. Keep an eye on the terminal output to see the progress of rebuilding.
