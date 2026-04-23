import { useLocation } from "wouter";

export default function Team() {
  const [, navigate] = useLocation();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#1a1a2e", color: "white", padding: "40px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <button 
        onClick={() => navigate("/")}
        style={{ position: "absolute", top: "20px", left: "20px", padding: "10px 20px", backgroundColor: "#00ff00", color: "#000", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}
      >
        ← BACK
      </button>

      <h1 style={{ fontSize: "60px", fontWeight: "bold", marginBottom: "60px", textAlign: "center" }}>OUR TEAM</h1>

      <div style={{ display: "flex", gap: "80px", justifyContent: "center", alignItems: "flex-start" }}>
        {/* Feromonthes */}
        <div style={{ textAlign: "center" }}>
          <div style={{ width: "280px", height: "280px", borderRadius: "50%", border: "6px solid #00ff00", overflow: "hidden", marginBottom: "30px", boxShadow: "0 0 30px rgba(0, 255, 0, 0.5)" }}>
            <img 
              src="https://storage.googleapis.com/runable-templates/cli-uploads%2FfP0dpAwUfkCMLCPXxJZ9KSSaVONO53I9%2Fev4YTkf9rvB_eHoMedoI8%2Fteam_godzilla.png"
              alt="Feromonthes"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#00ff00", marginBottom: "10px" }}>Feromonthes</h2>
          <p style={{ fontSize: "16px", color: "#aaa" }}>Lead Designer</p>
        </div>

        {/* Subzero */}
        <div style={{ textAlign: "center" }}>
          <div style={{ width: "280px", height: "280px", borderRadius: "50%", border: "6px solid #00ffff", overflow: "hidden", marginBottom: "30px", boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)" }}>
            <img 
              src="https://storage.googleapis.com/runable-templates/cli-uploads%2FfP0dpAwUfkCMLCPXxJZ9KSSaVONO53I9%2FyWFZy5tNBRVfIEzEvU1Qp%2Fteam_subzero_v2.png"
              alt="Subzero"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#00ffff", marginBottom: "10px" }}>Subzero</h2>
          <p style={{ fontSize: "16px", color: "#aaa" }}>Lead Developer</p>
        </div>
      </div>
    </div>
  );
}
