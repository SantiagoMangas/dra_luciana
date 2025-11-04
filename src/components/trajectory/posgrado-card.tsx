interface PosgradoCardProps {
  title: string
  institution: string
  year: string
  hours: string
}

export function PosgradoCard({ title, institution, year, hours }: PosgradoCardProps) {
  return (
    <div className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-700 rounded-xl p-5 md:p-6 border border-gray-200 dark:border-slate-600 hover:shadow-lg hover:scale-[1.02] transition-all duration-300">
      <div className="flex items-start justify-between mb-3">
        <h4 className="font-bold text-gray-900 dark:text-white text-sm md:text-base pr-2">{title}</h4>
        <span className="text-xs font-semibold text-primary dark:text-primary-light bg-primary/10 dark:bg-primary/20 px-2 py-1 rounded-full whitespace-nowrap">
          {hours}
        </span>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">{institution}</p>
      <p className="text-xs text-gray-500 dark:text-gray-400">{year}</p>
    </div>
  )
}
