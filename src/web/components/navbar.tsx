interface NavbarProps {
  currentPage?: "home" | "palette" | "gallery";
}

export function Navbar({ currentPage = "home" }: NavbarProps) {
  return (
    <nav className="bg-purple-600 shadow-lg relative" style={{ borderBottomLeftRadius: "2rem", borderBottomRightRadius: "2rem", paddingBottom: "1.5rem", height: "4rem" }}>
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-center py-4 h-full">
          {/* Empty navbar - just decoration */}
        </div>
      </div>
      
      {/* Curved bump in the center bottom */}
      <div 
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-full w-56 h-6 bg-purple-600 rounded-b-3xl flex items-center justify-center"
        style={{
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
        }}
      >
        {/* Crocodile head in the bump */}
        <img 
          src="https://storage.googleapis.com/runable-templates/cli-uploads%2FfP0dpAwUfkCMLCPXxJZ9KSSaVONO53I9%2FurnlRsvLS6hYHQTbSBDpI%2FUntitled_Project_(12)_PJp2Jg.jpg"
          alt="CrocoCrocs Logo"
          className="h-16 w-16 object-contain"
        />
      </div>
    </nav>
  );
}
