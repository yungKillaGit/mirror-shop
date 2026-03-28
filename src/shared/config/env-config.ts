import { z } from 'zod';

export const config = z
  .object({
    NEXT_PUBLIC_URL: z.url().default('https://example.com'),
    NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: z.string().default(''),
  })
  .transform((env) => ({
    siteUrl: env.NEXT_PUBLIC_URL,
    googleSiteVerification: env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  }))
  .parse(process.env);
