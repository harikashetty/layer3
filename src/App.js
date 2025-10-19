import React from "react";

function App() {
  return (
    <div style={{
      backgroundColor: "#12071a",
      color: "white",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      fontFamily: "Poppins, sans-serif",
      textAlign: "center",
      padding: "20px"
    }}>
      <h1 style={{fontSize: "2.2rem"}}>💖 Surprise Layer 3 💖</h1>
      <p style={{maxWidth: 600}}>
        So close… This one gives you the last clue before the final reveal.
      </p>
      <a
        href="https://layer4-surprise.vercel.app/"
        style={{
          backgroundColor: "#ffcf6b",
          color: "#122",
          padding: "12px 22px",
          borderRadius: "12px",
          textDecoration: "none",
          fontSize: "18px",
          marginTop: "18px"
        }}
      >
        Keep going ✨
      </a>
    </div>
  );
}

export default App;
