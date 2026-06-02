import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { TrendingUp, AlertTriangle } from "lucide-react"

export function Cards() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card className="bg-[#1c1c1c] border-zinc-800 text-white">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 text-blue-400 mb-1">
            <TrendingUp className="h-4 w-4" />
            <CardTitle className="text-sm font-medium">Avance General</CardTitle>
          </div>
          <CardDescription className="text-zinc-500 text-xs">Progreso semanal y mensual</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-zinc-400">Avance Semanal</span>
              <span className="text-zinc-200">78%</span>
            </div>
            <Progress value={78} className="h-1.5 bg-zinc-800" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-zinc-400">Avance Mensual</span>
              <span className="text-zinc-200">65%</span>
            </div>
            <Progress value={65} className="h-1.5 bg-zinc-800" />
          </div>
        </CardContent>
      </Card>
      
      <Card className="bg-[#1c1c1c] border-zinc-800 text-white">
        <CardHeader className="pb-2">
          <div className="flex items-center gap-2 text-red-500 mb-1">
            <AlertTriangle className="h-4 w-4" />
            <CardTitle className="text-sm font-medium">Tareas No Cumplidas</CardTitle>
          </div>
          <CardDescription className="text-zinc-500 text-xs">Porcentaje de incumplimiento</CardDescription>
        </CardHeader>
        <CardContent className="space-y-5">
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-zinc-400">Incumplimiento Semanal</span>
              <span className="text-red-400 font-bold">15%</span>
            </div>
            <Progress value={15} className="h-1.5 bg-zinc-800" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="text-zinc-400">Incumplimiento Mensual</span>
              <span className="text-red-400 font-bold">22%</span>
            </div>
            <Progress value={22} className="h-1.5 bg-zinc-800" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}