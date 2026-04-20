export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-80 border-b border-lime-400 py-4">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-lime-400" style={{ fontFamily: "'Fredoka One', cursive" }}>
          CrocoCrocs
        </div>
        <a
          href="/lore-gallery"
          className="px-6 py-2 rounded-lg bg-gradient-to-r from-lime-400 via-green-400 to-emerald-500 text-black font-black hover:shadow-lg hover:shadow-lime-500/50 transition-all"
          style={{ fontFamily: "'Fredoka One', cursive" }}
        >
          LORE
        </a>
      </div>
    </nav>
  );
}
