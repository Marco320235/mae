import "../styles/Explorar.css";
import { useNavigate } from "react-router-dom";

export default function Explorar() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/explorar2");
  };

  return (
    <div className="explorar-container">
      <div className="explorar-content">
        <img src="/assets/image1.png" alt="Foto" className="explorar-image" />

        <div className="explorar-text-box">
          <h2 className="explorar-title">O Começo</h2>
          <p className="explorar-text">
            Aqui está, o começo de uma obra, onde a artista ainda nem foi citada,
            mas ela deu a vida a esses dois seres lindos (mesmo o autor do site achando que um deles veio do lixo).
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
