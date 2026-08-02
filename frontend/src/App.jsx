import { useState } from 'react'
import './App.css'
import { PortfolioProvider } from './context/PortfolioContext'
import TopAppBar from './components/TopAppBar'
import NavigationDrawer from './components/NavigationDrawer'
import Hero from './components/Hero'
import Expertise from './components/Expertise'
import TechStackMarquee from './components/TechStackMarquee'
import AboutMe from './components/AboutMe'
import ProjectsPreview from './components/ProjectsPreview'
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
          <TechStackMarquee />
          <AboutMe />
          <ProjectsPreview />
          <Contact />
        </main>

        <Footer />
      </div>
    </PortfolioProvider>
  )
}

export default App
