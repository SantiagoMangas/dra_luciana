import type { LucideIcon } from "lucide-react"

interface FormacionCardProps {
  icon: LucideIcon
  title: string
  institution: string
  period: string
  detail: string
}

export function FormacionCard({ icon: Icon, title, institution, period, detail }: FormacionCardProps) {
  return (
    <div className="group bg-white dark:bg-slate-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-slate-700/50 hover:-translate-y-2">
      <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-primary/20 to-secondary/20 dark:from-primary/30 dark:to-secondary/30 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-6 h-6 md:w-7 md:h-7 text-primary dark:text-primary-light" />
      </div>

      <h4 className="font-bold text-gray-900 dark:text-white mb-2 text-lg md:text-xl">{title}</h4>
      <p className="text-sm text-primary dark:text-primary-light font-medium mb-2">{institution}</p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{period}</p>
      <p className="text-xs text-gray-500 dark:text-gray-500">{detail}</p>
    </div>
  )
}
