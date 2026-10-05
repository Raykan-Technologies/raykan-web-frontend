import nodemailer, { type Transporter } from 'nodemailer'

let transporter: Transporter | undefined

// one SMTP transport per server process, built on first use
export const useMailer = () => {
  const { mail } = useRuntimeConfig()
  if (!mail.host || !mail.from) {
    throw createError({ statusCode: 500, statusMessage: 'Mail is not configured' })
  }

  transporter ??= nodemailer.createTransport({
    host: mail.host,
    port: Number(mail.port),
    secure: Number(mail.port) === 465,
    auth: mail.user ? { user: mail.user, pass: mail.pass } : undefined,
  })

  return { transporter, from: mail.from, to: mail.to }
}
