"use client"
import { useState, useEffect, useRef } from "react"
import type React from "react"

import { GraduationCap, Sparkles, Briefcase, Globe } from "lucide-react"
import { TabButton } from "../components/trajectory/tab-button"
import { FormacionCard } from "../components/trajectory/formacion-card"
import { PosgradoCard } from "../components/trajectory/posgrado-card"
import { CursoCard } from "../components/trajectory/curso-card"
import { ExperienciaCard } from "../components/trajectory/experiencia-card"
import { CongresoCard } from "../components/trajectory/congreso-card"
import { ProtocolGrid } from "../components/trajectory/protocol-grid"
import { ExpandableSection } from "../components/trajectory/expandable-section"
import {
  formacionData,
  posgradosData,
  experienciaLaboralData,
  congresosData,
  cursosDestacadosData,
  protocolsData
} from "../data/trajectory-data"

type TabType = "formacion" | "experiencia" | "congresos"

export default function TrajectorySection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState<TabType>("formacion")
  const [showAllPosgrados, setShowAllPosgrados] = useState(false)
  const [showAllCongresos, setShowAllCongresos] = useState(false)
  const [showAllCursos, setShowAllCursos] = useState(false)

  const sectionRef = useRef(null)
  const posgradosButtonRef = useRef<HTMLButtonElement | null>(null)
  const congresosButtonRef = useRef<HTMLButtonElement | null>(null)
  const cursosButtonRef = useRef<HTMLButtonElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleToggleWithScroll = (
    currentState: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    // Simply toggle the state without any scrolling
    setState(!currentState)
  }

  // Removed unused variables as we're now handling the display logic directly in the JSX

  return (
    <section
      ref={sectionRef}
      id="trayectoria"
      className="py-16 md:py-20 bg-gradient-to-b from-primary via-white to-secondary dark:from-slate-900 dark:via-slate-800 dark:to-slate-700 transition-colors duration-300 relative overflow-hidden"
    >
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0">
        <div className="absolute top-20 md:top-32 left-10 md:left-20 w-48 md:w-72 h-48 md:h-72 bg-gradient-to-br from-primary to-secondary dark:from-primary/20 dark:to-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 md:bottom-32 right-10 md:right-20 w-64 md:w-96 h-64 md:h-96 bg-gradient-to-tl from-amarilloPastel to-primary dark:from-amarilloPastel/25 dark:to-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header de la sección */}
        <div
          className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary dark:bg-primary/20 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-secondary dark:text-primary-light" />
            <span className="text-sm font-medium text-secondary dark:text-primary-light">Experiencia y Formación</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 md:mb-6">
            Mi Trayectoria <span className="text-secondary dark:text-primary-light ">Profesional</span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4">
            Una década de dedicación a la endocrinología, investigación y formación continua
          </p>
        </div>

        {/* Tabs de navegación */}
        <div
          className={`flex flex-wrap justify-center gap-3 mb-12 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <TabButton
            icon={GraduationCap}
            label="Formación"
            isActive={activeTab === "formacion"}
            onClick={() => setActiveTab("formacion")}
          />
          <TabButton
            icon={Briefcase}
            label="Experiencia"
            isActive={activeTab === "experiencia"}
            onClick={() => setActiveTab("experiencia")}
          />
          <TabButton
            icon={Globe}
            label="Congresos"
            isActive={activeTab === "congresos"}
            onClick={() => setActiveTab("congresos")}
          />
        </div>

        {/* Contenido según tab activo */}
        <div className={`transition-all duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {/* TAB: FORMACIÓN */}
          {activeTab === "formacion" && (
            <div className="space-y-8 md:space-y-12">
              {/* Formación principal */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {formacionData.map((item, index) => (
                  <FormacionCard key={index} {...item} />
                ))}
              </div>

              {/* Posgrados y diplomaturas */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8 text-center">
                  Posgrados y <span className="text-primary dark:text-primary-light">Diplomaturas</span>
                </h3>
                
                {/* Initial items - always visible */}
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  {posgradosData.slice(0, 4).map((item, index) => (
                    <div key={index} className="mb-6">
                      <PosgradoCard {...item} />
                    </div>
                  ))}
                </div>

                {/* Additional items - expandable */}
                {posgradosData.length > 4 && (
                  <div className="mt-2">
                    <ExpandableSection
                      title=""
                      isExpanded={showAllPosgrados}
                      onToggle={() => handleToggleWithScroll(showAllPosgrados, setShowAllPosgrados)}
                      buttonRef={posgradosButtonRef}
                      buttonLabel={`Ver más posgrados (${posgradosData.length - 4})`}
                    >
                      <div className="grid sm:grid-cols-2 gap-6">
                        {posgradosData.slice(4).map((item, index) => (
                          <div key={index + 4} className="mb-6">
                            <PosgradoCard {...item} />
                          </div>
                        ))}
                      </div>
                    </ExpandableSection>
                  </div>
                )}
              </div>

              {/* Cursos y congresos asistidos */}
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8 text-center">
                  Cursos y <span className="text-primary dark:text-primary-light">Congresos Asistidos</span>
                </h3>
                
                {/* Initial items - always visible */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {cursosDestacadosData.slice(0, 6).map((item, index) => (
                    <div key={index} className="mb-6">
                      <CursoCard {...item} />
                    </div>
                  ))}
                </div>

                {/* Additional items - expandable */}
                {cursosDestacadosData.length > 6 && (
                  <div className="mt-2">
                    <ExpandableSection
                      title=""
                      isExpanded={showAllCursos}
                      onToggle={() => handleToggleWithScroll(showAllCursos, setShowAllCursos)}
                      buttonRef={cursosButtonRef}
                      buttonLabel={`Ver más cursos (${cursosDestacadosData.length - 6})`}
                    >
                      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {cursosDestacadosData.slice(6).map((item, index) => (
                          <div key={index + 6} className="mb-6">
                            <CursoCard {...item} />
                          </div>
                        ))}
                      </div>
                    </ExpandableSection>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB: EXPERIENCIA */}
          {activeTab === "experiencia" && (
            <div className="max-w-4xl mx-auto">
              <div className="space-y-4 md:space-y-6">
                {experienciaLaboralData.map((item, index) => (
                  <ExperienciaCard key={index} {...item} />
                ))}
              </div>

              <ProtocolGrid protocols={protocolsData} />
            </div>
          )}

          {/* TAB: CONGRESOS */}
          {activeTab === "congresos" && (
            <div className="max-w-5xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8 text-center">
                Presentaciones en <span className="text-primary dark:text-primary-light">Congresos</span>
              </h3>
              
              {/* Initial items - always visible */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                {congresosData.slice(0, 4).map((item, index) => (
                  <div key={index} className="mb-6">
                    <CongresoCard {...item} />
                  </div>
                ))}
              </div>

              {/* Additional items - expandable */}
              {congresosData.length > 4 && (
                <div className="mt-2">
                  <ExpandableSection
                    title=""
                    isExpanded={showAllCongresos}
                    onToggle={() => handleToggleWithScroll(showAllCongresos, setShowAllCongresos)}
                    buttonRef={congresosButtonRef}
                    buttonLabel={`Ver más presentaciones (${congresosData.length - 4})`}
                  >
                    <div className="grid sm:grid-cols-2 gap-6">
                      {congresosData.slice(4).map((item, index) => (
                        <div key={index + 4} className="mb-6">
                          <CongresoCard {...item} />
                        </div>
                      ))}
                    </div>
                  </ExpandableSection>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
