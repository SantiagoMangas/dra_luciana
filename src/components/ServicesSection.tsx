'use client'
import { useState, useEffect, useRef } from 'react'
import { Stethoscope, Calendar, FileText, Users, Clock, CheckCircle, ArrowRight } from 'lucide-react'

export default function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeService, setActiveService] = useState(0)
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

  const services = [
    {
      icon: Stethoscope,
      title: "Consulta Endocrinológica",
      description: "Evaluación integral de trastornos hormonales y metabólicos",
      features: [
        "Diagnóstico y tratamiento de tiroides",
        "Manejo de diabetes tipo 1 y 2",
        "Evaluación de obesidad y metabolismo",
        "Trastornos suprarrenales y pituitarios"
      ],
      color: "from-primary/20 to-secondary/20"
    },
    {
      icon: FileText,
      title: "Segunda Opinión Médica",
      description: "Revisión experta de diagnósticos y planes de tratamiento complejos",
      features: [
        "Análisis detallado de estudios previos",
        "Evaluación de opciones terapéuticas",
        "Recomendaciones basadas en evidencia",
        "Informe médico completo"
      ],
      color: "from-secondary/20 to-amarilloPastel/30"
    },
    {
      icon: Users,
      title: "Consultoría Profesional",
      description: "Asesoramiento para colegas y equipos médicos",
      features: [
        "Casos clínicos complejos",
        "Discusión de protocolos",
        "Actualización en endocrinología",
        "Formación continua"
      ],
      color: "from-amarilloPastel/30 to-primary/20"
    }
  ]



  return (
    <section 
      ref={sectionRef}
      id="servicios" 
      className="py-20 bg-gradient-to-t via-amarilloPastel/30 to-secondary/60 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary to-secondary dark:from-primary/20 dark:to-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-tl from-amarilloPastel to-secondary dark:from-amarilloPastel/25 dark:to-secondary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de la sección */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full mb-6">
            <Stethoscope className="w-4 h-4 text-primary dark:text-primary-light" />
            <span className="text-sm font-medium text-primary dark:text-primary-light">¿Cómo puedo ayudarte?</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Servicios <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Profesionales</span>
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Atención especializada en endocrinología con enfoque integral y personalizado
          </p>
        </div>

        {/* Servicios principales */}
        <div className={`grid lg:grid-cols-3 gap-8 mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveService(index)}
              className={`group relative bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-slate-700/50 hover:-translate-y-2 cursor-pointer ${
                activeService === index ? 'ring-2 ring-primary dark:ring-primary-light' : ''
              }`}
            >
              {/* Ícono */}
              <div className={`w-16 h-16 bg-gradient-to-br ${service.color} dark:from-primary/30 dark:to-secondary/30 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                <service.icon className="w-8 h-8 text-primary dark:text-primary-light" />
              </div>

              {/* Contenido */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary dark:text-primary-light flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
          ))}
        </div>
           <div className="flex justify-center">
              <button className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 dark:bg-primary-light dark:hover:bg-primary-light/90 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <Calendar className="w-5 h-5" />
                Contactar
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
      </div>
    </section>
  )
}