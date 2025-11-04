import { Award, GraduationCap, Trophy } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface FormacionItem {
  icon: LucideIcon
  title: string
  institution: string
  period: string
  detail: string
}

export interface PosgradoItem {
  title: string
  institution: string
  year: string
  hours: string
}

export interface CursoItem {
  title: string
  year: string
  institution?: string
  hours?: string
}

export interface ExperienciaItem {
  position: string
  place: string
  period: string
}

export interface CongresoItem {
  title: string
  event: string
  role: string
  year: string
}

export const formacionData: FormacionItem[] = [
  {
    icon: GraduationCap,
    title: "Medicina",
    institution: "Hospital Universitario Austral",
    period: "2010 - 2015",
    detail: "Promedio: 8.19",
  },
  {
    icon: Award,
    title: "Residencia en Endocrinología",
    institution: "Hospital Ramos Mejía",
    period: "2016 - 2020",
    detail: "Residente",
  },
  {
    icon: Trophy,
    title: "Jefa de Residentes",
    institution: "Hospital Ramos Mejía",
    period: "2020 - 2021",
    detail: "Endocrinología",
  },
]

export const posgradosData: PosgradoItem[] = [
  {
    title: "Osteología: Diagnóstico y tratamiento",
    institution: "Hospital Italiano de Buenos Aires",
    year: "2023-2024",
    hours: "140hs",
  },
  {
    title: "Diplomatura en Nutrición",
    institution: "Sociedad Argentina de Nutrición",
    year: "2022",
    hours: "265hs",
  },
  {
    title: "Actualización en Cáncer de Tiroides",
    institution: "Hospital Universitario Austral",
    year: "2021",
    hours: "60hs",
  },
  {
    title: "Diabetes Mellitus Integral",
    institution: "Universidad FASTA - Endoclínica",
    year: "2023",
    hours: "64hs",
  },
  {
    title: "Endocardio",
    institution: "Universidad FASTA",
    year: "2022",
    hours: "64hs",
  },
  {
    title: "Raquitismo y Osteomalacia",
    institution: "Instituto Universitario Hospital Italiano",
    year: "2020",
    hours: "18hs",
  },
]

export const experienciaLaboralData: ExperienciaItem[] = [
  {
    position: "Médica Endocrinóloga",
    place: "Consultorio Andrea Gogolin, Escobar",
    period: "Jun 2024 - Actualidad",
  },
  {
    position: "Médica Endocrinóloga",
    place: "Inmunología Buenos Aires, CABA",
    period: "Feb 2024 - Actualidad",
  },
  {
    position: "Sub-investigadora",
    place: "STAT Research, CABA",
    period: "Abr 2022 - Actualidad",
  },
  {
    position: "Médica Endocrinóloga",
    place: "Consultorio Boulogne",
    period: "Nov 2020 - Actualidad",
  },
  {
    position: "Médica Endocrinóloga",
    place: "CSYOP, Puan",
    period: "Nov 2021 - Actualidad",
  },
  {
    position: "Médica Endocrinóloga",
    place: "Mautalen Salud e Investigación, CABA",
    period: "Ene 2022 - Ene 2023",
  },
  {
    position: "Médica Endocrinóloga",
    place: "Sanatorio Cereijo, CABA",
    period: "Nov 2020 - Feb 2022",
  },
  {
    position: "Coordinadora de Investigación Clínica",
    place: "Universidad Emory, Atlanta, Georgia",
    period: "Ene-Feb 2020",
  },
  {
    position: "Becaria en Humanismo y Profesionalismo médico",
    place: "Hospital Universitario Austral",
    period: "2015-2017",
  },
]

export const congresosData: CongresoItem[] = [
  {
    title: "Redes sociales y salud: debate de pros y contras",
    event: "XXIII Congreso Argentino de Nutrición",
    role: "Disertante",
    year: "2025",
  },
  {
    title: "Medición de riesgo absoluto de fractura en EII",
    event: "Congreso GADECCU",
    role: "Primera autora",
    year: "2025",
  },
  {
    title: "Remisión de Diabetes tipo 2",
    event: "XVI Jornadas Argentinas de Nutrición",
    role: "Coordinadora",
    year: "2024",
  },
  {
    title: "Encuesta de interés profesional SAN Joven",
    event: "XXII Congreso Argentino de Nutrición",
    role: "Miembro fundador",
    year: "2023",
  },
  {
    title: "Incidencia de hipofosfatemia (2° Premio)",
    event: "Jornadas Dr. Alberto Caniparoli, Hospital Ramos Mejía",
    role: "Primera autora",
    year: "2021",
  },
  {
    title: "Hipofosfatemia en anemia ferropénica",
    event: "XXII Congreso SAEM",
    role: "Primera autora",
    year: "2021",
  },
  {
    title: "Reoperados por macrometástasis de carcinoma tiroideo",
    event: "XXII Congreso SAEM",
    role: "Primera autora",
    year: "2021",
  },
  {
    title: "Caso Clínico: Enfermedad de Graves, Citopenias y embarazos",
    event: "XXII Congreso SAEM",
    role: "Autora",
    year: "2021",
  },
  {
    title: "Hipofosfatemia hiperfosfatúrica mediada por FGF23",
    event: "XXII Congreso SAEM",
    role: "Primera autora",
    year: "2021",
  },
  {
    title: "Sindrome de McCune-Albright y Displasia Fibrosa",
    event: "Congreso Internacional de Endocrinología",
    role: "Caso clínico",
    year: "2021",
  },
  {
    title: "Carcinoma de Tiroides y Sarcoidosis",
    event: "Congreso Internacional de Endocrinología",
    role: "Caso clínico",
    year: "2021",
  },
  {
    title: "Carcinoma Diferenciado de Tiroides en Acromegalia",
    event: "Congreso SAEM",
    role: "Coautora",
    year: "2019",
  },
  {
    title: "Impacto óseo en paciente trans varón",
    event: "IV ENAEF",
    role: "Presentadora",
    year: "2019",
  },
  {
    title: "Diagnóstico diferencial de masa quística cervical",
    event: "XII Congreso FASEN",
    role: "Grand Round",
    year: "2018",
  },
]

