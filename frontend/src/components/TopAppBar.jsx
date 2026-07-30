export default function TopAppBar({ onMenuToggle }) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-container-lowest/90 backdrop-blur-sm">
        <div className="flex items-center justify-between px-margin-mobile md:px-margin-desktop h-14">
            <span className="text-primary font-semibold text-lg tracking-tight">
                Nate Alleyne
            </span>
            <button 
                onClick={onMenuToggle} 
                aria-label="Open navigation menu"
                className="flex flex-col gap-[5px] p-2 group"
            >
                <span className="block w-5 h-[2px] bg-primary transition-colors group-hover:bg-accent"></span>
                <span className="block w-5 h-[2px] bg-primary transition-colors group-hover:bg-accent"></span>
                <span className="block w-3.5 h-[2px] bg-primary transition-colors group-hover:bg-accent ml-auto"></span>
            </button>
        </div>
    </header>
  )
}