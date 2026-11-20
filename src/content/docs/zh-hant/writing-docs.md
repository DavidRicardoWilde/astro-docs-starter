---
title: "撰寫文件"
description: "新增與整理 Markdown 文件頁面。"
order: 20
---

## 新增頁面

在 `src/content/docs` 下對應的語言目錄建立 Markdown 檔案。檔案路徑會決定頁面網址。

## 設定側邊欄順序

在檔案開頭設定 `title`、`description` 和 `order`。數值較小的頁面排在前面。

```yaml
title: Deploy your site
description: Configure your host and publish the docs.
order: 30
```

## 翻譯頁面

在另一種語言的目錄內使用相同的相對路徑，語言選單即可連到對應的翻譯。
