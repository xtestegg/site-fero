interface NavbarProps {
  currentPage?: "home" | "palette" | "gallery";
}

export function Navbar({ currentPage = "home" }: NavbarProps) {
  return (
    <nav className="bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg" style={{ borderBottomLeftRadius: "2rem", borderBottomRightRadius: "2rem" }}>
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
  );
}
