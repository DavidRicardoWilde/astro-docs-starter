---
title: "ドキュメントを書く"
description: "Markdown ページを追加して整理します。"
order: 20
---

## ページを追加する

`src/content/docs` の言語別ディレクトリに Markdown ファイルを作成します。ファイルのパスが URL になります。

## サイドバーの順序を設定する

フロントマターに `title`、`description`、`order` を設定します。数値が小さいページほど先に表示されます。

```yaml
title: Deploy your site
description: Configure your host and publish the docs.
order: 30
```

## ページを翻訳する

別の言語のディレクトリで同じ相対パスを使用すると、言語メニューから翻訳を開けます。
