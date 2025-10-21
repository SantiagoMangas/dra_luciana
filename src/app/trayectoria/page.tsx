import TrajectoryFull from '@/components/TrajectoriaFull'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export const metadata = {
  title: 'Trayectoria Profesional - Dra. Luciana Mangas',
  description: 'Formación académica, experiencia laboral, cursos, congresos y protocolos de investigación de la Dra. Luciana Mangas, especialista en endocrinología.',
}

export default function TrayectoriaPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      {/* Breadcrumb / Navegación */}
      <div className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 sticky top-0 z-10 backdrop-blur-sm bg-white/80 dark:bg-slate-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary-light transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
        </div>
      </div>

      <TrajectoryFull />
    </main>
  )
}