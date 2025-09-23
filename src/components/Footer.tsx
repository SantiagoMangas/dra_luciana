import { Heart, Mail, Phone, MapPin, Clock, Shield, Calendar } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-secondary py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-sidebar-foreground mb-4">Dra. Luciana Mangas</h3>
            <p className="leading-relaxed">
              Especialista en Endocrinología comprometida con brindar atención médica de excelencia y cuidado
              personalizado.
            </p>
          </div>

          {/* Información de Contacto */}
          <div>
            <h4 className="font-semibold text-slate-800 mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-slate-600">
                <Phone className="w-4 h-4 text-primary" />
                <div>
                  <div className="font-medium">+54 11 3770-9044</div>
                  <div className="text-sm text-slate-500">Consultorio</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <Mail className="w-4 h-4 text-primary" />
                <div>
                  <div className="font-medium">dramangaswillging@gmail.com</div>
                  <div className="text-sm text-slate-500">Consultas y turnos</div>
                </div>
              </div>
              <div className="flex items-center gap-3 text-slate-600">
                <MapPin className="w-4 h-4 text-primary" />
                <div>
                  <div className="font-medium">Av. Santa Fe 1234, Piso 5°</div>
                  <div className="text-sm text-slate-500">Recoleta, Buenos Aires</div>
                </div>
              </div>
            </div>
          </div>

          {/* Horarios y Servicios */}
          <div>
            <h4 className="font-semibold text-slate-800 mb-4">Atención</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-slate-600">
                <Clock className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <div className="font-medium text-sm">Lunes a Viernes</div>
                  <div className="text-sm text-slate-500">9:00 - 18:00 hs</div>
                </div>
              </div>
              <div className="flex items-start gap-3 text-slate-600">
                <Calendar className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <div className="font-medium text-sm">Sábados</div>
                  <div className="text-sm text-slate-500">9:00 - 13:00 hs</div>
                </div>
              </div>
              <div className="flex items-start gap-3 text-slate-600">
                <Shield className="w-4 h-4 text-primary mt-0.5" />
                <div>
                  <div className="font-medium text-sm">Obras Sociales</div>
                  <div className="text-sm text-slate-500">Consultar cobertura</div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="border-t border-sidebar-border mt-8 pt-8 text-center">
          <p className="text-sidebar-foreground/60 flex items-center justify-center gap-2">
            Hecho con <Heart className="w-4 h-4 text-red-500" /> para la salud de mis pacientes
          </p>
          <p className="text-sidebar-foreground/60 mt-2">© 2024 Dra. Luciana Mangas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
