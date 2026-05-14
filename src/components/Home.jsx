const SERVICES = [
  { name: 'Atempause', duration: '30 Min', price: '40€', desc: 'Rücken, Nacken & Schultern — für alle, die schnell abschalten und Verspannungen loswerden wollen.' },
  { name: 'Teilkörpermassage', duration: '45 Min', price: '55€', desc: 'Individuell wählbarer Fokus (z. B. Beine, Rücken, Kopf) — wenn gezielte Entlastung im Vordergrund steht.' },
  { name: 'Ganzkörpermassage', duration: '60 Min', price: '70€', desc: 'Vollkommene Entspannung von Kopf bis Fuß — die klassische Auszeit für Körper & Geist.' },
  { name: 'Intensiv-Auszeit', duration: '90 Min', price: '95€', desc: 'Tiefgehende Regeneration und fokussierte Teilbehandlung — für alle, die sich wirklich etwas Gutes tun wollen.' },
  { name: 'Kopf-, Gesichts- & Dekolleté-Massage', duration: '30 Min', price: '40€', desc: 'Sanfte, entschleunigende Massage für Gesicht, Hals & Dekolleté — ideal zum Runterkommen, Loslassen & Strahlen.' },
  { name: 'Fußmassage mit Fußbad', duration: '45 Min', price: '50€', desc: 'Entspannendes Fußbad zur Vorbereitung, gefolgt von einer wohltuenden Fußmassage — ein vollständiges Verwöhnprogramm für müde Füße.' },
]

const PRODUCTS = [
  {
    name: 'Entspannungsmischung',
    subtitle: 'Wärme & Tiefenentspannung',
    tag: 'Rückenmuskulatur',
    desc: 'Die Entspannungsmischung ist die perfekte Zusammensetzung für eine tiefenentspannende Rückenmassage. Lavendel beruhigt Geist und Nerven, Jojobaöl pflegt die Haut ohne zu fetten, Sandelholz wirkt erdend und wärmend, Mandelöl macht die Haut geschmeidig, Wildrosenöl regeneriert und versorgt das Gewebe mit Antioxidantien — und Sesamöl bringt eine angenehme Wärme, die tief in die Muskulatur eindringt.',
    ingredients: ['Lavendel', 'Jojobaöl', 'Sandelholz', 'Mandelöl', 'Wildrosenöl', 'Sesamöl'],
    price: '24€',
    image: '/images/produkte/entspannungsmischung.png',
    imageBg: 'linear-gradient(135deg, #c8ddd6 0%, #a8d5be 60%, #3a7f63 100%)',
    icon: '🌿',
  },
  {
    name: 'Belebungsmischung',
    subtitle: 'Frisch & energetisierend',
    tag: 'Füße & Beine',
    desc: 'Die Belebungsmischung ist die perfekte Zusammensetzung für eine frische und energetisierende Fuß- und Beinmassage. Zitronengras erfrischt und regt die Durchblutung an, Red Root stimuliert und belebt müde Beine von innen, Süßorange hebt die Stimmung und verbreitet einen fruchtig-leichten Duft, Sesamöl schmeichelt der Haut und sorgt für wohltuende Wärme — und Aprikosenkernöl pflegt intensiv, zieht leicht ein und hinterlässt die Haut samtig weich.',
    ingredients: ['Zitronengras', 'Red Root', 'Süßorange', 'Sesamöl', 'Aprikosenkernöl'],
    price: '24€',
    image: '/images/produkte/belebungsmischung.png',
    imageBg: 'linear-gradient(135deg, #f2e2c4 0%, #f5d08a 60%, #e8a830 100%)',
    icon: '🍊',
  },
]

const STAFF = [
  { name: 'Dada', role: 'Inhaberin & Massagetherapeutin', exp: '', spec: '', photo: '/images/team/dada.jpg', photoPosition: '30% center' },
  { name: 'Caro', role: 'Massagetherapeutin', exp: '', spec: '' },
]

