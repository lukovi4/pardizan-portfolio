import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

const legal = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    // Точный URL, включая подчёркивания: terms_conditions, images_copyright.
    // Источник истины — здесь, не имя файла. Менять нельзя: на эти адреса
    // ссылаются карточки приложений в сторах.
    slug: z.string(),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      // Полный заголовок кейса: «Animi — animated stories & video reels templates»
      title: z.string(),
      // Короткое имя для карточки
      name: z.string(),
      // = URL кейса. На старые кейсы есть внешние ссылки — не менять.
      slug: z.string(),
      order: z.number(),
      // Одна строка под именем на карточке
      tagline: z.string(),
      roles: z.array(z.string()),
      cover: image(),
      coverAlt: z.string(),
      // Локальное видео-превью появится, когда файлы будут в works/
      coverVideo: z.string().optional(),
      // Два-три предложения для колонки описания в блоке кейса
      summary: z.string().optional(),
      // Цвет подложки под работой на главной. Подложка одна на все кейсы,
      // при смене экрана перекрашивается с переходом.
      backdrop: z.string().optional(),
      // Поля карточки: слева подпись, справа значение
      years: z.string().optional(),
      role: z.string().optional(),
      links: z
        .array(z.object({ label: z.string(), url: z.string() }))
        .optional(),
      // Лента скринов проекта: ширина ячейки берётся из пропорций первого файла
      screens: z
        .array(z.object({ src: image(), alt: z.string() }))
        .optional(),
      // Абзац-вступление на странице кейса. Если пусто — берётся summary.
      lead: z.string().optional(),
      // Разделы страницы кейса: заголовок слева, абзацы справа, под ними лента
      sections: z
        .array(
          z.object({
            title: z.string(),
            body: z.array(z.string()),
            // Сноска мелким шрифтом под абзацами
            note: z.string().optional(),
            screens: z
              .array(z.object({ src: image(), alt: z.string() }))
              .optional(),
          }),
        )
        .optional(),
      draft: z.boolean().default(false),
    }),
});

// Один файл со всем контентом главной: тексты правятся там, не в коде.
const home = defineCollection({
  loader: glob({ pattern: 'home.md', base: './src/content/home' }),
  schema: z.object({
    status: z.string(),
    headline: z.string(),
    intro: z.string(),
    companies: z.array(z.string()),
    cta: z.string(),
    // Мono-«спецификация» в hero: Status / Base / Experience
    spec: z.array(z.object({ label: z.string(), value: z.string() })),
    // Бегущая строка навыков между hero и работами
    ticker: z.array(z.string()),
    strengths: z.array(z.object({ title: z.string(), description: z.string() })),
    facts: z.array(z.object({ label: z.string(), value: z.string() })),
    // Опыт: слева роль/компания/период, справа описание — тексты из резюме.
    experience: z.array(
      z.object({
        period: z.string(),
        role: z.string(),
        // У независимой практики компании нет
        company: z.string().optional(),
        // Пункты, как в резюме — каждый отдельным буллетом
        description: z.array(z.string()),
      }),
    ),
    links: z.object({
      email: z.string(),
      telegram: z.url(),
      linkedin: z.url(),
      resume: z.url(),
    }),
  }),
});

export const collections = { legal, projects, home };
