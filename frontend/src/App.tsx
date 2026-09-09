import { PortfolioProvider, usePortfolio } from './context/PortfolioContext'
import { Collection } from './components/collection/Collection'
import { Pack } from './components/pack/Pack'
import { PackOpening } from './components/pack/PackOpening'

function AppContent() {
  const { appState, openPack } = usePortfolio()

  return (
    <div className="w-full min-h-screen">
      {appState === 'sealed' && <Pack />}

      {appState === 'opening' && <PackOpening />}

      {appState === 'collection' && <Collection />}
    </div>
  )
}

function App() {
  return (
    <PortfolioProvider>
      <AppContent />
    </PortfolioProvider>
  )
}

export default App
