export const site = {
  title: 'Astro Docs Starter',
  repository: 'https://github.com/DavidRicardoWilde/astro-docs-starter',
};

export const defaultLocale = 'en';

export const locales = {
  en: {
    name: 'English', htmlLang: 'en', docs: 'Docs', guides: 'Guides', contents: 'On this page',
    language: 'Choose language', theme: 'Choose theme', themes: ['Light', 'Dark', 'System'],
    search: 'Search docs', empty: 'No matching pages', next: 'Next page',
  },
  'zh-cn': {
    name: '简体中文', htmlLang: 'zh-CN', docs: '文档', guides: '使用指南', contents: '本页目录',
    language: '选择语言', theme: '选择主题', themes: ['浅色', '深色', '跟随系统'],
    search: '搜索文档', empty: '没有匹配的页面', next: '下一页',
  },
  'zh-hant': {
    name: '繁體中文', htmlLang: 'zh-Hant', docs: '文件', guides: '使用指南', contents: '本頁目錄',
    language: '選擇語言', theme: '選擇主題', themes: ['淺色', '深色', '跟隨系統'],
    search: '搜尋文件', empty: '沒有符合的頁面', next: '下一頁',
  },
  ja: {
    name: '日本語', htmlLang: 'ja', docs: 'ドキュメント', guides: 'ガイド', contents: 'このページ',
    language: '言語を選択', theme: 'テーマを選択', themes: ['ライト', 'ダーク', 'システム'],
    search: 'ドキュメントを検索', empty: '一致するページがありません', next: '次のページ',
  },
  ko: {
    name: '한국어', htmlLang: 'ko', docs: '문서', guides: '가이드', contents: '이 페이지',
    language: '언어 선택', theme: '테마 선택', themes: ['라이트', '다크', '시스템 설정'],
    search: '문서 검색', empty: '일치하는 페이지가 없습니다', next: '다음 페이지',
  },
  es: {
    name: 'Español', htmlLang: 'es', docs: 'Documentación', guides: 'Guías', contents: 'En esta página',
    language: 'Seleccionar idioma', theme: 'Elegir tema', themes: ['Claro', 'Oscuro', 'Sistema'],
    search: 'Buscar documentación', empty: 'No hay páginas coincidentes', next: 'Página siguiente',
  },
};

export type Locale = keyof typeof locales;

export type DocLink = {
  title: string;
  href: string;
};
