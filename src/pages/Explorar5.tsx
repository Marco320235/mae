import "../styles/Explorar.css";
import { useNavigate } from "react-router-dom";

export default function Explorar2() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/explorar6");
  };

  return (
    <div className="explorar-container">
      <div className="explorar-content">
        <img src="/assets/image5.jpeg" alt="Foto" className="explorar-image" />

        <div className="explorar-text-box">
          <h2 className="explorar-title">Sua metade</h2>
          <p className="explorar-text">
            E você contou muito com a ajuda dessa dai ó, o membro mais importante da familia(depois do papai wendolf), duas mulheres que eu vejo como uma só, a acepção da palavra "MÃE".
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
