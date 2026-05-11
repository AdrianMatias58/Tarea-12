"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

const aprendices = [
        { 
        nombre: "Ana García López", 
        cargo: "Desarrolladora Jr", 
        area: "Tecnología", 
        prioridad: "Alta", 
        avanceG: 85, 
        avanceS: 90 
    },
    { 
        nombre: "Carlos Rodríguez Silva", 
        cargo: "Analista", 
        area: "Marketing", 
        prioridad: "Media", 
        avanceG: 72, 
        avanceS: 68 
    },
    { 
        nombre: "María Fernández Torres", 
        cargo: "Diseñadora", 
        area: "Creatividad", 
        prioridad: "Alta", 
        avanceG: 91, 
        avanceS: 95 
    },
    { 
        nombre: "Luis Martínez Ruiz", 
        cargo: "Contador Jr", 
        area: "Finanzas", 
        prioridad: "Baja", 
        avanceG: 58, 
        avanceS: 45 
    },
    { 
        nombre: "Sofía López Herrera", 
        cargo: "Asistente RH", 
        area: "Recursos Humanos", 
        prioridad: "Media", 
        avanceG: 79, 
        avanceS: 82 
    },
    { 
        nombre: "Biayo Jauregui", 
        cargo: "Software Developer", 
        area: "Tecnología", 
        prioridad: "Baja", 
        avanceG: 95, 
        avanceS: 98 
    },
    { 
        nombre: "Diego Arana Vizcarra", 
        cargo: "Soporte Técnico", 
        area: "IT Operations", 
        prioridad: "Alta", 
        avanceG: 40, 
        avanceS: 30 
    },
    { 
        nombre: "Valeria Poma Castro", 
        cargo: "UX Researcher", 
        area: "Creatividad", 
        prioridad: "Media", 
        avanceG: 65, 
        avanceS: 70 
    }
]

export function TablaAprendices() {
  return (
    <div className="rounded-xl border border-zinc-800 bg-[#121212] p-6 text-white">
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-zinc-100">Lista de Aprendices</h2>
        <p className="text-sm text-zinc-400">Seguimiento del progreso individual de cada estudiante</p>
      </div>

      <Table>
        <TableHeader className="hover:bg-transparent">
          <TableRow className="border-zinc-800 hover:bg-transparent">
            <TableHead className="text-zinc-300 font-medium">Nombre Completo</TableHead>
            <TableHead className="text-zinc-300 font-medium">Cargo</TableHead>
            <TableHead className="text-zinc-300 font-medium">Área</TableHead>
            <TableHead className="text-zinc-300 font-medium text-center">Prioridad</TableHead>
            <TableHead className="text-zinc-300 font-medium">Avance General</TableHead>
            <TableHead className="text-zinc-300 font-medium">Avance Semanal</TableHead>
            <TableHead className="text-right text-zinc-300 font-medium">Acciones</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {aprendices.map((a) => (
            <TableRow key={a.nombre} className="border-zinc-800 hover:bg-zinc-900/50 transition-colors">
              <TableCell className="font-medium text-zinc-100">{a.nombre}</TableCell>
              <TableCell className="text-zinc-300">{a.cargo}</TableCell>
              <TableCell className="text-zinc-300">{a.area}</TableCell>
              <TableCell className="text-center">
                <Badge className={`rounded-full px-3 py-0.5 border-none font-semibold ${
                  a.prioridad === "Alta" ? "bg-red-500/20 text-red-400" : 
                  a.prioridad === "Media" ? "bg-yellow-500/20 text-yellow-400" : "bg-emerald-500/20 text-emerald-400"
                }`}>
                  {a.prioridad}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Progress value={a.avanceG} className="h-1.5 w-24 bg-zinc-800" />
                  <span className="text-xs text-zinc-400 font-medium">{a.avanceG}%</span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Progress value={a.avanceS} className="h-1.5 w-24 bg-zinc-800" />
                  <span className="text-xs text-zinc-400 font-medium">{a.avanceS}%</span>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <Button variant="outline" size="sm" className="bg-transparent border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white rounded-lg h-8">
                  Ver Detalle
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}