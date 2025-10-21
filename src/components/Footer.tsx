import { Heart, Mail, Phone, MapPin, Clock, Shield, Calendar } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary dark:bg-slate-700 py-12 px-4 transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Columna 1 - Información Principal */}
          <div className="md:pr-8">
            <h3 className="text-2xl font-bold text-sidebar-foreground dark:text-white mb-4 bg-gradient-to-r from-primary to-primary-light bg-clip-text text-transparent">
              Dra. Luciana Mangas
            </h3>
            <p className="text-slate-600 dark:text-gray-300 leading-relaxed text-sm">
              Especialista en Endocrinología comprometida con brindar atención médica de excelencia y cuidado
              personalizado.
            </p>
          </div>

          {/* Columna 2 - Contacto */}
          <div>
            <h4 className="font-semibold text-slate-800 dark:text-gray-100 mb-6 text-lg flex items-center justify-center md:justify-start gap-2">
              <div className="w-8 h-px bg-gradient-to-r from-primary to-transparent"></div>
              Contacto
              <div className="w-8 h-px bg-gradient-to-l from-primary to-transparent"></div>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start justify-center md:justify-start gap-3 text-slate-600 dark:text-gray-300 group hover:text-primary dark:hover:text-primary-light transition-colors duration-200">
                <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors duration-200">
                  <Phone className="w-4 h-4 text-primary dark:text-primary-light flex-shrink-0" />
                </div>
                <div>
                  <div className="font-medium text-sm">+54 11 3770-9044</div>
                  <div className="text-xs text-slate-500 dark:text-gray-400">Consultorio</div>
                </div>
              </div>

              <div className="flex items-start justify-center md:justify-start gap-3 text-slate-600 dark:text-gray-300 group hover:text-primary dark:hover:text-primary-light transition-colors duration-200">
                <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors duration-200">
                  <Mail className="w-4 h-4 text-primary dark:text-primary-light flex-shrink-0" />
                </div>
                <div>
                  <div className="font-medium text-sm break-all">dramangaswillging@gmail.com</div>
                  <div className="text-xs text-slate-500 dark:text-gray-400">Consultas y turnos</div>
                </div>
              </div>

              <div className="flex items-start justify-center md:justify-start gap-3 text-slate-600 dark:text-gray-300 group hover:text-primary dark:hover:text-primary-light transition-colors duration-200">
                <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors duration-200">
                  <MapPin className="w-4 h-4 text-primary dark:text-primary-light flex-shrink-0" />
                </div>
                <div>
                  <div className="font-medium text-sm">Av. Santa Fe 1234, Piso 5°</div>
                  <div className="text-xs text-slate-500 dark:text-gray-400">Recoleta, Buenos Aires</div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna 3 - Horarios de Atención */}
          <div>
            <h4 className="font-semibold text-slate-800 dark:text-gray-100 mb-6 text-lg flex items-center justify-center md:justify-start gap-2">
              <div className="w-8 h-px bg-gradient-to-r from-primary to-transparent"></div>
              Atención
              <div className="w-8 h-px bg-gradient-to-l from-primary to-transparent"></div>
            </h4>
            <div className="space-y-4">
              <div className="flex items-start justify-center md:justify-start gap-3 text-slate-600 dark:text-gray-300 group hover:text-primary dark:hover:text-primary-light transition-colors duration-200">
                <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors duration-200">
                  <Clock className="w-4 h-4 text-primary dark:text-primary-light flex-shrink-0" />
                </div>
                <div>
                  <div className="font-medium text-sm">Lunes a Viernes</div>
                  <div className="text-xs text-slate-500 dark:text-gray-400">9:00 - 18:00 hs</div>
                </div>
              </div>

              <div className="flex items-start justify-center md:justify-start gap-3 text-slate-600 dark:text-gray-300 group hover:text-primary dark:hover:text-primary-light transition-colors duration-200">
                <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors duration-200">
                  <Calendar className="w-4 h-4 text-primary dark:text-primary-light flex-shrink-0" />
                </div>
                <div>
                  <div className="font-medium text-sm">Sábados</div>
                  <div className="text-xs text-slate-500 dark:text-gray-400">9:00 - 13:00 hs</div>
                </div>
              </div>

              <div className="flex items-start justify-center md:justify-start gap-3 text-slate-600 dark:text-gray-300 group hover:text-primary dark:hover:text-primary-light transition-colors duration-200">
                <div className="p-2 rounded-lg bg-primary/10 dark:bg-primary/20 group-hover:bg-primary/20 dark:group-hover:bg-primary/30 transition-colors duration-200">
                  <Shield className="w-4 h-4 text-primary dark:text-primary-light flex-shrink-0" />
                </div>
                <div>
                  <div className="font-medium text-sm">Obras Sociales</div>
                  <div className="text-xs text-slate-500 dark:text-gray-400">Consultar cobertura</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria decorativa y footer final */}
        <div className="relative mt-10 pt-8">
          {/* Línea con gradiente */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-slate-600 to-transparent"></div>
          
          {/* Elementos decorativos */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="w-3 h-3 bg-gradient-to-br from-primary to-secondary dark:from-primary-light dark:to-secondary rounded-full shadow-lg"></div>
          </div>
          
          <div className="text-center space-y-3">
            <p className="text-slate-600 dark:text-gray-300 flex items-center justify-center gap-2 text-sm group">
              Hecho con 
              <Heart className="w-4 h-4 text-red-500 fill-red-500 group-hover:animate-pulse transition-all duration-300" /> 
              para la salud de mis pacientes
            </p>
            <div className="flex items-center justify-center space-x-2 text-xs text-slate-500 dark:text-gray-400">
              <div className="w-4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
              <span className="px-3">© 2024 Dra. Luciana Mangas. Todos los derechos reservados.</span>
              <div className="w-4 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}