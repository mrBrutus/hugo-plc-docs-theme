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

The `type` parameter is optional. It supports following values:

- `info`
- `warning`
- `success`
- `error`
- `do`
- `dont`
- `learn`
- `dev`

### no type

Using the shortcode without `type` parameter will render a box with a color accent.

```md
{{</* note */>}}
This is a *sample text* for testing the markdown rendering.

- item 1
- item 2
{{</* /note */>}}
```

renders as:

{{< note >}}
This is a *sample text* for testing the markdown rendering.

- item 1
- item 2

{{< /note >}}

### info

```md
{{</* note info */>}}
This is a *sample text* for testing the markdown rendering.

- item 1
- item 2
{{</* /note */>}}
```

renders as:

{{< note info >}}
This is a *sample text* for testing the markdown rendering.

- item 1
- item 2

{{< /note >}}

### warning

```md
{{</* note warning */>}}
This is a *sample text* for testing the markdown rendering.

- item 1
- item 2
{{</* /note */>}}
```

renders as:

{{< note warning >}}
This is a *sample text* for testing the markdown rendering.

- item 1
- item 2

{{< /note >}}

### success

```md
{{</* note success */>}}
This is a *sample text* for testing the markdown rendering.

- item 1
- item 2
{{</* /note */>}}
```

renders as:

{{< note success >}}
This is a *sample text* for testing the markdown rendering.

- item 1
- item 2

{{< /note >}}

### error

```md
{{</* note error */>}}
This is a *sample text* for testing the markdown rendering.

- item 1
- item 2
{{</* /note */>}}
```

renders as:

{{< note error >}}
This is a *sample text* for testing the markdown rendering.

- item 1
- item 2

{{< /note >}}

### do

```md
{{</* note do */>}}
This is a *sample text* for testing the markdown rendering.

- item 1
- item 2
{{</* /note */>}}
```

renders as:

{{< note do >}}
This is a *sample text* for testing the markdown rendering.

- item 1
- item 2

{{< /note >}}

### dont

```md
{{</* note dont */>}}
This is a *sample text* for testing the markdown rendering.

- item 1
- item 2
{{</* /note */>}}
```

renders as:

{{< note dont >}}
This is a *sample text* for testing the markdown rendering.

- item 1
- item 2

{{< /note >}}

### learn

```md
{{</* note learn */>}}
This is a *sample text* for testing the markdown rendering.

- item 1
- item 2
{{</* /note */>}}
```

renders as:

{{< note learn >}}
This is a *sample text* for testing the markdown rendering.

- item 1
- item 2

{{< /note >}}

### dev

This type is useful for adding some development notes such as listing some todo's.
Notes of this type are only rendered when `environment=development`.

```md
{{</* note dev */>}}
This is a *sample text* for testing the markdown rendering.

- item 1
- item 2
{{</* /note */>}}
```

renders as:

{{< note dev >}}
This is a *sample text* for testing the markdown rendering.

- item 1
- item 2

{{< /note >}}
