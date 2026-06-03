export default function Testimonial() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative">
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-8xl text-primary/20 font-serif">
            "
          </div>
          <img
            src={`${import.meta.env.BASE_URL}images/hero-burnout.png`}
            alt=""
            className="w-full max-w-2xl mx-auto rounded-2xl shadow-xl mb-12"
          />
          <div className="bg-warm rounded-2xl p-8 md:p-12 -mt-16 relative z-10 max-w-2xl mx-auto shadow-sm">
            <p className="font-serif text-xl md:text-2xl text-text italic leading-relaxed mb-6">
              Kívülről erős. Belül már fáradt.
            </p>
            <p className="text-text-light leading-relaxed mb-4">
              Tartja magát. Mert kell. Mert fontos neki mások boldogsága.
              De néha csak arra vágyik, hogy valaki meglássa, mennyit cipel.
            </p>
            <p className="text-primary font-medium">
              Ha te is így érzed, nem vagy egyedül.
              <br />
              A kiégés nem gyengeség. Hanem jelzés.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
