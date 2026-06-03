import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/Services'
import CorporateWellbeing from '../components/CorporateWellbeing'
import Mediation from '../components/Mediation'
import KidsMindful from '../components/KidsMindful'
import About from '../components/About'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Index() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <CorporateWellbeing />
      <Mediation />
      <KidsMindful />
      <About />
      <Contact />
      <Footer />
    </>
  )
}
