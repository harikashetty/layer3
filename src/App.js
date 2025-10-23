import React, { useState } from "react";
import Swal from "sweetalert2";
import "./App.css";

function App() {
  const [attempts, setAttempts] = useState(0);
  const maxAttempts = 5;

  const handleNextLayer = (e) => {
    e.preventDefault();

    if (attempts >= maxAttempts) {
      Swal.fire({
        title: "😢 No more chances!",
        text: "You’ve used all 5 attempts. Try again later!",
        icon: "error",
        background: "#12071a",
        color: "#fff",
        confirmButtonColor: "#ffcf6b",
      });
      return;
    }

    Swal.fire({
      title: "💭 What am I to you?",
      input: "text",
      inputPlaceholder: "Type your answer here...",
      confirmButtonText: "Submit 💌",
      showCancelButton: true,
      cancelButtonText: "Cancel ❌",
      background: "#12071a",
      color: "#fff",
      confirmButtonColor: "#ffcf6b",
      cancelButtonColor: "#555",
      backdrop: `
        rgba(0,0,0,0.6)
        url("https://media.giphy.com/media/3ohhwF34cGDoFFhRfy/giphy.gif")
        center top
        no-repeat
      `,
    }).then((result) => {
      if (result.isConfirmed) {
        const answer = result.value ? result.value.trim().toLowerCase() : "";

        if (answer === "best friend") {
          Swal.fire({
            title: "🎉 Correct! 🎉",
            text: "You unlocked the next layer 💖",
            icon: "success",
            background: "#12071a",
            color: "#fff",
            confirmButtonColor: "#ffcf6b",
            confirmButtonText: "Next Layer 🚀",
          }).then(() => {
            // ✅ Go to Layer 4 (not final)
            window.location.href = "https://layer4-final.vercel.app/";
          });
        } else {
          const newAttempts = attempts + 1;
          setAttempts(newAttempts);

          if (newAttempts < maxAttempts) {
            Swal.fire({
              title: "❌ Wrong answer!",
              text: `You have ${maxAttempts - newAttempts} attempts left.`,
              icon: "error",
              background: "#12071a",
              color: "#fff",
              confirmButtonColor: "#ffcf6b",
            });
          } else {
            Swal.fire({
              title: "🚫 Out of chances!",
              text: "You’ve used all 5 attempts. Better luck next time 💔",
              icon: "warning",
              background: "#12071a",
              color: "#fff",
              confirmButtonColor: "#ffcf6b",
            });
          }
        }
      }
    });
  };

  return (
    <div
      style={{
        backgroundColor: "#12071a",
        color: "white",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Poppins, sans-serif",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "2.2rem" }}>💖 Surprise Layer 3 💖</h1>
      <p style={{ maxWidth: 600 }}>
        So close… This one gives you the last clue before the final reveal.
      </p>

      <button
        onClick={handleNextLayer}
        style={{
          backgroundColor: "#ffcf6b",
          color: "#122",
          padding: "12px 22px",
          borderRadius: "12px",
          textDecoration: "none",
          fontSize: "18px",
          marginTop: "18px",
          cursor: "pointer",
          transition: "0.3s",
          boxShadow: "0 0 15px rgba(255,207,107,0.6)",
        }}
      >
        Keep going ✨
      </button>
    </div>
  );
}

export default App;
