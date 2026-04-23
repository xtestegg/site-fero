import { useLocation } from "wouter";

export default function Team() {
  const [, navigate] = useLocation();

  return (
    <div style={{ 
      minHeight: "100vh", 
      background: "#1a1a3e url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><defs><radialGradient id=%22moon%22><stop offset=%220%%22 style=%22stop-color:rgb(255,200,100);stop-opacity:1%22 /><stop offset=%22100%%22 style=%22stop-color:rgb(200,150,50);stop-opacity:1%22 /></radialGradient></defs></svg>')",
      backgroundSize: "cover",
      backgroundPosition: "center",
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
        
        @keyframes wobble {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(2deg); }
        }
        
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        
        @keyframes moonGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(255, 200, 100, 0.5); }
          50% { box-shadow: 0 0 50px rgba(255, 200, 100, 0.8); }
        }
        
        @keyframes planetMove {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(20px) translateY(-20px); }
        }
        
        .team-card-fero {
          animation: wobble 2s ease-in-out infinite, float 3s ease-in-out infinite 0.5s;
        }
        
        .team-card-subzero {
          animation: wobble 2s ease-in-out infinite 0.2s, float 3s ease-in-out infinite;
        }
        
        .title-bounce {
          animation: bounce 2s ease-in-out infinite;
        }
        
        .emoji-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .emoji-spin {
          animation: spin 3s linear infinite;
        }
        
        .text-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        
        .star {
          animation: twinkle 2s ease-in-out infinite;
        }
        
        .moon {
          animation: moonGlow 3s ease-in-out infinite;
        }
        
        .planet {
          animation: planetMove 6s ease-in-out infinite;
        }
      `}</style>

      {/* Lua */}
      <div className="moon" style={{
        position: "absolute",
        width: "150px",
        height: "150px",
        background: "radial-gradient(circle at 35% 35%, #FFE5B4, #FF8C00)",
        borderRadius: "50%",
        top: "5%",
        right: "10%",
        opacity: "0.7",
        zIndex: 1
      }} />

      {/* Planeta */}
      <div className="planet" style={{
        position: "absolute",
        width: "80px",
        height: "80px",
        background: "radial-gradient(circle at 35% 35%, #87CEEB, #4A90E2)",
        borderRadius: "50%",
        top: "30%",
        left: "8%",
        opacity: "0.6",
        zIndex: 1
      }} />

      {/* Estrelas */}
      {Array.from({ length: 50 }).map((_, i) => (
        <div
          key={i}
          className="star"
          style={{
            position: "absolute",
            width: Math.random() * 3 + "px",
            height: Math.random() * 3 + "px",
            background: "#fff",
            borderRadius: "50%",
            top: Math.random() * 100 + "%",
            left: Math.random() * 100 + "%",
            zIndex: 1,
            animationDelay: Math.random() * 2 + "s"
          }}
        />
      ))}

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

      <div style={{ display: "flex", gap: "30px", justifyContent: "center", alignItems: "stretch", maxWidth: "1100px", width: "100%", flexWrap: "wrap", zIndex: 10, position: "relative" }}>
        {/* Feromonthes Card */}
        <div 
          className="team-card-fero"
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
            position: "relative",
            cursor: "pointer",
            transition: "transform 0.3s"
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          <div className="emoji-spin" style={{ position: "absolute", top: "15px", right: "15px", fontSize: "40px" }}>🦖</div>
          <div className="emoji-float" style={{ position: "absolute", top: "15px", left: "15px", fontSize: "35px" }}>✨</div>
          
          <img 
            src="https://storage.googleapis.com/runable-templates/cli-uploads%2FfP0dpAwUfkCMLCPXxJZ9KSSaVONO53I9%2Fev4YTkf9rvB_eHoMedoI8%2Fteam_godzilla.png"
            alt="Feromonthes"
            style={{ width: "100%", height: "420px", objectFit: "cover", marginBottom: "15px", filter: "drop-shadow(0 5px 10px rgba(0,0,0,0.2))", borderRadius: "15px" }}
          />
          
          <h2 className="text-pulse" style={{ fontSize: "32px", fontWeight: "900", color: "#000", marginBottom: "5px", textShadow: "2px 2px 0px #fff" }}>FEROMONTHES</h2>
          <p className="emoji-float" style={{ fontSize: "16px", color: "#000", fontWeight: "bold", backgroundColor: "rgba(255,255,255,0.9)", padding: "10px 18px", borderRadius: "20px" }}>✨ CREATIVE BOSS ✨</p>
        </div>

        {/* Subzero Card */}
        <div 
          className="team-card-subzero"
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
            position: "relative",
            cursor: "pointer",
            transition: "transform 0.3s"
          }}
          onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
          onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
        >
          <div className="emoji-spin" style={{ position: "absolute", top: "15px", left: "15px", fontSize: "40px" }}>❄️</div>
          <div className="emoji-float" style={{ position: "absolute", top: "15px", right: "15px", fontSize: "35px" }}>⚡</div>
          
          <img 
            src="https://storage.googleapis.com/runable-templates/cli-uploads%2FfP0dpAwUfkCMLCPXxJZ9KSSaVONO53I9%2FyWFZy5tNBRVfIEzEvU1Qp%2Fteam_subzero_v2.png"
            alt="Subzero"
            style={{ width: "100%", height: "420px", objectFit: "cover", marginBottom: "15px", filter: "drop-shadow(0 5px 10px rgba(0,0,0,0.2))", borderRadius: "15px" }}
          />
          
          <h2 className="text-pulse" style={{ fontSize: "32px", fontWeight: "900", color: "#fff", marginBottom: "5px", textShadow: "2px 2px 0px #000" }}>SUBZERO</h2>
          <p className="emoji-float" style={{ fontSize: "16px", color: "#000", fontWeight: "bold", backgroundColor: "rgba(255,255,255,0.9)", padding: "10px 18px", borderRadius: "20px" }}>⚡ TECH WIZARD ⚡</p>
        </div>
      </div>

      <div className="emoji-float" style={{ marginTop: "50px", fontSize: "50px", textAlign: "center", zIndex: 10, position: "relative" }}>
        🐊 🎮 🎨 💻 🐊
      </div>
    </div>
  );
}
