import { Briefcase } from "lucide-react"

interface ExperienciaCardProps {
  position: string
  place: string
  period: string
}

export function ExperienciaCard({ position, place, period }: ExperienciaCardProps) {
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl p-5 md:p-6 shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 border border-gray-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary-light">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
        <h4 className="font-bold text-gray-900 dark:text-white text-base md:text-lg">{position}</h4>
        <span className="text-sm font-medium text-primary dark:text-primary-light bg-primary/10 dark:bg-primary/20 px-3 py-1 rounded-full w-fit">
          {period}
        </span>
      </div>

      <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 flex items-center gap-2">
        <Briefcase className="w-4 h-4 text-primary dark:text-primary-light flex-shrink-0" />
        {place}
      </p>
    </div>
  )
}
