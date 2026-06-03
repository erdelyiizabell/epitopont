export default function About() {
  return (
    <section id="rolam" className="py-24 bg-warm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-medium text-sm uppercase tracking-wider mb-3">
              Rólam
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-text mb-6">
              Erdélyi Izabella vagyok,
              <br />
              <span className="text-primary italic">és várlak titeket.</span>
            </h2>
            <div className="space-y-4 text-text-light leading-relaxed">
              <p>
                Egyszerre nő. Egyszerre szakember. Anya, feleség, vezető, támasz —
                minden nap egyensúlyozom. Nem tökéletesen, de jelen vagyok.
                Otthon. A munkámban. A kapcsolataimban. És legfőképp: önmagam mellett.
              </p>
              <p>
                Hiszem, hogy a valódi változás belülről indul. Évek óta segítek embereknek,
                csapatoknak és családoknak abban, hogy megtalálják a saját útjukat az egyensúly felé.
                Legyen szó céges well-being programról, mediációról vagy gyerekek tudatos neveléséről —
                mindig a kapcsolódás áll a középpontban.
              </p>
              <p>
                A módszereim a jóga, a mindfulness és a mediáció eszköztárából merítenek,
                de mindig személyre szabottan, a te igényeidhez igazodva.
              </p>
              <p className="font-medium text-text">
                Kapcsolódás. Egyensúly. Tudatosság.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={`${import.meta.env.BASE_URL}images/about-portrait.png`}
                alt="Erdélyi Izabella - Az Építő Pont"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-lg max-w-xs hidden lg:block">
              <p className="font-serif text-primary italic text-lg">
                „A felismerés az első lépés. A változás innen kezdődik."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
