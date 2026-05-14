import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { useState } from 'react'

export default function PayPalCheckout({ amount, description, onSuccess, onClose }) {
  const [error, setError] = useState(null)

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

        {error && (
          <p style={{ color: '#e05252', fontSize: 13, marginBottom: 16, background: '#fff0f0', padding: '10px 14px', borderRadius: 10 }}>
            {error}
          </p>
        )}

        <PayPalScriptProvider options={{
          clientId: import.meta.env.VITE_PAYPAL_CLIENT_ID,
          currency: 'EUR',
          locale: 'de_DE'
        }}>
          <PayPalButtons
            style={{ layout: 'vertical', shape: 'rect', label: 'pay' }}
            createOrder={(data, actions) => actions.order.create({
              purchase_units: [{ amount: { value: String(amount), currency_code: 'EUR' }, description }]
            })}
            onApprove={(data, actions) => actions.order.capture().then(() => onSuccess())}
            onError={() => setError('Zahlung fehlgeschlagen. Bitte versuche es erneut.')}
          />
        </PayPalScriptProvider>

        <p style={{ color: '#a8c4b8', fontSize: 11, textAlign: 'center', marginTop: 16 }}>
          Gesicherte Zahlung über PayPal
        </p>
      </div>
    </div>
  )
}
