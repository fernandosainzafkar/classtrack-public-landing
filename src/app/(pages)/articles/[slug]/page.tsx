import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

import { ChevronRightIcon, ChevronLeftIcon } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from '@/components/ui/breadcrumb'
import { SecondarySwipeButton } from '@/components/ui/swipe-button'
import MDXContent from '@/components/mdx-content'

import RelatedBlogSection from '@/components/blog/related-blog-section/related-blog-section'
import CTA from '@/components/blocks/cta-section'

import { getPostBySlug, getPosts } from '@/lib/posts'

const siteUrl = process.env.NEXT_PUBLIC_APP_URL ?? 'https://www.classtrack.academy'

export async function generateStaticParams() {
  const posts = await getPosts()

  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params

  const post = await getPostBySlug(slug)

  if (!post) {
    return {}
  }

  const { metadata } = post

  const articleImage = metadata.image
    ? metadata.image.startsWith('http')
      ? metadata.image
      : `${siteUrl}${metadata.image}`
    : undefined

  return {
    title: metadata.title,
    description: metadata.description,
    keywords: metadata.keywords,
    alternates: {
      canonical: `${siteUrl}/articles/${metadata.slug}`
    },
    openGraph: {
      type: 'article',
      title: metadata.title,
      description: metadata.description,
      url: `${siteUrl}/articles/${metadata.slug}`,
      images: articleImage ? [{ url: articleImage, alt: metadata.title }] : undefined
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: articleImage ? [articleImage] : undefined
    }
  }
}

export const dynamicParams = false

const BlogDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const posts = await getPosts()

  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const { metadata, content } = post
  const articleImage = metadata.image
    ? metadata.image.startsWith('http')
      ? metadata.image
      : `${siteUrl}${metadata.image}`
    : undefined

  // Sort posts by published date
  const allPosts = posts.sort(
    (a, b) => new Date(a.publishedAt ?? '').getTime() - new Date(b.publishedAt ?? '').getTime()
  )

  // Find the current post index
  const currentPostIndex = allPosts.findIndex(p => p.slug === slug)
  const previousPost = currentPostIndex > 0 ? allPosts[currentPostIndex - 1] : null
  const nextPost = currentPostIndex < allPosts.length - 1 ? allPosts[currentPostIndex + 1] : null

  const sameCategoryPosts = allPosts.filter(p => p.category === metadata.category && p.slug !== slug)
  const otherCategoryPosts = allPosts.filter(p => p.category !== metadata.category && p.slug !== slug)
  const relatedPosts = [...sameCategoryPosts, ...otherCategoryPosts].slice(0, 3)

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        '@id': `${siteUrl}#website`,
        name: 'ClassTrack',
        description:
          'Software para academias con web, matrículas, alumnos, pagos y comunicación en una sola plataforma.',
        url: siteUrl,
        inLanguage: 'es-ES'
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        '@id': `${siteUrl}/articles/${metadata.slug}#article`,
        headline: metadata.title,
        description: metadata.description,
        url: `${siteUrl}/articles/${metadata.slug}`,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': `${siteUrl}/articles/${metadata.slug}`
        },
        image: articleImage ? [articleImage] : undefined,
        author: metadata.author?.name
          ? {
              '@type': 'Person',
              name: metadata.author.name
            }
          : undefined,
        publisher: {
          '@type': 'Organization',
          name: 'ClassTrack',
          logo: {
            '@type': 'ImageObject',
            url: `${siteUrl}/favicon/android-chrome-512x512.png`
          }
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'WebPage',
        '@id': `${siteUrl}/articles/${metadata.slug}`,
        name: metadata.title,
        url: `${siteUrl}/articles/${metadata.slug}`,
        description: metadata.description,
        isPartOf: {
          '@id': `${siteUrl}#website`
        }
      },
      {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Inicio',
            item: siteUrl
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Artículos',
            item: `${siteUrl}/articles`
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: metadata.title,
            item: `${siteUrl}/articles/${metadata.slug}`
          }
        ]
      }
    ]
  }

  return (
    <>
      <section className='px-4 py-8 sm:px-6 sm:pt-16 lg:px-8 lg:pt-24'>
        <div className='mx-auto w-full max-w-223 space-y-8 md:space-y-16'>
          <div className='space-y-6'>
            <Breadcrumb className='mb-6'>
              <BreadcrumbList className='gap-1 sm:gap-1'>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href='/' className='text-muted-foreground hover:text-foreground'>
                      Inicio
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator children='/' />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link href='/articles' className='text-muted-foreground hover:text-foreground'>
                      Artículos
                    </Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator children='/' />
                <BreadcrumbItem>
                  <BreadcrumbPage>{metadata.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className='text-3xl leading-tight font-medium md:text-4xl lg:text-5xl'>{metadata.title}</h1>
          </div>

          <img src={metadata.image} alt={metadata.title} className='w-full rounded-lg object-cover' />

          <article className='prose prose-slate dark:prose-invert max-w-none space-y-4 text-base'>
            <MDXContent source={content} />
          </article>

          {/* Author and Meta Info */}
          <div className='bg-muted flex flex-wrap justify-between gap-6 rounded-md p-4 lg:items-center'>
            <div className='flex items-center gap-2 max-sm:w-full'>
              <Avatar className='size-12'>
                <AvatarImage src={metadata.author?.picture} alt={metadata.author?.name} />
                <AvatarFallback className='bg-primary text-primary-foreground font-semibold'>
                  {metadata.author?.name.charAt(0)}
                </AvatarFallback>
              </Avatar>
              <div className='flex flex-col space-y-1'>
                <span className='text-muted-foreground text-sm'>Escrito por</span>
                <span className='text-sm font-medium'>{metadata.author?.name}</span>
              </div>
            </div>

            <div className='flex flex-col space-y-1'>
              <span className='text-muted-foreground text-sm'>Tiempo de lectura</span>
              <span className='text-sm font-medium'>{metadata.readTime}</span>
            </div>

            <div className='flex flex-col space-y-1'>
              <span className='text-muted-foreground text-sm'>Publicado el</span>
              <span className='text-sm font-medium'>
                {new Date(metadata.publishedAt ?? '').toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: '2-digit'
                })}
              </span>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className='flex items-center justify-between gap-4'>
            {previousPost ? (
              <SecondarySwipeButton size='lg' asChild>
                <Link href={`/articles/${previousPost.slug}`}>
                  <ChevronLeftIcon className='transition-transform duration-300 group-hover:-translate-x-1' />
                  Artículo anterior
                </Link>
              </SecondarySwipeButton>
            ) : (
              <SecondarySwipeButton size='lg' disabled>
                <ChevronLeftIcon className='transition-transform duration-300 group-hover:-translate-x-1' />
                Artículo anterior
              </SecondarySwipeButton>
            )}
            {nextPost ? (
              <SecondarySwipeButton size='lg' asChild>
                <Link href={`/articles/${nextPost.slug}`}>
                  Siguiente artículo
                  <ChevronRightIcon className='transition-transform duration-300 group-hover:translate-x-1' />
                </Link>
              </SecondarySwipeButton>
            ) : (
              <SecondarySwipeButton size='lg' disabled>
                Siguiente artículo
                <ChevronRightIcon className='transition-transform duration-300 group-hover:translate-x-1' />
              </SecondarySwipeButton>
            )}
          </div>
        </div>
      </section>

      {/* Related Posts Section */}
      <RelatedBlogSection posts={relatedPosts} />

      <CTA />

      {/* Add JSON-LD to your page */}
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c')
        }}
      />
    </>
  )
}

export default BlogDetailsPage
