interface NavbarProps {
  currentPage?: "home" | "palette" | "gallery";
}

export function Navbar({ currentPage = "home" }: NavbarProps) {
  return (
    <nav className="bg-purple-600 shadow-lg relative" style={{ borderBottomLeftRadius: "2rem", borderBottomRightRadius: "2rem", paddingBottom: "3rem", height: "4rem" }}>
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-center py-4 h-full">
          {/* Empty navbar - just decoration */}
        </div>
      </div>
      
      {/* Crocodile head - positioned at center of navbar */}
      <img 
        src="https://storage.googleapis.com/runable-templates/cli-uploads%2FfP0dpAwUfkCMLCPXxJZ9KSSaVONO53I9%2Fw2Z1Z5dcNu7wAqICzlq11%2FSem_t%C3%ADtulo_(17)_5TKIet.png"
        alt="CrocoCrocs Logo"
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-24 w-24 object-contain"
        style={{
          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))"
        }}
      />
      
      {/* Curved bump in the center bottom */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-full w-56 h-6 bg-purple-600 rounded-b-3xl"
        style={{
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
        }}
      />
    </nav>
  );
}
