export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={`${import.meta.env.BASE_URL}images/meditation-office.png`}
          alt="Az Építő Pont - Well-being és Mediáció"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl">
          <p className="text-primary font-medium text-sm uppercase tracking-wider mb-4">
            Well-Being | Mediáció | Kapcsolódás
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-medium text-text leading-tight mb-6">
            Építsük együtt
            <br />
            <span className="text-primary italic">a kapcsolatokat.</span>
          </h1>
          <p className="text-lg text-text-light leading-relaxed mb-8 max-w-lg">
            Egyszerre nő. Egyszerre szakember. Segítek megtalálni az egyensúlyt
            — a munkában, a kapcsolatokban, és legfőképp: önmagaddal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#szolgaltatasok"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white rounded-full font-medium hover:bg-primary-dark transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Szolgáltatások
            </a>
            <a
              href="#rolam"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary rounded-full font-medium hover:bg-primary hover:text-white transition-all duration-200"
            >
              Ismerj meg
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
