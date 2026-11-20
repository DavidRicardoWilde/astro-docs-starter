---
title: "문서 작성"
description: "Markdown 문서 페이지를 추가하고 정리합니다."
order: 20
---

## 페이지 추가

`src/content/docs` 아래의 언어별 디렉터리에 Markdown 파일을 만듭니다. 파일 경로가 URL을 결정합니다.

## 사이드바 순서 설정

프런트매터에 `title`, `description`, `order`를 설정합니다. 숫자가 작은 페이지가 먼저 표시됩니다.

```yaml
title: Deploy your site
description: Configure your host and publish the docs.
order: 30
```

## 페이지 번역

다른 언어 디렉터리에 같은 상대 경로를 사용하면 언어 메뉴에서 번역 페이지로 이동할 수 있습니다.
