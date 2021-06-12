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
{{</* snippet file="<relative-path-of-the-snippet-file>" <source=true> */>}}
```

- `file` must be passed the path file relative to the snippets folder
- Set the optional `source=true` if you want to insert a **markdown** snippet as codeblock
  instead of normal rendered content.

{{< note >}}
The file name supports [glob](https://en.wikipedia.org/wiki/Glob_(programming)) patterns (wildcards).
In some of the examples below this is used to insert multiple snippets at once.
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
- May contain local images (stored in the snippets folder)
- May include other shortcodes

**Source code snippets:**

- Are rendered as code blocks

{{< note >}}
The language selection for the code block is taken from the file extension (e.g. `yaml` for `<some-file.yaml>`).
{{< /note >}}

## Snippets folder

The snippets folder must be setup as a [headless bundle](https://gohugo.io/content-management/page-bundles/#headless-bundle).
This is a special kind of page bundle -- Files in a headless bundle will not get their own HTML pages.

*snippets/index.md:*

```md
---
headless: true
---
```

## Examples

### 1) Simple markdown snippet

The snippet in `{{</* snippet file="shortcode-docs/md-snippet1.md" */>}}` has the following content:

{{< snippet file="shortcode-docs/md-snippet1.md" source=true >}}

Which renders as:

{{< snippet file="shortcode-docs/md-snippet1.md" >}}

### 2) Markdown snippet with note shortcode

The snippet in `{{</* snippet file="shortcode-docs/md-snippet2.md" */>}}` has the following content:

{{< snippet file="shortcode-docs/md-snippet2.md" source=true >}}

Which renders as:

{{< snippet file="shortcode-docs/md-snippet2.md" >}}

### 3) Markdown snippet with image

The snippet in `{{</* snippet file="shortcode-docs/md-snippet3.md" */>}}` has the following content:

{{< snippet file="shortcode-docs/md-snippet3.md" source=true >}}

Which renders as:

{{< snippet file="shortcode-docs/md-snippet3.md" >}}

### 4) Multiple markdown snippets at once

`{{</* snippet file="shortcode-docs/md-snippet*.md" */>}}` renders as:

{{< snippet file="shortcode-docs/md-snippet*.md" >}}

### 5) Single code snippet

`{{</* snippet  file="shortcode-docs/yaml-snippet1.yaml" */>}}` renders as:

{{< snippet file="shortcode-docs/yaml-snippet1.yaml" >}}

{{< note >}}
Non-markdown files are rendered as code block.
{{< /note >}}

### 6) Multiple code snippets at once

`{{</* snippet file="shortcode-docs/yaml-snippet*.yaml" */>}}` renders as:

{{< snippet file="shortcode-docs/yaml-snippet*.yaml" >}}
