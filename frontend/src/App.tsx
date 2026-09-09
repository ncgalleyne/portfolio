import { PortfolioProvider, usePortfolio } from './context/PortfolioContext'
import { Collection } from './components/collection/Collection'
import { Pack } from './components/pack/Pack'
import { PackOpening } from './components/pack/PackOpening'
import { CollectionControls } from './components/collection/CollectionControls'

function AppHeader() {
  const { appState, resetToPack } = usePortfolio()

  return (
    <header className="w-full border-b-2 border-pitch-dark bg-parchment-light px-4 sm:px-6 py-3 flex items-center justify-between shadow-sm z-30">
      <div className="flex items-center space-x-3">
        <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-pitch text-vintage-gold font-bold text-xs shadow-inner">
          94
        </span>
        <div>
          <h1 className="font-header text-xl sm:text-2xl tracking-wider text-pitch-dark leading-none">
            PREMIER DEVELOPER CARD ARCHIVE
          </h1>
          <p className="text-[10px] tracking-widest text-pitch-light font-mono uppercase mt-0.5">
            1994&ndash;2026 Rookie Draft Series &bull; Silicon Valley United
          </p>
        </div>
      </div>

      <div className="flex items-center space-x-3">
        <div className="hidden sm:flex items-center border-2 border-vintage-gold bg-parchment px-3 py-1 rounded shadow-sm">
          <span className="text-[11px] font-bold text-vintage-gold mr-2 uppercase tracking-tight">
            Archival Grade
          </span>
          <span className="bg-vintage-gold text-pitch-dark px-1.5 py-0.5 rounded font-header text-sm tracking-wider font-bold">
            GEM-MT 10
          </span>
        </div>

        {appState !== 'sealed' && (
          <button
            type="button"
            onClick={resetToPack}
            className="flex items-center space-x-1.5 bg-parchment-dark hover:bg-parchment text-pitch-dark border border-pitch-dark/40 px-3 py-1.5 rounded text-xs font-bold transition shadow-sm active:scale-95"
            aria-label="Reseal pack"
          >
            <svg className="w-4 h-4 text-pitch" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              />
            </svg>
            <span>SEAL PACK</span>
          </button>
        )}
      </div>
    </header>
  )
}

function AppContent() {
  const { appState } = usePortfolio()

  return (
    <div className="flex flex-col min-h-screen">
      <AppHeader />

      <main className="relative flex-1 pitch-mat flex items-center justify-center p-4 sm:p-8 overflow-hidden min-h-165">
        <div className="absolute inset-4 pointer-events-none border-2 border-pitch/10 rounded-2xl flex items-center justify-center">
          <div className="w-48 h-48 rounded-full border-2 border-pitch/10 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-pitch/20" />
          </div>
          <div className="absolute left-0 top-1/4 bottom-1/4 w-32 border-r-2 border-y-2 border-pitch/10" />
          <div className="absolute right-0 top-1/4 bottom-1/4 w-32 border-l-2 border-y-2 border-pitch/10" />
          <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-pitch/10" />
        </div>

        {appState === 'sealed' && <Pack />}
        {appState === 'opening' && <PackOpening />}
        {appState === 'collection' && <Collection />}
      </main>

      {appState === 'collection' && <CollectionControls />}
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
