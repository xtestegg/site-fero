import { useLocation } from "wouter";

export default function Team() {
  const [, navigate] = useLocation();

  return (
    <div 
      className="min-h-screen text-lime-300"
      style={{
        backgroundImage: "url('/bg-fantasy.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        backgroundColor: "#0a0e27"
      }}
    >
      {/* Top Buttons - Navigation */}
      <div className="relative pt-6 px-4 z-10 flex justify-center gap-6 items-center">
        {/* Back to Home Button */}
        <button 
          onClick={() => navigate("/")}
          className="px-6 py-2 rounded-lg border-2 border-lime-400 text-lime-400 hover:bg-lime-400 hover:text-lime-300 transition-all duration-300"
        >
          ← BACK TO HOME
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto py-12 px-4">
        {/* Title */}
        <div className="text-center mb-16">
          <h1 
            className="text-5xl md:text-6xl font-black text-white mb-4"
            style={{ fontFamily: "'Fredoka One', cursive", letterSpacing: "0.1em" }}
          >
            OUR TEAM
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto" />
        </div>

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Godzilla Card */}
          <div className="flex flex-col items-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-8 shadow-2xl hover:shadow-lime-300/50 transition-all duration-300" style={{ borderColor: "rgba(74, 222, 128, 0.8)" }}>
              <img 
                src="https://storage.googleapis.com/runable-templates/cli-uploads%2FfP0dpAwUfkCMLCPXxJZ9KSSaVONO53I9%2Fev4YTkf9rvB_eHoMedoI8%2Fteam_godzilla.png"
                alt="Feromonthes Godzilla"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="mt-8 px-4 py-2 bg-green-200 rounded-lg border-2 border-green-300">
              <p className="text-2xl font-bold text-black">
                Feromonthes
              </p>
            </div>
            <p className="mt-4 text-center text-lime-300 text-lg max-w-xs">
              Lead Designer & Creative Director
            </p>
          </div>

          {/* Subzero Card */}
          <div className="flex flex-col items-center">
            <div className="w-64 h-64 rounded-full overflow-hidden border-8 shadow-2xl hover:shadow-cyan-300/50 transition-all duration-300" style={{ borderColor: "rgba(34, 211, 238, 0.8)" }}>
              <img 
                src="https://storage.googleapis.com/runable-templates/cli-uploads%2FfP0dpAwUfkCMLCPXxJZ9KSSaVONO53I9%2F0Juj3Q0LfQhKFKGwVRf8Z%2Fteam_subzero.png"
                alt="Subzero"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="mt-8 px-4 py-2 bg-cyan-300 rounded-lg border-2 border-cyan-400">
              <p className="text-2xl font-bold text-black">
                Subzero
              </p>
            </div>
            <p className="mt-4 text-center text-lime-300 text-lg max-w-xs">
              Lead Developer & Technical Lead
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
