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

Пока домен не подключён, сайт живёт на `lukovi4.github.io/pardizan-portfolio/`
и собирается с префиксом `/pardizan-portfolio/`.

### Переключение на pardizan.com

Порядок важен: сначала DNS, потом код — иначе сайт временно ляжет.

1. **DNS** (GoDaddy). Сменить NS с `ns1/ns2.tildadns.com` на дефолтные GoDaddy,
   затем добавить записи:
   - четыре `A` для apex `@`: `185.199.108.153`, `185.199.109.153`,
     `185.199.110.153`, `185.199.111.153`;
   - `CNAME` для `www` → `lukovi4.github.io`.
2. **Код**: положить `public/CNAME` с одной строкой `pardizan.com`; задать
   переменные репозитория `SITE_BASE=/` и `SITE_URL=https://pardizan.com`;
   запушить. Пути станут корневыми.
3. **GitHub**: Settings → Pages → Custom domain = `pardizan.com`, дождаться
   проверки DNS, включить **Enforce HTTPS**.
4. Проверить, что `https://pardizan.com/terms_conditions` отдаёт 200 — это
   ссылка из карточки Lastik в Google Play.

После шага 2 превью-URL `lukovi4.github.io/pardizan-portfolio/` перестанет
работать (пути корневые) — это ожидаемо.
