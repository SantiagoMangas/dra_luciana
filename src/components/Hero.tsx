'use client'
import { useState, useEffect, useRef } from 'react'
import { ChartSpline, Heart, Award, BookOpen, Globe, Sparkles } from 'lucide-react'
import { Button } from './button'
import Link from 'next/link'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-amarilloPastel/30 to-secondary/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary to-secondary dark:from-primary/20 dark:to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-secondary to-primary dark:from-secondary/25 dark:to-primary/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-amarilloPastel to-primary dark:from-amarilloPastel/30 dark:to-primary/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        
        <div className="lg:hidden flex flex-col items-center text-center space-y-8">
          
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full border border-primary/20 dark:border-primary-light/30 shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
            <Award className="w-4 h-4 text-primary dark:text-primary-light" />
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Especialista en Endocrinología</span>
          </div>

          <div className={`relative w-full max-w-xs transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative group">
              <div className="aspect-square rounded-3xl shadow-2xl relative overflow-hidden">
                <img 
                  src="/perfil.jpg" 
                  alt="Dra. Luciana Mangas"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-tl from-amarilloPastel/40 to-primary/30 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
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
              Bienvenidos a mi espacio personal donde comparto experiencias, novedades médicas y reflexiones sobre endocrinología
            </p>

            {/* Stats en móvil - 2 columnas */}
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

            {/* Botones apilados en móvil */}
            <div className="flex flex-col gap-3 w-full max-w-xs mx-auto">
              <Link href="#blog" className="w-full">
                <Button 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <BookOpen className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Ver Publicaciones
                </Button>
              </Link>
              
              <Link href="#sobre-mi" className="w-full">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full border-primary text-primary dark:text-primary-light hover:bg-primary hover:text-white dark:border-primary-light dark:hover:bg-primary-light dark:hover:text-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <Heart className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  Mi Historia
                </Button>
              </Link>
            </div>

            <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400 pt-2">
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>Compartiendo conocimiento médico</span>
            </div>
          </div>
        </div>

        {/* DISEÑO DESKTOP: Grid horizontal original */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Columna izquierda - Contenido */}
          <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full border border-primary/20 dark:border-primary-light/30 shadow-lg">
              <Award className="w-4 h-4 text-primary dark:text-primary-light" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Especialista en Endocrinología</span>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.3]">
                <span className="block text-gray-900 dark:text-white">Dra. Luciana</span>
                <span className="block bg-gradient-to-r from-primary via-primary-light to-secondary bg-clip-text text-transparent">
                  Mangas
                </span>
              </h1>
              
              <div className="flex items-center gap-3 text-xl md:text-2xl text-gray-600 dark:text-gray-300">
                <div className="w-12 h-px bg-gradient-to-r from-primary to-secondary"></div>
                <span>Compartiendo conocimiento médico</span>
              </div>
            </div>

            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl">
              Bienvenidos a mi espacio personal donde comparto 
              <span className="text-primary dark:text-primary-light font-medium"> experiencias, novedades médicas</span> y 
              reflexiones sobre endocrinología. Un lugar para conectar con la comunidad médica y pacientes.
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

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="#blog">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                >
                  <BookOpen className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  Ver Publicaciones
                </Button>
              </Link>
              
              <Link href="#sobre-mi">
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

            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
              <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
              <span>Compartiendo conocimiento</span>
            </div>
          </div>

          {/* Columna derecha - Imagen */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            <div className="relative group">
              <div className="aspect-[4/5] rounded-3xl shadow-2xl relative overflow-hidden transition-all duration-500 ease-out group-hover:shadow-2xl">
                <div className="w-full h-full overflow-hidden">
                  <img 
                    src="/perfil.jpg" 
                    alt="Dra. Luciana Mangas - Especialista en Endocrinología"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-70"></div>
                
                <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl transition-all duration-700 group-hover:scale-125 group-hover:opacity-70"></div>
                <div className="absolute bottom-8 right-8 w-24 h-24 bg-gradient-to-tl from-primary/20 to-transparent rounded-full blur-xl transition-all duration-700 group-hover:scale-125 group-hover:opacity-70"></div>
              </div>

              <div className="absolute bottom-4 -right-8 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-secondary/20 transition-transform duration-300 group-hover:scale-105">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-secondary dark:text-primary-light transition-transform duration-300 group-hover:rotate-12" />
                  <span className="text-xs font-medium text-gray-700 dark:text-gray-300">Blog Personal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}