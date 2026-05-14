import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { useState } from 'react'

const inputStyle = {
  width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid #d4c9a8',
  background: '#fdfaf5', color: '#1e4034', fontSize: 15, outline: 'none', boxSizing: 'border-box',
  fontFamily: 'Georgia, serif', marginBottom: 12
}

export default function PayPalCheckout({ amount, description, customerEmail, customerName, onSuccess, onClose }) {
  const [error, setError] = useState(null)
  const [name, setName] = useState(customerName || '')
  const [email, setEmail] = useState(customerEmail || '')
  const [ready, setReady] = useState(!!(customerEmail && customerName))

  const handleReady = (e) => {
    e.preventDefault()
    if (!name.trim() || !email.trim()) return
    setReady(true)
  }

  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 1000, padding: 24
    }}>
      <div style={{
        background: '#fdfaf5', borderRadius: 20, padding: 32,
        maxWidth: 440, width: '100%', boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 26, color: '#1e4034' }}>
            Bezahlen
          </h2>
          <button onClick={onClose} style={{ background: 'none', border: 'none', fontSize: 22, cursor: 'pointer', color: '#8aad9e' }}>✕</button>
        </div>
        <p style={{ color: '#6b8f7e', fontSize: 14, marginBottom: 6 }}>{description}</p>
        <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 28, color: '#1e4034', marginBottom: 24 }}>{amount}€</p>

        {!ready ? (
          <form onSubmit={handleReady}>
            <input
              style={inputStyle}
              placeholder="Dein Name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <input
              style={inputStyle}
              placeholder="Deine E-Mail-Adresse"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button type="submit" style={{
              width: '100%', background: '#2d6450', color: '#f2e2c4',
              fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
              fontSize: 18, borderRadius: 30, padding: '12px 32px',
              border: 'none', cursor: 'pointer'
            }}>
              Weiter zur Zahlung
            </button>
          </form>
        ) : (
          <>
            {error && (
              <p style={{ color: '#e05252', fontSize: 13, marginBottom: 16, background: '#fff0f0', padding: '10px 14px', borderRadius: 10 }}>
                {error}
              </p>
            )}
            <PayPalScriptProvider options={{
              clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID,
              currency: 'EUR',
              locale: 'de_DE',
              intent: 'capture'
            }}>
              <PayPalButtons
                style={{ layout: 'vertical', shape: 'rect', label: 'pay' }}
                createOrder={(data, actions) => actions.order.create({
                  intent: 'CAPTURE',
                  purchase_units: [{ amount: { value: amount.toFixed(2), currency_code: 'EUR' }, description }]
                })}
                onApprove={(data, actions) => actions.order.capture().then(() => onSuccess({ name, email }))}
                onError={() => setError('Zahlung fehlgeschlagen. Bitte versuche es erneut.')}
              />
            </PayPalScriptProvider>
          </>
        )}

        <p style={{ color: '#a8c4b8', fontSize: 11, textAlign: 'center', marginTop: 16 }}>
          Gesicherte Zahlung über PayPal
        </p>
      </div>
    </div>
  )
}
