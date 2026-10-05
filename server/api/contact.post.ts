import { z } from 'zod'
import { CONTACT_MESSAGE_MAX } from '../../src/constants'

// control characters (incl. line breaks) out of one-line fields, so they can't bend the subject line
const singleLine = (max: number) => z.string().transform((value) => value.replace(/\p{Cc}+/gu, ' ').trim()).pipe(z.string().max(max))

const schema = z.object({
  name: singleLine(120).pipe(z.string().min(1)),
  company: singleLine(120).default(''),
  email: z.email().max(254),
  // optional; digits plus the usual + ( ) - . and spaces
  phone: z.string().trim().max(30).regex(/^[\d\s()+.-]*$/).default(''),
  // keeps line breaks and tabs, drops other control characters
  message: z.string().transform((value) => value.replace(/[^\P{Cc}\n\t]/gu, '').trim()).pipe(z.string().min(1).max(CONTACT_MESSAGE_MAX)),
  // reCAPTCHA v3 token, empty in local dev without keys
  token: z.string().max(4000).default(''),
  // honeypot, hidden from people; bots fill it in
  website: z.string().default(''),
})

export default defineEventHandler(async (event) => {
  // a plain 400, without the schema's rules in the response
  const parsed = await readValidatedBody(event, (data) => schema.safeParse(data))
  if (!parsed.success) throw createError({ statusCode: 400, statusMessage: 'Invalid request' })
  const body = parsed.data

  // pretend it worked so bots don't retry
  if (body.website) return { ok: true }

  await verifyRecaptcha(event, body.token, 'contact')

  const { transporter, from, to } = useMailer()

  try {
    await transporter.sendMail({
      from,
      to,
      // replies go to the visitor; `from` stays ours so SPF/DMARC pass
      replyTo: { name: body.name, address: body.email },
      ...contactEmail({ ...body, siteUrl: getSiteConfig(event).url }),
    })
  } catch (error) {
    console.error('[contact] sendMail failed', error)
    throw createError({ statusCode: 502, statusMessage: 'Message could not be sent' })
  }

  return { ok: true }
})
