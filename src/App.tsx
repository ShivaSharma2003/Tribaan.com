import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Gallery from './components/Gallery'
import Services from './components/Services'
import Experience from './components/Experience'
import Journey from './components/Journey'
import CTA from './components/CTA'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="bg-black text-white">
      <Navigation />
      <Hero />
      <Gallery />
      <About />
      <Services />
      <Experience />
      <Journey />
      <CTA />
      <Footer />
    </div>
  )
}

export default App