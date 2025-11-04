interface CongresoCardProps {
  title: string
  event: string
  role: string
  year: string
}

export function CongresoCard({ title, event, role, year }: CongresoCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-5 md:p-6 shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 border border-gray-200 dark:border-slate-700">
      <div className="flex items-start justify-between mb-3">
        <span className="text-xs font-bold text-secondary dark:text-primary-light">{year}</span>
        <span className="text-xs bg-secondary/10 dark:bg-secondary/20 text-secondary dark:text-primary-light px-2 py-1 rounded-full">
          {role}
        </span>
      </div>

      <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-sm md:text-base">{title}</h4>
      <p className="text-xs md:text-sm text-gray-600 dark:text-gray-300">{event}</p>
    </div>
  )
}
