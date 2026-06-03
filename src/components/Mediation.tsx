import { Shield, Heart, Users, Home } from 'lucide-react'

const areas = [
  { icon: Users, title: 'Munkahelyi konfliktusok', description: 'Csapaton belüli feszültségek, kommunikációs problémák feltárása és megoldása.' },
  { icon: Shield, title: 'Vezető–munkatárs kommunikáció', description: 'Hatékony párbeszéd kialakítása a vezetők és beosztottak között.' },
  { icon: Home, title: 'Családi, párkapcsolati mediáció', description: 'Biztonságos keretek között segítek a családi kommunikáció helyreállításában.' },
  { icon: Heart, title: 'Válási mediáció', description: 'Méltósággal és kölcsönös tisztelettel a közös megoldás felé.' },
]

export default function Mediation() {
  return (
    <section id="mediacio" className="py-24 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 rounded-2xl overflow-hidden shadow-xl">
            <img
              src={`${import.meta.env.BASE_URL}images/mediation.png`}
              alt="Mediáció - biztonságos tér a kommunikációhoz"
              className="w-full h-auto"
            />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
              Mediáció
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-text mb-4">
              Biztonságos tér
              <br />
              <span className="text-primary italic">a valódi kommunikációhoz.</span>
            </h2>
            <p className="text-text-light leading-relaxed mb-4">
              „A mediáció nem a győzelemről szól, hanem a megértésről és a megoldásról."
            </p>
            <p className="text-text-light leading-relaxed mb-8">
              Semlegességre, bizalomra, tiszteletre és együttműködésre épül a mediációs folyamat.
              Együtt könnyebb jó döntéseket hozni.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {areas.map((area) => (
                <div key={area.title} className="bg-white rounded-xl p-5 shadow-sm">
                  <area.icon className="w-8 h-8 text-primary mb-3" />
                  <h4 className="font-semibold text-text text-sm mb-1">{area.title}</h4>
                  <p className="text-xs text-text-light leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
