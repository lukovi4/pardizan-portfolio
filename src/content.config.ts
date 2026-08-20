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

export const collections = { legal };
