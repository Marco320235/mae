import { useNavigate } from "react-router-dom";
import "../../styles/Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="home-title">🎉 Feliz Aniversário, Mãe!</h1>
        <p className="home-text">
          Essa galeria é uma homenagem cheia de amor! Clique no botão abaixo para começar 💖
        </p>
        <button className="home-button" onClick={() => navigate("/explorar")}>
          Ver Homenagem
        </button>
      </div>
    </div>
  );
}
