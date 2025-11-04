"use client"

import type { LucideIcon } from "lucide-react"

interface TabButtonProps {
  icon: LucideIcon
  label: string
  isActive: boolean
  onClick: () => void
}

export function TabButton({ icon: Icon, label, isActive, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 md:px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-sm md:text-base ${
        isActive
          ? "bg-gradient-to-r from-primary to-secondary text-white shadow-lg scale-105"
          : "bg-white dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-700"
      }`}
    >
      <span className="flex items-center gap-2">
        <Icon className="w-4 h-4 md:w-5 md:h-5" />
        <span>{label}</span>
      </span>
    </button>
  )
}
