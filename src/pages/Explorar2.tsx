import "../styles/Explorar.css";
import { useNavigate } from "react-router-dom";

export default function Explorar2() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/explorar3");
  };

  return (
    <div className="explorar-container">
      <div className="explorar-content">
        <img src="/assets/image2.jpeg" alt="Foto" className="explorar-image" />

        <div className="explorar-text-box">
          <h2 className="explorar-title">O Terceiro filho</h2>
          <p className="explorar-text">
            Ah, e eu jamais poderia esquecer, ela gerou também este meliante ai, e juntos, ela formou o maior amor ja formado na terra, e com certeza o amor mais intenso que o autor ja sentiu.
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
