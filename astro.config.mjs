// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Пока сайт живёт на GitHub Pages в подпапке репозитория, сборка идёт с BASE=/pardizan-portfolio.
// После подключения pardizan.com база становится корневой и переменная не задаётся.
const base = process.env.BASE ?? '/';
const site = process.env.SITE ?? 'https://pardizan.com';

export default defineConfig({
  site,
  base,

  // Карточка Lastik в Google Play ссылается на pardizan.com/terms_conditions —
  // без слеша и без .html. Эта пара опций даёт ровно такие URL.
  trailingSlash: 'never',
  build: { format: 'file' },

  integrations: [
    mdx(),
    sitemap({
      // Юридические страницы не индексируем.
      filter: (page) =>
        !/(privacy-policy|terms-service|terms_conditions|images_copyright)/.test(page),
    }),
  ],

  // Шрифты скачиваются при сборке и самохостятся — внешних запросов на сайте нет.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Geist',
      cssVariable: '--font-sans',
      weights: ['400 700'],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['system-ui', 'sans-serif'],
      display: 'swap',
    },
    {
      provider: fontProviders.google(),
      name: 'Geist Mono',
      cssVariable: '--font-mono',
      weights: [400, 500],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['ui-monospace', 'monospace'],
      display: 'swap',
    },
  ],
});
