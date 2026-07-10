# pardizan.com

Персональный сайт-портфолио. Astro, статическая сборка, GitHub Pages.
Мигрирован с Tilda; оригиналы страниц и медиа сохранены в `_source/`.

## Команды

```sh
npm install
npm run dev      # локальный сервер
npm run build    # сборка в dist/
npm run preview  # посмотреть собранное
```

## Где что менять

Весь текст живёт в `src/content/`, код трогать не нужно.

| Что | Файл |
| --- | --- |
| Имя, заголовок, факты, био | `src/content/home/home.md` |
| Ссылки, SEO, флаги | `src/content/site/settings.json` |
| Кейсы | `src/content/projects/*.mdx` |
| Юридические страницы | `src/content/legal/*.md` |
| Опыт работы | `src/content/experience/*.md` |

### Добавить новую работу

Создать `src/content/projects/название.mdx` с шапкой:

```yaml
---
title: Название — короткое описание
name: Название
slug: nazvanie          # это будет URL: pardizan.com/nazvanie
order: 5
roles: [ux research, prototyping]
intro: Абзац на карточке.
---
```

Затем добавить `nazvanie` в `projectOrder` в `home.md` — порядок карточек на главной задаётся там.

### Добавить опыт работы

Положить файл в `src/content/experience/`. Пока у записи `draft: true`, она не видна.
Секция появится на сайте, когда будет хотя бы одна запись с `draft: false`.

### Флаги в `settings.json`

- `mobileGateEnabled` — `true` прячет кейсы на телефонах за заглушкой «open from desktop»,
  как было на Tilda. `false` — полноценный адаптив.

## Важно про URL

Карточка приложения Lastik в Google Play ссылается на `pardizan.com/terms_conditions`,
`/images_copyright` и `/privacy-policy-lastik`. **Эти адреса менять нельзя** — включая
подчёркивания. Адрес страницы задаётся полем `slug` в её шапке, а не именем файла.

За это отвечают `trailingSlash: 'never'` и `build.format: 'file'` в `astro.config.mjs`.

## Деплой

Пуш в `main` запускает сборку и публикацию (`.github/workflows/deploy.yml`).

Пока домен не подключён, сайт собирается с префиксом `/pardizan-portfolio/`.
После подключения `pardizan.com` задать переменные репозитория
`SITE_BASE=/` и `SITE_URL=https://pardizan.com`.
