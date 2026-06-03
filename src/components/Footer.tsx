import { useEffect, useState } from 'react'

export default function Footer() {
  const [bgColor, setBgColor] = useState('#2d3748') // fallback color

  useEffect(() => {
    const img = new Image()
    img.crossOrigin = 'Anonymous'
    img.src = `${import.meta.env.BASE_URL}images/logo-footer.jpg`
    img.onload = () => {
      const canvas = document.createElement('canvas')
      canvas.width = 1
      canvas.height = 1
      const ctx = canvas.getContext('2d')
      if (ctx) {
        // Draw the top-left pixel (5, 5) onto the 1x1 canvas to extract the background color
        ctx.drawImage(img, 5, 5, 1, 1, 0, 0, 1, 1)
        const [r, g, b] = ctx.getImageData(0, 0, 1, 1).data
        const hex = '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('')
        setBgColor(hex)
      }
    }
  }, [])

  return (
    <footer className="py-12 transition-colors duration-300" style={{ backgroundColor: bgColor }}>
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

