// Raykan brand colors (src/assets/css/_colors.scss), inlined because email clients drop <style> and vars
const BRAND = '#084387'
const ACCENT = '#0CBB97'
const BG = '#F0F3F5'
const TEXT = '#1E293B'
const MUTED = '#565C67'
const BORDER = '#D5D8DC'
// Figtree / Inter load only in some clients, the rest fall back
const HEADING_FONT = `'Figtree', Arial, Helvetica, sans-serif`
const BODY_FONT = `'Inter', Arial, Helvetica, sans-serif`

interface IContactEmail {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  siteUrl: string;
}

const escape = (value: string) => value
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;')

const row = (label: string, value: string) => `
  <tr>
    <td style="padding:10px 0;border-bottom:1px solid ${BORDER};width:110px;vertical-align:top;font-family:${BODY_FONT};font-size:12px;line-height:20px;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;color:${MUTED};">${label}</td>
    <td style="padding:10px 0;border-bottom:1px solid ${BORDER};vertical-align:top;font-family:${BODY_FONT};font-size:15px;line-height:20px;color:${TEXT};">${value}</td>
  </tr>`

// contact form notification: subject, plain text fallback and branded html
export const contactEmail = ({ name, company, email, phone, message, siteUrl }: IContactEmail) => {
  const site = siteUrl.replace(/\/$/, '')
  const subject = `Website inquiry from ${name}${company ? ` (${company})` : ''}`

  const text = [
    `Name: ${name}`,
    `Company: ${company || '-'}`,
    `Email: ${email}`,
    `Contact Number: ${phone || '-'}`,
    '',
    message,
  ].join('\n')

  const e = { name: escape(name), company: escape(company), email: escape(email), phone: escape(phone) }
  const messageHtml = escape(message).replace(/\r?\n/g, '<br>')
  const replyHref = `mailto:${encodeURIComponent(email)}?subject=${encodeURIComponent(`Re: ${subject}`)}`

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="color-scheme" content="light">
  <meta name="supported-color-schemes" content="light">
  <title>${escape(subject)}</title>
</head>
<body style="margin:0;padding:0;background-color:${BG};">
  <!-- inbox preview line -->
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escape(message.replace(/\s+/g, ' ').slice(0, 140))}</div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:${BG};">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px;background-color:#FFFFFF;border-radius:8px;overflow:hidden;">
          <tr>
            <td align="left" style="background-color:${BRAND};padding:28px 32px;">
              <a href="${site}" style="text-decoration:none;">
                <img src="${site}/email/logo-white.png" width="200" height="48" alt="Raykan Technologies" style="display:block;border:0;width:200px;height:auto;color:#FFFFFF;font-family:${HEADING_FONT};font-size:20px;">
              </a>
            </td>
          </tr>
          <tr>
            <td style="height:4px;line-height:4px;font-size:0;background-color:${ACCENT};">&nbsp;</td>
          </tr>

          <tr>
            <td style="padding:32px 32px 8px;">
              <h1 style="margin:0 0 6px;font-family:${HEADING_FONT};font-size:24px;line-height:32px;font-weight:600;color:${BRAND};">New website inquiry</h1>
              <p style="margin:0;font-family:${BODY_FONT};font-size:14px;line-height:22px;color:${MUTED};">Someone reached out through the contact form.</p>
            </td>
          </tr>

          <tr>
            <td style="padding:16px 32px 0;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                ${row('Name', e.name)}
                ${row('Company', e.company || `<span style="color:${MUTED};">&ndash;</span>`)}
                ${row('Email', `<a href="mailto:${e.email}" style="color:${BRAND};text-decoration:underline;">${e.email}</a>`)}
                ${row('Contact No.', phone
                  ? `<a href="tel:${escape(phone.replace(/[^\d+]/g, ''))}" style="color:${BRAND};text-decoration:underline;">${e.phone}</a>`
                  : `<span style="color:${MUTED};">&ndash;</span>`)}
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:24px 32px 0;">
              <p style="margin:0 0 8px;font-family:${BODY_FONT};font-size:12px;line-height:20px;font-weight:600;letter-spacing:0.5px;text-transform:uppercase;color:${MUTED};">Message</p>
              <div style="padding:16px 18px;background-color:${BG};border-left:4px solid ${ACCENT};border-radius:4px;font-family:${BODY_FONT};font-size:15px;line-height:24px;color:${TEXT};">${messageHtml}</div>
            </td>
          </tr>

          <tr>
            <td style="padding:28px 32px 36px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="border-radius:4px;background-color:${BRAND};">
                    <a href="${replyHref}" style="display:inline-block;padding:12px 24px;font-family:${BODY_FONT};font-size:15px;line-height:20px;font-weight:600;color:#FFFFFF;text-decoration:none;border-radius:4px;">Reply to ${e.name}</a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:20px 32px;border-top:1px solid ${BORDER};font-family:${BODY_FONT};font-size:12px;line-height:18px;color:${MUTED};">
              Sent from the contact form on <a href="${site}/contact-us" style="color:${BRAND};text-decoration:none;">${escape(site.replace(/^https?:\/\//, ''))}</a>.<br>
              Raykan Technologies &middot; Pardo, Cebu City, Cebu, PH 6000
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`

  return { subject, text, html }
}
