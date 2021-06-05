---
title: Shortcodes
author: mrBrutus
date: 2021-05-23
tags:
  - shortcode
---

## Note

The `note` shortcode is for emphasizing some text fragment.

*syntax:*

```md
{{</* note <type> */>}}
some markdown content...
{{</* /note */>}}
```

The `type` parameter is optional. Supported types: [no type](#no-type),
[info](#info), [warning](#warning), [success](#success), [error](#error), [do](#do),
[dont](#dont), [learn](#learn), [tip](#tip), [pro](#pro), [contra](#contra), [dev](#dev)

### no type

{{< note >}}
This is a *sample text* for `{{</* note */>}}` (without type).

- item 1
- item 2

{{< /note >}}

### info

{{< note info >}}
This is a *sample text* for `{{</* note info */>}}`.

- item 1
- item 2

{{< /note >}}

### warning

{{< note warning >}}
This is a *sample text* for `{{</* note warning */>}}`.

- item 1
- item 2

{{< /note >}}

### success

{{< note success >}}
This is a *sample text* for `{{</* note success */>}}`.

- item 1
- item 2

{{< /note >}}

### error

{{< note error >}}
This is a *sample text* for `{{</* note error */>}}`.

- item 1
- item 2

{{< /note >}}

### do

{{< note do >}}
This is a *sample text* for `{{</* note do */>}}`.

- item 1
- item 2

{{< /note >}}

### dont

{{< note dont >}}
This is a *sample text* for `{{</* note dont */>}}`.

- item 1
- item 2

{{< /note >}}

### learn

{{< note learn >}}
This is a *sample text* for `{{</* note learn */>}}`.

- item 1
- item 2

{{< /note >}}

### tip

{{< note tip >}}
This is a *sample text* for `{{</* note tip */>}}`.

- item 1
- item 2

{{< /note >}}

### pro

{{< note pro >}}
This is a *sample text* for `{{</* note pro */>}}`.

- item 1
- item 2

{{< /note >}}

### contra

{{< note contra >}}
This is a *sample text* for `{{</* note contra */>}}`.

- item 1
- item 2

{{< /note >}}

### dev

This type is useful for adding some development notes such as listing some todo's.
Notes of this type are only rendered when `environment=development`.

{{< note dev >}}
This is a *sample text* for `{{</* note dev */>}}`.

- item 1
- item 2

{{< /note >}}
