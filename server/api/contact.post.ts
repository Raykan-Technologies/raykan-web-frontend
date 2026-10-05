import { z } from 'zod'
import { CONTACT_MESSAGE_MAX } from '../../src/constants'

const schema = z.object({
  name: z.string().trim().min(1).max(120),
  company: z.string().trim().max(120).default(''),
  email: z.email().max(254),
  // optional; digits plus the usual + ( ) - . and spaces
  phone: z.string().trim().max(30).regex(/^[\d\s()+.-]*$/).default(''),
  message: z.string().trim().min(1).max(CONTACT_MESSAGE_MAX),
  // honeypot, hidden from people; bots fill it in
  website: z.string().default(''),
})

export default defineEventHandler(async (event) => {
  const body = await readValidatedBody(event, schema.parse)

  // pretend it worked so bots don't retry
  if (body.website) return { ok: true }

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
