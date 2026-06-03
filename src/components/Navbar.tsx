import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '#szolgaltatasok', label: 'Szolgáltatások' },
    { href: '#ceges-wellbeing', label: 'Céges Well-being' },
    { href: '#mediacio', label: 'Mediáció' },
    { href: '#gyerek-mindful', label: 'Gyerek Mindful' },
    { href: '#rolam', label: 'Rólam' },
    { href: '#kapcsolat', label: 'Kapcsolat' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <a href="#" className="flex items-center gap-3">
            <img
              src={`${import.meta.env.BASE_URL}images/logo.png`}
              alt="Az Építő Pont"
              className="h-20 w-auto"
            />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-text-light hover:text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kapcsolat"
              className="ml-4 px-6 py-2.5 bg-primary text-white rounded-full text-sm font-medium hover:bg-primary-dark transition-colors duration-200"
            >
              Időpontfoglalás
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-text-light hover:text-primary"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-warm-dark">
          <div className="px-4 py-4 space-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-sm font-medium text-text-light hover:text-primary py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kapcsolat"
              onClick={() => setIsOpen(false)}
              className="block text-center px-6 py-2.5 bg-primary text-white rounded-full text-sm font-medium mt-4"
            >
              Időpontfoglalás
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
