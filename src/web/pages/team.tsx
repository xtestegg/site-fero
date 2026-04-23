import { useLocation } from "wouter";

export default function Team() {
  const [, navigate] = useLocation();

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)", backgroundSize: "400% 400%", animation: "gradient 15s ease infinite", padding: "40px 20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden" }}>
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        .team-card {
          transition: all 0.3s ease;
        }
        
        .team-card:hover {
          transform: rotate(0deg) scale(1.05) !important;
        }
        
        .floating-emoji {
          position: absolute;
          font-size: 40px;
          animation: float 3s ease-in-out infinite;
          pointer-events: none;
        }
      `}</style>

      {/* Floating emojis */}
      <div className="floating-emoji" style={{ top: "10%", left: "10%", animation: "float 4s ease-in-out infinite" }}>🎉</div>
      <div className="floating-emoji" style={{ top: "20%", right: "10%", animation: "float 5s ease-in-out infinite 1s" }}>🦖</div>
      <div className="floating-emoji" style={{ bottom: "20%", left: "5%", animation: "float 6s ease-in-out infinite 2s" }}>❄️</div>
      <div className="floating-emoji" style={{ bottom: "10%", right: "5%", animation: "float 4.5s ease-in-out infinite 0.5s" }}>🎨</div>

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
          transform: "rotate(-5deg)", 
          boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
          transition: "all 0.3s",
          zIndex: 100
        }}
        onMouseOver={(e) => e.target.style.transform = "rotate(5deg) scale(1.1)"}
        onMouseOut={(e) => e.target.style.transform = "rotate(-5deg)"}
      >
        ← BACK
      </button>

      <div style={{ textAlign: "center", marginBottom: "50px", zIndex: 10 }}>
        <h1 style={{ 
          fontSize: "72px", 
          fontWeight: "900", 
          marginBottom: "10px", 
          color: "#fff", 
          textShadow: "4px 4px 0px #000, 8px 8px 0px rgba(0,0,0,0.3)", 
          transform: "rotate(-3deg)", 
          fontStyle: "italic",
          animation: "bounce 2s ease-in-out infinite"
        }}>
          🎉 OUR TEAM 🎉
        </h1>
        <p style={{ fontSize: "24px", color: "#fff", fontWeight: "bold", textShadow: "2px 2px 0px #000", animation: "pulse 2s ease-in-out infinite" }}>Meet the CroCrocs Legends!</p>
      </div>

      <div style={{ display: "flex", gap: "30px", justifyContent: "center", alignItems: "stretch", maxWidth: "1100px", width: "100%", flexWrap: "wrap", zIndex: 10 }}>
        {/* Feromonthes Card */}
        <div 
          className="team-card"
          style={{ 
            flex: "1 1 350px",
            background: "linear-gradient(135deg, #FF6B6B 0%, #FFD93D 50%, #6BCB77 100%)",
            borderRadius: "30px",
            padding: "15px",
            textAlign: "center",
            boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            minHeight: "500px",
            border: "5px dashed #fff",
            transform: "rotate(-5deg) scale(1.02)",
            transition: "transform 0.3s",
            position: "relative"
          }}
        >
          <div style={{ position: "absolute", top: "15px", right: "15px", fontSize: "40px", animation: "spin 3s linear infinite" }}>🦖</div>
          <div style={{ position: "absolute", top: "15px", left: "15px", fontSize: "35px", animation: "bounce 2s ease-in-out infinite" }}>✨</div>
          
          <img 
            src="https://storage.googleapis.com/runable-templates/cli-uploads%2FfP0dpAwUfkCMLCPXxJZ9KSSaVONO53I9%2Fev4YTkf9rvB_eHoMedoI8%2Fteam_godzilla.png"
            alt="Feromonthes"
            style={{ width: "100%", height: "420px", objectFit: "cover", marginBottom: "15px", filter: "drop-shadow(0 5px 10px rgba(0,0,0,0.2))", borderRadius: "15px" }}
          />
          
          <h2 style={{ fontSize: "32px", fontWeight: "900", color: "#000", marginBottom: "5px", textShadow: "2px 2px 0px #fff", animation: "pulse 3s ease-in-out infinite" }}>FEROMONTHES</h2>
          <p style={{ fontSize: "16px", color: "#000", fontWeight: "bold", backgroundColor: "rgba(255,255,255,0.9)", padding: "10px 18px", borderRadius: "20px", animation: "float 3s ease-in-out infinite" }}>✨ CREATIVE BOSS ✨</p>
        </div>

        {/* Subzero Card */}
        <div 
          className="team-card"
          style={{ 
            flex: "1 1 350px",
            background: "linear-gradient(135deg, #4ECDC4 0%, #44A08D 50%, #087E8B 100%)",
            borderRadius: "30px",
            padding: "15px",
            textAlign: "center",
            boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-end",
            minHeight: "500px",
            border: "5px dashed #fff",
            transform: "rotate(5deg) scale(1.02)",
            transition: "transform 0.3s",
            position: "relative"
          }}
        >
          <div style={{ position: "absolute", top: "15px", left: "15px", fontSize: "40px", animation: "spin 3s linear infinite reverse" }}>❄️</div>
          <div style={{ position: "absolute", top: "15px", right: "15px", fontSize: "35px", animation: "bounce 2s ease-in-out infinite 0.5s" }}>⚡</div>
          
          <img 
            src="https://storage.googleapis.com/runable-templates/cli-uploads%2FfP0dpAwUfkCMLCPXxJZ9KSSaVONO53I9%2FyWFZy5tNBRVfIEzEvU1Qp%2Fteam_subzero_v2.png"
            alt="Subzero"
            style={{ width: "100%", height: "420px", objectFit: "cover", marginBottom: "15px", filter: "drop-shadow(0 5px 10px rgba(0,0,0,0.2))", borderRadius: "15px" }}
          />
          
          <h2 style={{ fontSize: "32px", fontWeight: "900", color: "#fff", marginBottom: "5px", textShadow: "2px 2px 0px #000", animation: "pulse 3s ease-in-out infinite 0.5s" }}>SUBZERO</h2>
          <p style={{ fontSize: "16px", color: "#000", fontWeight: "bold", backgroundColor: "rgba(255,255,255,0.9)", padding: "10px 18px", borderRadius: "20px", animation: "float 3s ease-in-out infinite 0.5s" }}>⚡ TECH WIZARD ⚡</p>
        </div>
      </div>

      <div style={{ marginTop: "50px", fontSize: "50px", textAlign: "center", zIndex: 10, animation: "bounce 3s ease-in-out infinite" }}>
        🐊 🎮 🎨 💻 🐊
      </div>
    </div>
  );
}
