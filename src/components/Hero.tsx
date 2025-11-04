'use client'
import { useState, useEffect, useRef } from 'react'
import { ChartSpline, Heart, Award, BookOpen, Globe, Sparkles, FileText } from 'lucide-react'
import { Button } from './button'
import Link from 'next/link'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary/70 via-white to-primary-light/50 dark:from-slate-900 dark:via-slate-700 dark:to-slate-900"
    >
      {/* Fondo animado */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary to-secondary dark:from-primary/20 dark:to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-secondary to-primary dark:from-secondary/25 dark:to-primary/20 rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-amarilloPastel to-primary dark:from-amarilloPastel/30 dark:to-primary/15 rounded-full blur-2xl animate-pulse delay-4000"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">

        {/* --- MÓVIL --- */}
        <div className="lg:hidden flex flex-col items-center text-center space-y-8">
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full border border-primary/20 dark:border-primary-light/30 shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <Award className="w-4 h-4 text-primary dark:text-primary-light" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Especialista en Endocrinología</span>
          </div>

          <div className={`relative w-full max-w-xs transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative group">
              <div className="aspect-square rounded-3xl shadow-2xl relative overflow-hidden">
                <img src="/perfil.jpg" alt="Dra. Luciana Mangas" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-xl border border-secondary/20">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary dark:text-primary-light animate-pulse" />
                  <span className="text-xs font-semibold text-gray-700 dark:text-gray-300">Blog Personal</span>
                </div>
              </div>
            </div>
          </div>

          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                <span className="block text-gray-900 dark:text-white">Dra. Luciana</span>
                <span className="block bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                  Mangas Willging
                </span>
              </h1>

              <div className="flex items-center justify-center gap-2 text-lg text-gray-600 dark:text-gray-300">
                <div className="w-8 h-px bg-gradient-to-r from-primary to-secondary"></div>
                <span>Compartiendo conocimiento</span>
                <div className="w-8 h-px bg-gradient-to-l from-primary to-secondary"></div>
              </div>
            </div>

            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed max-w-md mx-auto">
              Bienvenidos a mi espacio personal donde comparto experiencias, novedades médicas y reflexiones sobre endocrinología.
            </p>

            <div className="grid grid-cols-2 gap-4 py-4 max-w-sm mx-auto">
              <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-primary/10">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-2 bg-primary/20 rounded-lg">
                    <BookOpen className="w-5 h-5 text-primary dark:text-primary-light" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Artículos</div>
                </div>
              </div>
              
              <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm rounded-2xl p-4 border border-secondary/10">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-2 bg-secondary/30 rounded-lg">
                    <Globe className="w-5 h-5 text-primary dark:text-primary-light" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">15+</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Conferencias</div>
                </div>
              </div>
            </div>

            {/* Botones */}
            <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
              <Link href="#blog" className="w-full">
                <Button
                  variant="default"
                  size="lg"
                  className="w-full bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <FileText className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Ver publicaciones
                </Button>
              </Link>

              <Link href="#trayectoria" className="w-full">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-primary text-primary dark:text-primary-light hover:bg-primary hover:text-white dark:border-primary-light dark:hover:bg-primary-light dark:hover:text-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <ChartSpline className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Conferencias
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 pt-2">
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>Compartiendo conocimiento médico</span>
            </div>
          </div>
        </div>

        {/* --- DESKTOP --- */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full border border-primary/20 dark:border-primary-light/30 shadow-lg">
              <Award className="w-4 h-4 text-primary dark:text-primary-light" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Especialista en Endocrinología</span>
            </div>

            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.4]">
                <span className="block text-gray-900 dark:text-white">Dra. Luciana</span>
                <span className="block bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                  Mangas Willging
                </span>
              </h1>
              
              <div className="flex items-center gap-3 text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                <div className="w-12 h-px bg-gradient-to-r from-primary to-secondary"></div>
                <span>Compartiendo conocimiento médico</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              Bienvenidos a mi espacio personal donde comparto experiencias, novedades médicas y reflexiones sobre endocrinología.
            </p>

            <div className="flex flex-wrap gap-8 py-4">
              <div className="flex items-center gap-3 group">
                <div className="p-3 bg-primary/20 dark:bg-primary/20 rounded-xl group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors duration-300">
                  <BookOpen className="w-5 h-5 text-primary dark:text-primary-light" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Artículos publicados</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3 group">
                <div className="p-3 bg-secondary/30 dark:bg-secondary/30 rounded-xl group-hover:bg-secondary/30 dark:group-hover:bg-secondary/40 transition-colors duration-300">
                  <Globe className="w-5 h-5 text-primary dark:text-primary-light" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Conferencias dictadas</div>
                </div>
              </div>
            </div>

            {/* Botones desktop */}
            <div className="flex gap-4">
              <Link href="#blog">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                >
                  <FileText className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Ver publicaciones
                </Button>
              </Link>

              <Link href="#trayectoria">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-primary text-primary dark:text-primary-light hover:bg-primary hover:text-white dark:border-primary-light dark:hover:bg-primary-light dark:hover:text-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                >
                  <ChartSpline className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Conferencias
                </Button>
              </Link>
            </div>
          </div>

          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="aspect-[4/5] rounded-3xl shadow-2xl overflow-hidden group">
              <img src="/perfil.jpg" alt="Dra. Luciana Mangas" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}