import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import React from "react";

export function CrearOferta() {
  return (
    <div className="min-h-screen bg-zinc-950 p-8">
      <h1 className="text-2xl font-bold text-white mb-1">
        Crear Nueva Oferta Laboral
      </h1>
      <h3 className="text-sm text-zinc-400 mb-6">
        Completar el formulario para crear una nueva oferta laboral. Asegurate
        poner toda la informacion para que los aprendices puedan postular
      </h3>

      <Card className="bg-zinc-900 border-zinc-800 p-6">
        <form className="grid grid-cols-2 gap-x-6 gap-y-4">
          {/* Titulo de oferta */}
          <div className="flex flex-col gap-1.5">
            <Label className="text-xs font-semibold uppercase text-zinc-300">
              Titulo de oferta <span className="text-red-500">*</span>
            </Label>
            <Input className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-red-500" />
          </div>

          {/* Direccion */}
          <div className="flex flex-col gap-1.5">
            <Label className="text-xs font-semibold uppercase text-zinc-300">
              Dirección <span className="text-red-500">*</span>
            </Label>
            <Input className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-red-500" />
          </div>

          {/* Descripcion del Puesto */}
          <div className="flex flex-col gap-1.5">
            <Label className="text-xs font-semibold uppercase text-zinc-300">
              Descripcion del Puesto <span className="text-red-500">*</span>
            </Label>
            <Textarea className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-red-500 min-h-[110px] resize-none" />
          </div>

          {/* Distrito */}
          <div className="flex flex-col gap-1.5">
            <Label className="text-xs font-semibold uppercase text-zinc-300">
              Distrito <span className="text-red-500">*</span>
            </Label>
            <Select>
              <SelectTrigger className="bg-zinc-800 border-zinc-700 text-zinc-100 focus:ring-red-500 w-full">
                <SelectValue
                  placeholder="Seleccione un distrito"
                  className="text-zinc-500"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Distritos</SelectLabel>
                  {/* Poner todos los distritos en la db */}
                  <SelectItem value="1">-----------</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          {/* Empresa + Puesto */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-1.5 flex-1">
              <Label className="text-xs font-semibold uppercase text-zinc-300">
                Empresa <span className="text-red-500">*</span>
              </Label>
              <Input className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-red-500" />
            </div>
            <div className="flex flex-col gap-1.5 flex-1">
              <Label className="text-xs font-semibold uppercase text-zinc-300">
                Puesto <span className="text-red-500">*</span>
              </Label>
              <Input className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-red-500" />
            </div>
          </div>

          {/* Requerimientos (ocupa toda la altura de las siguientes 3 filas) */}
          <div className="flex flex-col gap-1.5 row-span-3">
            <Label className="text-xs font-semibold uppercase text-zinc-300">
              Requerimientos <span className="text-red-500">*</span>
            </Label>
            <div className="flex gap-2">
              <Input className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-red-500 flex-1" />
              <Button
                type="button"
                className="bg-zinc-700 hover:bg-zinc-600 border border-zinc-600 text-white px-3"
              >
                +
              </Button>
            </div>
            {/* Area donde se guardaran los requerimientos */}
            <div className="flex-1 rounded-md border border-dashed border-zinc-700 bg-zinc-800/40 p-3 min-h-[120px]"></div>
          </div>

          {/* Correo de Contacto */}
          <div className="flex flex-col gap-1.5">
            <Label className="text-xs font-semibold uppercase text-zinc-300">
              Correo de Contacto <span className="text-red-500">*</span>
            </Label>
            <Input className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-red-500" />
          </div>

          {/* Fecha + Numero de vacantes */}
          <div className="flex gap-4">
            <div className="flex flex-col gap-1.5 flex-1">
              <Label className="text-xs font-semibold uppercase text-zinc-300">
                Fecha Estimada de Contratación{" "}
                <span className="text-red-500">*</span>
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="w-full justify-start bg-zinc-800 border border-zinc-700 text-zinc-500 hover:bg-zinc-700 hover:text-zinc-100 font-normal">
                    Fecha
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 bg-zinc-800 border-zinc-700">
                  <Calendar mode="single" />
                </PopoverContent>
              </Popover>
            </div>

            <div className="flex flex-col gap-1.5 flex-1">
              <Label className="text-xs font-semibold uppercase text-zinc-300">
                Numero de Vacantes <span className="text-red-500">*</span>
              </Label>
              <Input
                type="number"
                className="bg-zinc-800 border-zinc-700 text-zinc-100 placeholder:text-zinc-500 focus-visible:ring-red-500"
              />
            </div>
          </div>

          <Separator className="col-span-2 bg-zinc-800 my-2" />

          {/* Submit */}
          <div className="col-span-2 flex justify-end">
            <Button
              type="submit"
              className="bg-zinc-200 hover:bg-white text-zinc-900 font-semibold px-8"
            >
              Crear Oferta
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export function MostrarOfertas() {
  return (
    <div className="min-h-screen bg-zinc-950 p-8">
      <h1 className="text-xl font-bold text-white mb-1">
        Ofertas Laborales Disponibles
      </h1>
      <h3 className="text-sm text-zinc-400 mb-6">
        Aqui puedes ver, editar o eliminar las ofertas laborales, para los
        estudiantes
      </h3>

      <Table className="w-full">
        <TableHeader>
          <TableRow className="border-b border-zinc-800 hover:bg-transparent">
            <TableHead className="text-zinc-400 font-semibold text-xs uppercase tracking-wide">
              Empresa
            </TableHead>
            <TableHead className="text-zinc-400 font-semibold text-xs uppercase tracking-wide">
              Titulo
            </TableHead>
            <TableHead className="text-zinc-400 font-semibold text-xs uppercase tracking-wide">
              Puesto
            </TableHead>
            <TableHead className="text-zinc-400 font-semibold text-xs uppercase tracking-wide">
              Fecha de Publicacion
            </TableHead>
            <TableHead className="text-zinc-400 font-semibold text-xs uppercase tracking-wide">
              Vacantes
            </TableHead>
            <TableHead className="text-zinc-400 font-semibold text-xs uppercase tracking-wide">
              Estado
            </TableHead>
            <TableHead className="text-zinc-400 font-semibold text-xs uppercase tracking-wide text-right">
              Acciones
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {/*iniciar bucle */}
          <TableRow className="border-b border-zinc-800/60 hover:bg-zinc-800/30 transition-colors">
            <TableCell className="text-zinc-100 font-medium">
              -----------
            </TableCell>
            <TableCell className="text-zinc-100">-----------</TableCell>
            <TableCell className="text-zinc-300">-----------</TableCell>
            <TableCell className="text-zinc-400 text-sm">-----------</TableCell>
            <TableCell className="text-zinc-300 text-center">
              -----------
            </TableCell>

            <TableCell>
              <span
                className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold
            border-zinc-600 text-zinc-400"
              >
                -----------
              </span>
            </TableCell>

            <TableCell className="text-right">
              <div className="inline-flex items-center gap-1">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700"
                >
                Show
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-700"
                >
                  edit
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 text-zinc-400 hover:text-red-400 hover:bg-red-950/40"
                >
                  delete
                </Button>
              </div>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
