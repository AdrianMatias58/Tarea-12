"use client"

import { ChartContainer } from "@/components/ui/chart"
import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts"

export function DonaChart({ chartData }: { chartData: any[] }) {
  return (
    <div className="lg:col-span-2 flex flex-col items-center justify-center bg-zinc-900/50 rounded-xl border border-zinc-800/50 p-4">
      <ChartContainer config={{}} className="h-[200px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              stroke="none"
            >
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </ChartContainer>
      
      <div className="flex gap-4 mt-4 text-xs font-medium">
        <div className="flex items-center gap-1 text-[#22c55e]">
          <span className="w-2 h-2 rounded-full bg-[#22c55e]"></span> Completada
        </div>
        <div className="flex items-center gap-1 text-[#eab308]">
          <span className="w-2 h-2 rounded-full bg-[#eab308]"></span> Pendiente
        </div>
        <div className="flex items-center gap-1 text-[#ef4444]">
          <span className="w-2 h-2 rounded-full bg-[#ef4444]"></span> Incompleta
        </div>
      </div>
    </div>
  )
}
