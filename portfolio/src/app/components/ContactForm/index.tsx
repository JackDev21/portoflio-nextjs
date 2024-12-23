"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import axios from "axios"
import { useContext } from "react"
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

  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  })

  async function onSubmit(data: FormValues) {
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
    } catch (error) {
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje. Inténtalo de nuevo más tarde.",
        className: "bg-red-500 text-white",
      })
    }
  }

  return (
    <>
      {showContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-95">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="min-w-96 space-y-8 rounded-lg bg-blue-50 bg-opacity-75 p-8 shadow-lg"
            >
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="dark:text-black">Nombre</FormLabel>
                    <FormControl>
                      <Input placeholder="Tu nombre" {...field} className="text-black" />
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
                    <FormLabel className="dark:text-black">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="tu@email.com" {...field} className="text-black" />
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
                    <FormLabel className="dark:text-black">Mensaje</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tu mensaje" {...field} className="text-black" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between">
                <Button type="submit" className="btn btn-primary bg-green-700 hover:bg-green-500">
                  Enviar
                </Button>
                <Button
                  type="button"
                  className="btn btn-secondary bg-black text-white hover:bg-gray-500"
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
