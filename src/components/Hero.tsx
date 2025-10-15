'use client'
import { useState, useEffect, useRef } from 'react'
import { Heart, Award, BookOpen, Globe } from 'lucide-react'
import { Button } from './button'

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
    className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-amarilloPastel/30 to-secondary/20 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Círculos decorativos */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-secondary/10 dark:from-primary/20 dark:to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-secondary/15 to-primary/10 dark:from-secondary/25 dark:to-primary/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-r from-amarilloPastel/20 to-primary/5 dark:from-amarilloPastel/30 dark:to-primary/15 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
        
        {/* Patrón de puntos */}
        <div className="absolute inset-0 opacity-30 dark:opacity-20">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-primary rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-secondary rounded-full animate-ping" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-primary-light rounded-full animate-ping" style={{animationDelay: '5s'}}></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
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
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-primary-light hover:from-primary-light hover:to-secondary text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <BookOpen className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                Ver Publicaciones
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary text-primary dark:text-primary-light hover:bg-primary hover:text-white dark:border-primary-light dark:hover:bg-primary-light dark:hover:text-slate-900 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
              >
                <Heart className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                Conoce Mi Historia
              </Button>
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
                {/* Contenedor de imagen con overflow */}
                <div className="w-full h-full overflow-hidden">
                  <img 
                    src="/perfil.jpg" 
                    alt="Dra. Luciana Mangas - Especialista en Endocrinología"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                
                {/* Overlay con efecto de hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent transition-opacity duration-500 group-hover:opacity-70"></div>
                
                {/* Elementos decorativos con animación */}
                <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-br from-white/20 to-transparent rounded-full blur-xl transition-all duration-700 group-hover:scale-125 group-hover:opacity-70"></div>
                <div className="absolute bottom-8 right-8 w-24 h-24 bg-gradient-to-tl from-primary/20 to-transparent rounded-full blur-xl transition-all duration-700 group-hover:scale-125 group-hover:opacity-70"></div>
                
                {/* Efecto de brillo al hacer hover */}
                <div className="absolute inset-0 bg-white/0 transition-all duration-500 group-hover:bg-white/5"></div>
              </div>

              {/* Badge con efecto de hover */}
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

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}