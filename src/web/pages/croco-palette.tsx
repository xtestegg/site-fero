import { useRef, useEffect } from "react";

const ASSETS = {
  crococrocsLogo: "https://storage.googleapis.com/runable-templates/cli-uploads%2FfP0dpAwUfkCMLCPXxJZ9KSSaVONO53I9%2FR8qi-JMqzAZpkxT6p6jc6%2FSem_t%C3%ADtulo_(16)_L01NcW.png",
};

export default function CrocoPalette() {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/bg-fantasy.png')",
      }}
    >
      {/* Header */}
      <div className="relative pt-8 pb-4 px-4">
        <div className="container mx-auto max-w-5xl flex justify-between items-center">
          <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
            <img src={ASSETS.crococrocsLogo} alt="CrocoCrocs" className="h-12" />
          </a>
          <a 
            href="/" 
            className="px-4 py-2 bg-lime-300 text-black font-bold rounded-lg hover:bg-lime-400 transition-all"
          >
            Back
          </a>
        </div>
      </div>

      {/* The Croco Palette Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="container mx-auto max-w-5xl relative z-10">
          <div className="text-center mb-12">
            <h1
              className="text-white text-5xl md:text-6xl font-black mb-8"
              style={{ fontFamily: "'Fredoka One', cursive", letterSpacing: "0.05em" }}
            >
              The Croco Palette
            </h1>
            <p className="text-lime-300 text-lg md:text-xl mb-12">
              Explore all the unique CrocoCrocs in our collection
            </p>
            <img 
              src="https://storage.googleapis.com/runable-templates/cli-uploads%2FfP0dpAwUfkCMLCPXxJZ9KSSaVONO53I9%2FbBANTNPr9hV9PEmPDJT2g%2Fcroco_crocs_collection_(4)_0RdZrS.png"
              alt="CrocoCrocs Collection Palette"
              className="w-full max-w-4xl mx-auto rounded-2xl shadow-2xl shadow-purple-500/30"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative pt-8 pb-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{
            backgroundImage: `url(${ASSETS.crococrocsLogo})`,
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
          }}
        />
        <div className="relative z-10 container mx-auto max-w-5xl px-4">
          <div className="text-center py-12">
            <p className="text-lime-300 text-sm font-semibold mb-8">
              © 2025 CroCoCrocs. All rights reserved.🐊
            </p>
          </div>
        </div>
      </footer>

      {/* Background Music */}
      <audio ref={audioRef} loop autoPlay playsInline>
        <source src="/bg-music.mp3" type="audio/mpeg" />
      </audio>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fredoka+One&family=Nunito:wght@400;600;700;800;900&display=swap');
        
        * {
          font-family: 'Nunito', sans-serif;
        }
      `}</style>
    </div>
  );
}
