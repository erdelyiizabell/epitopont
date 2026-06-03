import { Brain, Wind, Smile, HelpCircle } from 'lucide-react'

const features = [
  { icon: Brain, title: 'Figyelemfejlesztés', description: 'Játékos gyakorlatok a koncentráció javítására' },
  { icon: Smile, title: 'Érzelemszabályozás', description: 'Eszközök a nehéz érzelmek kezelésére' },
  { icon: Wind, title: 'Légzőgyakorlatok', description: 'Egyszerű technikák a megnyugváshoz' },
  { icon: HelpCircle, title: 'Stresszoldás', description: 'Relaxációs módszerek gyerekeknek' },
]

const faq = [
  { q: 'Hány éves kortól?', a: '6 éves kortól' },
  { q: 'Kell-e előképzettség?', a: 'Nem szükséges' },
  { q: 'Hiperaktív gyerek jöhet-e?', a: 'Speciális esetek mindig külön egyeztetés alapján' },
]

export default function KidsMindful() {
  return (
    <section id="gyerek-mindful" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
            Gyerek Mindful Foglalkozás
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-text mb-4">
            Játékosan a tudatosság felé.
          </h2>
          <p className="text-text-light max-w-2xl mx-auto leading-relaxed">
            A gyerekek is megérdemlik, hogy megtanulják kezelni az érzelmeiket és
            megtalálják a belső nyugalmukat — játékos, életkorukhoz illő módszerekkel.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-6 rounded-2xl bg-warm">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-semibold text-text mb-2">{feature.title}</h4>
              <p className="text-sm text-text-light">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={`${import.meta.env.BASE_URL}images/services-collage.png`}
              alt="Gyerek mindfulness foglalkozások"
              className="w-full h-auto"
            />
          </div>

          <div>
            <div className="bg-warm rounded-2xl p-8 mb-8">
              <h4 className="font-semibold text-text mb-2">Iskolai program</h4>
              <div className="flex flex-wrap gap-4 text-sm text-text-light">
                <span className="bg-white px-4 py-2 rounded-full">45 perc / alkalom</span>
                <span className="bg-white px-4 py-2 rounded-full">Max. 10 fő</span>
                <span className="bg-white px-4 py-2 rounded-full font-semibold text-primary">25.000 Ft</span>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-text mb-4">Gyakori kérdések</h4>
              <div className="space-y-4">
                {faq.map((item) => (
                  <div key={item.q} className="border-b border-warm-dark pb-4">
                    <p className="font-medium text-text text-sm">{item.q}</p>
                    <p className="text-text-light text-sm mt-1">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
