"use client"

import React, { useRef, useState, useEffect } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"
import type { ReactNode } from "react"

interface ExpandableSectionProps {
  title: string
  subtitle?: string
  children: ReactNode
  isExpanded: boolean
  onToggle: () => void
  buttonRef: React.RefObject<HTMLButtonElement | null>
  totalCount?: number
  buttonLabel?: string
}

export function ExpandableSection({
  title,
  subtitle,
  children,
  isExpanded,
  onToggle,
  buttonRef,
  totalCount,
  buttonLabel = "Ver más",
}: ExpandableSectionProps) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [contentHeight, setContentHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      // Set initial height
      setContentHeight(contentRef.current.scrollHeight)
      
      // Update height when children change
      const resizeObserver = new ResizeObserver((entries) => {
        if (entries[0]) {
          setContentHeight(entries[0].contentRect.height)
        }
      })
      
      resizeObserver.observe(contentRef.current)
      return () => resizeObserver.disconnect()
    }
  }, [children])

  return (
    <div className="overflow-hidden">
      {title && (
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          {title}
          {subtitle && <span className="text-primary dark:text-primary-light"> {subtitle}</span>}
        </h3>
      )}

      <div 
        className="transition-all duration-300 ease-in-out overflow-hidden"
        style={{
          maxHeight: isExpanded ? `${contentHeight}px` : '0',
          opacity: isExpanded ? 1 : 0,
        }}
      >
        <div ref={contentRef} className="pt-2">
          {children}
        </div>
      </div>

      {React.Children.count(children) > 0 && (
        <div className="text-center mt-6">
          <button
            ref={buttonRef}
            onClick={onToggle}
            className="inline-flex items-center gap-2 px-6 py-2 bg-white dark:bg-slate-800 text-primary dark:text-primary-light font-medium rounded-lg hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors duration-200 border border-gray-200 dark:border-slate-700"
          >
            {isExpanded ? (
              <>
                Ver menos
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                {buttonLabel}
                {totalCount && ` (${totalCount})`}
                <ChevronDown className="w-4 h-4" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  )
}
