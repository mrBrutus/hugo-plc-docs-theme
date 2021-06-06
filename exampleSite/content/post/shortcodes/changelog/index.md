---
title: changelog
description: For inserting a changelog.
author: mrBrutus
date: 2021-06-06
tags:
  - shortcode
---

The `changelog` shortcode can be used for adding a changelog section to a page.
It renders the data from the `_changelog.yaml` file which has to be stored in the same folder.

*syntax:*

```md
{{</* changelog */>}}
```

*Example:*

Content of `_changelog.yaml`:

```yaml
- version: 0.2.0
  date: 2021-01-17
  author: mrBrutus
  changed:
    - "`group` renamed to `vars`"
- version: 0.1.0
  date: 2020-12-23
  author: mrBrutus
  added:
    - initial release
```

renders as:

{{< changelog >}}
