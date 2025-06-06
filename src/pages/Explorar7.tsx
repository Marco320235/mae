import "../styles/Explorar.css";
import { useNavigate } from "react-router-dom";

export default function Explorar2() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/explorar8");
  };

  return (
    <div className="explorar-container">
      <div className="explorar-content">
        <img src="/assets/image7.jpeg" alt="Foto" className="explorar-image" />

        <div className="explorar-text-box">
          <h2 className="explorar-title">A FOTO MAIS PERFEITA DO UNIVERSO</h2>
          <p className="explorar-text">
            Desculpa, mas a coletânea de fotos sou eu quem estou fazendo, essa foto não poderia estar de fora.
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
