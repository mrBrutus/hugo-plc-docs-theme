---
title: internal
description: For inserting a section which is only visible in the development environment.
author: mrBrutus
date: 2021-06-06
tags:
  - shortcode
---

The `internal` shortcode can be used for adding internal information.
This content is only rendered in **development** mode (`environment=development`).

*syntax:*

```md
{{</* internal <placeholder>*/>}}
some markdown content...
{{</* /internal */>}}
```

The `placeholder` parameter is optional.
It is used for specifying a placeholder image which will be shown when
**not in development** mode (`environment=production`).

*Example:*

```md
{{</* internal "shortcode-internal.jpg" */>}}
### Internal information sample

- item 1
- item 2

{{</* /internal */>}}
```

renders as:

{{< internal "shortcode-internal.jpg" >}}
### Internal information sample

- item 1
- item 2

{{< /internal >}}
