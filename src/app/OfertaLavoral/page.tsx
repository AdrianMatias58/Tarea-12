'use client'
import { CrearOferta, MostrarOfertas } from './components/ConenidoTab'
import { Separator } from '@/components/ui/separator'
import TabOpcion from './components/TabsComp'
import { useState } from 'react';



export default function Page() {
  //manejo de estado
  const [tabSeleccionado, setTabSelectcionado] = useState("1");
  return (
    <div className="min-h-screen bg-zinc-900 p-8">
      <h1 className="text-2xl font-bold text-white mb-1">Ofertas Laborales</h1>
      <h3 className="text-sm text-zinc-400 mb-4">
        descripcion de lo que hace en el apartado
      </h3>
      <Separator className="bg-zinc-700 mb-4" />
      <TabOpcion 
      opcion={['Mirar Ofertas', 'Crear Ofertas']}
      ChangeConten={(valor)=>setTabSelectcionado(valor)}
      />
      {
        tabSeleccionado === '1' && (
          <MostrarOfertas/>
        )
      }
      {
        tabSeleccionado === '2' && (
          <CrearOferta/>
        )
      }
    </div>
  )
}
