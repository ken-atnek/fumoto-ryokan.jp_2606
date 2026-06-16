import type { MetadataRoute } from 'next';
import { isRealProduction } from '@/lib/env';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isRealProduction) {
    return [];
  }

  return [
    {
      url: 'https://www.fumotoryokan.com/',
      lastModified: new Date(),
    },
  ];
}
