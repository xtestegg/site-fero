interface NavbarProps {
  currentPage?: "home" | "palette" | "gallery";
}

export function Navbar({ currentPage = "home" }: NavbarProps) {
  return (
    <div className="relative w-full" style={{ height: "150px", marginBottom: "20px" }}>
      {/* Unified navbar shape as single SVG path */}
      <svg
        viewBox="0 0 1200 150"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full absolute top-0 left-0"
      >
        <defs>
          <linearGradient id="navGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9333ea" />
            <stop offset="100%" stopColor="#9333ea" />
          </linearGradient>
        </defs>

        {/* Single unified curved shape with bottom bump integrated */}
        <path
          d="M 0,30 L 450,30 Q 600,30 600,0 Q 600,30 750,30 L 1200,30 Q 1200,30 1200,80 L 1200,120 Q 1200,150 1160,150 L 40,150 Q 0,150 0,120 L 0,80 Z"
          fill="url(#navGradient)"
          style={{ filter: "drop-shadow(0 6px 12px rgba(0,0,0,0.25))" }}
        />
      </svg>

      {/* Crocodile head - centered */}
      <img 
        src="https://storage.googleapis.com/runable-templates/cli-uploads%2FfP0dpAwUfkCMLCPXxJZ9KSSaVONO53I9%2Fw2Z1Z5dcNu7wAqICzlq11%2FSem_t%C3%ADtulo_(17)_5TKIet.png"
        alt="CrocoCrocs Logo"
        className="absolute left-1/2 transform -translate-x-1/2 h-40 w-40 object-contain"
        style={{
          top: "-20px",
          filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.4))",
          zIndex: 10
        }}
      />
    </div>
  );
}
