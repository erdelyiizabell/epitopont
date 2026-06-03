import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="kapcsolat" className="py-24 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-secondary-light font-medium text-sm uppercase tracking-wider mb-3">
            Kapcsolat
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-white mb-4">
            Vedd fel velem a kapcsolatot!
          </h2>
          <p className="text-white/80 max-w-xl mx-auto leading-relaxed">
            Ha felkeltette az érdeklődésedet bármelyik szolgáltatásom, vagy
            egyszerűen csak beszélgetni szeretnél — keress bátran.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <Mail className="w-8 h-8 text-secondary-light mx-auto mb-4" />
            <h4 className="text-white font-semibold mb-2">E-mail</h4>
            <a href="mailto:info@azepitopont.hu" className="text-white/80 hover:text-white transition-colors text-sm">
              info@azepitopont.hu
            </a>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <Phone className="w-8 h-8 text-secondary-light mx-auto mb-4" />
            <h4 className="text-white font-semibold mb-2">Telefon</h4>
            <a href="tel:+36304078583" className="text-white/80 hover:text-white transition-colors text-sm">
              +36 30 407 8583
            </a>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
            <MapPin className="w-8 h-8 text-secondary-light mx-auto mb-4" />
            <h4 className="text-white font-semibold mb-2">Helyszín</h4>
            <p className="text-white/80 text-sm">Budapest</p>
          </div>
        </div>

        <div className="text-center">
          <a
            href="mailto:info@azepitopont.hu"
            className="inline-flex items-center justify-center px-10 py-4 bg-white text-primary rounded-full font-semibold hover:bg-warm transition-colors duration-200 shadow-lg"
          >
            Írj nekem!
          </a>
        </div>
      </div>
    </section>
  )
}
