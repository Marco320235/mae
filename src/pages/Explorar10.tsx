import "../styles/Explorar.css";
import { useNavigate } from "react-router-dom";

export default function Explorar2() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/explorar11");
  };

  return (
    <div className="explorar-container">
      <div className="explorar-content">
        <img src="/assets/image10.jpg" alt="Foto" className="explorar-image" />

        <div className="explorar-text-box">
          <h2 className="explorar-title">O favorito</h2>
          <p className="explorar-text">
            Mas ele é o favorito da sua filha, poderia ficar o dia todo colocando fotos que representam o amor dos dois.
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