export default function Home({ onBook }) {
  return (
    <div className="min-h-screen" style={{ background: '#fdfaf5', width: '100%' }}>

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
      <div style={{ position: 'relative', overflow: 'hidden' }} className="px-6 py-16 md:py-24 text-center">
        <img
          src="/images/studio/gebaeude.jpeg"
          alt="Waldbreitbach"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 30%' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(45,100,80,0.82) 0%, rgba(58,127,99,0.78) 50%, rgba(78,158,126,0.72) 100%)' }} />
        <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <p style={{ color: '#a8d5be', fontFamily: 'Jost', fontSize: 13, letterSpacing: 4 }} className="uppercase mb-4">
            Willkommen bei
          </p>
          <h1 className="hero-title mb-6" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#f2e2c4', lineHeight: 1.1, textAlign: 'center' }}>
            MyMassage <br /><em>by Dada</em>
          </h1>
          <p style={{ color: '#d4ede3', fontFamily: 'Jost', fontSize: 'clamp(14px, 2vw, 17px)', maxWidth: 480, textAlign: 'center' }} className="mb-8 leading-relaxed">
            Dein persönliches Massagestudio im mittleren Wiedtal. Lass dich fallen — wir kümmern uns um den Rest.
          </p>
        </div>
      </div>

      {/* Services */}
      <div className="px-6 py-20 max-w-5xl mx-auto">
        <p style={{ color: '#4e9e7e', fontSize: 12, letterSpacing: 4, textAlign: 'center' }} className="uppercase mb-2">Unsere Leistungen</p>
        <h2 style={{ textAlign: 'center', display: 'block', marginBottom: 48 }} className="section-title" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#1e4034' }}>
          Massagen & Behandlungen
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24, justifyContent: 'center' }}>
          {SERVICES.map(s => (
            <div key={s.name} style={{ background: '#fff', border: '1px solid #e8d5a0', borderRadius: 16, flex: '1 1 280px', maxWidth: 400 }} className="p-6 hover:shadow-md transition">
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
      </div>

      {/* Staff */}
      <div style={{ background: '#f0f7f3' }} className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <p style={{ color: '#4e9e7e', fontSize: 12, letterSpacing: 4, textAlign: 'center' }} className="uppercase mb-2">Das Team</p>
          <h2 style={{ textAlign: 'center', display: 'block', marginBottom: 48 }} className="section-title" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#1e4034' }}>
            Deine Therapeutinnen
          </h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32 }}>
            {STAFF.map(m => (
              <div key={m.name} style={{ background: '#fff', borderRadius: 20, maxWidth: 260, width: '100%' }} className="staff-card p-8 text-center shadow-sm">
                <div style={{ width: 80, height: 80, borderRadius: '50%', margin: '0 auto 16px', overflow: 'hidden', background: 'linear-gradient(135deg, #3a7f63, #4e9e7e)' }}>
                  {m.photo ? (
                    <img src={m.photo} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: m.photoPosition || 'center' }} />
                  ) : (
                    <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ color: '#f2e2c4', fontFamily: 'Cormorant Garamond, serif', fontSize: 32 }}>{m.name[0]}</span>
                    </div>
                  )}
                </div>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 24, color: '#1e4034' }} className="mb-1">{m.name}</h3>
                <p style={{ color: '#3a7f63', fontSize: 13 }} className="mb-2">{m.role}</p>
                <p style={{ color: '#8aad9e', fontSize: 12 }}>{m.exp}</p>
                <p style={{ color: '#4e9e7e', fontSize: 12, marginTop: 8 }}>{m.spec}</p>
                <button
                  onClick={onBook}
                  style={{
                    marginTop: 20,
                    background: 'transparent',
                    border: '1.5px solid #3a7f63',
                    color: '#2d6450',
                    fontFamily: 'Cormorant Garamond, serif',
                    fontStyle: 'italic',
                    fontSize: 17,
                    borderRadius: 30,
                    padding: '9px 22px',
                    cursor: 'pointer',
                    width: '100%',
                    transition: 'all 0.2s',
                    letterSpacing: 0.3,
                  }}
                  onMouseEnter={e => { e.target.style.background = '#2d6450'; e.target.style.color = '#f2e2c4' }}
                  onMouseLeave={e => { e.target.style.background = 'transparent'; e.target.style.color = '#2d6450' }}
                >
                  Termin vereinbaren
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Studio */}
      <div className="px-6 py-20 max-w-5xl mx-auto">
        <p style={{ color: '#4e9e7e', fontSize: 12, letterSpacing: 4, textAlign: 'center' }} className="uppercase mb-2">Einblick</p>
        <h2 className="section-title" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#1e4034', textAlign: 'center', display: 'block', marginBottom: 48 }}>
          Das Studio
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, alignItems: 'stretch', justifyContent: 'center' }}>
          {/* Left: entrance */}
          <div style={{ flex: '1 1 260px', borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 24px rgba(45,100,80,0.10)', aspectRatio: '4/3' }}>
            <img src="/images/studio/eingang.jpeg" alt="Eingang"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
          </div>
          {/* Middle: corridor */}
          <div style={{ flex: '1 1 260px', borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 24px rgba(45,100,80,0.10)', aspectRatio: '4/3' }}>
            <img src="/images/studio/korridor.jpeg" alt="Korridor"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }} />
          </div>
          {/* Right: massage room + text */}
          <div style={{ flex: '1 1 260px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{ borderRadius: 20, overflow: 'hidden', boxShadow: '0 4px 24px rgba(45,100,80,0.10)', aspectRatio: '4/3' }}>
              <img src="/images/studio/massageraum.jpeg" alt="Massageraum"
                style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top', display: 'block' }} />
            </div>
            <div style={{ background: '#f0f7f3', borderRadius: 20, padding: '24px' }}>
              <p style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 26, color: '#1e4034', lineHeight: 1.3, marginBottom: 10 }}>
                <em>Ein Ort zum Loslassen</em>
              </p>
              <p style={{ color: '#6b8f7e', fontSize: 14, lineHeight: 1.8 }}>
                Moderne Einrichtung, warmes Licht und sorgfältig ausgewählte Pflegeprodukte — mitten in der Natur des mittleren Wiedtals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="px-6 py-20 max-w-5xl mx-auto">
        <p style={{ color: '#4e9e7e', fontSize: 12, letterSpacing: 4, textAlign: 'center' }} className="uppercase mb-2">Naturkosmetik</p>
        <h2 className="section-title text-center mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#1e4034' }}>
          Unsere Massageöle
        </h2>
        <p style={{ color: '#6b8f7e', fontSize: 15, textAlign: 'center', maxWidth: 520, margin: '0 auto 48px' }} className="leading-relaxed">
          Handgemischte Naturöle — entwickelt für ein ganzheitliches Massageerlebnis. Auch zum Mitnehmen erhältlich.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 40 }}>
          {PRODUCTS.map(p => (
            <div key={p.name} style={{ background: '#fff', border: '1px solid #e8d5a0', borderRadius: 20, maxWidth: 380, width: '100%', display: 'flex', flexDirection: 'column' }} className="overflow-hidden shadow-sm hover:shadow-md transition">
              {/* Image */}
              <div style={{ aspectRatio: '4/3', background: p.imageBg, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
                {p.image ? (
                  <img src={p.image} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '8px' }} />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontSize: 64 }}>{p.icon}</span>
                  </div>
                )}
                <div style={{ position: 'absolute', top: 14, right: 14, background: 'rgba(253,250,245,0.92)', borderRadius: 20, padding: '4px 14px' }}>
                  <span style={{ color: '#3a7f63', fontSize: 12, letterSpacing: 1, fontFamily: 'Jost, sans-serif' }}>{p.tag}</span>
                </div>
              </div>
              {/* Content */}
              <div style={{ padding: '28px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 30, fontStyle: 'italic', color: '#1e4034', lineHeight: 1.2, marginBottom: 4 }}>{p.name}</h3>
                <p style={{ color: '#4e9e7e', fontSize: 11, letterSpacing: 3, marginBottom: 14, fontFamily: 'Jost, sans-serif' }} className="uppercase">{p.subtitle}</p>
                <p style={{ color: '#6b8f7e', fontSize: 14, lineHeight: 1.7, fontFamily: 'Jost, sans-serif', marginBottom: 20 }}>{p.desc}</p>
                <div style={{ borderTop: '1px solid #f0e8d0', paddingTop: 16, marginBottom: 24 }}>
                  <p style={{ color: '#a8c4b8', fontSize: 10, letterSpacing: 3, marginBottom: 10, fontFamily: 'Jost, sans-serif' }} className="uppercase">Inhaltsstoffe</p>
                  <div className="flex flex-wrap gap-2">
                    {p.ingredients.map(ing => (
                      <span key={ing} style={{ background: '#f5faf7', color: '#4e9e7e', fontSize: 12, padding: '4px 12px', borderRadius: 20, fontFamily: 'Jost, sans-serif', border: '1px solid #d4ede3' }}>{ing}</span>
                    ))}
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                  <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 32, color: '#1e4034', fontWeight: 300 }}>{p.price}</span>
                  <button style={{
                    background: '#2d6450', color: '#f2e2c4',
                    fontFamily: 'Cormorant Garamond, serif', fontSize: 18, fontStyle: 'italic',
                    borderRadius: 30, padding: '11px 28px', border: 'none', cursor: 'pointer',
                    letterSpacing: 0.5
                  }}>
                    Bestellen
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Info */}
      <div className="px-6 py-16 max-w-3xl mx-auto text-center">
        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 36, color: '#1e4034' }} className="mb-8">Studio Infos</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 24 }}>
          {[
            { label: 'Adresse', value: 'Margaretha-Flesch-Str. 12, 56588 Waldbreitbach' },
            { label: 'Öffnungszeiten', value: 'Mo–Sa: 9:00–20:00 Uhr' },
            { label: 'Telefon', value: '+49 176 43625371' },
            { label: 'E-Mail', value: 'hello@mymassagebydada.de' },
          ].map(i => (
            <div key={i.label} style={{ background: '#fff', border: '1px solid #e8d5a0', borderRadius: 12, flex: '1 1 180px', maxWidth: 220 }} className="p-5">
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
