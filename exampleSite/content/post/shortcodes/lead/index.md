---
title: lead
description: For inserting a lead paragraph.
author: mrBrutus
date: 2021-06-06
tags:
  - shortcode
---

The `lead` shortcode can be used for adding a lead paragraph.
This paragraph stands out as it has slightly larger font than the other paragraphs.

The content is taken from the inner text or, if not inner text given, from the front-matter's `description`.

*syntax for inner text:*

```md
{{</* lead */>}}
My lead paragraph text...
{{</* /lead */>}}
```

*syntax for front-matter description (using the self-closing syntax):*

```md
{{</* lead /*/>}}
```

{{< note >}}
Don't forget the `/` for the self-closing syntax.
{{< /note >}}

*Example using inner text:*

```md
{{</* lead */>}}
My lead paragraph text...
{{</* /lead */>}}
```

renders as:

{{< lead >}}
My lead paragraph text...
{{< /lead >}}

*Example using `.description` from front-matter:*

```md
{{</* lead /*/>}}
```

renders as:

{{< lead />}}
