'use client'
import { useState, useEffect, useRef } from 'react'
import { Heart, Award, BookOpen, Users, Stethoscope, GraduationCap, Quote } from 'lucide-react'

export default function AboutSection() {
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

  const values = [
    {
      icon: Heart,
      title: "Empatía",
      description: "Cada paciente es único y merece atención personalizada"
    },
    {
      icon: BookOpen,
      title: "Conocimiento",
      description: "Formación continua para brindar la mejor medicina"
    },
    {
      icon: Users,
      title: "Comunidad",
      description: "Compartir experiencias enriquece a toda la profesión"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      id="sobre-mi" 
      className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-secondary/10 to-primary/5 dark:from-secondary/20 dark:to-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tl from-amarilloPastel/15 to-secondary/10 dark:from-amarilloPastel/25 dark:to-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de la sección */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full mb-6">
            <Stethoscope className="w-4 h-4 text-primary dark:text-primary-light" />
            <span className="text-sm font-medium text-primary dark:text-primary-light">Mi Historia</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Sobre <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Mí</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Una pasión por la endocrinología que nació en la facultad y se transformó en una misión de vida
          </p>
        </div>

        {/* Historia personal */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          
          {/* Texto principal */}
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            {/* Quote destacada */}
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-8 h-8 text-primary/30 dark:text-primary-light/30" />
              <blockquote className="text-2xl md:text-3xl font-light text-gray-700 dark:text-gray-300 italic pl-8">
                La endocrinología me enseñó que los pequeños cambios pueden generar grandes transformaciones
              </blockquote>
            </div>

            <div className="space-y-4 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <p>
                Mi camino en la medicina comenzó con una profunda curiosidad por entender cómo nuestro cuerpo 
                se comunica consigo mismo. Las hormonas, esos mensajeros silenciosos, me fascinaron desde el 
                primer día de clase.
              </p>
              
              <p>
                A lo largo de estos años, he tenido el privilegio de acompañar a cientos de pacientes en sus 
                tratamientos, de publicar investigaciones que contribuyen al conocimiento médico, y de formar 
                a las nuevas generaciones de médicos.
              </p>
              
              <p>
                Este espacio personal nace de la necesidad de <span className="text-primary dark:text-primary-light font-medium">
                compartir experiencias, reflexiones y conocimientos</span> que van más allá del consultorio. 
                Aquí encontrarás casos clínicos, novedades en endocrinología, y mi perspectiva personal sobre 
                nuestra hermosa profesión.
              </p>
            </div>

            {/* Call to action sutil */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-primary/20 dark:bg-primary/30 rounded-full border-2 border-white dark:border-slate-900"></div>
                <div className="w-8 h-8 bg-secondary/20 dark:bg-secondary/30 rounded-full border-2 border-white dark:border-slate-900"></div>
                <div className="w-8 h-8 bg-amarilloPastel/40 dark:bg-amarilloPastel/50 rounded-full border-2 border-white dark:border-slate-900"></div>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Conectando con más de 500 colegas y pacientes
              </span>
            </div>
          </div>

          {/* Imagen personal o visual */}
          <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative">
              {/* Imagen con marco decorativo */}
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-slate-800 dark:to-slate-700 rounded-2xl shadow-xl relative overflow-hidden">
                <img 
                  src="/perfil.jpg" 
                  alt="Dra. Luciana Mangas en su consulta"
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay decorativo */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Logros y formación */}
        <div className={`mb-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Mi Trayectoria <span className="text-primary dark:text-primary-light">Profesional</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200/50 dark:border-slate-700/50 hover:-translate-y-2"
                style={{animationDelay: `${index * 100}ms`}}
              >
                <div className="absolute top-4 right-4 text-xs font-bold text-primary/60 dark:text-primary-light/60">
                  {achievement.year}
                </div>
                
                <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-6 h-6 text-primary dark:text-primary-light" />
                </div>
                
                <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg">
                  {achievement.title}
                </h4>
                
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  {achievement.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Valores y filosofía */}
        <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Mis <span className="text-secondary dark:text-primary-light">Valores</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary/20 to-primary/10 dark:from-secondary/30 dark:to-primary/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg">
                  <value.icon className="w-8 h-8 text-secondary dark:text-primary-light" />
                </div>
                
                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {value.title}
                </h4>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}