import { useState, useEffect } from 'react'
import { X, Gift, CheckCircle2, Download, Building2, HeartHandshake, Sparkles } from 'lucide-react'
import { getAssetUrl } from '../utils/assets'

type AudienceType = 'personal' | 'corporate'

// Ide kerül a Google Sheet Apps Script Web App URL-je:
const GOOGLE_SHEETS_WEBHOOK_URL =
  'https://script.google.com/macros/s/AKfycbzWNSI5IRer4WmDWfHB2egXr5A_oyA5SPmFychSpOlg5LPfGVlNEEOzlvwNCg-UnrUC/exec'

export default function ExitIntentModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasTriggered, setHasTriggered] = useState(false)
  const [audience, setAudience] = useState<AudienceType>('personal')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem('epitopont_exit_popup_seen')
    if (alreadySeen) {
      setHasTriggered(true)
    }

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 12 && !hasTriggered && !sessionStorage.getItem('epitopont_exit_popup_seen')) {
        setIsOpen(true)
        setHasTriggered(true)
        sessionStorage.setItem('epitopont_exit_popup_seen', 'true')
      }
    }

    const mobileTimer = setTimeout(() => {
      if (!hasTriggered && !sessionStorage.getItem('epitopont_exit_popup_seen')) {
        setIsOpen(true)
        setHasTriggered(true)
        sessionStorage.setItem('epitopont_exit_popup_seen', 'true')
      }
    }, 28000)

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      clearTimeout(mobileTimer)
    }
  }, [hasTriggered])

  const pdfUrl =
    audience === 'personal'
      ? getAssetUrl('letoltes/Az_Epito_Pont_SOS_Stresszoldo_es_Kieges_Radar.pdf')
      : getAssetUrl('letoltes/Az_Epito_Pont_Ceges_Diagnosztika_es_Ajanlat.pdf')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setIsSubmitting(true)

    const payload = {
      timestamp: new Date().toLocaleString('hu-HU'),
      name,
      email,
      type:
        audience === 'personal'
          ? 'Egyéni (SOS Stresszoldó & Kiégés-Radar)'
          : 'Céges B2B (Vállalati Stressz- és Súrlódás Teszt)',
      company: company || '-',
      source: 'azepitopont.hu - Kilépési Csali',
    }

    // 1. Küldés a Google Sheet táblázatba (ha be van állítva a Webhook URL)
    if (GOOGLE_SHEETS_WEBHOOK_URL) {
      try {
        await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8',
          },
          body: JSON.stringify(payload),
        })
      } catch {
        // Hiba esetén továbbmegyünk a PDF letöltésre
      }
    }

    // 2. Email értesítés küldése az info@azepitopont.hu címre
    try {
      await fetch('https://formsubmit.co/ajax/info@azepitopont.hu', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject:
            audience === 'personal'
              ? `🎁 Új Egyéni Csali Letöltés (SOS Vészfék & Kiégés-Radar): ${name}`
              : `🏢 Új CÉGES Csali Letöltés (Stressz- és Súrlódás Teszt): ${name} (${company || 'Céges érdeklődő'})`,
          Dátum: payload.timestamp,
          Név: name,
          Email: email,
          Típus: payload.type,
          Cégnév: payload.company,
        }),
      })
    } catch {
      // Ha offline vagy adblocker blokkolja, akkor is odaadjuk a PDF-et
    }

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Automatikus megnyitás / letöltés indítása
    const link = document.createElement('a')
    link.href = pdfUrl
    link.download =
      audience === 'personal'
        ? 'Az_Epito_Pont_SOS_Stresszoldo_es_Kieges_Radar.pdf'
        : 'Az_Epito_Pont_Ceges_Diagnosztika_es_Ajanlat.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <>
      {/* Lebegő ajándék gomb a bal alsó sarokban, hogy bármikor újra megnyitható legyen */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 left-5 z-40 flex items-center gap-2.5 bg-primary-dark hover:bg-primary text-white px-4 py-3 rounded-full shadow-xl border border-secondary/40 transition-all duration-300 hover:scale-105 group"
        aria-label="Ingyenes Stressz-Teszt és SOS Kártya letöltése"
      >
        <span className="w-8 h-8 rounded-full bg-secondary/20 flex items-center justify-center text-secondary-light group-hover:rotate-12 transition-transform">
          <Gift className="w-4 h-4" />
        </span>
        <div className="text-left pr-1">
          <span className="block text-[10px] uppercase tracking-wider text-secondary-light font-semibold">
            Ingyenes Ajándék PDF
          </span>
          <span className="block text-xs font-medium text-white">
            SOS Stressz-Vészfék &amp; Teszt
          </span>
        </div>
      </button>

      {/* Kilépési (Exit-Intent) Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div className="relative w-full max-w-xl bg-warm rounded-3xl shadow-2xl border border-warm-dark/30 overflow-hidden">
            {/* Bezárás gomb */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-white text-gray-700 flex items-center justify-center shadow-sm transition-colors"
              aria-label="Bezárás"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Felső dekoratív fejléc */}
            <div className="bg-primary px-6 pt-7 pb-6 text-white">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-secondary-light text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Mielőtt továbbállnál – vigyél magaddal egy gyakorlati eszközt!
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-medium leading-snug">
                {audience === 'personal'
                  ? 'Kapcsold le a belső feszültséget 3×60 másodperc alatt'
                  : 'Mérd fel 2 perc alatt a csapatodban lévő rejtett súrlódást!'}
              </h3>
            </div>

            <div className="p-6 sm:p-8">
              {/* Választó fül: Egyéni vs. Céges */}
              <div className="grid grid-cols-2 gap-2 p-1 bg-warm-dark/20 rounded-xl mb-6">
                <button
                  type="button"
                  onClick={() => {
                    setAudience('personal')
                    setIsSubmitted(false)
                  }}
                  className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                    audience === 'personal'
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <HeartHandshake className="w-4 h-4 shrink-0" />
                  <span>Magánszemélyként kérem</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setAudience('corporate')
                    setIsSubmitted(false)
                  }}
                  className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                    audience === 'corporate'
                      ? 'bg-white text-primary shadow-sm'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Building2 className="w-4 h-4 shrink-0" />
                  <span>Cégvezetőként / HR-ként</span>
                </button>
              </div>

              {!isSubmitted ? (
                <>
                  {/* Mit tartalmaz a csali? */}
                  <div className="bg-white rounded-2xl p-4 border border-warm-dark/20 mb-6">
                    <p className="text-xs font-bold uppercase tracking-wider text-primary mb-2.5">
                      {audience === 'personal'
                        ? '🎁 Mit találsz az ingyenes 2 oldalas PDF-ben?'
                        : '🏢 Mit tartalmaz a Vezetői Diagnosztikai Csomag (PDF)?'}
                    </p>
                    {audience === 'personal' ? (
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>
                            <strong>A „3×60 mp” SOS Idegrendszeri Vészfék:</strong> 3 biológiailag igazolt gyakorlat vita, szorongás vagy agyi túlpörgés ellen.
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>
                            <strong>2 perces Kiégés- és Terheltség-Radar Teszt:</strong> 10 kérdéses önértékelő skála (Zöld / Sárga / Vörös zóna kiértékeléssel).
                          </span>
                        </li>
                      </ul>
                    ) : (
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>
                            <strong>12 kérdéses Vállalati Stressz- és Súrlódás Teszt:</strong> Pontos tükör arról, hol szivárog a csapat energiája (Iroda vs. Terep, kulcsemberek).
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>
                            <strong>1 oldalas Vezetői Kézikönyv &amp; Irodai SOS Kártya:</strong> Azonnal kipróbálható kommunikációs és stressz-reset eszközök.
                          </span>
                        </li>
                      </ul>
                    )}
                  </div>

                  {/* Űrlap */}
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div className="grid sm:grid-cols-2 gap-3">
                      <input
                        type="text"
                        required
                        placeholder="Keresztneved *"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-warm-dark/40 text-sm focus:outline-none focus:border-primary"
                      />
                      <input
                        type="email"
                        required
                        placeholder="E-mail címed *"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-warm-dark/40 text-sm focus:outline-none focus:border-primary"
                      />
                    </div>

                    {audience === 'corporate' && (
                      <input
                        type="text"
                        placeholder="Cégnév (opcionális)"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-warm-dark/40 text-sm focus:outline-none focus:border-primary"
                      />
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 px-6 bg-primary hover:bg-primary-dark text-white font-semibold rounded-full shadow-lg transition-colors flex items-center justify-center gap-2 text-sm sm:text-base cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      {isSubmitting
                        ? 'PDF előkészítése...'
                        : audience === 'personal'
                        ? 'Kérem az ingyenes SOS Stresszoldót & Tesztet (PDF)'
                        : 'Kérem az ingyenes Céges Diagnosztikai Tesztet (PDF)'}
                    </button>

                    <p className="text-[11px] text-center text-gray-500">
                      🔒 Adataidat bizalmasan kezelem. A gombra kattintva a PDF azonnal letöltődik.
                    </p>
                  </form>
                </>
              ) : (
                /* Sikeres beküldés utáni nézet */
                <div className="text-center py-4 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-primary/15 text-primary flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-serif text-2xl text-gray-900">
                    Kedves {name || 'Érdeklődő'}! A PDF-ed máris elkészült.
                  </h4>
                  <p className="text-sm text-gray-600 max-w-md mx-auto">
                    A letöltés automatikusan elindult. Ha a böngésződ megállította, kattints az alábbi gombra a megnyitáshoz:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
                    <a
                      href={pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      download
                      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-full font-semibold text-sm hover:bg-primary-dark transition-colors shadow-md"
                    >
                      <Download className="w-4 h-4" />
                      PDF megnyitása / letöltése
                    </a>
                    <a
                      href="https://app.minup.io/book/azepitopont"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary border border-primary/30 rounded-full font-semibold text-sm hover:bg-warm-dark/10 transition-colors"
                    >
                      Időpontot foglalok Izabellához →
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

