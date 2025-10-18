'use client'
import { useState, useEffect } from 'react'
import { BookOpen, Calendar, Clock, ArrowRight } from 'lucide-react'
import { client } from '../sanity/lib/client'
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'

const builder = imageUrlBuilder(client)

interface SanityImage {
  asset: {
    _ref: string
    _type: string
  }
  alt?: string
}

function urlForImage(source: SanityImage | undefined) {
  if (!source?.asset?._ref) return null
  return builder.image(source).width(800).url()
}

interface Post {
  _id: string
  title: string
  slug?: { current: string }
  mainImage?: SanityImage
  category?: string
  excerpt?: string
  publishedAt?: string
  featured?: boolean
  readTime?: string
}

export default function BlogSection() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const query = `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      category,
      excerpt,
      publishedAt,
      featured,
      readTime
    }`

    client
      .fetch<Post[]>(query)
      .then((data) => {
        setPosts(data)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error:', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">Cargando artículos...</p>
        </div>
      </section>
    )
  }

  if (posts.length === 0) {
    return (
      <section className="py-20 bg-gray-50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-600 dark:text-gray-400">No hay artículos publicados.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="blog" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-primary dark:text-primary-light" />
            <span className="text-sm font-medium text-primary dark:text-primary-light">Artículos Recientes</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Del <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Blog</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Reflexiones, casos clínicos y las últimas novedades en endocrinología
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => {
            const imageUrl = urlForImage(post.mainImage)
            const date = post.publishedAt 
              ? new Date(post.publishedAt).toLocaleDateString('es-AR', { 
                  day: 'numeric', 
                  month: 'short',
                  year: 'numeric'
                })
              : ''

            return (
              <article 
                key={post._id}
                className="group bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-600">
                  {imageUrl ? (
                    <img 
                      src={imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-gray-400" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {post.category && (
                    <div className="absolute bottom-3 left-3">
                      <span className="bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-primary dark:text-primary-light px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3 text-sm text-gray-500 dark:text-gray-400">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {date}
                    </span>
                    {post.readTime && (
                      <>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-primary-light transition-colors">
                    {post.title}
                  </h3>

                  {post.excerpt && (
                    <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  <Link 
                    href={`/blog/${post.slug?.current}`}
                    className="inline-flex items-center gap-2 text-primary dark:text-primary-light font-semibold text-sm hover:gap-3 transition-all duration-300"
                  >
                    Leer artículo
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}