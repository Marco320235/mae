import "../styles/Explorar.css";
import { useNavigate } from "react-router-dom";

export default function Explorar2() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/explorar16");
  };

  return (
    <div className="explorar-container">
      <div className="explorar-content">
        <img src="/assets/image14.jpeg" alt="Foto" className="explorar-image" />

        <div className="explorar-text-box">
          <h2 className="explorar-title">Amor</h2>
          <p className="explorar-text">
            Existem pessoas que não importa o que aconteça, sempre estarão em nossos corações e pensamentos, enquanto o amor prevalecer pelos que ficaram, a vida delas continuará, e uma coisa é certa, permanecerá até o ultimo suspiro do autor.
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
