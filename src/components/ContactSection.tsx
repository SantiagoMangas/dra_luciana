'use client'
import { useState, useEffect, useRef } from 'react'
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'

type LocationKey = 'Buenos Aires' | 'Puan' | 'Escobar'

type LocationData = {
  title: string
  address: string
  phone: string
  schedule: string
  mapsLink: string
  highlight?: string
}

const locations: Record<LocationKey, LocationData> = {
  'Buenos Aires': {
    title: 'CABA - Consultorio Principal',
    address: 'Arenales 2330, 3° G, Recoleta',
    phone: '11-5816-5163',
    schedule: 'Lunes a Viernes: 9:00 - 18:00hs',
    mapsLink: 'https://maps.google.com/?q=Arenales+2330+Recoleta+CABA',
    highlight: 'Consultas generales y seguimientos'
  },
  'Puan': {
    title: 'Puan - Provincia de Buenos Aires',
    address: 'CSYOP, Puan',
    phone: '11-5816-5163',
    schedule: 'Consultar disponibilidad',
    mapsLink: 'https://maps.google.com/?q=Puan+Buenos+Aires',
    highlight: 'Atención mensual programada'
  },
  'Escobar': {
    title: 'Escobar - Zona Norte',
    address: 'Consultorio Andrea Gogolin',
    phone: '11-5816-5163',
    schedule: 'Consultar horarios',
    mapsLink: 'https://maps.google.com/?q=Escobar+Buenos+Aires',
    highlight: 'Consultorio asociado'
  }
}

export default function LocationSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState<LocationKey>('Buenos Aires')
  const sectionRef = useRef<HTMLElement>(null)

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

  const current = locations[selectedLocation]

  return (
    <section 
      ref={sectionRef}
      id="ubicacion" 
      className="py-16 md:py-20 bg-gradient-to-b from-white via-amarilloPastel/30 to-secondary dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-primary to-secondary dark:from-primary/10 dark:to-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-tl from-amarilloPastel to-primary dark:from-amarilloPastel/15 dark:to-primary/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`text-center mb-8 md:mb-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Ubicaciones
          </h2>
          
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
            Atención en CABA, Zona Norte y Provincia de Buenos Aires
          </p>
        </div>

        <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <div className="flex flex-wrap justify-center gap-3 mb-4">
            {(Object.keys(locations) as LocationKey[]).map((location) => (
              <button
                key={location}
                onClick={() => setSelectedLocation(location)}
                className={`px-5 md:px-6 py-2.5 md:py-3 rounded-full font-medium transition-all duration-300 text-sm md:text-base ${
                  selectedLocation === location
                    ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
                    : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700'
                }`}
              >
                {location}
              </button>
            ))}
          </div>

          <div className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-800/50 rounded-3xl p-4 md:p-6 shadow-xl border border-gray-200/50 dark:border-slate-700/50 max-w-2xl mx-auto">
            
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              {current.title}
            </h3>

            {current.highlight && (
              <div className="bg-gradient-to-br from-primary/10 via-secondary/5 to-amarilloPastel/10 dark:from-primary/20 dark:via-secondary/10 dark:to-amarilloPastel/15 rounded-2xl px-5 py-3 mb-8 text-center border border-primary/20 dark:border-primary/30">
                <p className="text-sm md:text-base text-primary dark:text-primary-light font-medium">
                  {current.highlight}
                </p>
              </div>
            )}

            {/* Información en grid limpio */}
            <div className="space-y-6">
              
              {/* Dirección */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                  <MapPin className="w-6 h-6 text-primary dark:text-primary-light" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-1 font-medium">
                    Dirección
                  </p>
                  <p className="text-base md:text-lg text-gray-900 dark:text-white font-medium mb-2">
                    {current.address}
                  </p>
                  <a
                    href={current.mapsLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary dark:text-primary-light hover:underline font-medium"
                  >
                    Abrir en Google Maps
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              <div className="h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-slate-700 to-transparent"></div>

              {/* Horarios */}
              <div className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-amarilloPastel/20 dark:bg-amarilloPastel/30 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-all duration-300">
                  <Clock className="w-6 h-6 text-primary dark:text-primary-light" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-1 font-medium">
                    Horarios
                  </p>
                  <p className="text-base md:text-lg text-gray-900 dark:text-white font-medium">
                    {current.schedule}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}