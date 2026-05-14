import { useState } from 'react'
import PayPalCheckout from './PayPalCheckout'
import PaymentSuccess from './PaymentSuccess'

const SERVICE_PRICES = {
  'Atempause': 40,
  'Teilkörpermassage': 55,
  'Ganzkörpermassage': 70,
  'Intensiv-Auszeit': 95,
  'Kopf-, Gesichts- & Dekolleté-Massage': 40,
  'Fußmassage mit Fußbad': 50,
}

export default function Confirmation({ booking, profile, onHome }) {
  const [showCheckout, setShowCheckout] = useState(false)
  const [paid, setPaid] = useState(false)

  const dateStr = new Date(booking.date).toLocaleDateString('de-DE', {
    weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'
  })

  const price = SERVICE_PRICES[booking.service] || 0

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16" style={{ background: '#fdfaf5', width: '100%' }}>
      <div style={{
        width: 90, height: 90, borderRadius: '50%',
        background: 'linear-gradient(135deg, #3a7f63, #4e9e7e)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: 24, fontSize: 40
      }}>✓</div>

      <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 48, color: '#1e4034', textAlign: 'center' }} className="mb-3">
        Termin bestätigt
      </h1>
      <p style={{ color: '#6b8f7e', fontSize: 16, textAlign: 'center', maxWidth: 420 }} className="mb-12 leading-relaxed">
        Wir freuen uns auf dich, {profile.name}! Eine Bestätigung wurde an {profile.email} gesendet.
      </p>

      <div style={{ background: '#fff', border: '1px solid #e8d5a0', borderRadius: 20, maxWidth: 460, width: '100%' }} className="p-8 mb-6">
        <p style={{ color: '#4e9e7e', fontSize: 11, letterSpacing: 3 }} className="uppercase mb-6">Buchungsdetails</p>
        <Row label="Behandlung" value={booking.service} />
        <Row label="Datum" value={dateStr} />
        <Row label="Uhrzeit" value={`${booking.time} Uhr`} />
        <Row label="Therapeutin" value={booking.therapist} />
        {profile.oils?.length > 0 && <Row label="Massageöl" value={profile.oils.join(', ')} />}
        {profile.extras?.length > 0 && <Row label="Extras" value={profile.extras.join(', ')} />}
        {profile.focus?.length > 0 && <Row label="Fokus" value={profile.focus.join(', ')} />}
        {profile.notes && <Row label="Anmerkungen" value={profile.notes} />}
        <div style={{ borderTop: '1px solid #e8d5a0', paddingTop: 14, marginTop: 8, display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ color: '#8aad9e', fontSize: 13 }}>Gesamt</span>
          <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, color: '#1e4034' }}>{price}€</span>
        </div>
      </div>

      {/* Payment */}
      {!paid ? (
        <div style={{ maxWidth: 460, width: '100%', marginBottom: 24 }}>
          <button
            onClick={() => setShowCheckout(true)}
            style={{
              width: '100%', background: '#2d6450', color: '#f2e2c4',
              fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
              fontSize: 20, borderRadius: 40, padding: '16px 40px',
              border: 'none', cursor: 'pointer'
            }}
          >
            Jetzt bezahlen — {price}€
          </button>
          <p style={{ color: '#a8c4b8', fontSize: 12, textAlign: 'center', marginTop: 10 }}>
            Sichere Zahlung über PayPal
          </p>
        </div>
      ) : (
        <div style={{ maxWidth: 460, width: '100%', background: '#f0f7f3', borderRadius: 16, padding: '16px 24px', marginBottom: 24, textAlign: 'center' }}>
          <p style={{ color: '#3a7f63', fontSize: 15 }}>✓ Zahlung abgeschlossen</p>
        </div>
      )}

      <div style={{ background: '#f0f7f3', borderRadius: 16, maxWidth: 460, width: '100%' }} className="p-6 mb-10 text-center">
        <p style={{ color: '#3a7f63', fontSize: 13, marginBottom: 4 }}>📍 Margaretha-Flesch-Str. 12, 56588 Waldbreitbach</p>
        <p style={{ color: '#3a7f63', fontSize: 13 }}>📞 +49 176 43625371</p>
      </div>

      <button
        onClick={onHome}
        style={{
          background: paid ? '#2d6450' : 'transparent',
          color: paid ? '#f2e2c4' : '#6b8f7e',
          border: paid ? 'none' : '1.5px solid #a8c4b8',
          fontFamily: 'Cormorant Garamond, serif', fontSize: 20,
          borderRadius: 40, padding: '14px 48px', cursor: 'pointer'
        }}
      >
        Zurück zur Startseite
      </button>

      {showCheckout && (
        <PayPalCheckout
          amount={price}
          description={booking.service}
          onSuccess={() => { setPaid(true); setShowCheckout(false) }}
          onClose={() => setShowCheckout(false)}
        />
      )}

      {paid && (
        <PaymentSuccess
          description={booking.service}
          onClose={() => {}}
        />
      )}
    </div>
  )
}

function Row({ label, value }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14, gap: 16 }}>
      <span style={{ color: '#8aad9e', fontSize: 13, flexShrink: 0 }}>{label}</span>
      <span style={{ color: '#1e4034', fontSize: 15, textAlign: 'right' }}>{value}</span>
    </div>
  )
}
