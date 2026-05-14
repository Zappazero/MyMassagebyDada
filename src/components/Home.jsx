const SERVICES = [
  { name: 'Klassische Massage', duration: '60 Min', price: '75€', desc: 'Entspannung für Körper und Geist durch sanfte bis intensive Grifftechniken.' },
  { name: 'Hot Stone Massage', duration: '90 Min', price: '110€', desc: 'Warme Basaltsteine lösen tiefe Verspannungen und fördern die Durchblutung.' },
  { name: 'Aromatherapie', duration: '60 Min', price: '85€', desc: 'Ausgewählte ätherische Öle für vollständige Entspannung aller Sinne.' },
  { name: 'Sportmassage', duration: '45 Min', price: '65€', desc: 'Gezielte Behandlung beanspruchter Muskeln für aktive Menschen.' },
  { name: 'Rückenmassage', duration: '30 Min', price: '45€', desc: 'Intensive Behandlung von Schultern, Nacken und unterem Rücken.' },
  { name: 'Ganzkörper Wellness', duration: '120 Min', price: '150€', desc: 'Das vollständige Verwöhnprogramm für Körper, Geist und Seele.' },
]

const STAFF = [
  { name: 'Dada', role: 'Inhaberin & Massagetherapeutin', exp: '', spec: '' },
  { name: 'Caro', role: 'Massagetherapeutin', exp: '', spec: '' },
]

export default function Home({ onBook }) {
  return (
    <div className="min-h-screen" style={{ background: '#fdfaf5' }}>

      {/* Nav */}
      <nav style={{ background: '#2d6450' }} className="px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <span style={{ fontFamily: 'Cormorant Garamond, serif', color: '#f2e2c4', fontSize: 22, letterSpacing: 1 }}>
          MyMassage <em>by Dada</em>
        </span>
        <button
          onClick={onBook}
          style={{ background: '#f2e2c4', color: '#2d6450', fontFamily: 'Jost, sans-serif' }}
          className="px-5 py-2 text-sm font-medium rounded-full hover:opacity-90 transition"
        >
          Termin buchen
        </button>
      </nav>

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #2d6450 0%, #3a7f63 50%, #4e9e7e 100%)' }} className="px-6 py-24 text-center">
        <p style={{ color: '#a8d5be', fontFamily: 'Jost', fontSize: 13, letterSpacing: 4 }} className="uppercase mb-4">
          Willkommen bei
        </p>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', color: '#f2e2c4', fontSize: 56, lineHeight: 1.1 }} className="mb-6">
          MyMassage <br /><em>by Dada</em>
        </h1>
        <p style={{ color: '#d4ede3', fontFamily: 'Jost', fontSize: 17, maxWidth: 480 }} className="mx-auto mb-10 leading-relaxed">
          Dein persönliches Massagestudio in München. Lass dich fallen — wir kümmern uns um den Rest.
        </p>
        <button
          onClick={onBook}
          style={{ background: '#f2e2c4', color: '#2d6450', fontFamily: 'Cormorant Garamond, serif', fontSize: 20 }}
          className="px-10 py-4 rounded-full hover:opacity-90 transition shadow-lg"
        >
          Jetzt Termin buchen
        </button>
      </div>

      {/* Services */}
      <div className="px-6 py-20 max-w-5xl mx-auto">
        <p style={{ color: '#4e9e7e', fontSize: 12, letterSpacing: 4 }} className="uppercase text-center mb-2">Unsere Leistungen</p>
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 40, color: '#1e4034' }} className="text-center mb-12">
          Massagen & Behandlungen
        </h2>
        <div className="grid grid-cols-1 gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
          {SERVICES.map(s => (
            <div key={s.name} style={{ background: '#fff', border: '1px solid #e8d5a0', borderRadius: 16 }} className="p-6 hover:shadow-md transition">
              <div className="flex justify-between items-start mb-3">
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 22, color: '#1e4034' }}>{s.name}</h3>
                <span style={{ color: '#3a7f63', fontWeight: 500, fontSize: 18 }}>{s.price}</span>
              </div>
              <p style={{ color: '#6b8f7e', fontSize: 13, lineHeight: 1.6 }} className="mb-4">{s.desc}</p>
              <span style={{ background: '#f0f7f3', color: '#3a7f63', fontSize: 12, padding: '4px 12px', borderRadius: 20 }}>
                {s.duration}
              </span>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button
            onClick={onBook}
            style={{ background: '#2d6450', color: '#f2e2c4', fontFamily: 'Cormorant Garamond, serif', fontSize: 20 }}
            className="px-10 py-4 rounded-full hover:opacity-90 transition"
          >
            Termin vereinbaren
          </button>
        </div>
      </div>

      {/* Staff */}
      <div style={{ background: '#f0f7f3' }} className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <p style={{ color: '#4e9e7e', fontSize: 12, letterSpacing: 4 }} className="uppercase text-center mb-2">Das Team</p>
          <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 40, color: '#1e4034' }} className="text-center mb-12">
            Deine Therapeutinnen
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {STAFF.map(m => (
              <div key={m.name} style={{ background: '#fff', borderRadius: 20, minWidth: 220, maxWidth: 260 }} className="p-8 text-center shadow-sm">
                <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg, #3a7f63, #4e9e7e)', margin: '0 auto 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ color: '#f2e2c4', fontFamily: 'Cormorant Garamond, serif', fontSize: 32 }}>
                    {m.name[0]}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 24, color: '#1e4034' }} className="mb-1">{m.name}</h3>
                <p style={{ color: '#3a7f63', fontSize: 13 }} className="mb-2">{m.role}</p>
                <p style={{ color: '#8aad9e', fontSize: 12 }}>{m.exp}</p>
                <p style={{ color: '#4e9e7e', fontSize: 12, marginTop: 8 }}>{m.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Info */}
      <div className="px-6 py-16 max-w-3xl mx-auto text-center">
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 36, color: '#1e4034' }} className="mb-8">Studio Infos</h2>
        <div className="grid grid-cols-1 gap-6" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))' }}>
          {[
            { label: 'Adresse', value: 'Maximilianstr. 12, München' },
            { label: 'Öffnungszeiten', value: 'Mo–Sa: 9:00–20:00 Uhr' },
            { label: 'Telefon', value: '+49 89 123 456 78' },
            { label: 'E-Mail', value: 'hello@mymassagebydada.de' },
          ].map(i => (
            <div key={i.label} style={{ background: '#fff', border: '1px solid #e8d5a0', borderRadius: 12 }} className="p-5">
              <p style={{ color: '#4e9e7e', fontSize: 11, letterSpacing: 2 }} className="uppercase mb-2">{i.label}</p>
              <p style={{ color: '#1e4034', fontSize: 15 }}>{i.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: '#2d6450', color: '#a8d5be' }} className="px-6 py-8 text-center text-sm">
        <p style={{ fontFamily: 'Cormorant Garamond, serif', color: '#f2e2c4', fontSize: 18 }} className="mb-2">
          MyMassage <em>by Dada</em>
        </p>
        <p>© 2026 · Alle Rechte vorbehalten</p>
      </footer>
    </div>
  )
}
