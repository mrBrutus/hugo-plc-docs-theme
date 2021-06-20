---
title: ref-lib
description: For inserting a link (in <code> tags) to another page in the same section.
author: mrBrutus
date: 2021-06-06
tags:
  - shortcode
---

The `ref-lib` shortcode can be used for creating a link to another page in the same section.
Since every library item is a page, it can be used for referencing functions and data types.

The resulting hyperlink (or title if page is not found) is rendered as `code` (mono space font).

*syntax:*

```md
{{</* ref-lib <title of the page> */>}}
```

*Examples:*

`{{</* ref-lib "note" */>}}` is an existing page and renders
as: {{< ref-lib "note" >}}

`{{</* ref-lib "NoTe" */>}}` is a non-existing page (while case sensitive)
and renders as: {{< ref-lib "NoTe" >}}

`{{</* ref-lib "About" */>}}` is an existing page but not not in the same section
and renders as: {{< ref-lib "About" >}}

{{< note >}}
The title is case sensitive.
{{< /note >}}
