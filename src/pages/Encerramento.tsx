import "../styles/Explorar.css";
import { useNavigate } from "react-router-dom";

export default function Explorar2() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
 const linkFinal = "https://www.transfernow.net/dl/20250607zFTlPjjm"; // Altere para o link desejado

  const redirecionar = () => {
    window.location.href = linkFinal;
  };
   return (
    <div className="home-container">
      <div className="home-card">
        <h1 className="home-title">🎁 Obrigado por ser quem você é!</h1>
        <p className="home-text">
          Esperamos que tenha gostado, esse site será eterno na internet, do mesmo jeito que somos eternos pra você mãe, nunca vamos soltar sua mão💖.
        </p>
        <button className="home-button" onClick={redirecionar}>
          Download
        </button>
        <div className="explorar-button-box">
          <button className="explorar-button" onClick={handleClick}>
            Voltar para pagina inicial
          </button>
        </div>
      </div>
    </div>
  );
}
