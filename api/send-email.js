import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)
const STUDIO_EMAIL = 'tomi.denic@gmail.com' // Dada's email — update when known

function bookingHtml({ name, email, service, date, time, therapist, price, oils, extras, focus, notes }) {
  return `
    <div style="font-family:Georgia,serif;max-width:540px;margin:0 auto;background:#fdfaf5;padding:40px;border-radius:16px;">
      <h1 style="color:#1e4034;font-size:28px;margin-bottom:8px;">Deine Buchungsbestätigung</h1>
      <p style="color:#6b8f7e;font-size:15px;margin-bottom:32px;">Hallo ${name}, wir freuen uns auf deinen Besuch!</p>
      <table style="width:100%;border-collapse:collapse;">
        <tr><td style="color:#8aad9e;font-size:13px;padding:8px 0;border-bottom:1px solid #e8d5a0;">Behandlung</td><td style="color:#1e4034;font-size:15px;padding:8px 0;border-bottom:1px solid #e8d5a0;text-align:right;">${service}</td></tr>
        <tr><td style="color:#8aad9e;font-size:13px;padding:8px 0;border-bottom:1px solid #e8d5a0;">Datum</td><td style="color:#1e4034;font-size:15px;padding:8px 0;border-bottom:1px solid #e8d5a0;text-align:right;">${date}</td></tr>
        <tr><td style="color:#8aad9e;font-size:13px;padding:8px 0;border-bottom:1px solid #e8d5a0;">Uhrzeit</td><td style="color:#1e4034;font-size:15px;padding:8px 0;border-bottom:1px solid #e8d5a0;text-align:right;">${time} Uhr</td></tr>
        <tr><td style="color:#8aad9e;font-size:13px;padding:8px 0;border-bottom:1px solid #e8d5a0;">Therapeutin</td><td style="color:#1e4034;font-size:15px;padding:8px 0;border-bottom:1px solid #e8d5a0;text-align:right;">${therapist}</td></tr>
        ${oils ? `<tr><td style="color:#8aad9e;font-size:13px;padding:8px 0;border-bottom:1px solid #e8d5a0;">Massageöl</td><td style="color:#1e4034;font-size:15px;padding:8px 0;border-bottom:1px solid #e8d5a0;text-align:right;">${oils}</td></tr>` : ''}
        ${extras ? `<tr><td style="color:#8aad9e;font-size:13px;padding:8px 0;border-bottom:1px solid #e8d5a0;">Extras</td><td style="color:#1e4034;font-size:15px;padding:8px 0;border-bottom:1px solid #e8d5a0;text-align:right;">${extras}</td></tr>` : ''}
        ${focus ? `<tr><td style="color:#8aad9e;font-size:13px;padding:8px 0;border-bottom:1px solid #e8d5a0;">Fokus</td><td style="color:#1e4034;font-size:15px;padding:8px 0;border-bottom:1px solid #e8d5a0;text-align:right;">${focus}</td></tr>` : ''}
        ${notes ? `<tr><td style="color:#8aad9e;font-size:13px;padding:8px 0;border-bottom:1px solid #e8d5a0;">Anmerkungen</td><td style="color:#1e4034;font-size:15px;padding:8px 0;border-bottom:1px solid #e8d5a0;text-align:right;">${notes}</td></tr>` : ''}
        <tr><td style="color:#8aad9e;font-size:13px;padding:12px 0;">Gesamt</td><td style="color:#1e4034;font-size:20px;font-weight:bold;padding:12px 0;text-align:right;">${price}€</td></tr>
      </table>
      <div style="background:#f0f7f3;border-radius:12px;padding:16px;margin-top:24px;">
        <p style="color:#3a7f63;font-size:13px;margin:0 0 6px;">📍 Margaretha-Flesch-Str. 12, 56588 Waldbreitbach</p>
        <p style="color:#3a7f63;font-size:13px;margin:0;">📞 +49 176 43625371</p>
      </div>
      <p style="color:#a8c4b8;font-size:12px;margin-top:24px;">MyMassage by Dada — Wir freuen uns auf dich!</p>
    </div>
  `
}

