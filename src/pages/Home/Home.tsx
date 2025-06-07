import { useNavigate } from "react-router-dom";
import "../../styles/Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="home-title">🎉 Feliz Aniversário, Mãe!</h1>
        <p className="home-text">
          Fizemos essa galeria de lembranças, espero que preencha seu coração com todo amor que sentimos por você 💖
        </p>
        <p className="home-text">
          De: Brenda Lara e Marco Antônio 
        </p>
        <p className="home-text">
          Para: Marina Brito 
        </p>
        <button className="home-button" onClick={() => navigate("/explorar")}>
          Ver Homenagem
        </button>
      </div>
    </div>
  );
}
