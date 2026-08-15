import type { MetadataRoute } from 'next';
import { isRealProduction, metadataBase } from '@/lib/env';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  if (!isRealProduction) {
    return [];
  }

  return [
    {
      url: new URL('/', metadataBase).toString(),
      lastModified: new Date(),
    },
    {
      url: new URL('/cuisine/', metadataBase).toString(),
      lastModified: new Date(),
    },
    {
      url: new URL('/rooms/', metadataBase).toString(),
      lastModified: new Date(),
    },
    {
      url: new URL('/onsen/', metadataBase).toString(),
      lastModified: new Date(),
    },
    {
      url: new URL('/stay/', metadataBase).toString(),
      lastModified: new Date(),
    },
    {
      url: new URL('/dayuse/', metadataBase).toString(),
      lastModified: new Date(),
    },
    {
      url: new URL('/access/', metadataBase).toString(),
      lastModified: new Date(),
    },
    {
      url: new URL('/reservation/', metadataBase).toString(),
      lastModified: new Date(),
    },
    {
      url: new URL('/history/', metadataBase).toString(),
      lastModified: new Date(),
    },
  ];
}
