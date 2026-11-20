---
title: "编写文档"
description: "添加并整理 Markdown 文档页面。"
order: 20
---

## 添加页面

在 `src/content/docs` 中对应的语言目录内创建 Markdown 文件。文件路径决定页面网址。

## 设置侧边栏顺序

在文件开头设置 `title`、`description` 和 `order`。数值较小的页面排在前面。

```yaml
title: Deploy your site
description: Configure your host and publish the docs.
order: 30
```

## 翻译页面

在另一种语言的目录里使用相同的相对路径，语言菜单就能跳转到对应的翻译。
