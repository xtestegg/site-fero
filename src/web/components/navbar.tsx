interface NavbarProps {
  currentPage?: "home" | "palette" | "gallery";
}

export function Navbar({ currentPage = "home" }: NavbarProps) {
  return (
    <div className="relative">
      <nav className="bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg pt-4" style={{ borderBottomLeftRadius: "2rem", borderBottomRightRadius: "2rem" }}>
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-center gap-12 py-4">
            <a
              href="/"
              className={`px-6 py-2 rounded-lg font-bold transition-all duration-300 ${
                currentPage === "home"
                  ? "bg-white text-purple-600 shadow-md"
                  : "text-white hover:bg-white/20"
              }`}
            >
              Home
            </a>
            <a
              href="/#preview"
              className={`px-6 py-2 rounded-lg font-bold transition-all duration-300 ${
                currentPage === "gallery"
                  ? "bg-white text-purple-600 shadow-md"
                  : "text-white hover:bg-white/20"
              }`}
            >
              Gallery
            </a>
            <a
              href="/croco-palette"
              className={`px-6 py-2 rounded-lg font-bold transition-all duration-300 ${
                currentPage === "palette"
                  ? "bg-white text-purple-600 shadow-md"
                  : "text-white hover:bg-white/20"
              }`}
            >
              The Croco Palette
            </a>
          </div>
        </div>
      </nav>
      
      {/* Curved bump in the middle */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 -bottom-6 w-32 h-12 bg-gradient-to-r from-purple-600 to-pink-600"
        style={{
          borderTopLeftRadius: "50% 100%",
          borderTopRightRadius: "50% 100%",
          boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
        }}
      />
    </div>
  );
}
