---
title: "Writing docs"
description: "Add and organize Markdown pages in the documentation."
order: 20
---

## Add a page

Create a Markdown file under your locale directory in `src/content/docs`. Its file path determines the URL.

## Set the sidebar order

Set `title`, `description`, and `order` in the frontmatter. Lower order values appear earlier in the sidebar.

```yaml
title: Deploy your site
description: Configure your host and publish the docs.
order: 30
```

## Translate a page

Use the same relative file path in another locale so the language menu can link to that translation.
