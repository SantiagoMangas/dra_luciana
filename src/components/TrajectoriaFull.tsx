'use client'
import { useState, useEffect, useRef } from 'react'
import { Award, BookOpen, Users, GraduationCap, Sparkles, Briefcase, Trophy, Globe, ChevronDown, ChevronUp } from 'lucide-react'

export default function TrajectorySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<'formacion' | 'experiencia' | 'congresos'>('formacion')
  const [showAllPosgrados, setShowAllPosgrados] = useState(false)
  const [showAllCongresos, setShowAllCongresos] = useState(false)
  const [showAllCursos, setShowAllCursos] = useState(false)
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

  const formacion = [
    {
      icon: GraduationCap,
      title: "Medicina",
      institution: "Hospital Universitario Austral",
      period: "2010 - 2015",
      detail: "Promedio: 8.19"
    },
    {
      icon: Award,
      title: "Residencia en Endocrinología",
      institution: "Hospital Ramos Mejía",
      period: "2016 - 2020",
      detail: "Residente"
    },
    {
      icon: Trophy,
      title: "Jefa de Residentes",
      institution: "Hospital Ramos Mejía",
      period: "2020 - 2021",
      detail: "Endocrinología"
    }
  ]

  const posgrados = [
    {
      title: "Osteología: Diagnóstico y tratamiento",
      institution: "Hospital Italiano de Buenos Aires",
      year: "2023-2024",
      hours: "140hs"
    },
    {
      title: "Diplomatura en Nutrición",
      institution: "Sociedad Argentina de Nutrición",
      year: "2022",
      hours: "265hs"
    },
    {
      title: "Actualización en Cáncer de Tiroides",
      institution: "Hospital Universitario Austral",
      year: "2021",
      hours: "60hs"
    },
    {
      title: "Diabetes Mellitus Integral",
      institution: "Universidad FASTA - Endoclínica",
      year: "2023",
      hours: "64hs"
    },
    {
      title: "Endocardio",
      institution: "Universidad FASTA",
      year: "2022",
      hours: "64hs"
    },
    {
      title: "Raquitismo y Osteomalacia",
      institution: "Instituto Universitario Hospital Italiano",
      year: "2020",
      hours: "18hs"
    }
  ]

  const experienciaLaboral = [
    {
      position: "Médica Endocrinóloga",
      place: "Consultorio Andrea Gogolin, Escobar",
      period: "Jun 2024 - Actualidad"
    },
    {
      position: "Médica Endocrinóloga",
      place: "Inmunología Buenos Aires, CABA",
      period: "Feb 2024 - Actualidad"
    },
    {
      position: "Sub-investigadora",
      place: "STAT Research, CABA",
      period: "Abr 2022 - Actualidad"
    },
    {
      position: "Médica Endocrinóloga",
      place: "Consultorio Boulogne",
      period: "Nov 2020 - Actualidad"
    },
    {
      position: "Médica Endocrinóloga",
      place: "CSYOP, Puan",
      period: "Nov 2021 - Actualidad"
    },
    {
      position: "Médica Endocrinóloga",
      place: "Mautalen Salud e Investigación, CABA",
      period: "Ene 2022 - Ene 2023"
    },
    {
      position: "Médica Endocrinóloga",
      place: "Sanatorio Cereijo, CABA",
      period: "Nov 2020 - Feb 2022"
    },
    {
      position: "Coordinadora de Investigación Clínica",
      place: "Universidad Emory, Atlanta, Georgia",
      period: "Ene-Feb 2020"
    },
    {
      position: "Becaria en Humanismo y Profesionalismo médico",
      place: "Hospital Universitario Austral",
      period: "2015-2017"
    }
  ]

  const congresos = [
    {
      title: "Redes sociales y salud: debate de pros y contras",
      event: "XXIII Congreso Argentino de Nutrición",
      role: "Disertante",
      year: "2025"
    },
    {
      title: "Medición de riesgo absoluto de fractura en EII",
      event: "Congreso GADECCU",
      role: "Primera autora",
      year: "2025"
    },
    {
      title: "Remisión de Diabetes tipo 2",
      event: "XVI Jornadas Argentinas de Nutrición",
      role: "Coordinadora",
      year: "2024"
    },
    {
      title: "Encuesta de interés profesional SAN Joven",
      event: "XXII Congreso Argentino de Nutrición",
      role: "Miembro fundador",
      year: "2023"
    },
    {
      title: "Incidencia de hipofosfatemia (2° Premio)",
      event: "Jornadas Dr. Alberto Caniparoli, Hospital Ramos Mejía",
      role: "Primera autora",
      year: "2021"
    },
    {
      title: "Hipofosfatemia en anemia ferropénica",
      event: "XXII Congreso SAEM",
      role: "Primera autora",
      year: "2021"
    },
    {
      title: "Reoperados por macrometástasis de carcinoma tiroideo",
      event: "XXII Congreso SAEM",
      role: "Primera autora",
      year: "2021"
    },
    {
      title: "Caso Clínico: Enfermedad de Graves, Citopenias y embarazos",
      event: "XXII Congreso SAEM",
      role: "Autora",
      year: "2021"
    },
    {
      title: "Hipofosfatemia hiperfosfatúrica mediada por FGF23",
      event: "XXII Congreso SAEM",
      role: "Primera autora",
      year: "2021"
    },
    {
      title: "Sindrome de McCune-Albright y Displasia Fibrosa",
      event: "Congreso Internacional de Endocrinología",
      role: "Caso clínico",
      year: "2021"
    },
    {
      title: "Carcinoma de Tiroides y Sarcoidosis",
      event: "Congreso Internacional de Endocrinología",
      role: "Caso clínico",
      year: "2021"
    },
    {
      title: "Carcinoma Diferenciado de Tiroides en Acromegalia",
      event: "Congreso SAEM",
      role: "Coautora",
      year: "2019"
    },
    {
      title: "Impacto óseo en paciente trans varón",
      event: "IV ENAEF",
      role: "Presentadora",
      year: "2019"
    },
    {
      title: "Diagnóstico diferencial de masa quística cervical",
      event: "XII Congreso FASEN",
      role: "Grand Round",
      year: "2018"
    }
  ]

  const cursosDestacados = [
    { title: "American Thyroid Association Annual Meeting", year: "2025" },
    { title: "XXIII Congreso Argentino de Nutrición", year: "2025" },
    { title: "8° Congreso Argentino de Osteología", year: "2025" },
    { title: "XII Jornadas Nacionales de Diabetes - SAD", year: "2025" },
    { title: "XXIV Congreso Argentino de Diabetes", year: "2024" },
    { title: "XV Congreso Argentino de FASEN", year: "2024" },
    { title: "XVI Jornadas Argentinas de Nutrición", year: "2024" },
    { title: "Simposio Raquitismo Hereditario del Cono Sur", year: "2024" },
    { title: "Formación de Investigadores de Ensayos Clínicos", year: "2023", institution: "STAT research" },
    { title: "ICH E6 (R2) - The Global Health Network", year: "2023" },
    { title: "Diabetes Gestacional", year: "2023", institution: "SAD", hours: "24hs" },
    { title: "Abordaje multidisciplinario en Osteoporosis Secundaria", year: "2023", institution: "SAO", hours: "100hs" },
    { title: "Sarcopenia", year: "2022", institution: "IDIM-USAL", hours: "15hs" },
    { title: "Riesgo cardiometabólico", year: "2022", institution: "IntraMed", hours: "32hs" },
    { title: "5° Congreso Argentino de Osteología", year: "2022" },
    { title: "Síndrome de ovario poliquístico", year: "2022", institution: "SAEGRE", hours: "14hs" },
    { title: "Actualización en Climaterio", year: "2022", institution: "SAEGRE", hours: "14hs" },
    { title: "Formación avanzada en obesidad", year: "2021", institution: "SAEGRE", hours: "100hs" },
    { title: "Tratamientos de hormonización - Ley Identidad de género", year: "2021", institution: "Ministerio de Salud" },
    { title: "Metabolismo, Obesidad e Insulino-Resistencia", year: "2021", institution: "SAM", hours: "60hs" },
    { title: "Medicina Sexual", year: "2021", institution: "Intramed", hours: "60hs" },
    { title: "Emergencias en Endocrinología", year: "2021", institution: "FELAEN", hours: "30hs" },
    { title: "Enfermedades Óseas Poco Frecuentes", year: "2021", institution: "AAOMM" },
    { title: "Actualización en Tratamiento de Diabetes con Inyectables", year: "2021", institution: "SAEM", hours: "8hs" },
    { title: "Dislipidemias en niños y adolescentes", year: "2021", institution: "SAL", hours: "96hs" },
    { title: "Taller de Insulinoterapia y GLP-1", year: "2021", institution: "IHEC", hours: "4,30hs" },
    { title: "Taller de Obesidad", year: "2021", institution: "IHEC", hours: "4hs" },
    { title: "Complicaciones Crónicas de Diabetes Mellitus Tipo 2", year: "2021", institution: "Hospital VALL d'Hebron", hours: "15hs" },
    { title: "Enfermedad Cardiovascular y Diabetes", year: "2021", institution: "Intramed", hours: "46hs" },
    { title: "Tecnología aplicada a la Diabetes", year: "2021", institution: "NetMD", hours: "31hs" },
    { title: "Actualización en Dislipemias", year: "2021", institution: "SAEM", hours: "6hs" },
    { title: "Hipertensión Arterial", year: "2020", institution: "Intramed", hours: "36hs" },
    { title: "Acciones no clásicas de la Vitamina D", year: "2020", institution: "SAEM", hours: "8hs" },
    { title: "Actualización en Tratamiento de Diabetes", year: "2020", institution: "SAEM", hours: "12hs" },
    { title: "Tiroides y Embarazo", year: "2020", institution: "SAEM", hours: "30hs" },
    { title: "Hiperparatiroidismo Primario", year: "2020", institution: "AAOMM" },
    { title: "Evaluación del riesgo cardiometabólico", year: "2020", institution: "IntraMed", hours: "32hs" },
    { title: "Manejo de la Corticoterapia Prolongada", year: "2020", institution: "SAEM", hours: "10hs" },
    { title: "Litiasis Renal", year: "2020", institution: "IDIM", hours: "36hs" },
    { title: "Diabetes Mellitus tipo 2: enfoque actual", year: "2020", institution: "IDIM", hours: "72hs" },
    { title: "Curso Modular de Tiroides", year: "2019", institution: "Lab. Montpellier", hours: "105hs" },
    { title: "Enfermedad Cardiovascular y Diabetes (Certificado Excelencia)", year: "2019", institution: "IntraMed", hours: "60hs" },
    { title: "Carcinoma Tiroideo", year: "2019", institution: "FASEN" },
    { title: "Intensificación Terapéutica en DM 1 y 2", year: "2019", institution: "Hospital Italiano", hours: "8hs" },
    { title: "XXXVI Reunión Anual AAOMM", year: "2019" },
    { title: "Actualización en Diagnóstico de Osteoporosis", year: "2019", institution: "IDIM", hours: "60hs" },
    { title: "Hipoparatiroidismo", year: "2019", institution: "IDIM" },
    { title: "Introducción a la Diabetes para Médicos Clínicos", year: "2019", institution: "Lab. Montpellier", hours: "24hs" },
    { title: "Diabetes y Enfermedad Cardiovascular", year: "2019", institution: "Hospital Vall d'Hebron", hours: "31hs" },
    { title: "Taller Osteoporosis severa", year: "2019", institution: "SAEM" },
    { title: "Salud masculina a través de casos clínicos", year: "2018", institution: "Hospital Italiano-SAA" },
    { title: "Avances en Diabetes", year: "2018", institution: "Hospital Italiano", hours: "10hs" },
    { title: "XLH (Raquitismo Hipofosfatémico Ligado al X)", year: "2018", institution: "IDIM", hours: "53hs" },
    { title: "Curso anual de Osteoporosis", year: "2018", institution: "Lab. Montpellier", hours: "20hs" },
    { title: "Diabetes Mellitus y trastornos metabólicos", year: "2018", institution: "Lab. Montpellier", hours: "105hs" },
    { title: "Endocrinología en el Adulto Mayor", year: "2018", institution: "Lab. Montpellier", hours: "23hs" },
    { title: "XXI Congreso Argentino de Diabetes", year: "2018" },
    { title: "Endocrinopatías y Embarazo", year: "2018", institution: "SAEGRE" },
    { title: "Actualización sobre Nódulo y Cáncer de Tiroides", year: "2018", institution: "IDIM", hours: "15hs" },
    { title: "Neuroendocrinología (Curso Intensivo)", year: "2018", hours: "100hs" },
    { title: "Manejo del carcinoma diferenciado de tiroides", year: "2018", institution: "SAEM-AACC", hours: "8hs" },
    { title: "Actualización en Patología Tiroidea", year: "2018", institution: "SAEM", hours: "8hs" },
    { title: "Endocrinología Ginecológica", year: "2017", institution: "Lab. Montpellier", hours: "20hs" },
    { title: "Taller de Insulinoterapia", year: "2017", institution: "Lab. Montpellier", hours: "2hs" },
    { title: "6° Jornada de Endocrinología Zona Norte", year: "2017" },
    { title: "XX Congreso SAEM", year: "2017" },
    { title: "ACLS (Soporte vital cardiovascular avanzado)", year: "2017", institution: "American Heart Association" },
    { title: "Prácticas Seguras en Medicamentos", year: "2015", institution: "Hospital Universitario Austral" },
    { title: "Segunda Jornada de Actualización en Diabetes Mellitus", year: "2014", institution: "Hospital Universitario Austral" },
    { title: "El Continuo Cardiovascular", year: "2014", institution: "Hospital Universitario Austral", hours: "12hs" },
    { title: "Primera Jornada Universitaria de Prevención Cardiovascular", year: "2013", institution: "Hospital Universitario Austral" },
    { title: "Programa de Habilidades Clínicas", year: "2012", institution: "Hospital Universitario Austral" }
  ]

  const displayedPosgrados = showAllPosgrados ? posgrados : posgrados.slice(0, 4)
  const displayedCongresos = showAllCongresos ? congresos : congresos.slice(0, 6)
  const displayedCursos = showAllCursos ? cursosDestacados : cursosDestacados.slice(0, 12)

  return (
    <section 
      ref={sectionRef}
      id="trayectoria" 
      className="py-16 md:py-20 bg-gradient-to-b from-gray-50 via-amarilloPastel/20 to-white dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 md:top-32 left-10 md:left-20 w-48 md:w-72 h-48 md:h-72 bg-gradient-to-br from-primary to-secondary dark:from-primary/20 dark:to-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 md:bottom-32 right-10 md:right-20 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-tl from-amarilloPastel to-primary dark:from-amarilloPastel/25 dark:to-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de la sección */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 dark:bg-primary/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary dark:text-primary-light" />
            <span className="text-sm font-medium text-primary dark:text-primary-light">Experiencia y Formación</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
            Mi Trayectoria <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Profesional</span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Una década de dedicación a la endocrinología, investigación y formación continua
          </p>
        </div>

        {/* Tabs de navegación */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <button
            onClick={() => setActiveTab('formacion')}
            className={`px-4 md:px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base ${
              activeTab === 'formacion'
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
                : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
            }`}
          >
            <span className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 md:w-5 md:h-5" />
              <span>Formación</span>
            </span>
          </button>
          
          <button
            onClick={() => setActiveTab('experiencia')}
            className={`px-4 md:px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base ${
              activeTab === 'experiencia'
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
                : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
            }`}
          >
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4 md:w-5 md:h-5" />
              <span>Experiencia</span>
            </span>
          </button>
          
          <button
            onClick={() => setActiveTab('congresos')}
            className={`px-4 md:px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base ${
              activeTab === 'congresos'
                ? 'bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105'
                : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700'
            }`}
          >
            <span className="flex items-center gap-2">
              <Globe className="w-4 h-4 md:w-5 md:h-5" />
              <span>Congresos</span>
            </span>
          </button>
        </div>

        {/* Contenido según tab activo */}
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          
          {/* TAB: FORMACIÓN */}
          {activeTab === 'formacion' && (
            <div className="space-y-8 md:space-y-12">
              {/* Formación principal */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {formacion.map((item, index) => (
                  <div 
                    key={index}
                    className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-slate-700/50 hover:-translate-y-2"
                  >
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 md:w-7 md:h-7 text-primary dark:text-primary-light" />
                    </div>
                    
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg md:text-xl">
                      {item.title}
                    </h4>
                    
                    <p className="text-sm text-primary dark:text-primary-light font-medium mb-2">
                      {item.institution}
                    </p>
                    
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                      {item.period}
                    </p>
                    
                    <p className="text-xs text-gray-500 dark:text-gray-500">
                      {item.detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Posgrados y diplomaturas */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8 text-center">
                  Posgrados y <span className="text-primary dark:text-primary-light">Diplomaturas</span>
                </h3>
                
                <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-6">
                  {displayedPosgrados.map((item, index) => (
                    <div 
                      key={index}
                      className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-5 md:p-6 border border-gray-200 dark:border-slate-600 hover:shadow-lg transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="font-bold text-gray-900 dark:text-white text-sm md:text-base pr-2">
                          {item.title}
                        </h4>
                        <span className="text-xs font-semibold text-primary dark:text-primary-light bg-primary/10 dark:bg-primary/20 px-2 py-1 rounded-full whitespace-nowrap">
                          {item.hours}
                        </span>
                      </div>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                        {item.institution}
                      </p>
                      
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {item.year}
                      </p>
                    </div>
                  ))}
                </div>

                {posgrados.length > 4 && (
                  <div className="text-center">
                    <button
                      onClick={() => setShowAllPosgrados(!showAllPosgrados)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-primary dark:text-primary-light font-semibold rounded-xl hover:shadow-lg transition-all duration-300 border border-primary/20 dark:border-primary/30"
                    >
                      {showAllPosgrados ? (
                        <>
                          Ver menos
                          <ChevronUp className="w-5 h-5" />
                        </>
                      ) : (
                        <>
                          Ver más posgrados
                          <ChevronDown className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>

              {/* Cursos y Congresos asistidos */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8 text-center">
                  Cursos y <span className="text-secondary dark:text-primary-light">Congresos Asistidos</span>
                </h3>
                
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 mb-6">
                  {displayedCursos.map((item, index) => (
                    <div 
                      key={index}
                      className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary-light transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h5 className="font-semibold text-gray-900 dark:text-white text-xs md:text-sm pr-2 leading-tight">
                          {item.title}
                        </h5>
                        <span className="text-xs font-bold text-secondary dark:text-primary-light whitespace-nowrap">
                          {item.year}
                        </span>
                      </div>
                      
                      {item.institution && (
                        <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                          {item.institution}
                        </p>
                      )}
                      
                      {item.hours && (
                        <span className="text-xs text-primary dark:text-primary-light font-medium">
                          {item.hours}
                        </span>
                      )}
                    </div>
                  ))}
                </div>

                {cursosDestacados.length > 12 && (
                  <div className="text-center">
                    <button
                      onClick={() => setShowAllCursos(!showAllCursos)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-primary dark:text-primary-light font-semibold rounded-xl hover:shadow-lg transition-all duration-300 border border-primary/20 dark:border-primary/30"
                    >
                      {showAllCursos ? (
                        <>
                          Ver menos
                          <ChevronUp className="w-5 h-5" />
                        </>
                      ) : (
                        <>
                          Ver todos los cursos ({cursosDestacados.length})
                          <ChevronDown className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB: EXPERIENCIA */}
          {activeTab === 'experiencia' && (
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4 md:space-y-6">
                {experienciaLaboral.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-white dark:bg-slate-800 rounded-xl p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary-light"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                      <h4 className="font-bold text-gray-900 dark:text-white text-base md:text-lg">
                        {item.position}
                      </h4>
                      <span className="text-sm font-medium text-primary dark:text-primary-light bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full w-fit">
                        {item.period}
                      </span>
                    </div>
                    
                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-primary dark:text-primary-light flex-shrink-0" />
                      {item.place}
                    </p>
                  </div>
                ))}
              </div>

              {/* Protocolos de investigación */}
              <div className="mt-12">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                  Protocolos de <span className="text-primary dark:text-primary-light">Investigación</span>
                </h3>
                <div className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-2xl p-6 md:p-8 border border-primary/20 dark:border-primary/30">
                  <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
                    Sub-investigadora en múltiples protocolos de investigación clínica
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {['ACT23/001', 'I8F-MC-GPJD', 'J1I-MC-GZBO', 'J3L-MC-EZEF', 'J1I-MC-GZBZ', 'NN93884896', 'I8H-MC-BDCU', 'I8H-MC-BDCW', 'I8F-MC-GPIJ', 'I8F-MC-GPHN', 'I8F-MC-GPHK', 'I8F-MC-GPGN', 'J1I-MC-GZBM', 'BI 1366-0022'].map((protocol, index) => (
                      <div key={index} className="bg-white dark:bg-slate-800 rounded-lg px-3 py-2 text-center border border-gray-200 dark:border-slate-700">
                        <span className="text-xs font-mono text-gray-700 dark:text-gray-300">{protocol}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB: CONGRESOS */}
          {activeTab === 'congresos' && (
            <div className="max-w-5xl mx-auto">
              <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-6">
                {displayedCongresos.map((item, index) => (
                  <div 
                    key={index}
                    className="bg-white dark:bg-slate-800 rounded-xl p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-700"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <span className="text-xs font-bold text-secondary dark:text-primary-light">
                        {item.year}
                      </span>
                      <span className="text-xs bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-primary-light px-2 py-1 rounded-full">
                        {item.role}
                      </span>
                    </div>
                    
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm md:text-base">
                      {item.title}
                    </h4>
                    
                    <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">
                      {item.event}
                    </p>
                  </div>
                ))}
              </div>

              {congresos.length > 6 && (
                <div className="text-center">
                  <button
                    onClick={() => setShowAllCongresos(!showAllCongresos)}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 text-primary dark:text-primary-light font-semibold rounded-xl hover:shadow-lg transition-all duration-300 border border-primary/20 dark:border-primary/30"
                  >
                    {showAllCongresos ? (
                      <>
                        Ver menos
                        <ChevronUp className="w-5 h-5" />
                      </>
                    ) : (
                      <>
                        Ver todas las presentaciones ({congresos.length})
                        <ChevronDown className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}