import { Check } from 'lucide-react'
import { getAssetUrl } from '../utils/assets'

const packages = [
  {
    name: 'PULZUS Tesztnap',
    subtitle: 'Kockázatmentes, 1 alkalmas belépő',
    forWhom: 'Cégeknek, akik elköteleződés nélkül szeretnék letesztelni, hogyan csökken le 90 perc alatt az irodai feszültség.',
    features: [
      'Előzetes Stressz- és Súrlódás Diagnosztika',
      '90 perc helyszíni kombinált alkalom (max. 15 fő)',
      '45 perc vezetett kommunikációs feszültségoldás',
      '45 perc irodai gerinc-, nyak- és stressz-reset',
      '15 perc vezetői kiértékelés és javaslat',
    ],
    bonus: 'Havi csomag indításakor a 49.000 Ft-ot 100%-ban jóváírjuk!',
    priceWeek: 'Egyszeri alkalom',
    priceMonth: '49.000 Ft',
    accent: false,
    gold: false,
  },
  {
    name: 'FÓKUSZ csomag',
    subtitle: 'Fizikai és mentális feltöltődés',
    forWhom: 'Ülőmunkát végző, leterhelt csapatoknak, ahol a fő gond a hát-/derékfájás, a fáradtság és a napi stressz.',
    features: [
      'Heti 1× 90 perc Irodai Jóga & Gerinc-Reset (15 fő)',
      'Mindfulness fókusz- és légzéstréning',
      'Nyak-, váll- és derékfeszültségek célzott oldása',
      'Negyedéves Stressz-Tükör mérés a csapatnak',
    ],
    bonus: 'Eredmény: Frissebb, fókuszáltabb csapat, kevesebb hiba.',
    priceWeek: '49.000 Ft / hét',
    priceMonth: '179.000 Ft / hónap',
    accent: false,
    gold: false,
  },
  {
    name: 'SZINKRON csomag',
    subtitle: '🔥 Legnépszerűbb • Mediáció & Regeneráció',
    forWhom: 'Nagy nyomás alatt dolgozó cégeknek, ahol a stressz mellett részlegek közötti súrlódások is előfordulnak.',
    features: [
      'Heti 1× 90 perc Fizikai & Mentális Reset (jóga + mindfulness)',
      'Heti 1× 90 perc „Csapat-Szinkron” & Mediáció (15 fő)',
      'Részlegek közötti elakadások, feszültségek feloldása',
      'SOS Mediációs keret akut konfliktusok esetére',
    ],
    bonus: 'Eredmény: Tiszta kommunikáció, megszűnik az egymásra mutogatás.',
    priceWeek: '89.000 Ft / hét',
    priceMonth: '329.000 Ft / hónap',
    accent: true,
    gold: false,
  },
  {
    name: 'HARMÓNIA VIP',
    subtitle: 'Komplex vállalati és vezetői pajzs',
    forWhom: 'Közép- és nagyvállalatoknak, ahol a kulcsemberek és vezetők megtartása, tehermentesítése a legfontosabb.',
    features: [
      'Heti 2× 90 perc Csoportos Well-being & Mediáció (2×15 fő)',
      'Kulcsember Pajzs: 5 fő vezetőnek havi 2× egyéni kísérés',
      'Négyszemközti stresszkezelés és konfliktus-coaching',
      'Havi 1× Vezetői Stratégiai Visszajelzés (anonimizált)',
    ],
    bonus: 'Eredmény: Megtartott kulcsemberek, tehermentesített vezetők.',
    priceWeek: 'Komplex havi program',
    priceMonth: '690.000 Ft / hónap',
    accent: false,
    gold: true,
  },
]

export default function CorporateWellbeing() {
  return (
    <section id="ceges-wellbeing" className="py-24 bg-white scroll-mt-24">
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
              src={getAssetUrl('images/corporate-yoga.png')}
              alt="Céges jóga és well-being program"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
 
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 ${
                pkg.gold
                  ? 'bg-gradient-to-br from-secondary-light via-secondary to-[#b39359] text-text shadow-xl hover:scale-105 border border-secondary/30'
                  : pkg.accent
                  ? 'bg-primary text-white shadow-xl lg:scale-105'
                  : 'bg-warm border border-warm-dark'
              }`}
            >
              <div>
                <h3 className={`text-xl font-bold mb-1 ${pkg.gold ? 'text-text' : pkg.accent ? 'text-white' : 'text-text'}`}>
                  {pkg.name}
                </h3>
                {pkg.subtitle && (
                  <p className={`text-xs font-medium uppercase tracking-wide mb-4 ${pkg.gold ? 'text-text-light/90' : pkg.accent ? 'text-secondary-light' : 'text-primary'}`}>
                    {pkg.subtitle}
                  </p>
                )}
                {pkg.forWhom && (
                  <div className={`rounded-xl p-3.5 mb-5 text-xs leading-relaxed ${
                    pkg.gold
                      ? 'bg-white/40 text-text'
                      : pkg.accent
                      ? 'bg-white/10 text-white/90'
                      : 'bg-white text-text-light'
                  }`}>
                    <span className="font-semibold block mb-1">🎯 Kinek szól?</span>
                    {pkg.forWhom}
                  </div>
                )}
                <p className={`text-xs font-semibold uppercase tracking-wider mb-2.5 ${pkg.gold ? 'text-text' : pkg.accent ? 'text-white/80' : 'text-text'}`}>
                  Mit kap a cég?
                </p>
                <ul className="space-y-2.5 mb-5">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <Check
                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                          pkg.gold ? 'text-primary-dark' : pkg.accent ? 'text-secondary-light' : 'text-primary'
                        }`}
                      />
                      <span className={`text-sm leading-snug ${pkg.gold ? 'text-text-light' : pkg.accent ? 'text-white/90' : 'text-text-light'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                {pkg.bonus && (
                  <p className={`text-xs italic mb-4 ${pkg.gold ? 'text-text/90' : pkg.accent ? 'text-secondary-light' : 'text-primary'}`}>
                    ✨ {pkg.bonus}
                  </p>
                )}
                <div className={`pt-4 border-t ${pkg.gold ? 'border-text/10' : pkg.accent ? 'border-white/20' : 'border-warm-dark'}`}>
                  {pkg.priceWeek && (
                    <p className={`text-xs ${pkg.gold ? 'text-text-light/80' : pkg.accent ? 'text-white/70' : 'text-text-light'}`}>
                      {pkg.priceWeek}
                    </p>
                  )}
                  <p className={`text-lg font-bold ${pkg.gold ? 'text-text' : pkg.accent ? 'text-white' : 'text-primary'}`}>
                    {pkg.priceMonth}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
