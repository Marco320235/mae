import "../styles/Explorar.css";
import { useNavigate } from "react-router-dom";

export default function Explorar2() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/explorar13");
  };

  return (
    <div className="explorar-container">
      <div className="explorar-content">
        <img src="/assets/image12.jpeg" alt="Foto" className="explorar-image" />

        <div className="explorar-text-box">
          <h2 className="explorar-title">Seu patrimônio</h2>
          <p className="explorar-text">
            Tudo isso foi você quem construiu mãe, ninguém acolhe uma familia tão bem igual, estaremos sempre juntos.
          </p>
        </div>

        {/* Bloco separado para o botão */}
        <div className="explorar-button-box">
          <button className="explorar-button" onClick={handleClick}>
            Continuar explorando
          </button>
        </div>
      </div>
    </div>
  );
}
