import { useLocation } from "wouter";

export default function Team() {
  const [, navigate] = useLocation();

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)", backgroundSize: "400% 400%", animation: "gradient 15s ease infinite", padding: "40px 20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      <button 
        onClick={() => navigate("/")}
        style={{ position: "absolute", top: "20px", left: "20px", padding: "12px 24px", backgroundColor: "#FFD700", color: "#000", border: "3px solid #FFA500", borderRadius: "20px", cursor: "pointer", fontWeight: "bold", fontSize: "16px", transform: "rotate(-5deg)", boxShadow: "0 5px 15px rgba(0,0,0,0.3)" }}
      >
        ← BACK
      </button>

      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ fontSize: "72px", fontWeight: "900", marginBottom: "10px", color: "#fff", textShadow: "4px 4px 0px #000, 8px 8px 0px rgba(0,0,0,0.3)", transform: "rotate(-3deg)", fontStyle: "italic" }}>
          🎉 OUR TEAM 🎉
        </h1>
        <p style={{ fontSize: "24px", color: "#fff", fontWeight: "bold", textShadow: "2px 2px 0px #000" }}>Meet the CroCrocs Legends!</p>
      </div>

      <div style={{ display: "flex", gap: "30px", justifyContent: "center", alignItems: "stretch", maxWidth: "1100px", width: "100%", flexWrap: "wrap" }}>
        {/* Feromonthes Card */}
        <div style={{ 
          flex: "1 1 350px",
          background: "linear-gradient(135deg, #FF6B6B 0%, #FFD93D 50%, #6BCB77 100%)",
          borderRadius: "30px",
          padding: "30px",
          textAlign: "center",
          boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          minHeight: "450px",
          border: "5px dashed #fff",
          transform: "rotate(-5deg) scale(1.02)",
          transition: "transform 0.3s"
        }}>
          <div style={{ fontSize: "60px", marginBottom: "10px" }}>🦖</div>
          <img 
            src="https://storage.googleapis.com/runable-templates/cli-uploads%2FfP0dpAwUfkCMLCPXxJZ9KSSaVONO53I9%2Fev4YTkf9rvB_eHoMedoI8%2Fteam_godzilla.png"
            alt="Feromonthes"
            style={{ width: "100%", height: "260px", objectFit: "contain", marginBottom: "20px", filter: "drop-shadow(0 5px 10px rgba(0,0,0,0.2))" }}
          />
          <h2 style={{ fontSize: "32px", fontWeight: "900", color: "#000", marginBottom: "5px", textShadow: "2px 2px 0px #fff" }}>FEROMONTHES</h2>
          <p style={{ fontSize: "16px", color: "#000", fontWeight: "bold", backgroundColor: "rgba(255,255,255,0.7)", padding: "8px 16px", borderRadius: "20px" }}>✨ CREATIVE BOSS ✨</p>
        </div>

        {/* Subzero Card */}
        <div style={{ 
          flex: "1 1 350px",
          background: "linear-gradient(135deg, #4ECDC4 0%, #44A08D 50%, #087E8B 100%)",
          borderRadius: "30px",
          padding: "30px",
          textAlign: "center",
          boxShadow: "0 15px 40px rgba(0,0,0,0.3)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          minHeight: "450px",
          border: "5px dashed #fff",
          transform: "rotate(5deg) scale(1.02)",
          transition: "transform 0.3s"
        }}>
          <div style={{ fontSize: "60px", marginBottom: "10px" }}>❄️</div>
          <img 
            src="https://storage.googleapis.com/runable-templates/cli-uploads%2FfP0dpAwUfkCMLCPXxJZ9KSSaVONO53I9%2FyWFZy5tNBRVfIEzEvU1Qp%2Fteam_subzero_v2.png"
            alt="Subzero"
            style={{ width: "100%", height: "260px", objectFit: "contain", marginBottom: "20px", filter: "drop-shadow(0 5px 10px rgba(0,0,0,0.2))" }}
          />
          <h2 style={{ fontSize: "32px", fontWeight: "900", color: "#fff", marginBottom: "5px", textShadow: "2px 2px 0px #000" }}>SUBZERO</h2>
          <p style={{ fontSize: "16px", color: "#000", fontWeight: "bold", backgroundColor: "rgba(255,255,255,0.7)", padding: "8px 16px", borderRadius: "20px" }}>⚡ TECH WIZARD ⚡</p>
        </div>
      </div>

      <div style={{ marginTop: "50px", fontSize: "40px", textAlign: "center" }}>
        🐊 🎮 🎨 💻 🐊
      </div>
    </div>
  );
}
