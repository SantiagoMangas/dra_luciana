'use client'
import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { client } from '../../../sanity/lib/client'
import { PortableText } from '@portabletext/react'
import type { PortableTextBlock } from '@portabletext/types'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(client)

interface SanityImage {
  asset: {
    _ref: string
    _type: string
  }
  alt?: string
}

interface Post {
  _id: string
  title: string
  slug: { current: string }
  mainImage?: SanityImage
  category?: string
  excerpt?: string
  body: PortableTextBlock[]
  publishedAt?: string
  readTime?: string
}

export default function BlogPostPage() {
  const params = useParams()
  const router = useRouter()
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const slug = params.slug as string

    const query = `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      mainImage,
      category,
      excerpt,
      body,
      publishedAt,
      readTime
    }`

    client
      .fetch<Post>(query, { slug })
      .then((data) => {
        setPost(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error:', err)
        setLoading(false)
      })
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <p className="text-gray-600 dark:text-gray-400">Cargando...</p>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Post no encontrado
          </h1>
          <button
            onClick={() => router.push('/')}
            className="text-primary hover:underline"
          >
            Volver al inicio
          </button>
        </div>
      </div>
    )
  }

  const imageUrl = post.mainImage?.asset?._ref
    ? builder.image(post.mainImage).width(1200).url()
    : null

  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString('es-AR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : ''

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <div className="bg-white dark:bg-slate-900 sticky top-0 z-10 border-b border-gray-200 dark:border-slate-700">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <button
            onClick={() => router.push('/')}
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver
          </button>
        </div>
      </div>

      {imageUrl && (
        <div className="w-full h-[400px] bg-gray-100 dark:bg-slate-800">
          <img
            src={imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <article className="max-w-3xl mx-auto px-4 py-12">
        {post.category && (
          <span className="inline-block bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light px-4 py-1 rounded-full text-sm font-semibold mb-6">
            {post.category}
          </span>
        )}

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 mb-8 pb-8 border-b border-gray-200 dark:border-slate-700">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {date}
          </span>
          {post.readTime && (
            <>
              <span>•</span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </>
          )}
        </div>

        {/* Extracto */}
        {post.excerpt && (
          <div className="bg-gray-50 dark:bg-slate-800 border-l-4 border-primary p-6 mb-12 rounded-r-lg">
            <p className="text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        )}

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-bold prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-p:leading-relaxed prose-a:text-primary dark:prose-a:text-primary-light prose-strong:text-gray-900 dark:prose-strong:text-white">
          <PortableText value={post.body} />
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200 dark:border-slate-700">
          <button
            onClick={() => router.push('/')}
            className="inline-flex items-center gap-2 text-primary dark:text-primary-light hover:gap-3 transition-all font-semibold"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al blog
          </button>
        </div>
      </article>
    </main>
  )
}