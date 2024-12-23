import { NextApiRequest, NextApiResponse } from "next"
import nodemailer from "nodemailer"

type Data = {
  success: boolean
  message?: string
  error?: string
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  if (req.method === "POST") {
    const { name, email, message } = req.body

    // Configura el transportador de Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    })

    // Configura el correo electrónico
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Nuevo mensaje de contacto de ${name}`,
      text: `De: ${name} <${email}>\n\n${message}`,
    }

    try {
      // Envía el correo electrónico
      await transporter.sendMail(mailOptions)
      res.status(200).json({ success: true })
    } catch (error: unknown) {
      if (error instanceof Error) {
        res.status(500).json({ success: false, error: error.message })
      } else {
        res.status(500).json({ success: false, error: "Error desconocido" })
      }
    }
  } else {
    res.status(405).json({ success: false, message: "Método no permitido" })
  }
}
