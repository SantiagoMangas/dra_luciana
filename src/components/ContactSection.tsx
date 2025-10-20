'use client'
import { useState, useEffect, useRef } from 'react'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, AlertCircle } from 'lucide-react'

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

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedLocation, setSelectedLocation] = useState<LocationKey>('Buenos Aires')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('sending')
    
    // Simulación de envío
    setTimeout(() => {
      setFormStatus('success')
      setFormData({ name: '', email: '', phone: '', message: '' })
      setTimeout(() => setFormStatus('idle'), 5000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const current = locations[selectedLocation]

  return (
    <section 
      ref={sectionRef}
      id="contacto" 
      className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Elementos decorativos */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-primary/10 to-secondary/5 dark:from-primary/20 dark:to-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-tl from-amarilloPastel/15 to-primary/10 dark:from-amarilloPastel/25 dark:to-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full mb-6">
            <Mail className="w-4 h-4 text-primary dark:text-primary-light" />
            <span className="text-sm font-medium text-primary dark:text-primary-light">Contacto</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
            Agendá tu <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Consulta</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Estoy aquí para ayudarte con tu salud hormonal y metabólica
          </p>
        </div>
          <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                📍 Ubicaciones
              </h3>

              {/* Selector de sucursal */}
              <div className="flex flex-wrap gap-3 mb-6">
                {(Object.keys(locations) as LocationKey[]).map((location) => (
                  <button
                    key={location}
                    onClick={() => setSelectedLocation(location)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 text-sm md:text-base ${
                      selectedLocation === location
                        ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg'
                        : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:shadow-md'
                    }`}
                  >
                    {location}
                  </button>
                ))}
              </div>

              {/* Información de la ubicación seleccionada */}
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-8 shadow-xl border border-gray-200 dark:border-slate-700">
                <h4 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {current.title}
                </h4>

                {current.highlight && (
                  <div className="bg-primary/10 dark:bg-primary/20 rounded-lg px-4 py-2 mb-4">
                    <p className="text-sm text-primary dark:text-primary-light font-medium">
                      {current.highlight}
                    </p>
                  </div>
                )}

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-primary dark:text-primary-light flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 font-medium">
                        {current.address}
                      </p>
                      <a
                        href={current.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs md:text-sm text-primary dark:text-primary-light hover:underline inline-flex items-center gap-1 mt-1"
                      >
                        Ver en Google Maps
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary dark:text-primary-light flex-shrink-0" />
                    <a 
                      href={`tel:+54${current.phone.replace(/\D/g, '')}`}
                      className="text-sm md:text-base text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary-light transition-colors"
                    >
                      {current.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary dark:text-primary-light flex-shrink-0" />
                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-300">
                      {current.schedule}
                    </p>
                  </div>
                </div>
            </div>

            {/* Info adicional */}
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-2xl p-6 border border-primary/20 dark:border-primary/30">
              <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary dark:text-primary-light" />
                Contacto directo
              </h4>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>
                  <span className="font-medium">Email:</span>{' '}
                  <a href="mailto:mangasluciana@gmail.com" className="text-primary dark:text-primary-light hover:underline break-all">
                    mangasluciana@gmail.com
                  </a>
                </p>
                <p>
                  <span className="font-medium">WhatsApp:</span>{' '}
                  <a href="https://wa.me/5491158165163" className="text-primary dark:text-primary-light hover:underline">
                    11-5816-5163
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
