---
title: snippet
description: For re-using snippets or text sections.
author: mrBrutus
date: 2021-06-07
tags:
  - shortcode
---

The `snippet` shortcode can be used for re-using snippets or text sections --
Create a text section once and insert it in many pages.

*syntax:*

```md
{{</* snippet file="<name>" [source=true] */>}}
```

{{< note >}}
The file name supports wildcards (`*`).
{{< /note >}}

{{< note >}}
By setting the optional `source=true` you can render a markdown file as codeblock.
{{< /note >}}

## Usage

Place the snippet content in the `snippets` folder:

*snippets/some-folder/my-sample-text.md:*

```md
This is a text used in many pages.

- lorem
- ipsum
```

Then use the shortcode throughout your pages:

```md
---
title: some page
---

## Inserted text section

{{</* snippet file="some-folder/my-sample-text.md" */>}}

```

## Content

The shortcode supports Markdown and source code.

**Markdown snippets:**

- Are rendered as any other markdown content
- Do not need a front-matter section
- Can include images (also stored in the snippets folder)
- Can include other shortcodes

**Source code snippets:**

- Are rendered as code blocks (language selection taken from the file extension)

## Snippets folder

The snippets folder must be setup as a [headless bundle](https://gohugo.io/content-management/page-bundles/#headless-bundle).
This is a special kind of page bundle -- its content is not rendered to HTML pages.

*snippets/index.md:*

```md
---
headless: true
---
```

## Examples

### 1) Simple markdown snippet

The snippet in `{{</* snippet file="md-snippet1.md" */>}}` has the following content:

{{< snippet file="md-snippet1.md" source=true >}}

Which renders as:

{{< snippet file="md-snippet1.md" >}}

### 2) Markdown snippet with note shortcode

The snippet in `{{</* snippet file="md-snippet2.md" */>}}` has the following content:

{{< snippet file="md-snippet2.md" source=true >}}

Which renders as:

{{< snippet file="md-snippet2.md" >}}

### 3) Markdown snippet with image

The snippet in `{{</* snippet file="md-snippet3.md" */>}}` has the following content:

{{< snippet file="md-snippet3.md" source=true >}}

Which renders as:

{{< snippet file="md-snippet3.md" >}}

### 4) Multiple markdown snippets at once

`{{</* snippet file="md-snippet*.md" */>}}` renders as:

{{< snippet file="md-snippet*.md" >}}

### 5) Single code snippet

`{{</* snippet file="yaml-snippet1.yaml" */>}}` renders as:

{{< snippet file="yaml-snippet1.yaml" >}}

{{< note >}}
Non-markdown files are rendered as code block.
{{< /note >}}

### 6) Multiple code snippets at once

`{{</* snippet file="yaml-snippet*.yaml" */>}}` renders as:

{{< snippet file="yaml-snippet*.yaml" >}}
