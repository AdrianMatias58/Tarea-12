import { TablaAprendices } from "./components/tabla-aprendices";
import { Cards } from "./components/cards"; 
import { ResumenCards } from "@/app/monitor/dashboard/components/ResumenCards"
import { TabNav } from "@/app/monitor/dashboard/components/TabNav"
import data from "./data/dashboard.json";

export default function DashboardPage() {
  return (
    <div className="dark bg-[#09090b] min-h-screen text-white p-8">
      <div className="max-w-6xl mx-auto space-y-10">
        
        {/* --- Sección Superior (Originalmente segunda) --- */}
        <header className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight text-white">
            Bienvenido Monitor
          </h1>
          <p className="text-zinc-400 max-w-3xl">
            Aquí puedes monitorear las actividades y el progreso de los aprendices. 
            Utiliza las herramientas de análisis para obtener información detallada sobre 
            el rendimiento y las áreas de mejora.
          </p>
        </header>

        <ResumenCards datos={data.ResumenCard} />

        <TabNav datosAvance={data.avance} />

        {/* --- Sección Inferior (Originalmente primera) --- */}
        <hr className="border-zinc-800" />

        <section>
          <Cards />
        </section>

        <section className="animate-fade-in duration-500">
          <TablaAprendices />
        </section>

      </div>
    </div>
  );
}