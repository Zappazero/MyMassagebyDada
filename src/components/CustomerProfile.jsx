import { useState } from 'react'

const OILS = ['Lavendel', 'Eukalyptus', 'Rosenholz', 'Pfefferminze', 'Sandelholz', 'Zitrus', 'Neutral (kein Duft)']
const EXTRAS = ['Heiße Steine', 'Warme Handtücher', 'Kräuterstempel', 'Tiefengewebe-Druck', 'Sanfter Druck']
const FOCUS = ['Nacken & Schultern', 'Unterer Rücken', 'Beine & Füße', 'Arme & Hände', 'Gesicht & Kopf', 'Ganzkörper']

export default function CustomerProfile({ booking, onNext, onBack }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [notes, setNotes] = useState('')
  const [oils, setOils] = useState([])
  const [extras, setExtras] = useState([])
  const [focus, setFocus] = useState([])

  const toggle = (list, setList, item) =>
    setList(l => l.includes(item) ? l.filter(x => x !== item) : [...l, item])

  const valid = name && email

  const submit = () => {
    if (!valid) return
    onNext({ name, email, phone, height, weight, notes, oils, extras, focus })
  }

  return (
    <div className="min-h-screen" style={{ background: '#fdfaf5' }}>
      <div style={{ background: '#2d6450' }} className="px-6 py-4 flex items-center gap-4">
        <button onClick={onBack} style={{ color: '#a8d5be', fontSize: 22 }}>←</button>
        <span style={{ fontFamily: 'Cormorant Garamond, serif', color: '#f2e2c4', fontSize: 22 }}>
          MyMassage <em>by Dada</em>
        </span>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-12">
        {/* Booking Summary */}
        <div style={{ background: '#f0f7f3', border: '1px solid #b3dbc8', borderRadius: 16 }} className="p-5 mb-10">
          <p style={{ color: '#4e9e7e', fontSize: 11, letterSpacing: 3 }} className="uppercase mb-2">Deine Buchung</p>
          <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, color: '#1e4034' }}>{booking.service}</p>
          <p style={{ color: '#6b8f7e', fontSize: 14, marginTop: 4 }}>
            {new Date(booking.date).toLocaleDateString('de-DE', { weekday: 'long', day: 'numeric', month: 'long' })} · {booking.time} Uhr · {booking.therapist}
          </p>
        </div>

        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 42, color: '#1e4034' }} className="mb-2">
          Dein Profil
        </h1>
        <p style={{ color: '#6b8f7e', fontSize: 15 }} className="mb-10">
          Damit wir die Massage perfekt auf dich abstimmen können.
        </p>

        {/* Contact */}
        <Section label="Kontakt">
          <div className="flex flex-col gap-4">
            <Input label="Name *" value={name} onChange={setName} placeholder="Dein vollständiger Name" />
            <Input label="E-Mail *" value={email} onChange={setEmail} placeholder="deine@email.de" type="email" />
            <Input label="Telefon" value={phone} onChange={setPhone} placeholder="+49 89 ..." type="tel" />
          </div>
        </Section>

        {/* Body Data */}
        <Section label="Körperdaten (optional)">
          <p style={{ color: '#8aad9e', fontSize: 13 }} className="mb-4">
            Hilft uns, Druck und Griffe optimal anzupassen.
          </p>
          <div className="flex gap-4">
            <Input label="Körpergröße (cm)" value={height} onChange={setHeight} placeholder="175" type="number" />
            <Input label="Gewicht (kg)" value={weight} onChange={setWeight} placeholder="70" type="number" />
          </div>
        </Section>

        {/* Focus Areas */}
        <Section label="Problemzonen & Fokus">
          <div className="flex flex-wrap gap-3">
            {FOCUS.map(f => (
              <Chip key={f} label={f} selected={focus.includes(f)} onToggle={() => toggle(focus, setFocus, f)} />
            ))}
          </div>
        </Section>

        {/* Oils */}
        <Section label="Bevorzugte Massageöle">
          <div className="flex flex-wrap gap-3">
            {OILS.map(o => (
              <Chip key={o} label={o} selected={oils.includes(o)} onToggle={() => toggle(oils, setOils, o)} />
            ))}
          </div>
        </Section>

        {/* Extras */}
        <Section label="Extras & Zubehör">
          <div className="flex flex-wrap gap-3">
            {EXTRAS.map(e => (
              <Chip key={e} label={e} selected={extras.includes(e)} onToggle={() => toggle(extras, setExtras, e)} />
            ))}
          </div>
        </Section>

        {/* Notes */}
        <Section label="Anmerkungen">
          <textarea
            value={notes}
            onChange={e => setNotes(e.target.value)}
            placeholder="Verletzungen, Allergien, besondere Wünsche..."
            rows={4}
            style={{
              width: '100%', border: '2px solid #e8d5a0', borderRadius: 12,
              padding: '12px 16px', fontSize: 15, color: '#1e4034',
              background: '#fff', outline: 'none', resize: 'vertical',
              fontFamily: 'Jost, sans-serif'
            }}
          />
        </Section>

        <button
          onClick={submit}
          style={{
            background: valid ? '#2d6450' : '#c8ddd6',
            color: '#f2e2c4',
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 22, borderRadius: 40, padding: '16px 40px',
            cursor: valid ? 'pointer' : 'not-allowed',
            border: 'none', width: '100%', transition: 'all 0.15s'
          }}
        >
          Termin bestätigen →
        </button>
      </div>
    </div>
  )
}

function Section({ label, children }) {
  return (
    <div className="mb-10">
      <p style={{ color: '#4e9e7e', fontSize: 12, letterSpacing: 3, marginBottom: 14 }} className="uppercase">{label}</p>
      {children}
    </div>
  )
}

function Input({ label, value, onChange, placeholder, type = 'text' }) {
  return (
    <div style={{ flex: 1 }}>
      <label style={{ display: 'block', color: '#6b8f7e', fontSize: 12, marginBottom: 6, letterSpacing: 1 }}>
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        style={{
          width: '100%', border: '2px solid #e8d5a0', borderRadius: 10,
          padding: '12px 16px', fontSize: 15, color: '#1e4034',
          background: '#fff', outline: 'none', fontFamily: 'Jost, sans-serif'
        }}
      />
    </div>
  )
}

function Chip({ label, selected, onToggle }) {
  return (
    <button
      onClick={onToggle}
      style={{
        border: selected ? '2px solid #3a7f63' : '2px solid #e8d5a0',
        background: selected ? '#f0f7f3' : '#fff',
        color: selected ? '#2d6450' : '#6b8f7e',
        borderRadius: 30, padding: '8px 16px', cursor: 'pointer',
        fontSize: 14, transition: 'all 0.15s'
      }}
    >
      {selected && '✓ '}{label}
    </button>
  )
}
