import { useLocation } from "wouter";

export default function Team() {
  const [, navigate] = useLocation();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <button 
        onClick={() => navigate("/")}
        className="mb-8 px-6 py-2 bg-lime-400 text-black rounded-lg font-bold hover:bg-lime-300"
      >
        ← BACK TO HOME
      </button>

      <div className="max-w-6xl mx-auto">
        <h1 className="text-6xl font-black text-center mb-16">OUR TEAM</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Feromonthes */}
          <div className="flex flex-col items-center">
            <img 
              src="https://storage.googleapis.com/runable-templates/cli-uploads%2FfP0dpAwUfkCMLCPXxJZ9KSSaVONO53I9%2Fev4YTkf9rvB_eHoMedoI8%2Fteam_godzilla.png"
              alt="Feromonthes"
              className="w-64 h-64 rounded-full border-8 border-green-500 object-cover mb-6"
            />
            <h2 className="text-3xl font-bold text-green-400">Feromonthes</h2>
            <p className="text-lg text-gray-300 mt-2">Lead Designer & Creative Director</p>
          </div>

          {/* Subzero */}
          <div className="flex flex-col items-center">
            <img 
              src="https://storage.googleapis.com/runable-templates/cli-uploads%2FfP0dpAwUfkCMLCPXxJZ9KSSaVONO53I9%2F0Juj3Q0LfQhKFKGwVRf8Z%2Fteam_subzero.png"
              alt="Subzero"
              className="w-64 h-64 rounded-full border-8 border-cyan-500 object-cover mb-6"
            />
            <h2 className="text-3xl font-bold text-cyan-400">Subzero</h2>
            <p className="text-lg text-gray-300 mt-2">Lead Developer & Technical Lead</p>
          </div>
        </div>
      </div>
    </div>
  );
}
