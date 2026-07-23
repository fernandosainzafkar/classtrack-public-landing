import type { Metadata } from 'next'

import MoneyPageTemplate from '@/components/seo/money-page-template'
import { createMoneyPageJsonLd, moneyPages } from '@/lib/money-pages'

const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://www.classtrack.academy'
const pageData = moneyPages.management

export const metadata: Metadata = {
  title: pageData.metadataTitle,
  description: pageData.metadataDescription,
  keywords: pageData.keywords,
  alternates: {
    canonical: `${siteUrl}${pageData.path}`
  },
  openGraph: {
    title: `${pageData.metadataTitle} | ClassTrack`,
    description: pageData.metadataDescription,
    url: `${siteUrl}${pageData.path}`,
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: `${pageData.metadataTitle} | ClassTrack`,
    description: pageData.metadataDescription
  }
}

const jsonLd = createMoneyPageJsonLd(pageData, siteUrl)

const GestionDeAcademiasPage = () => {
  return (
    <>
      <MoneyPageTemplate {...pageData} />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
        }}
      />
    </>
  )
}

export default GestionDeAcademiasPage
