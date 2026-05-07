import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Checkbox } from "./ui/checkbox"

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <h1 className="text-center font-bold text-4xl">
        Bienvenido
      </h1>
      <h2 className="text-base"> Inicie sesion para continuar con tu cuneta de senati</h2>
      <Card>
        <CardContent>
          <form>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="nombreUsuario">Nombre de usuario</FieldLabel>
                <Input
                  id="nombreUsuario"
                  type="nombreUsuario"
                  placeholder="123456@senati.pe"
                  required
                />
              </Field>
              <Field>
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Contraseña</FieldLabel>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Olvidaste tu contraseña?
                  </a>
                </div>
                <Input id="password" type="password" required />
              </Field>
              <Field orientation={"horizontal"}>
                <Checkbox
                id="recordar"
                name="cheackBoxLogin"
                defaultChecked
                />
                <FieldLabel htmlFor="terms-checkbox-2">
                  Recordarme
                </FieldLabel>
              </Field>
              <Field>
                <Button type="submit">Inisiar Sesion</Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
