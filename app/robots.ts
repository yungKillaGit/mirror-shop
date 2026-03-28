import type { MetadataRoute } from 'next';
import { config } from '~/shared/config/env-config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/sitemap.xml'],
    },
    sitemap: `${config.siteUrl}/sitemap.xml`,
  };
}
