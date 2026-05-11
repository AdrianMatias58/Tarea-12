"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, CheckCircle2, Clock, XCircle, LayoutGrid } from "lucide-react"
import { DonaChart, ChartData } from "@/app/dashboard/components/DonaChart"

export interface AvanceData {
  tareasTotales: number;
  tareasCompletadas: number;
  tareasPendientes: number;
  tareasIncompletas: number;
  chartData: ChartData[];
}

export interface AvancePeriodos {
  semana: AvanceData;
  mes: AvanceData;
}

export function TabNav({ datosAvance }: { datosAvance: AvancePeriodos }) {
  const [periodo, setPeriodo] = useState<"semana" | "mes">("semana")
  const avanceActual = datosAvance[periodo]

  return (
    <Card className="bg-[#0f0f11] border-zinc-800 p-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h3 className="text-lg font-medium text-white flex items-center gap-2">
            <LayoutGrid className="h-5 w-5 text-blue-500" />
            {periodo === "semana" ? "Avance Semanal" : "Avance Mensual"}
          </h3>
          <p className="text-sm text-zinc-400 mt-1">Monitorea las actividades y tareas asignadas a los aprendices.</p>
        </div>

        <Tabs
          value={periodo}
          className="w-auto"
          onValueChange={(valor) => setPeriodo(valor as "semana" | "mes")}
        >
          <TabsList className="flex gap-3 bg-transparent p-0 h-auto">
            <TabsTrigger
              value="semana"
              className="rounded-md border border-zinc-800 bg-[#18181b] data-[state=active]:bg-zinc-200 data-[state=active]:text-zinc-900 data-[state=active]:border-transparent text-xs text-zinc-400 px-4 py-2 transition-all shadow-sm"
            >
              <Calendar className="h-3 w-3 mr-2" /> Semana
            </TabsTrigger>
            <TabsTrigger
              value="mes"
              className="rounded-md border border-zinc-800 bg-[#18181b] data-[state=active]:bg-zinc-200 data-[state=active]:text-zinc-900 data-[state=active]:border-transparent text-xs text-zinc-400 px-4 py-2 transition-all shadow-sm"
            >
              <Calendar className="h-3 w-3 mr-2" /> Mes
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3 grid grid-cols-2 gap-4">
          <Card className="bg-zinc-900/50 border-zinc-800/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-zinc-300">Tareas Totales</CardTitle>
              <LayoutGrid className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-1 text-center">{avanceActual.tareasTotales}</div>
              <p className="text-xs text-zinc-500">Total de tareas en el periodo</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/50 border-zinc-800/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-zinc-300">Tareas Completadas</CardTitle>
              <CheckCircle2 className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-1 text-center">{avanceActual.tareasCompletadas}</div>
              <p className="text-xs text-zinc-500">Tareas completadas en el periodo</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/50 border-zinc-800/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-zinc-300">Tareas Pendientes</CardTitle>
              <Clock className="h-4 w-4 text-yellow-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-1 text-center">{avanceActual.tareasPendientes}</div>
              <p className="text-xs text-zinc-500">Tareas pendientes en el periodo</p>
            </CardContent>
          </Card>

          <Card className="bg-zinc-900/50 border-zinc-800/50">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-zinc-300">Tareas Incompletas</CardTitle>
              <XCircle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-1 text-center">{avanceActual.tareasIncompletas}</div>
              <p className="text-xs text-zinc-500">Tareas incompletas en el periodo</p>
            </CardContent>
          </Card>
        </div>

        <DonaChart chartData={avanceActual.chartData} />
      </div>
    </Card>
  )
}
