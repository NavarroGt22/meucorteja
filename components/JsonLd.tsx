import { CONTACT_EMAIL, FAQ_ITEMS, SEO, SITE_NAME, SITE_URL } from '@/lib/seo'

export function JsonLd() {
  const organization = {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    email: CONTACT_EMAIL,
    logo: {
      '@type': 'ImageObject',
      url: `${SITE_URL}/icon-512.png`,
      width: 512,
      height: 512,
    },
    sameAs: ['https://www.instagram.com/leleco_barbers'],
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
  }

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    description: SEO.description,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'pt-BR',
  }

  const software = {
    '@type': 'SoftwareApplication',
    '@id': `${SITE_URL}/#software`,
    name: SITE_NAME,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: SITE_URL,
    description: SEO.description,
    offers: {
      '@type': 'Offer',
      url: `${SITE_URL}/#contato`,
      priceCurrency: 'BRL',
      availability: 'https://schema.org/InStock',
    },
    provider: { '@id': `${SITE_URL}/#organization` },
    featureList: [
      'Agendamento online com horários',
      'Fila dinâmica',
      'Painel do salão',
      'Página pública do salão',
      'Controles de operação',
    ],
  }

  const service = {
    '@type': 'Service',
    '@id': `${SITE_URL}/#service`,
    name: 'Sistema de agendamento para barbearias e salões',
    serviceType: 'Software de agendamento',
    provider: { '@id': `${SITE_URL}/#organization` },
    areaServed: {
      '@type': 'Country',
      name: 'Brasil',
    },
    description: SEO.description,
    url: SITE_URL,
  }

  const breadcrumb = {
    '@type': 'BreadcrumbList',
    '@id': `${SITE_URL}/#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Início',
        item: SITE_URL,
      },
    ],
  }

  const faq = {
    '@type': 'FAQPage',
    '@id': `${SITE_URL}/#faq`,
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  const graph = {
    '@context': 'https://schema.org',
    '@graph': [organization, website, software, service, breadcrumb, faq],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  )
}
