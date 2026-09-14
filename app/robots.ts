import { MetadataRoute } from 'next'
import siteMetadata from '@/data/siteMetadata'

export const dynamic = 'force-static'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', disallow: '/' },
      { userAgent: 'ia_archiver', disallow: '/' },
      { userAgent: 'archive.org_bot', disallow: '/' },
    ],
    host: siteMetadata.siteUrl,
  }
}
