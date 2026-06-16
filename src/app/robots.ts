import type { MetadataRoute } from 'next';
import { isRealProduction } from '@/lib/env';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  if (!isRealProduction) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://www.fumotoryokan.com/sitemap.xml',
  };
}
