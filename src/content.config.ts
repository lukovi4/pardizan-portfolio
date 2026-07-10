import { defineCollection, z } from 'astro:content';
import { file, glob } from 'astro/loaders';

const site = defineCollection({
  loader: file('src/content/site/settings.json'),
  schema: z.object({
    // Прячет кейсы на мобильных за заглушкой, как это делает Tilda.
    // false = полноценный адаптив.
    mobileGateEnabled: z.boolean(),
    seo: z.object({
      title: z.string(),
      description: z.string(),
    }),
    links: z.object({
      telegram: z.string().url(),
      linkedin: z.string().url(),
      email: z.string().email(),
      resume: z.string().url(),
    }),
  }),
});

const home = defineCollection({
  loader: glob({ pattern: 'home.md', base: './src/content/home' }),
  schema: z.object({
    name: z.string(),
    headline: z.string(),
    facts: z.array(z.object({ label: z.string(), value: z.string() })),
    projectOrder: z.array(z.string()),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/[^_]*.mdx', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      // Заголовок кейса целиком: «Animi — animated stories & video reels templates»
      title: z.string(),
      // Короткое имя для карточки на главной
      name: z.string(),
      // = URL. Менять нельзя: на кейсы есть внешние ссылки.
      slug: z.string(),
      order: z.number(),
      // У LionMachine роли на сайте не указаны.
      roles: z.array(z.string()).nullable().default(null),
      intro: z.string(),
      logo: image().optional(),
      cover: image().optional(),
      // Kinescope video ID для обложки на главной (Animi, Lastik).
      // Постер-картинка (cover) показывается, пока видео грузится.
      coverVideo: z.string().optional(),
      stores: z
        .object({
          appStore: z.string().url().optional(),
          googlePlay: z.string().url().optional(),
        })
        .optional(),
      draft: z.boolean().default(false),
    }),
});

const legal = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    // Точный URL, включая подчёркивания: terms_conditions, images_copyright.
    // Источник истины — здесь, не имя файла.
    slug: z.string(),
    description: z.string().optional(),
    noindex: z.boolean().default(true),
  }),
});

// Задел на будущее. Секция появится на сайте, когда здесь будут записи с draft: false.
const experience = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/experience' }),
  schema: z.object({
    company: z.string(),
    role: z.string(),
    start: z.string(),
    end: z.string().default('present'),
    location: z.string().optional(),
    summary: z.string().optional(),
    order: z.number(),
    draft: z.boolean().default(true),
  }),
});

export const collections = { site, home, projects, legal, experience };
