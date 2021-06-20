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
Then the time is right to implement a <a href="https://www.writethedocs.org/guide/docs-as-code">docs-as-code</a> approach to your [PLC](https://en.wikipedia.org/wiki/Programmable_logic_controller) coding workflow and use this theme to generate the documentation website.

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

## What's next

**This project is still in early stages** and there is some work to do until the `0.1.0` release.

- [ ] Add more content to this README.
  - [ ] describe parameters
  - [ ] describe shortcodes
- [ ] Create a nice layout for the landing page
- [ ] Lots of housekeeping 😅

## Get started

1. Make sure you already have [GIT](https://git-scm.com/downloads) installed on your system.

1. [Install Node.js](https://nodejs.org/en/download/).
   Node's `npm` is used for package management/dependencies and for running scripts.

1. Install the dependencies for **Tailwind CSS**.
   These have to be installed globally (see [Hugo Docs](https://gohugo.io/hugo-pipes/postcss/)):

    ```sh
    npm install -g postcss-cli autoprefixer
    ```

1. [Install Hugo](https://gohugo.io/overview/installing/).
   Make sure to install the **extended version** (`hugo_extended`) and that is is *at least* `v0.81`.

1. Create a new site:

    ```sh
    hugo new site my-plc-website
    ```

1. Add the PLC docs theme:

   **Option 1:** As a GIT submodule (recommended, as it lets you benefit from future updates):

    ```sh
    cd my-plc-website
    git init
    git submodule add https://github.com/mrBrutus/hugo-plc-docs-theme.git themes/hugo-plc-docs-theme
    ```

   **Option 2:** As static files:

   - Download the archive from [https://github.com/mrBrutus/hugo-plc-docs-theme/archive/main.zip](https://github.com/mrBrutus/hugo-plc-docs-theme/archive/main.zip).
   - Extract that .zip file to get a `hugo-plc-docs-theme-main` folder.
   - Rename it to `hugo-plc-docs-theme` and move it into the `themes/` folder.

1. Install the theme's dependencies:

    ```sh
    cd themes/hugo-plc-docs-theme
    npm i
    cd ../..
    ```

1. Edit the configuration file (found in the root of `/my-plc-website`)

   > Hugo supports various formats for the configuration file but for
     consistency we will use [`YAML`](https://www.cloudbees.com/blog/yaml-tutorial-everything-you-need-get-started).

   Rename `config.toml` to `config.yaml` and edit the file:

   *config.yaml:*

    ```yaml
    baseURL: "http://example.org/"
    languageCode: "en-us"
    title: "My PLC website"

    # added items
    theme: "hugo-plc-docs-theme"
    markup:
      goldmark:
        renderer:
          unsafe: true
      highlight:
        codeFences: false
    ```

    Visit the Hugo docs for the [full list](https://gohugo.io/getting-started/configuration/#all-configuration-settings) of configuration options.

1. Add some content

   *Create an empty `_index.md` file in the content root:*

   ```sh
   echo "" > content/_index.md
   ```

   The theme comes with a couple of *templates* (called [archetypes](https://gohugo.io/content-management/archetypes/))
   which save a lot of work when creating new content.

   *Add some content using the theme's templates (archetypes):*

   ```sh
   # create a blog post called `my-blogpost`
   hugo new --kind post post/my-blogpost

   # Create a new page called `my-manual-page`
   hugo new --kind page tutorials/my-manual-page

   # Create a new library called `myLib`
   hugo new --kind lib myLib

   # Create a new function called `myFunction` for the library
   hugo new --kind lib-function myLib/functions/myFunction
   ```

   These templates help to save a lot of time  setup the folder structure needed for a PLC library.

    Next steps:

    - Replace `featured-image.jpg` with a nice hero image which suits the content.
    - Create your content in `index.md` (and don't forget to set the front-matter
      parameters).

1. Run the website in the environment of your choice.
   This starts Hugo's local server and serves the website at the mentioned IP address:

    ```sh
    # development environment
    # - all pages and content visible (including the know-how protected parts)
    # - contains the full set of TailwindCSS classes (> 8Mb)
    # - page served at <localhost:1313>

    hugo server -p 1313 -e development --minify --cleanDestinationDir --disableFastRender --gc --buildDrafts
    ```

    - View the result at [http://localhost:1313](http://localhost:1313).

    or:

    ```sh
    # production environment
    # - only pages and content intended for customers visible (no know-how protected parts)
    # - contains only the used TailwindCSS classes (CSS purged)
    # - page served at <localhost:1314>

    hugo server -p 1314 -e production  --minify --cleanDestinationDir --disableFastRender --gc
    ```

    - View the result at [http://localhost:1314](http://localhost:1314).

    Or if you want to see the outcome of a build rather than running a server:

    ```sh
    # production build
    # - pages for production generated in the /public folder

    hugo -e production --minify --cleanDestinationDir --gc
    ```

## Theme relevant parameters

### config.yaml

```yaml
# Lets Hugo retrieve the Git info of the content files.
# Useful for getting the `last edit` date on the page.
enableGitInfo: true

params:  
  # Override the theme CSS variables
  # See theme's `/assets/css/theming.css` for the available
  # CSS variables.
  theme:
    light:
      color-background: '#f88'
    dark:
      color-background: '#88f'

  # Activate plugins
  # Plugins specified as `optional` (see theme's `/data/plugins.yaml`) can be activated
  # here site wise (will be loaded for every page).
  # NOTE: This is not recommended; better specify page wise (in page's front-matter)
  #       to keep page load times short.
  plugins:
  #   - mermaid

  # Customize the top left part of the page
  # Files located in theme's `/layouts/partials/svgs/theme/`
  #  - inline: icon-solid.svg
  #  - logo.svg: logo.svg
  # NOTE: Files can be placed in the site's (instead of the theme's)
  # `/layouts/partials/svgs/theme/` folder for overriding for this
  # site only.
  navBar:
    # kind of logo [ false / inline SVG (default) / <logo file name> ]
    logo: logo.svg    
    
    # setting this to true will increase the vertical padding for the logo
    wide_logo: false
    
    # kind of text [ false / title (default) / <some custom text> ]
    text: title
```

### Page Front matter

```yaml
# Add a header image to your post
featuredImage: true
featuredImageCaption: |
  Photo by [someone](https://www.example.com/someone)
# Images for search engines
images:
  - featured-image.jpg
```
