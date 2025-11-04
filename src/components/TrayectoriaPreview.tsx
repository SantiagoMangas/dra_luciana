'use client'
import { useState, useEffect, useRef } from 'react'
import { Award, GraduationCap, Sparkles, Trophy, ArrowRight, Briefcase, Globe, BookOpen } from 'lucide-react'
import Link from 'next/link'

export default function TrajectoriaPreview() {
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
      id="trayectoria" 
      className="py-16 md:py-20 bg-gradient-to-b from-white via-amarilloPastel/30 to-secondary/60 dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-primary to-secondary dark:from-primary/20 dark:to-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-amarilloPastel to-secondary dark:from-amarilloPastel/25 dark:to-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de la sección */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary dark:text-primary-light" />
            <span className="text-sm font-medium text-primary dark:text-primary-light">Trayectoria Profesional</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
            Formación y <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experiencia</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Una década dedicada a la excelencia médica y la investigación científica
          </p>
        </div>

        {/* Timeline visual - Más intuitivo */}
        <div className={`max-w-4xl mx-auto mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Línea de tiempo desktop */}
          <div className="hidden md:block relative">
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-amarilloPastel transform -translate-x-1/2"></div>
            
            <div className="space-y-12">
              <div className="relative flex items-center">
                <div className="w-1/2 pr-12 text-right">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Medicina</h4>
                  <p className="text-primary dark:text-primary-light font-medium mb-1">Hospital Universitario Austral</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Promedio: 8.19</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-lg z-10">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <div className="w-1/2 pl-12">
                  <span className="inline-block bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light px-4 py-2 rounded-full font-bold">
                    2010 - 2015
                  </span>
                </div>
              </div>

              <div className="relative flex items-center">
                <div className="w-1/2 pr-12 text-right">
                  <span className="inline-block bg-secondary/40 dark:bg-secondary/20 text-primary dark:text-primary-light px-4 py-2 rounded-full font-bold">
                    2016 - 2020
                  </span>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-primary/90 to-amarilloPastel rounded-full flex items-center justify-center shadow-lg z-10">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div className="w-1/2 pl-12">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Residencia en Endocrinología</h4>
                  <p className="text-primary dark:text-primary-light font-medium mb-1">Hospital Ramos Mejía</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Formación especializada completa</p>
                </div>
              </div>

              <div className="relative flex items-center">
                <div className="w-1/2 pr-12 text-right">
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Jefa de Residentes</h4>
                  <p className="text-primary dark:text-primary-light font-medium mb-1">Hospital Ramos Mejía</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Liderazgo y docencia</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-amarilloPastel to-primary rounded-full flex items-center justify-center shadow-lg z-10">
                  <Trophy className="w-6 h-6 text-white" />
                </div>
                <div className="w-1/2 pl-12">
                  <span className="inline-block bg-primary/20 dark:bg-amarilloPastel/30 text-primary dark:text-primary-light px-4 py-2 rounded-full font-bold">
                    2020 - 2021
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline móvil - Vertical */}
          <div className="md:hidden relative pl-8">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-amarilloPastel"></div>
            
            <div className="space-y-8">
              <div className="relative">
                <div className="absolute -left-8 w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <span className="inline-block bg-primary/10 dark:bg-primary/20 text-primary dark:text-primary-light px-3 py-1 rounded-full text-xs font-bold mb-2">
                  2010 - 2015
                </span>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Medicina</h4>
                <p className="text-sm text-primary dark:text-primary-light font-medium mb-1">Hospital Universitario Austral</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Promedio: 8.19</p>
              </div>

              <div className="relative">
                <div className="absolute -left-8 w-8 h-8 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
                <span className="inline-block bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-primary-light px-3 py-1 rounded-full text-xs font-bold mb-2">
                  2016 - 2020
                </span>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Residencia en Endocrinología</h4>
                <p className="text-sm text-primary dark:text-primary-light font-medium mb-1">Hospital Ramos Mejía</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Formación especializada completa</p>
              </div>

              <div className="relative">
                <div className="absolute -left-8 w-8 h-8 bg-gradient-to-br from-amarilloPastel to-primary rounded-full flex items-center justify-center">
                  <Trophy className="w-4 h-4 text-white" />
                </div>
                <span className="inline-block bg-amarilloPastel/20 dark:bg-amarilloPastel/30 text-primary dark:text-primary-light px-3 py-1 rounded-full text-xs font-bold mb-2">
                  2020 - 2021
                </span>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Jefa de Residentes</h4>
                <p className="text-sm text-primary dark:text-primary-light font-medium mb-1">Hospital Ramos Mejía</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Liderazgo y docencia</p>
              </div>
            </div>
          </div>
        </div>

        {/* Estadísticas en cards más visuales */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-br from-primary/20 to-secondary/40 dark:from-primary/20 dark:to-secondary/20 rounded-2xl p-6 text-center border border-primary/20 dark:border-primary/30">
            <div className="text-3xl md:text-4xl font-bold text-primary-light dark:text-primary-light mb-2">10+</div>
            <div className="text-xs md:text-sm text-gray-700 dark:text-gray-300 font-medium">Diplomaturas</div>
          </div>

          <div className="bg-gradient-to-br from-secondary/40 to-amarilloPastel/15 dark:from-secondary/20 dark:to-amarilloPastel/25 rounded-2xl p-6 text-center border border-secondary/20 dark:border-secondary/30">
            <div className="text-3xl md:text-4xl font-bold text-primary-light dark:text-primary-light mb-2">75+</div>
            <div className="text-xs md:text-sm text-gray-700 dark:text-gray-300 font-medium">Cursos y Congresos</div>
          </div>

          <div className="bg-gradient-to-br from-amarilloPastel/30 to-primary/40 dark:from-amarilloPastel/25 dark:to-primary/20 rounded-2xl p-6 text-center border border-amarilloPastel/30 dark:border-amarilloPastel/40">
            <div className="text-3xl md:text-4xl font-bold text-primary-light dark:text-primary-light mb-2">14+</div>
            <div className="text-xs md:text-sm text-gray-700 dark:text-gray-300 font-medium">Presentaciones</div>
          </div>

          <div className="bg-gradient-to-br from-secondary/70 to-amarilloPastel/15 dark:from-primary/20 dark:to-amarilloPastel/25 rounded-2xl p-6 text-center border border-primary/40 dark:border-primary/30">
            <div className="text-3xl md:text-4xl font-bold text-primary-light dark:text-primary-light mb-2">14</div>
            <div className="text-xs md:text-sm text-gray-700 dark:text-gray-300 font-medium">Investigaciones</div>
          </div>
        </div>

        {/* Destacados en lista simple */}
        <div className={`max-w-3xl mx-auto mb-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Logros <span className="text-primary dark:text-primary-light">Destacados</span>
          </h3>

          <div className="space-y-3">
            <div className="flex items-start gap-4 bg-white dark:bg-slate-800 rounded-xl p-4 md:p-5 border border-gray-200 dark:border-slate-700 hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <Trophy className="w-5 h-5 text-primary dark:text-primary-light" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">2° Premio - Trabajo Digital</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Categoría Especialidades Clínicas, Hospital Ramos Mejía (2021)</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white dark:bg-slate-800 rounded-xl p-4 md:p-5 border border-gray-200 dark:border-slate-700 hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary/20 to-amarilloPastel/30 dark:from-secondary/30 dark:to-amarilloPastel/40 rounded-lg flex items-center justify-center flex-shrink-0">
                <Globe className="w-5 h-5 text-secondary dark:text-primary-light" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Coordinadora de Investigación</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Universidad Emory, Atlanta, Georgia, EE.UU. (2020)</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-white dark:bg-slate-800 rounded-xl p-4 md:p-5 border border-gray-200 dark:border-slate-700 hover:shadow-md transition-all">
              <div className="w-10 h-10 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 rounded-lg flex items-center justify-center flex-shrink-0">
                <BookOpen className="w-5 h-5 text-primary dark:text-primary-light" />
              </div>
              <div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-1">Miembro Fundador de SAN Joven</h4>
                <p className="text-sm text-gray-600 dark:text-gray-300">Sociedad Argentina de Nutrición (2023)</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`text-center transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Link href="/trayectoria">
              <button className="inline-flex items-center gap-3 bg-gradient-to-r from-primary to-primary-light text-white px-8 py-4 font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Explorá mi trayectoria completa
                <ArrowRight className="w-6 h-6" />
              </button>
            </Link>
        </div>
      </div>
    </section>
  )
}