export default function NavigationDrawer({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <nav
        className={`fixed top-0 right-0 z-50 h-full w-72 bg-container-lowest border-l border-outline-variant
        transform transition-transform duration-300 ease-in-out
        ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            aria-label="Close navigation menu"
            className="text-outline hover:text-accent transition-colors text-2xl leading-none p-2"
          >
            ×
          </button>
        </div>

        <ul className="flex flex-col gap-2 px-6 mt-8">
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                onClick={onClose}
                className="block py-3 px-4 text-primary text-lg font-medium rounded
                hover:bg-container-high hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}