import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, TrendingUp, AlertTriangle } from "lucide-react"

export function ResumenCards({ datos }: { datos: any }) {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      <Card className="bg-zinc-900/60 border-zinc-800">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-zinc-300">Total Aprendices</CardTitle>
          <Users className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-white">{datos.totalAprendices}</div>
          <p className="text-xs text-zinc-500 mt-1">Activos en el programa</p>
        </CardContent>
      </Card>
      
      <Card className="bg-zinc-900/60 border-zinc-800">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-zinc-300">Promedio General</CardTitle>
          <TrendingUp className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-green-500">{datos.promedioGeneral}%</div>
          <p className="text-xs text-zinc-500 mt-1">Activo promedio del grupo</p>
        </CardContent>
      </Card>

      <Card className="bg-zinc-900/60 border-zinc-800">
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <CardTitle className="text-sm font-medium text-zinc-300">En Riesgo</CardTitle>
          <AlertTriangle className="h-4 w-4 text-red-500" />
        </CardHeader>
        <CardContent>
          <div className="text-3xl font-bold text-red-500">{datos.enRiesgo}</div>
          <p className="text-xs text-zinc-500 mt-1">Requieren seguimiento especial</p>
        </CardContent>
      </Card>
    </div>
  )
}
