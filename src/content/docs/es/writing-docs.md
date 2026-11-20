---
title: "Escribir documentación"
description: "Añade y organiza páginas de documentación en Markdown."
order: 20
---

## Añade una página

Crea un archivo Markdown en el directorio del idioma correspondiente dentro de `src/content/docs`. La ruta del archivo determina la URL.

## Ordena la barra lateral

Define `title`, `description` y `order` en los metadatos del archivo. Los valores menores aparecen primero.

```yaml
title: Deploy your site
description: Configure your host and publish the docs.
order: 30
```

## Traduce una página

Usa la misma ruta relativa en otro idioma para que el menú enlace a la traducción.
