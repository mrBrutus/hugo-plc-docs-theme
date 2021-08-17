---
title: "{{ .Name }}"
type: lib
layout: overview
description: some description
featuredImage: true
# featuredImageCaption: |
#   Photo by [someone](https://www.example.com/someone)
images:
  - featured-image.jpg
cascade:
  _build:
    # IMPORTANT: prevent the publishing of the source files
    publishResources: false
---