function paymentHtml({ name, item, amount }) {
  return `
    <div style="font-family:Georgia,serif;max-width:540px;margin:0 auto;background:#fdfaf5;padding:40px;border-radius:16px;">
      <h1 style="color:#1e4034;font-size:28px;margin-bottom:8px;">Zahlung erfolgreich</h1>
      <p style="color:#6b8f7e;font-size:15px;margin-bottom:32px;">Hallo ${name}, vielen Dank für deine Bestellung!</p>
      <div style="background:#fff;border:1px solid #e8d5a0;border-radius:12px;padding:24px;">
        <p style="color:#8aad9e;font-size:12px;letter-spacing:2px;text-transform:uppercase;margin:0 0 12px;">Bestellung</p>
        <p style="color:#1e4034;font-size:18px;margin:0 0 8px;">${item}</p>
        <p style="color:#1e4034;font-size:26px;font-weight:bold;margin:0;">${amount}€</p>
      </div>
      <p style="color:#6b8f7e;font-size:14px;margin-top:24px;">Du erhältst in Kürze weitere Informationen von uns.</p>
      <div style="background:#f0f7f3;border-radius:12px;padding:16px;margin-top:24px;">
        <p style="color:#3a7f63;font-size:13px;margin:0 0 6px;">📍 Margaretha-Flesch-Str. 12, 56588 Waldbreitbach</p>
        <p style="color:#3a7f63;font-size:13px;margin:0;">📞 +49 176 43625371</p>
      </div>
    </div>
  `
}

function studioNotificationHtml({ type, name, email, item, details }) {
  return `
    <div style="font-family:Georgia,serif;max-width:540px;margin:0 auto;padding:32px;">
      <h2 style="color:#1e4034;">Neue ${type === 'booking' ? 'Buchung' : 'Bestellung'}</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>${type === 'booking' ? 'Buchung' : 'Produkt'}:</strong> ${item}</p>
      ${details ? `<pre style="background:#f5f5f5;padding:16px;border-radius:8px;font-size:13px;">${details}</pre>` : ''}
    </div>
  `
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })

  const { type, customerEmail, customerName, data } = req.body

  try {
    if (type === 'booking') {
      const dateStr = new Date(data.date).toLocaleDateString('de-DE', {
        weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
      })
      await Promise.all([
        resend.emails.send({
          from: 'MyMassage by Dada <onboarding@resend.dev>',
          to: customerEmail,
          subject: `Buchungsbestätigung — ${data.service}`,
          html: bookingHtml({
            name: customerName, email: customerEmail,
            service: data.service, date: dateStr, time: data.time,
            therapist: data.therapist, price: data.price,
            oils: data.oils?.join(', '), extras: data.extras?.join(', '),
            focus: data.focus?.join(', '), notes: data.notes
          })
        }),
        resend.emails.send({
          from: 'MyMassage by Dada <onboarding@resend.dev>',
          to: STUDIO_EMAIL,
          subject: `Neue Buchung: ${data.service} — ${customerName}`,
          html: studioNotificationHtml({
            type: 'booking', name: customerName, email: customerEmail,
            item: data.service,
            details: `Datum: ${dateStr}\nUhrzeit: ${data.time} Uhr\nTherapeut: ${data.therapist}`
          })
        })
      ])
    } else if (type === 'payment') {
      await Promise.all([
        resend.emails.send({
          from: 'MyMassage by Dada <onboarding@resend.dev>',
          to: customerEmail,
          subject: `Zahlung erfolgreich — ${data.item}`,
          html: paymentHtml({ name: customerName, item: data.item, amount: data.amount })
        }),
        resend.emails.send({
          from: 'MyMassage by Dada <onboarding@resend.dev>',
          to: STUDIO_EMAIL,
          subject: `Zahlung eingegangen: ${data.item} — ${customerName}`,
          html: studioNotificationHtml({
            type: 'payment', name: customerName, email: customerEmail,
            item: `${data.item} (${data.amount}€)`
          })
        })
      ])
    }

    res.status(200).json({ success: true })
  } catch (err) {
    console.error('Email error:', err)
    res.status(500).json({ error: err.message })
  }
}
