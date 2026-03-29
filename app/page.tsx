import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import BentoSection from './components/BentoSection'
import FeaturesSection from './components/FeaturesSection'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BentoSection />
        <FeaturesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  )
}
