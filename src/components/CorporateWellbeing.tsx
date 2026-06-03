import { Check } from 'lucide-react'

const packages = [
  {
    name: 'START csomag',
    features: ['Heti 1 jóga vagy mindfulness alkalom', '90 perc', '15 fő'],
    priceWeek: '49.000 Ft / hét',
    priceMonth: '175.000 Ft / hónap',
    accent: false,
  },
  {
    name: 'FLOW csomag',
    features: ['Heti 2 alkalom (jóga és mindfulness)', '90 perc', '15 fő'],
    priceWeek: '89.000 Ft / hét',
    priceMonth: '319.000 Ft / hónap',
    accent: true,
  },
  {
    name: 'HARMÓNIA csomag',
    subtitle: 'Komplex vállalati program',
    features: [
      'Jóga — heti 2 alkalom, 15 fővel',
      'Konfliktuskezelés — heti 2 alkalom',
      'Személyes kísérés — 5 fő számára, havi 2 alkalom',
    ],
    priceWeek: null,
    priceMonth: '799.000 Ft / hónap',
    accent: false,
  },
]

export default function CorporateWellbeing() {
  return (
    <section id="ceges-wellbeing" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
              Céges Well-being
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-text mb-6">
              Kiegyensúlyozott csapat,
              <br />
              <span className="text-primary italic">eredményes munkahely.</span>
            </h2>
            <p className="text-text-light leading-relaxed mb-6">
              A céges well-being programjaim segítenek csökkenteni a munkahelyi stresszt,
              növelik a csapat összetartó erejét és támogatják a dolgozók mentális egészségét.
              Mert a boldog munkatárs produktív munkatárs.
            </p>
            <p className="text-text-light leading-relaxed">
              A programok személyre szabhatók — legyen szó kisebb csapatról vagy
              nagyvállalati környezetről. Minden foglalkozás a ti igényeitekhez igazodik.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img
              src={`${import.meta.env.BASE_URL}images/corporate-yoga.png`}
              alt="Céges jóga és well-being program"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl p-8 ${
                pkg.accent
                  ? 'bg-primary text-white shadow-xl scale-105'
                  : 'bg-warm border border-warm-dark'
              }`}
            >
              <h3 className={`text-xl font-bold mb-1 ${pkg.accent ? 'text-white' : 'text-text'}`}>
                {pkg.name}
              </h3>
              {pkg.subtitle && (
                <p className={`text-sm mb-4 ${pkg.accent ? 'text-white/80' : 'text-text-light'}`}>
                  {pkg.subtitle}
                </p>
              )}
              <ul className="space-y-3 my-6">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        pkg.accent ? 'text-secondary-light' : 'text-primary'
                      }`}
                    />
                    <span className={`text-sm ${pkg.accent ? 'text-white/90' : 'text-text-light'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="pt-4 border-t border-white/20">
                {pkg.priceWeek && (
                  <p className={`text-sm ${pkg.accent ? 'text-white/70' : 'text-text-light'}`}>
                    {pkg.priceWeek}
                  </p>
                )}
                <p className={`text-lg font-bold ${pkg.accent ? 'text-white' : 'text-primary'}`}>
                  {pkg.priceMonth}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
