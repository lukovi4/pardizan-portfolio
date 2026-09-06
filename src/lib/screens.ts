import { getImage } from 'astro:assets';

export interface Screen {
  src: ImageMetadata;
  alt: string;
  /** Длинная версия того же экрана: в галерее прокручивается внутри рамки короткой */
  full?: ImageMetadata;
}

export interface PreparedScreen extends Screen {
  fullSrc?: string;
  fullSrcset?: string;
}

/**
 * Готовит длинные версии скринов. Оптимизированный вариант нужно получить
 * заранее: в галерее адрес берётся с атрибута короткой картинки, а не
 * собирается на лету.
 */
export async function prepareScreens(screens: Screen[]): Promise<PreparedScreen[]> {
  return Promise.all(
    screens.map(async (screen) => {
      if (!screen.full) return screen;
      const image = await getImage({
        src: screen.full,
        widths: [1000, 1600, 2400, 2880],
        format: 'webp',
      });
      return { ...screen, fullSrc: image.src, fullSrcset: image.srcSet.attribute };
    }),
  );
}
