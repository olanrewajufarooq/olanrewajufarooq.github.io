export function generateMetaTags(title: string, description: string, url: string, image?: string) {
  return {
    title,
    description,
    canonical: url,
    openGraph: {
      type: 'website',
      title,
      description,
      url,
      image: image || '/assets/images/me/headshot.png',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      image: image || '/assets/images/me/headshot.png',
    },
  };
}

export function generateStructuredData(type: string, data: any) {
  return {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };
}
