import "../styles/Explorar.css";
import { useNavigate } from "react-router-dom";

export default function Explorar2() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/explorar10");
  };

  return (
    <div className="explorar-container">
      <div className="explorar-content">
        <img src="/assets/image7.jpeg" alt="Foto" className="explorar-image" />

        <div className="explorar-text-box">
          <h2 className="explorar-title">Primão e rapinha</h2>
          <p className="explorar-text">
            Ja a relação desses dois ai nem tem comentários, é só de amor, primão sempre fez o que quis com ela.
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
