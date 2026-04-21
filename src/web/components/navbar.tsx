interface NavbarProps {
  currentPage?: "home" | "palette" | "gallery";
}

export function Navbar({ currentPage = "home" }: NavbarProps) {
  return (
    <div className="relative w-full" style={{ height: "200px" }}>
      {/* Single unified navbar piece with integrated bump */}
      <svg
        viewBox="0 0 1200 200"
        preserveAspectRatio="none"
        className="w-full h-full"
      >
        {/* Background shape - navbar + bump as one piece */}
        <defs>
          <linearGradient id="navGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#ec4899" />
          </linearGradient>
        </defs>

        {/* Main navbar body with integrated bump */}
        <path
          d="M 0,40 Q 0,0 40,0 L 500,0 Q 580,-30 600,-40 Q 620,-30 700,0 L 1160,0 Q 1200,0 1200,40 L 1200,160 Q 1200,200 1160,200 L 40,200 Q 0,200 0,160 Z"
          fill="url(#navGradient)"
          style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))" }}
        />
      </svg>

      {/* Crocodile head - centered on top */}
      <img 
        src="https://storage.googleapis.com/runable-templates/cli-uploads%2FfP0dpAwUfkCMLCPXxJZ9KSSaVONO53I9%2Fw2Z1Z5dcNu7wAqICzlq11%2FSem_t%C3%ADtulo_(17)_5TKIet.png"
        alt="CrocoCrocs Logo"
        className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-32 w-32 object-contain"
        style={{
          filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
          zIndex: 10
        }}
      />
    </div>
  );
}
