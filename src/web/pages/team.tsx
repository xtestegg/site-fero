import { useLocation } from "wouter";

export default function Team() {
  const [, navigate] = useLocation();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f0f0f0", padding: "40px 20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <button 
        onClick={() => navigate("/")}
        style={{ position: "absolute", top: "20px", left: "20px", padding: "10px 20px", backgroundColor: "#00ff00", color: "#000", border: "none", borderRadius: "6px", cursor: "pointer", fontWeight: "bold" }}
      >
        ← BACK
      </button>

      <h1 style={{ fontSize: "48px", fontWeight: "bold", marginBottom: "50px", textAlign: "center", color: "#000" }}>OUR TEAM</h1>

      <div style={{ display: "flex", gap: "40px", justifyContent: "center", alignItems: "stretch", maxWidth: "1000px", width: "100%" }}>
        {/* Feromonthes Card */}
        <div style={{ 
          flex: 1, 
          background: "linear-gradient(135deg, #90EE90 0%, #98FB98 100%)",
          borderRadius: "20px",
          padding: "30px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          minHeight: "400px"
        }}>
          <img 
            src="https://storage.googleapis.com/runable-templates/cli-uploads%2FfP0dpAwUfkCMLCPXxJZ9KSSaVONO53I9%2Fev4YTkf9rvB_eHoMedoI8%2Fteam_godzilla.png"
            alt="Feromonthes"
            style={{ width: "100%", height: "280px", objectFit: "contain", marginBottom: "20px" }}
          />
          <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#000", marginBottom: "5px" }}>Feromonthes</h2>
          <p style={{ fontSize: "14px", color: "#333", fontWeight: "600" }}>DESIGNER</p>
        </div>

        {/* Subzero Card */}
        <div style={{ 
          flex: 1, 
          background: "linear-gradient(135deg, #87CEEB 0%, #E0FFFF 100%)",
          borderRadius: "20px",
          padding: "30px",
          textAlign: "center",
          boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          minHeight: "400px"
        }}>
          <img 
            src="https://storage.googleapis.com/runable-templates/cli-uploads%2FfP0dpAwUfkCMLCPXxJZ9KSSaVONO53I9%2FyWFZy5tNBRVfIEzEvU1Qp%2Fteam_subzero_v2.png"
            alt="Subzero"
            style={{ width: "100%", height: "280px", objectFit: "contain", marginBottom: "20px" }}
          />
          <h2 style={{ fontSize: "28px", fontWeight: "bold", color: "#000", marginBottom: "5px" }}>Subzero</h2>
          <p style={{ fontSize: "14px", color: "#333", fontWeight: "600" }}>DEVELOPER</p>
        </div>
      </div>
    </div>
  );
}
