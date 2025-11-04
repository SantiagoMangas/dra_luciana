interface ProtocolGridProps {
  protocols: string[]
}

export function ProtocolGrid({ protocols }: ProtocolGridProps) {
  return (
    <div className="mt-12">
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        Protocolos de <span className="text-primary dark:text-primary-light">Investigación</span>
      </h3>
      <div className="bg-gradient-to-br from-primary/5 to-secondary/5 dark:from-primary/10 dark:to-secondary/10 rounded-2xl p-6 md:p-8 border border-primary/20 dark:border-primary/30">
        <p className="text-center text-gray-700 dark:text-gray-300 mb-4">
          Sub-investigadora en múltiples protocolos de investigación clínica
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {protocols.map((protocol, index) => (
            <div
              key={index}
              className="bg-white dark:bg-slate-800 rounded-lg px-3 py-2 text-center border border-gray-200 dark:border-slate-700 hover:border-primary dark:hover:border-primary-light hover:shadow-md transition-all duration-300"
            >
              <span className="text-xs font-mono text-gray-700 dark:text-gray-300">{protocol}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
