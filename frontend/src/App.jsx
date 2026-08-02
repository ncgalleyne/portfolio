import { useState } from 'react'
import './App.css'
import { PortfolioProvider } from './context/PortfolioContext'
import TopAppBar from './components/TopAppBar'
import NavigationDrawer from './components/NavigationDrawer'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import Experience from './components/Experience'
import CaseStudies from './components/CaseStudies'
import TechStackMarquee from './components/TechStackMarquee'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <PortfolioProvider>
      <div className='min-h-screen bg-surface-default'>
        <TopAppBar onMenuToggle={() => setIsDrawerOpen(true)} />
        <NavigationDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

        <main>
          <Hero />
          <Expertise />
          <Experience />
          <CaseStudies />
          <TechStackMarquee />
          <Contact />
        </main>

        <Footer />
      </div>
    </PortfolioProvider>
  )
}

export default App
