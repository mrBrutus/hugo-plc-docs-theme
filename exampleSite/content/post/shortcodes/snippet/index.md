---
title: snippet
description: For inserting a link (in <code> tags) to another page in the same section.
author: mrBrutus
date: 2021-06-07
tags:
  - shortcode
---

The `snippet` shortcode can be used for inserting snippets or text sections.


{{< note dev >}}
Add more content and explain about the `snippets` folder.
{{< /note >}}

*syntax:*

```md
{{</* snippet <file name> */>}}
```

{{< note >}}
The file name supports wildcards (`*`).
{{< /note >}}

*Examples:*

- `{{</* snippet "lorem1.md" */>}}` will insert the content from the markdown snippet `lorem1.md` and renders
  as:

  {{< snippet "lorem1.md" >}}

- `{{</* snippet "lorem2.md" */>}}` will insert the content from the markdown snippet `lorem2.md` and renders
  as:

  {{< snippet "lorem2.md" >}}

- `{{</* snippet "lorem*.md" */>}}` will insert content from all markdown snippets matching the `lorem*.md` and renders
  them stitched together as:

  {{< snippet "lorem*.md" >}}

- `{{</* snippet "ipsum.yaml" */>}}` will insert the content from the yaml snippet `ipsum.yaml` and renders
  as:

  {{< snippet "ipsum.yaml" >}}

{{< note >}}
Non-markdown files will be rendered as a code block.
{{< /note >}}