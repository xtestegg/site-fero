import { useLocation } from "wouter";

export default function Team() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8 flex flex-col items-center justify-center">
      <button 
        onClick={() => navigate("/")}
        className="absolute top-8 left-8 px-6 py-2 bg-lime-400 text-black rounded-lg font-bold hover:bg-lime-300 transition-all"
      >
        ← BACK TO HOME
      </button>

      <h1 className="text-7xl font-black text-center mb-20">OUR TEAM</h1>

      <div className="flex gap-24 items-center justify-center">
        {/* Feromonthes */}
        <div className="flex flex-col items-center">
          <div 
            className="w-72 h-72 rounded-full overflow-hidden shadow-2xl flex items-center justify-center"
            style={{
              border: "8px solid",
              borderColor: "rgba(34, 197, 94, 0.8)",
              boxShadow: "0 0 30px rgba(168, 85, 247, 0.6), inset 0 0 20px rgba(168, 85, 247, 0.3)"
            }}
          >
            <img 
              src="https://storage.googleapis.com/runable-templates/cli-uploads%2FfP0dpAwUfkCMLCPXxJZ9KSSaVONO53I9%2Fev4YTkf9rvB_eHoMedoI8%2Fteam_godzilla.png"
              alt="Feromonthes"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-4xl font-bold text-lime-400 mt-8">Feromonthes</h2>
          <p className="text-lg text-gray-300 mt-2">Lead Designer & Creative Director</p>
        </div>

        {/* Subzero */}
        <div className="flex flex-col items-center">
          <div 
            className="w-72 h-72 rounded-full overflow-hidden shadow-2xl flex items-center justify-center"
            style={{
              border: "8px solid",
              borderColor: "rgba(34, 211, 238, 0.8)",
              boxShadow: "0 0 30px rgba(34, 211, 238, 0.6), inset 0 0 20px rgba(34, 211, 238, 0.3)"
            }}
          >
            <img 
              src="https://storage.googleapis.com/runable-templates/cli-uploads%2FfP0dpAwUfkCMLCPXxJZ9KSSaVONO53I9%2FyWFZy5tNBRVfIEzEvU1Qp%2Fteam_subzero_v2.png"
              alt="Subzero"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-4xl font-bold text-cyan-400 mt-8">Subzero</h2>
          <p className="text-lg text-gray-300 mt-2">Lead Developer & Technical Lead</p>
        </div>
      </div>
    </div>
  );
}

