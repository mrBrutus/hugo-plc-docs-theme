---
title: link
description: For inserting a link (in <code> tags) to another page in the same section.
author: mrBrutus
tags:
  - shortcode
---

The `link` shortcode can be used for creating a link to another page in the same section.
If the page cannot be found is will display it as text instead of hyperlink.

For library items such as *functions* and *data types* the resulting hyperlink is
rendered as `code` (mono space font).

*syntax:*

```md
{{</* link <title of the page> <link text> */>}}
```

- The title of the page is case sensitive. Anchors are supported.
- The (optional) link text can be used to display a different text.
  If omitted the `Title` (without anchor) will be displayed.

*Examples:*

`{{</* link "note" */>}}` is an existing page and renders
as: {{< link "note" >}}


`{{</* link "NoTe" */>}}` is a non-existing page (while case sensitive)
and renders as: {{< link "NoTe" >}}

`{{</* link "About" */>}}` is an existing page but not not in the same section
and renders as: {{< link "About" >}}

`{{</* link "note#info" */>}}` links to a header and renders
as: {{< link "note#info" >}}

`{{</* link "note#success" "some link" */>}}` has a link text specified and renders
as: {{< link "note#success" "some link">}}

{{< note >}}
The title is case sensitive.
{{< /note >}}

{{< note >}}
If a page cannot be found it will generate a warning at build time.
{{< /note >}}
