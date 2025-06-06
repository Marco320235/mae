import "../styles/Explorar.css";
import { useNavigate } from "react-router-dom";

export default function Explorar2() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/explorar9");
  };

  return (
    <div className="explorar-container">
      <div className="explorar-content">
        <img src="/assets/image8.jpeg" alt="Foto" className="explorar-image" />

        <div className="explorar-text-box">
          <h2 className="explorar-title">Sonequinha</h2>
          <p className="explorar-text">
            Essa foto quem tirou provavelmente foi você, representa bastante suas crias kkkkk.
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
