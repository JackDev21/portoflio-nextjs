"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { ReloadIcon } from "@radix-ui/react-icons"
import axios from "axios"
import { X } from "lucide-react"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { ContactContext } from "@/app/context/ContactContext"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const schema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  email: z.string().email("Email inválido"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
})

type FormValues = z.infer<typeof schema>

export function ContactForm() {
  const { toast } = useToast()
  const { showContact, setShowContact } = useContext(ContactContext)
  const [isLoading, setIsLoading] = useState(false)

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(data: FormValues) {
    setIsLoading(true)
    try {
      const response = await axios.post("/api/contact", data)
      const result = response.data

      if (result.success) {
        toast({
          title: "Mensaje enviado",
          description: "Gracias por contactarnos. Te responderemos pronto.",
          className: "bg-green-500 text-white",
        })
        form.reset()
        setShowContact(false)
      } else {
        toast({
          title: "Error",
          description: result.error || "Hubo un problema al enviar el mensaje. Inténtalo de nuevo más tarde.",
          className: "bg-red-500 text-white",
        })
      }
    } catch {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Inténtalo de nuevo más tarde.",
        className: "bg-red-500 text-white",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {showContact && (
        <div 
          onClick={() => setShowContact(false)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
        >
          <Form {...form}>
            <form
              onClick={(e) => e.stopPropagation()}
              onSubmit={form.handleSubmit(onSubmit)}
              className="relative w-full max-w-md space-y-6 rounded-lg bg-card border shadow-2xl p-8"
            >
              <button
                type="button"
                onClick={() => setShowContact(false)}
                className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
                aria-label="Cerrar"
              >
                <X className="h-4 w-4" />
              </button>

              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu nombre" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="tu@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Mensaje</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tu mensaje" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between gap-4 pt-2">
                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-1/2 bg-teal-600 text-white hover:bg-green-600"
                >
                  {isLoading ? (
                    <div className="flex items-center justify-center">
                      <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                      Enviando...
                    </div>
                  ) : (
                    "Enviar"
                  )}
                </Button>
                <Button
                  type="button"
                  className="w-1/2 bg-neutral-900 dark:bg-neutral-800 text-white hover:bg-neutral-600 dark:hover:bg-neutral-700"
                  onClick={() => setShowContact(false)}
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </Form>
        </div>
      )}
    </>
  )
}
