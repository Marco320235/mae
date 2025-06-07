import "../styles/Explorar.css";
import { useNavigate } from "react-router-dom";

export default function Explorar2() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/explorar7");
  };

  return (
    <div className="explorar-container">
      <div className="explorar-content">
        <img src="/assets/image9.jpeg" alt="Foto" className="explorar-image" />

        <div className="explorar-text-box">
          <h2 className="explorar-title">Relação estranha</h2>
          <p className="explorar-text">
            Mas não só de amor vivia seus filhos, as vezes eles se arranhavam(o Marco Antônio sempre estava certo)
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
