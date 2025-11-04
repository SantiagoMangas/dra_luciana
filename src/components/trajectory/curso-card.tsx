interface CursoCardProps {
  title: string
  year: string
  institution?: string
  hours?: string
}

export function CursoCard({ title, year, institution, hours }: CursoCardProps) {
  return (
    <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-lg p-4 border border-gray-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary-light hover:shadow-md hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-start justify-between mb-2">
        <h5 className="font-semibold text-gray-900 dark:text-white text-xs md:text-sm pr-2 leading-tight">{title}</h5>
        <span className="text-xs font-bold text-secondary dark:text-primary-light whitespace-nowrap">{year}</span>
      </div>

      {institution && <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">{institution}</p>}

      {hours && <span className="text-xs text-primary dark:text-primary-light font-medium">{hours}</span>}
    </div>
  )
}
