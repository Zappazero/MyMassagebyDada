export default function PaymentSuccess({ description, onClose }) {
  return (
    <div style={{
      position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 1000, padding: 24
    }}>
      <div style={{
        background: '#fdfaf5', borderRadius: 20, padding: 40,
        maxWidth: 400, width: '100%', textAlign: 'center',
        boxShadow: '0 20px 60px rgba(0,0,0,0.2)'
      }}>
        <div style={{
          width: 72, height: 72, borderRadius: '50%',
          background: 'linear-gradient(135deg, #3a7f63, #4e9e7e)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          margin: '0 auto 20px', fontSize: 32
        }}>✓</div>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 30, color: '#1e4034', marginBottom: 10 }}>
          Zahlung erfolgreich!
        </h2>
        <p style={{ color: '#6b8f7e', fontSize: 15, marginBottom: 28, lineHeight: 1.6 }}>
          Vielen Dank für deine Bestellung — <em>{description}</em>. Du erhältst in Kürze eine Bestätigung.
        </p>
        <button
          onClick={onClose}
          style={{
            background: '#2d6450', color: '#f2e2c4',
            fontFamily: 'Cormorant Garamond, serif', fontStyle: 'italic',
            fontSize: 18, borderRadius: 30, padding: '12px 32px',
            border: 'none', cursor: 'pointer'
          }}
        >
          Zurück zur Startseite
        </button>
      </div>
    </div>
  )
}
