import { ResumenCards } from "@/app/dashboard/components/ResumenCards"
import { TabNav } from "@/app/dashboard/components/TabNav"
import data from "@/app/dashboard/data/dashboard.json"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white p-8">
      <div className="max-w-6xl mx-auto space-y-6">
        
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">Bienvenido Monitor</h1>
          <p className="text-zinc-400">
            Aquí puedes monitorear las actividades y el progreso de los aprendices. Utiliza las herramientas de análisis para obtener información detallada sobre el rendimiento y las áreas de mejora.
          </p>
        </div>
        
        <ResumenCards datos={data.ResumenCard} />
        
        <TabNav datosAvance={data.avance} />
        
      </div>
    </div>
  )
}