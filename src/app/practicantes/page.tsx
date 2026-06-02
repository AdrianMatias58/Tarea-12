import React from "react"
import "@/app/globals.css"
import { Inter } from 'next/font/google'
import { Button } from "./components/button"
import { UserPlus, ArrowLeft, Star, ClipboardList, Paperclip, BarChart3, Link, Plus, Calendar, X} from "lucide-react"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const inter = Inter({ subsets: ['latin'] })

export default function PracticantesPage() {

  const estilos = {
    contenedor: "flex-1 space-y-4 p-8 pt-6 bg-[#020817] min-h-screen antialiased font-sans",
    header: "flex items-center justify-between",
    titulo: "text-3xl font-bold tracking-tight text-white",
    tituloSecundario: "text-lg font-semibold flex items-center gap-2 mb-2",
    subtitulo: "text-sm text-slate-400 font-medium",
    boton: "bg-white text-slate-950 hover:bg-slate-200 font-bold px-6 py-2 rounded-md flex items-center shadow-sm",
    separador: "h-[1px] w-full bg-slate-800 my-6",
    tablaContenedor: "rounded-md border border-slate-800 bg-[#020817] overflow-hidden",
    textoInformativo: "text-sm text-slate-400 mb-6",
    cardStats: "bg-[#111827] border-slate-800 p-4 rounded-xl",
  }

  return (
    <div className={estilos.contenedor}>

      <div className={estilos.header}>
        <div>
          <h1 className={estilos.titulo}>
            Monitoreo de Practicantes
          </h1>
          <p className={estilos.subtitulo}>
            En esta sección puedes gestionar y monitorear a los practicantes asignados a tu curso.
          </p>
        </div>

        <Button className={estilos.boton}>
          <UserPlus className="mr-2 h-4 w-4" />
          Agregar Practicante
        </Button>
      </div>

      <div className={estilos.separador} />

      <div className={estilos.tablaContenedor}>
        <Table>
          <TableHeader>
            <TableRow className="border-slate-800 hover:bg-transparent">
              <TableHead className="text-slate-400">Nombres</TableHead>
              <TableHead className="text-slate-400">Apellidos</TableHead>
              <TableHead className="text-slate-400">Fecha Inicio</TableHead>
              <TableHead className="text-slate-400 text-center">Tareas Asignadas</TableHead>
              <TableHead className="text-slate-400">% Cumplimiento</TableHead>
              <TableHead className="text-slate-400 text-right">Acciones</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="border-slate-800 hover:bg-slate-900/50">
              <TableCell className="font-bold text-white">Juan Carlos</TableCell>
              <TableCell className="text-white">Pérez García</TableCell>
              <TableCell className="text-white">14/1/2024</TableCell>
              <TableCell className="text-center">
                <Badge variant="secondary" className="bg-slate-800 text-slate-300">12</Badge>
              </TableCell>
              <TableCell className="w-[250px]">
                <div className="flex items-center gap-3">
                  <Progress value={85} className="h-2 bg-slate-800" />
                  <span className="text-xs font-bold text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded-full border border-yellow-500/20">
                    85%
                  </span>
                </div>
              </TableCell>
              <TableCell className="text-right flex justify-end gap-2">
                <Button variant="outline" size="sm" className="bg-blue-600 hover:bg-blue-700 text-white border-none h-8">
                  <ArrowLeft className="mr-2 h-3 w-3" /> Volver
                </Button>
                <Button variant="outline" size="sm" className="bg-slate-800 hover:bg-slate-700 text-white border-slate-700 h-8">
                  <Star className="mr-2 h-3 w-3" /> Calificar
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <section className="mt-12">
        <div className={estilos.tituloSecundario}>
          <ClipboardList className="h-5 w-5 text-white" />
          <span className="text-white">Estás asignando tareas para <span className="text-blue-500">Juan Carlos Pérez García</span></span>
        </div>
        <p className={estilos.textoInformativo}>
          Aquí puedes asignar nuevas tareas al practicante seleccionado. Asegúrate de que las tareas sean claras y alcanzables.
        </p>

        <Card className="bg-[#0b1120] border-slate-800 p-6">
          <CardContent className="p-0 space-y-6">
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm">
                <div className="flex items-center gap-2 text-white font-medium">
                  <BarChart3 className="h-4 w-4" /> Avance PEA - Bloque - Aprendiz
                </div>
                <span className="font-bold text-white">75.5%</span>
              </div>
              <Progress value={75.5} className="h-2 bg-slate-800 [&>div]:bg-emerald-500" />
              <p className="text-xs text-slate-500">PEA</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className={estilos.cardStats}>
                <div className="flex items-center gap-2 text-white text-sm font-semibold mb-3">
                  <ClipboardList className="h-4 w-4 text-slate-400" /> Tareas
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-slate-400">Cumplidas</p>
                  <p className="text-xl font-bold text-white">8 / 12</p>
                  <p className="text-xs text-emerald-500 font-medium">66.7% de avance</p>
                </div>
              </div>
              <div className={estilos.cardStats}>
                <div className="flex items-center gap-2 text-white text-sm font-semibold mb-3">
                  <Paperclip className="h-4 w-4 text-slate-400" /> Operaciones
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-slate-400">Cumplidas</p>
                  <p className="text-xl font-bold text-white">15 / 18</p>
                  <p className="text-xs text-emerald-500 font-medium">83.3% de avance</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      <section className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="h-6 w-6 text-white" />
            <h2 className="text-xl font-bold text-white">Lista de Tareas Asignadas</h2>
          </div>

          <Dialog>
            <DialogTrigger asChild>
              <Button className="bg-white text-slate-950 hover:bg-slate-200 font-bold px-4 h-9">
                <Plus className="mr-2 h-4 w-4" /> Asignar
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[450px] bg-[#1e293b] border-slate-700 text-white rounded-2xl p-6">
              <DialogHeader>
                <DialogTitle className="text-white flex items-center gap-2 border-b border-slate-700 pb-4 mb-4">
                  Asignar Tareas
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-5">
                <h3 className="text-center text-lg font-semibold">Asignar Nueva Tarea</h3>

                <div className="space-y-2">
                  <Label htmlFor="titulo" className="text-slate-300">Título de la Tarea</Label>
                  <Input 
                    id="titulo" 
                    placeholder="Ingrese el título de la tarea" 
                    className="bg-[#0f172a] border-slate-600 focus:border-blue-500 rounded-xl h-11 text-white"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="descripcion" className="text-slate-300">Descripción</Label>
                  <Textarea 
                    id="descripcion" 
                    placeholder="Describa la tarea a realizar" 
                    className="bg-[#0f172a] border-slate-600 focus:border-blue-500 rounded-xl min-h-[100px] text-white"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label className="text-slate-300">Fecha de Entrega</Label>
                    <Input 
                      type="date" 
                      className="bg-[#0f172a] border-slate-600 rounded-xl h-11 text-slate-300"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label className="text-slate-300">Prioridad</Label>
                    <Select>
                      <SelectTrigger className="bg-[#0f172a] border-slate-600 rounded-xl h-11 text-white">
                        <SelectValue placeholder="Seleccionar" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1e293b] border-slate-700 text-white">
                        <SelectItem value="alta">Alta</SelectItem>
                        <SelectItem value="media">Media</SelectItem>
                        <SelectItem value="baja">Baja</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <Button className="w-full bg-[#34d399] hover:bg-[#10b981] text-slate-950 font-bold h-12 rounded-xl mt-4">
                  <Plus className="mr-2 h-5 w-5" /> Asignar Tarea
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="rounded-xl border border-slate-800 bg-[#0b1120] overflow-hidden">
          <Table>
            <TableHeader className="bg-slate-900/30">
              <TableRow className="border-slate-800 hover:bg-transparent">
                <TableHead className="text-slate-400 font-bold">Tarea</TableHead>
                <TableHead className="text-slate-400 font-bold">Fecha Inicio</TableHead>
                <TableHead className="text-slate-400 font-bold">Fecha Entrega</TableHead>
                <TableHead className="text-slate-400 font-bold text-center">Estado</TableHead>
                <TableHead className="text-slate-400 font-bold text-center">Prioridad</TableHead>
                <TableHead className="text-slate-400 font-bold text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-slate-800 hover:bg-slate-900/50">
                <TableCell className="text-white font-medium">Análisis de requerimientos</TableCell>
                <TableCell className="text-white">14/1/2024</TableCell>
                <TableCell className="text-white">21/1/2024</TableCell>
                <TableCell className="text-center">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold border border-blue-500/50 text-blue-400 bg-blue-500/10">En progreso</span>
                </TableCell>
                <TableCell className="text-center">
                  <span className="px-3 py-1 rounded-md text-[10px] font-bold border border-red-500/50 text-red-400 bg-red-500/10">Alta</span>
                </TableCell>
                <TableCell className="text-right">
                  <Button variant="outline" size="sm" className="h-8 border-slate-700 text-white bg-slate-800/50 hover:bg-slate-700">
                    <Link className="mr-2 h-3 w-3" /> Vincular PEA
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </section>
    </div>
  )
}