const SITE_URL = 'https://v420.ecostudios.dev'
const SITE_NAME = 'v4.20'

interface SiteSeoOptions {
  path: '/' | '/about'
  title: string
  description: string
}

/** Metadata for the public template demo; canonical paths exclude query strings. */
export function useSiteSeo({ path, title, description }: SiteSeoOptions) {
  const canonicalUrl = `${SITE_URL}${path}`

  useSeoMeta({
    title,
    description,
    robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1',
    ogTitle: title,
    ogDescription: description,
    ogType: 'website',
    ogUrl: canonicalUrl,
    ogSiteName: SITE_NAME,
    ogLocale: 'en_US',
    twitterCard: 'summary',
    twitterTitle: title,
    twitterDescription: description,
  })

  useHead({
    link: [{ rel: 'canonical', href: canonicalUrl }],
    script: [
      {
        key: 'schema-website',
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': `${SITE_URL}/#website`,
          url: `${SITE_URL}/`,
          name: SITE_NAME,
          inLanguage: 'en',
          publisher: { '@id': 'https://www.ecostudios.dev/#organization' },
        }),
      },
      {
        key: 'schema-webpage',
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': path === '/about' ? 'AboutPage' : 'WebPage',
          '@id': `${canonicalUrl}#webpage`,
          url: canonicalUrl,
          name: title,
          description,
          inLanguage: 'en',
          isPartOf: { '@id': `${SITE_URL}/#website` },
        }),
      },
    ],
  })
}
