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
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 translate-y-full w-56 h-6 bg-purple-600 rounded-b-3xl"
        style={{
          boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
        }}
      />
    </nav>
  );
}
