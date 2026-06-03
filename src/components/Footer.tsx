export default function Footer() {
  return (
    <footer className="py-12 bg-[#234b4b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}images/logo-footer.jpg`}
              alt="Az Építő Pont"
              className="h-20 w-auto rounded-lg"
            />
          </div>
          <p className="text-white/60 text-sm">
            &copy; {new Date().getFullYear()} Az Építő Pont — Well-Being & Mediáció. Minden jog fenntartva.
          </p>
          <div className="flex gap-6">
            <a href="#szolgaltatasok" className="text-white/60 hover:text-white text-sm transition-colors">
              Szolgáltatások
            </a>
            <a href="#rolam" className="text-white/60 hover:text-white text-sm transition-colors">
              Rólam
            </a>
            <a href="#kapcsolat" className="text-white/60 hover:text-white text-sm transition-colors">
              Kapcsolat
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

