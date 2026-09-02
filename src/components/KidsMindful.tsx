import { Brain, Wind, Smile, HelpCircle, Gift, Users } from 'lucide-react'
import { getAssetUrl } from '../utils/assets'

const features = [
  { icon: Brain, title: 'Figyelemfejlesztés', description: 'Játékos gyakorlatok a koncentráció javítására' },
  { icon: Smile, title: 'Érzelemszabályozás', description: 'Eszközök a nehéz érzelmek kezelésére' },
  { icon: Wind, title: 'Légzőgyakorlatok', description: 'Egyszerű technikák a megnyugváshoz' },
  { icon: HelpCircle, title: 'Stresszoldás', description: 'Relaxációs módszerek gyerekeknek' },
]

const programPackages = [
  {
    title: 'Csoportos óra',
    description: 'Alkalmi csoportos fejlesztő foglalkozás',
    price: '3.800 Ft / fő',
    details: 'Ideális csoportlétszám: 15 fő',
    badge: null,
  },
  {
    title: '5 alkalmas programcsomag',
    description: 'Rendszeres figyelemfejlesztő és stresszoldó sorozat',
    price: '3.000 Ft / fő / alkalom',
    details: 'Ideális csoportlétszám: 15 fő',
    badge: 'Kedvelt választás',
  },
  {
    title: '12 hetes komplex program',
    description: 'Mélységi érzelemszabályozási és mindfulness program',
    price: '2.800 Ft / fő / alkalom',
    details: 'Heti 2 alkalommal, összesen 24 foglalkozás',
    badge: 'Legjobb érték',
  },
]

const faq = [
  { q: 'Hány éves kortól?', a: '6 éves kortól ajánlott.' },
  { q: 'Kell-e előképzettség?', a: 'Semmilyen előképzettség nem szükséges.' },
  { q: 'Hiperaktív vagy túlmozgásos gyerek is jöhet?', a: 'Igen, de speciális esetekben előzetes egyeztetés javasolt.' },
]

export default function KidsMindful() {
  return (
    <section id="gyerek-mindful" className="py-24 bg-white scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            🌱 Gyermek mindfulness & érzelmi jóllét program
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-text mb-4">
            Játékosan a tudatosság felé.
          </h2>
          <p className="text-text-light max-w-2xl mx-auto leading-relaxed">
            A gyerekek is megérdemlik, hogy megtanulják kezelni az érzelmeiket és
            megtalálják a belső nyugalmukat — játékos, életkorukhoz illő módszerekkel.
          </p>
        </div>

        {/* Feature Icons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-6 rounded-2xl bg-warm border border-warm-dark/20 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-semibold text-text mb-2">{feature.title}</h4>
              <p className="text-sm text-text-light">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Programs & Offer Cards */}
        <div className="mb-16">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <h3 className="font-serif text-2xl font-medium text-text">Programváltozatok & Árak</h3>
            <div className="flex items-center gap-2 bg-warm px-4 py-2 rounded-full text-xs sm:text-sm font-medium text-primary border border-primary/20">
              <Users className="w-4 h-4" />
              <span>A programok ideális csoportlétszáma 15 fő.</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {programPackages.map((pkg) => (
              <div key={pkg.title} className="relative bg-warm/80 rounded-2xl p-6 border border-warm-dark/40 shadow-sm flex flex-col justify-between hover:border-primary/40 transition-colors">
                {pkg.badge && (
                  <span className="absolute -top-3 right-6 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    {pkg.badge}
                  </span>
                )}
                <div>
                  <h4 className="font-semibold text-text text-lg mb-2">{pkg.title}</h4>
                  <p className="text-xs text-text-light mb-4 leading-relaxed">{pkg.description}</p>
                </div>
                <div>
                  <div className="text-xs font-medium text-text-light/80 mb-1">{pkg.details}</div>
                  <div className="text-xl font-bold text-primary">{pkg.price}</div>
                </div>
              </div>
            ))}
          </div>

          {/* 🎁 Bemutató alkalmak highlight card */}
          <div className="bg-gradient-to-r from-primary/10 via-warm to-secondary/10 border-2 border-primary/30 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-primary text-white flex items-center justify-center flex-shrink-0 shadow-md">
                <Gift className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-bold text-text mb-1 flex items-center gap-2">
                  🎁 Bemutató alkalmak
                </h4>
                <p className="text-sm text-text-light leading-relaxed">
                  Az első együttműködés előtt <strong className="text-text">2 × 45 perces bemutató foglalkozás díjmentesen</strong> igénybe vehető.
                </p>
              </div>
            </div>
            <a
              href="#kapcsolat"
              className="whitespace-nowrap px-6 py-3 bg-primary text-white rounded-full font-medium text-sm hover:bg-primary-dark transition-colors shadow-sm"
            >
              Kapcsolatfelvétel
            </a>
          </div>
        </div>

        {/* Section Image & FAQ */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-warm-dark/20">
            <img
              src={getAssetUrl('images/services-collage.png')}
              alt="Gyerek mindfulness foglalkozások"
              className="w-full h-auto object-cover"
            />
          </div>

          <div>
            <h4 className="font-semibold text-text text-xl mb-6">Gyakori kérdések</h4>
            <div className="space-y-4">
              {faq.map((item) => (
                <div key={item.q} className="bg-warm/50 rounded-xl p-4 border border-warm-dark/30">
                  <p className="font-medium text-text text-sm">{item.q}</p>
                  <p className="text-text-light text-sm mt-1">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
