import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Countries from '../components/Countries'
import Pricing from '../components/Pricing'
import Requirements from '../components/Requirements'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Countries />
      <Pricing />
      <Requirements />
      <Contact />
    </main>
  )
}
