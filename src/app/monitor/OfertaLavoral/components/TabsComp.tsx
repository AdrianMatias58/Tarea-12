import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

type props = {
  opcion: string[];
  ChangeConten: (valor:string) => void;
};
export default function TabOpcion(Props: props) {
  const { opcion, ChangeConten } = Props;
  return (
    <div>
      <Tabs defaultValue="1" onValueChange={(valor)=> ChangeConten(valor)}
      >
        <TabsList className="bg-transparent gap-2 p-0 h-auto">
          {opcion.map((item, index) => (
            <TabsTrigger
              key={index}
              value={`${index + 1}`}
              className="
                border border-zinc-600 bg-transparent text-zinc-300 text-sm
                data-[state=active]:bg-zinc-700 data-[state=active]:text-white data-[state=active]:border-zinc-500
                hover:bg-zinc-800 hover:text-white
                rounded-md px-4 py-1.5 transition-colors
              "
            >
              {`${item} - ${index}`}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>
    </div>
  );
}
