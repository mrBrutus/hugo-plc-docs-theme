<p align="center">
  <a href="https://plc-docs-theme.netlify.app/">
    <img alt="PLC docs theme" src="static/logo.svg" height="150">
  </a>
</p>

<h1 align="center">
  PLC docs theme
</h1>

<h3 align="center">
  A theme for PLC library documentation
</h3>

<p align="center"><em>
  Write your PLC code and create a beautiful documentation website — at the same time, with the same tools.
</em></p>

## About

> Writing PLC code is great fun, writing documentation really isn't.<br>
> — <cite>Bertus de Groot</cite>

As a [PLC](https://en.wikipedia.org/wiki/Programmable_logic_controller) software engineer you eventually have to write documentation for your *library components* (data types, function blocks etc.) and *programs*.

Although some PLC vendors have tools for writing library documentation integrated in their engineering tool, there is no industry standard and especially when working with various PLC platforms such a *vendor specific solution* is far from ideal.

Then you often end up using standard office tools such as MS Word to write the documentation, something not ideal either. In the worst case you might even find yourself pasting *screenshots of the source code* in these files — a true disaster in terms of maintenance.

**Do you recognize this?**
Then the time is right to implement a <a href="https://www.writethedocs.org/guide/docs-as-code">docs-as-code</a> approach to your [PLC](https://en.wikipedia.org/wiki/Programmable_logic_controller) coding workflow and use this theme to generate the documentation.

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

Please note that even though the PLC documentation features is what makes this theme unique, it is not limited to that and you will see that it can also be used perfectly for writing other kinds of documentation or blog posts.

## Demo

View the demo of this theme on Netlify: [plc-docs-theme.netlify.app](https://plc-docs-theme.netlify.app/).

## Get started

1. [Install Node.js](https://nodejs.org/en/download/).
   Node's `npm` is used for package management/dependencies and for running scripts.

1. Install the dependencies for **Tailwind CSS**.
   These have to be installed globally (see [Hugo Docs](https://gohugo.io/hugo-pipes/postcss/)):

    ```sh
    npm install -g postcss-cli autoprefixer
    ```

1. [Install Hugo](https://gohugo.io/overview/installing/).
   Make sure to install the **extended version** (`hugo_extended`) and that is is at least `v0.81`.

1. Clone this repository:

    ```sh
    git clone https://github.com/mrBrutus/hugo-plc-docs-theme.git
    cd hugo-plc-docs-theme
    ```

1. Install the theme's dependencies:

    ```sh
    npm i
    ```

1. Run the exampleSite in the environment of your choice.
   This starts Hugo's local server and serves the website at the mentioned IP address:

    ```sh
    # development environment
    # - all pages and content visible (including the know-how protected parts)
    # - contains the full set of TailwindCSS classes (> 8Mb)
    # - page served at <localhost:1313>

    npm run dev
    ```

    or:

    ```sh
    # production environment
    # - only pages and content intended for customers visible (no know-how protected parts)
    # - contains only the used TailwindCSS classes (CSS purged)
    # - page served at <localhost:1314>

    npm run prod
    ```
