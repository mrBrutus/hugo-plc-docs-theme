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
Organize these snippets in one or more snippet bundles.

*syntax:*

```md
{{</* snippet bundle="<name-of-the-snippet-bundle>" file="<relative-path-of-the-snippet-file>" */>}}
```

- `bundle` must be passed the name of the snippets bundle
- `file` must be passed the file path relative to the snippets bundle:
  - *Without* file extension for markdown files which shall be rendered as usual.
  - *With* file extension if the snippet shall be inserted as codeblock.

## Usage

Place the snippet content in the `snippets` folder:

*my-snippets/some-folder/my-sample-text.md:*

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

{{</* snippet bundle="my-snippets" file="some-folder/my-sample-text" */>}}

```

## Content

The shortcode supports Markdown and source code.

**Markdown snippets:**

- Are rendered as any other markdown content
- May contain local images (stored in the snippets folder)
- May include other shortcodes

**Source code snippets:**

- Are rendered as code blocks

{{< note >}}
The language selection for the code block is taken from the file extension (e.g. `yaml` for `<some-file.yaml>`).
{{< /note >}}

## Snippets bundle

The snippets bundle must contain a `_index.md` with below front-matter so that none of the files in this bundle will
be rendered as HTML pages.

*my-snippets/_index.md:*

```md
---
title: my-snippets
cascade:
  _build:
    render: false
    list: false
---
```

## Examples

### 1) Simple markdown snippet

The snippet in `{{</* snippet bundle="my-snippets" file="shortcode-docs/md-snippet1" */>}}` has the following content:

{{< snippet bundle="my-snippets" file="shortcode-docs/md-snippet1.md" >}}

Which renders as:

{{< snippet bundle="my-snippets" file="shortcode-docs/md-snippet1" >}}

### 2) Markdown snippet with note shortcode

The snippet in `{{</* snippet bundle="my-snippets" file="shortcode-docs/md-snippet2" */>}}` has the following content:

{{< snippet bundle="my-snippets" file="shortcode-docs/md-snippet2.md" >}}

Which renders as:

{{< snippet bundle="my-snippets" file="shortcode-docs/md-snippet2" >}}

### 3) Markdown snippet with image

The snippet in `{{</* snippet bundle="my-snippets" file="shortcode-docs/md-snippet3" */>}}` has the following content:

{{< snippet bundle="my-snippets" file="shortcode-docs/md-snippet3.md" >}}

Which renders as:

{{< snippet bundle="my-snippets" file="shortcode-docs/md-snippet3" >}}

### 4) Source code snippet

`{{</* snippet  bundle="my-snippets" file="shortcode-docs/yaml-snippet1.yaml" */>}}` renders as:

{{< snippet bundle="my-snippets" file="shortcode-docs/yaml-snippet1.yaml" >}}
