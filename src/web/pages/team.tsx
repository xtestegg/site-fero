import { useLocation } from "wouter";

export default function Team() {
  const [, navigate] = useLocation();

  return (
    <div style={{ 
      minHeight: "100vh", 
      backgroundImage: "url('https://storage.googleapis.com/runable-templates/cli-uploads%2FfP0dpAwUfkCMLCPXxJZ9KSSaVONO53I9%2FTOdWnVrsvGviJ3vIeH9s0%2Fsurreal-planet-illustration_pDfH-5.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      padding: "40px 20px", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      position: "relative", 
      overflow: "hidden"
    }}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .title-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
        
        .text-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
      `}</style>

      <button 
        onClick={() => navigate("/")}
        style={{ 
          position: "absolute", 
          top: "20px", 
          left: "20px", 
          padding: "12px 24px", 
          backgroundColor: "#FFD700", 
          color: "#000", 
          border: "3px solid #FFA500", 
          borderRadius: "20px", 
          cursor: "pointer", 
          fontWeight: "bold", 
          fontSize: "16px", 
          boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
          zIndex: 100,
          transition: "all 0.3s"
        }}
        onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}
        onMouseOut={(e) => e.target.style.transform = "scale(1)"}
      >
        ← BACK
      </button>

      <div style={{ textAlign: "center", marginBottom: "50px", zIndex: 10, position: "relative" }}>
        <h1 className="title-bounce" style={{ 
          fontSize: "72px", 
          fontWeight: "900", 
          marginBottom: "10px", 
          color: "#fff", 
          textShadow: "4px 4px 0px #000, 8px 8px 0px rgba(0,0,0,0.3)", 
          fontStyle: "italic"
        }}>
          🎉 OUR TEAM 🎉
        </h1>
        <p className="text-pulse" style={{ fontSize: "24px", color: "#fff", fontWeight: "bold", textShadow: "2px 2px 0px #000" }}>Meet the CroCrocs Legends!</p>
      </div>

      <div style={{ display: "flex", gap: "60px", justifyContent: "center", alignItems: "flex-end", maxWidth: "1200px", width: "100%", flexWrap: "wrap", zIndex: 10, position: "relative" }}>
        {/* Feromonthes */}
        <div style={{ textAlign: "center", cursor: "pointer", transition: "transform 0.3s" }}
          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          <img 
            src="https://storage.googleapis.com/runable-templates/cli-uploads%2FfP0dpAwUfkCMLCPXxJZ9KSSaVONO53I9%2Fev4YTkf9rvB_eHoMedoI8%2Fteam_godzilla.png"
            alt="Feromonthes"
            style={{ width: "350px", height: "350px", objectFit: "contain", marginBottom: "20px", filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.4))" }}
          />
          
          <h2 style={{ fontSize: "32px", fontWeight: "900", color: "#fff", marginBottom: "5px", textShadow: "2px 2px 0px #000" }}>FEROMONTHES</h2>
          <p style={{ fontSize: "16px", color: "#fff", fontWeight: "bold", backgroundColor: "rgba(255,255,255,0.9)", padding: "10px 20px", borderRadius: "20px", display: "inline-block", marginTop: "10px" }}>✨ CREATIVE BOSS ✨</p>
        </div>

        {/* Subzero */}
        <div style={{ textAlign: "center", cursor: "pointer", transition: "transform 0.3s" }}
          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          <img 
            src="https://storage.googleapis.com/runable-templates/cli-uploads%2FfP0dpAwUfkCMLCPXxJZ9KSSaVONO53I9%2FyWFZy5tNBRVfIEzEvU1Qp%2Fteam_subzero_v2.png"
            alt="Subzero"
            style={{ width: "350px", height: "350px", objectFit: "contain", marginBottom: "20px", filter: "drop-shadow(0 10px 30px rgba(0,0,0,0.4))" }}
          />
          
          <h2 style={{ fontSize: "32px", fontWeight: "900", color: "#fff", marginBottom: "5px", textShadow: "2px 2px 0px #000" }}>SUBZERO</h2>
          <p style={{ fontSize: "16px", color: "#fff", fontWeight: "bold", backgroundColor: "rgba(255,255,255,0.9)", padding: "10px 20px", borderRadius: "20px", display: "inline-block", marginTop: "10px" }}>⚡ TECH WIZARD ⚡</p>
        </div>
      </div>

      <div style={{ marginTop: "80px", fontSize: "50px", textAlign: "center", zIndex: 10, position: "relative" }}>
        🐊 🎮 🎨 💻 🐊
      </div>
    </div>
  );
}
