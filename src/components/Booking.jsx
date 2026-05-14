import { useState } from 'react'

const SERVICES = [
  { name: 'Atempause', duration: '30 Min', price: '40€' },
  { name: 'Teilkörpermassage', duration: '45 Min', price: '55€' },
  { name: 'Ganzkörpermassage', duration: '60 Min', price: '70€' },
  { name: 'Intensiv-Auszeit', duration: '90 Min', price: '95€' },
  { name: 'Kopf-, Gesichts- & Dekolleté-Massage', duration: '30 Min', price: '40€' },
  { name: 'Fußmassage mit Fußbad', duration: '45 Min', price: '50€' },
]

const STAFF = ['Dada', 'Caro', 'Keine Präferenz']

const TIMES = ['09:00', '10:00', '11:00', '12:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00']

function getNext14Days() {
  const days = []
  const today = new Date()
  for (let i = 1; i <= 14; i++) {
    const d = new Date(today)
    d.setDate(today.getDate() + i)
    if (d.getDay() !== 0) days.push(d)
  }
  return days
}

const fmt = (d) => d.toLocaleDateString('de-DE', { weekday: 'short', day: 'numeric', month: 'short' })

export default function Booking({ onNext, onBack }) {
  const [service, setService] = useState('')
  const [therapist, setTherapist] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')

  const days = getNext14Days()
  const valid = service && therapist && date && time

  return (
    <div className="min-h-screen" style={{ background: '#fdfaf5', width: '100%' }}>
      {/* Header */}
      <div style={{ background: '#2d6450' }} className="px-6 py-4 flex items-center gap-4">
        <button onClick={onBack} style={{ color: '#a8d5be', fontSize: 22 }}>←</button>
        <span style={{ fontFamily: 'Cormorant Garamond, serif', color: '#f2e2c4', fontSize: 22 }}>
          MyMassage <em>by Dada</em>
        </span>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="page-title mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#1e4034' }}>
          Termin buchen
        </h1>
        <p style={{ color: '#6b8f7e', fontSize: 15 }} className="mb-10">Wähle deine gewünschte Massage und einen Termin.</p>

        {/* Service */}
        <Section label="1. Behandlung auswählen">
          <div className="grid gap-3" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(min(240px, 100%), 1fr))' }}>
            {SERVICES.map(s => (
              <button
                key={s.name}
                onClick={() => setService(s.name)}
                style={{
                  border: service === s.name ? '2px solid #3a7f63' : '2px solid #e8d5a0',
                  background: service === s.name ? '#f0f7f3' : '#fff',
                  borderRadius: 12, padding: '14px 16px', textAlign: 'left', cursor: 'pointer',
                  transition: 'all 0.15s'
                }}
              >
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 18, color: '#1e4034' }}>{s.name}</div>
                <div className="flex justify-between mt-1">
                  <span style={{ color: '#6b8f7e', fontSize: 13 }}>{s.duration}</span>
                  <span style={{ color: '#3a7f63', fontSize: 14, fontWeight: 500 }}>{s.price}</span>
                </div>
              </button>
            ))}
          </div>
        </Section>

        {/* Therapist */}
        <Section label="2. Therapeutin wählen">
          <div className="flex flex-wrap gap-3">
            {STAFF.map(s => (
              <button
                key={s}
                onClick={() => setTherapist(s)}
                style={{
                  border: therapist === s ? '2px solid #3a7f63' : '2px solid #e8d5a0',
                  background: therapist === s ? '#f0f7f3' : '#fff',
                  borderRadius: 30, padding: '10px 20px', cursor: 'pointer',
                  color: '#1e4034', fontSize: 15, transition: 'all 0.15s'
                }}
              >
                {s}
              </button>
            ))}
          </div>
        </Section>

        {/* Date */}
        <Section label="3. Datum wählen">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {days.map(d => {
              const key = d.toISOString().split('T')[0]
              return (
                <button
                  key={key}
                  onClick={() => setDate(key)}
                  style={{
                    border: date === key ? '2px solid #3a7f63' : '2px solid #e8d5a0',
                    background: date === key ? '#3a7f63' : '#fff',
                    borderRadius: 12, padding: '12px 16px', cursor: 'pointer',
                    minWidth: 80, textAlign: 'center', transition: 'all 0.15s', flexShrink: 0
                  }}
                >
                  <div style={{ color: date === key ? '#f2e2c4' : '#6b8f7e', fontSize: 11 }}>
                    {fmt(d).split(' ')[0]}
                  </div>
                  <div style={{ color: date === key ? '#fff' : '#1e4034', fontSize: 20, fontFamily: 'Cormorant Garamond, serif' }}>
                    {d.getDate()}
                  </div>
                  <div style={{ color: date === key ? '#a8d5be' : '#6b8f7e', fontSize: 11 }}>
                    {d.toLocaleDateString('de-DE', { month: 'short' })}
                  </div>
                </button>
              )
            })}
          </div>
        </Section>

        {/* Time */}
        <Section label="4. Uhrzeit wählen">
          <div className="flex flex-wrap gap-3">
            {TIMES.map(t => (
              <button
                key={t}
                onClick={() => setTime(t)}
                style={{
                  border: time === t ? '2px solid #3a7f63' : '2px solid #e8d5a0',
                  background: time === t ? '#3a7f63' : '#fff',
                  color: time === t ? '#fff' : '#1e4034',
                  borderRadius: 10, padding: '10px 18px', cursor: 'pointer',
                  fontSize: 15, transition: 'all 0.15s'
                }}
              >
                {t}
              </button>
            ))}
          </div>
        </Section>

        <button
          onClick={() => valid && onNext({ service, therapist, date, time })}
          style={{
            background: valid ? '#2d6450' : '#c8ddd6',
            color: '#f2e2c4',
            fontFamily: 'Cormorant Garamond, serif',
            fontSize: 22, borderRadius: 40, padding: '16px 40px',
            cursor: valid ? 'pointer' : 'not-allowed',
            border: 'none', width: '100%', marginTop: 8, transition: 'all 0.15s'
          }}
        >
          Weiter →
        </button>
      </div>
    </div>
  )
}

function Section({ label, children }) {
  return (
    <div className="mb-10">
      <p style={{ color: '#4e9e7e', fontSize: 12, letterSpacing: 3, marginBottom: 14 }} className="uppercase">
        {label}
      </p>
      {children}
    </div>
  )
}
