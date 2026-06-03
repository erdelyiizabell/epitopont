import { Heart, Users, Sparkles } from 'lucide-react'

const services = [
  {
    icon: Users,
    title: 'Céges Well-being',
    description: 'Jóga, mindfulness és konfliktuskezelés a munkahelyeden. Csökkentsd a kiégést, növeld a csapat összetartását.',
    image: 'corporate-yoga.png',
    href: '#ceges-wellbeing',
  },
  {
    icon: Heart,
    title: 'Mediáció',
    description: 'Biztonságos tér a valódi kommunikációhoz. Munkahelyi, családi és párkapcsolati konfliktusok megoldása.',
    image: 'mediation.png',
    href: '#mediacio',
  },
  {
    icon: Sparkles,
    title: 'Gyerek Mindful',
    description: 'Játékos figyelemfejlesztés, érzelemszabályozás és stresszoldás gyerekeknek 6 éves kortól.',
    image: 'yoga-meditation.png',
    href: '#gyerek-mindful',
  },
]

export default function Services() {
  return (
    <section id="szolgaltatasok" className="py-24 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl font-medium text-text">
            Szolgáltatások
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-56 overflow-hidden">
                <img
                  src={`${import.meta.env.BASE_URL}images/${service.image}`}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text mb-3">{service.title}</h3>
                <p className="text-text-light leading-relaxed">{service.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
