import type { H3Event } from 'h3'

interface ISiteverify {
  success: boolean;
  score?: number;
  action?: string;
  'error-codes'?: string[];
}

// checks a reCAPTCHA v3 token with Google; throws 400 when it looks like a bot
export const verifyRecaptcha = async (event: H3Event, token: string, action: string) => {
  const { recaptcha } = useRuntimeConfig(event)

  // no secret: allowed in local dev only
  if (!recaptcha.secretKey) {
    if (import.meta.dev) return
    throw createError({ statusCode: 500, statusMessage: 'reCAPTCHA is not configured' })
  }

  const result = await $fetch<ISiteverify>('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    body: new URLSearchParams({
      secret: recaptcha.secretKey,
      response: token,
      remoteip: getRequestIP(event, { xForwardedFor: true }) ?? '',
    }),
  }).catch((error) => {
    console.error('[recaptcha] siteverify failed', error)
    throw createError({ statusCode: 502, statusMessage: 'reCAPTCHA check failed' })
  })

  if (!result.success || result.action !== action || (result.score ?? 0) < Number(recaptcha.minScore)) {
    console.warn('[recaptcha] rejected', { score: result.score, action: result.action, errors: result['error-codes'] })
    throw createError({ statusCode: 400, statusMessage: 'reCAPTCHA rejected' })
  }
}