export const cursosDestacadosData: CursoItem[] = [
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
  {
    title: "Abordaje multidisciplinario en Osteoporosis Secundaria",
    year: "2023",
    institution: "SAO",
    hours: "100hs",
  },
  { title: "Sarcopenia", year: "2022", institution: "IDIM-USAL", hours: "15hs" },
  { title: "Riesgo cardiometabólico", year: "2022", institution: "IntraMed", hours: "32hs" },
  { title: "5° Congreso Argentino de Osteología", year: "2022" },
  { title: "Síndrome de ovario poliquístico", year: "2022", institution: "SAEGRE", hours: "14hs" },
  { title: "Actualización en Climaterio", year: "2022", institution: "SAEGRE", hours: "14hs" },
  { title: "Formación avanzada en obesidad", year: "2021", institution: "SAEGRE", hours: "100hs" },
  {
    title: "Tratamientos de hormonización - Ley Identidad de género",
    year: "2021",
    institution: "Ministerio de Salud",
  },
  { title: "Metabolismo, Obesidad e Insulino-Resistencia", year: "2021", institution: "SAM", hours: "60hs" },
  { title: "Medicina Sexual", year: "2021", institution: "Intramed", hours: "60hs" },
  { title: "Emergencias en Endocrinología", year: "2021", institution: "FELAEN", hours: "30hs" },
  { title: "Enfermedades Óseas Poco Frecuentes", year: "2021", institution: "AAOMM" },
  {
    title: "Actualización en Tratamiento de Diabetes con Inyectables",
    year: "2021",
    institution: "SAEM",
    hours: "8hs",
  },
  { title: "Dislipidemias en niños y adolescentes", year: "2021", institution: "SAL", hours: "96hs" },
  { title: "Taller de Insulinoterapia y GLP-1", year: "2021", institution: "IHEC", hours: "4,30hs" },
  { title: "Taller de Obesidad", year: "2021", institution: "IHEC", hours: "4hs" },
  {
    title: "Complicaciones Crónicas de Diabetes Mellitus Tipo 2",
    year: "2021",
    institution: "Hospital VALL d'Hebron",
    hours: "15hs",
  },
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
  {
    title: "Enfermedad Cardiovascular y Diabetes (Certificado Excelencia)",
    year: "2019",
    institution: "IntraMed",
    hours: "60hs",
  },
  { title: "Carcinoma Tiroideo", year: "2019", institution: "FASEN" },
  { title: "Intensificación Terapéutica en DM 1 y 2", year: "2019", institution: "Hospital Italiano", hours: "8hs" },
  { title: "XXXVI Reunión Anual AAOMM", year: "2019" },
  { title: "Actualización en Diagnóstico de Osteoporosis", year: "2019", institution: "IDIM", hours: "60hs" },
  { title: "Hipoparatiroidismo", year: "2019", institution: "IDIM" },
  {
    title: "Introducción a la Diabetes para Médicos Clínicos",
    year: "2019",
    institution: "Lab. Montpellier",
    hours: "24hs",
  },
  {
    title: "Diabetes y Enfermedad Cardiovascular",
    year: "2019",
    institution: "Hospital Vall d'Hebron",
    hours: "31hs",
  },
  { title: "Taller Osteoporosis severa", year: "2019", institution: "SAEM" },
  { title: "Salud masculina a través de casos clínicos", year: "2018", institution: "Hospital Italiano-SAA" },
  { title: "Avances en Diabetes", year: "2018", institution: "Hospital Italiano", hours: "10hs" },
  { title: "XLH (Raquitismo Hipofosfatémico Ligado al X)", year: "2018", institution: "IDIM", hours: "53hs" },
  { title: "Curso anual de Osteoporosis", year: "2018", institution: "Lab. Montpellier", hours: "20hs" },
  {
    title: "Diabetes Mellitus y trastornos metabólicos",
    year: "2018",
    institution: "Lab. Montpellier",
    hours: "105hs",
  },
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
  {
    title: "Segunda Jornada de Actualización en Diabetes Mellitus",
    year: "2014",
    institution: "Hospital Universitario Austral",
  },
  { title: "El Continuo Cardiovascular", year: "2014", institution: "Hospital Universitario Austral", hours: "12hs" },
  {
    title: "Primera Jornada Universitaria de Prevención Cardiovascular",
    year: "2013",
    institution: "Hospital Universitario Austral",
  },
  { title: "Programa de Habilidades Clínicas", year: "2012", institution: "Hospital Universitario Austral" },
]

export const protocolsData: string[] = [
  "ACT23/001",
  "I8F-MC-GPJD",
  "J1I-MC-GZBO",
  "J3L-MC-EZEF",
  "J1I-MC-GZBZ",
  "NN93884896",
  "I8H-MC-BDCU",
  "I8H-MC-BDCW",
  "I8F-MC-GPIJ",
  "I8F-MC-GPHN",
  "I8F-MC-GPHK",
  "I8F-MC-GPGN",
  "J1I-MC-GZBM",
  "BI 1366-0022",
]
