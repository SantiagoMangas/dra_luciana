'use client'
import { useState, useEffect, useRef } from 'react'
import { Award, BookOpen, Users, GraduationCap, Sparkles } from 'lucide-react'

export default function TrajectorySection() {
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

  const achievements = [
    {
      icon: GraduationCap,
      title: "Formación Académica",
      description: "Especialista en Endocrinología - Universidad de Buenos Aires",
      year: "2015"
    },
    {
      icon: Award,
      title: "Certificación Internacional",
      description: "Diplomado en Diabetes y Metabolismo - Harvard Medical School",
      year: "2018"
    },
    {
      icon: BookOpen,
      title: "Investigación Activa",
      description: "Autora de más de 50 publicaciones en revistas científicas",
      year: "2024"
    },
    {
      icon: Users,
      title: "Docencia Universitaria",
      description: "Profesora Adjunta - Cátedra de Endocrinología UBA",
      year: "2020"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="trayectoria" 
      className="py-20 bg-gradient-to-b via-amarilloPastel/30 to-secondary/60 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-20 w-72 h-72 bg-gradient-to-br from-primary to-secondary dark:from-primary/20 dark:to-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 right-20 w-96 h-96 bg-gradient-to-tl from-amarilloPastel to-primary dark:from-amarilloPastel/25 dark:to-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de la sección */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary dark:text-secondary" />
            <span className="text-sm font-medium text-primary dark:text-secondary">Experiencia y Formación</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Mi Trayectoria <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Profesional</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Una década de dedicación a la endocrinología y la investigación 
          </p>
        </div>

        {/* Logros y formación */}
        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="group relative bg-white dark:bg-slate-800 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-slate-700/50 hover:-translate-y-2"
                style={{animationDelay: `${index * 100}ms`}}
              >
                {/* Año en esquina superior */}
                <div className="absolute top-4 right-4 text-xs font-bold text-primary/60 dark:text-primary-light/60">
                  {achievement.year}
                </div>
                
                {/* Ícono */}
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-6 h-6 text-primary dark:text-primary-light" />
                </div>
                
                {/* Contenido */}
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                  {achievement.title}
                </h4>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>

                {/* Efecto hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Estadísticas o timeline opcional */}
        <div className={`mt-16 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200/50 dark:border-slate-700/50">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary dark:text-primary-light mb-2">10+</div>
                <div className="text-gray-600 dark:text-gray-300">Años de experiencia</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-secondary dark:text-primary-light mb-2">50+</div>
                <div className="text-gray-600 dark:text-gray-300">Publicaciones científicas</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-bold text-primary dark:text-primary-light mb-2">500+</div>
                <div className="text-gray-600 dark:text-gray-300">Pacientes atendidos</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}