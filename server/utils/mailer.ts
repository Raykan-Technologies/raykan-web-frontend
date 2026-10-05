import nodemailer, { type Transporter } from 'nodemailer'

let transporter: Transporter | undefined

// one SMTP transport per server process, built on first use
export const useMailer = () => {
  const { mail } = useRuntimeConfig()
  // the reason stays in the server log, the visitor gets a generic error
  if (!mail.host || !mail.from) {
    console.error('[mailer] NUXT_MAIL_HOST / NUXT_MAIL_FROM are not set')
    throw createError({ statusCode: 500, statusMessage: 'Server error' })
  }

  transporter ??= nodemailer.createTransport({
    host: mail.host,
    port: Number(mail.port),
    secure: Number(mail.port) === 465,
    auth: mail.user ? { user: mail.user, pass: mail.pass } : undefined,
  })

  return { transporter, from: mail.from, to: mail.to }
}
