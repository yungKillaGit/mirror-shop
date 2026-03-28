import type { MetadataRoute } from 'next';
import { config } from '~/shared/config/env-config';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: config.siteUrl,
      lastModified: new Date(),
    },
  ];
}
