import type { MetadataRoute } from 'next'

import { getPosts } from '@/lib/posts'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://www.classtrack.academy'
  const posts = await getPosts()
  const staticRoutes = [
    {
      path: '',
      lastModified: undefined,
      changeFrequency: 'weekly' as const,
      priority: 1
    },
    {
      path: '/articles',
      lastModified: undefined,
      changeFrequency: 'weekly' as const,
      priority: 0.8
    },
    {
      path: '/software-para-academias',
      lastModified: undefined,
      changeFrequency: 'weekly' as const,
      priority: 0.9
    },
    {
      path: '/gestion-de-academias',
      lastModified: undefined,
      changeFrequency: 'weekly' as const,
      priority: 0.9
    },
    {
      path: '/matriculas-online-para-academias',
      lastModified: undefined,
      changeFrequency: 'weekly' as const,
      priority: 0.9
    },
    {
      path: '/empresas/academias-de-idiomas',
      lastModified: undefined,
      changeFrequency: 'weekly' as const,
      priority: 0.8
    },
    {
      path: '/empresas/academias-de-refuerzo-escolar',
      lastModified: undefined,
      changeFrequency: 'weekly' as const,
      priority: 0.8
    },
    {
      path: '/empresas/academias-de-oposiciones',
      lastModified: undefined,
      changeFrequency: 'weekly' as const,
      priority: 0.8
    },
    {
      path: '/empresas/academias-de-musica',
      lastModified: undefined,
      changeFrequency: 'weekly' as const,
      priority: 0.8
    },
    {
      path: '/empresas/gimnasios',
      lastModified: undefined,
      changeFrequency: 'weekly' as const,
      priority: 0.7
    },
    {
      path: '/empresas/psicologos',
      lastModified: undefined,
      changeFrequency: 'weekly' as const,
      priority: 0.7
    },
    {
      path: '/empresas/coaches',
      lastModified: undefined,
      changeFrequency: 'weekly' as const,
      priority: 0.7
    }
  ]

  const articleRoutes = posts.map(post => ({
    path: `/articles/${post.slug}`,
    lastModified: post.publishedAt ? new Date(post.publishedAt) : undefined,
    changeFrequency: 'monthly' as const,
    priority: 0.6
  }))

  return [...staticRoutes, ...articleRoutes].map(route => ({
    url: `${siteUrl}${route.path}`,
    lastModified: route.lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority
  }))
}
