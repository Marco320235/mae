import "../styles/Explorar.css";
import { useNavigate } from "react-router-dom";

export default function Explorar2() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/explorar12");
  };

  return (
    <div className="explorar-container">
      <div className="explorar-content">
        <img src="/assets/image11.jpg" alt="Foto" className="explorar-image" />

        <div className="explorar-text-box">
          <h2 className="explorar-title">Minha senhora</h2>
          <p className="explorar-text">
            Amor de mãe não existe igual, quando você se torna um homem começa a dar valor a isso, ter alguém igual a você na minha vida só me deixa mais forte, prometo cuidar de você pra sempre.
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
