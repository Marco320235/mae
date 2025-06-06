import "../styles/Explorar.css";
import { useNavigate } from "react-router-dom";

export default function Explorar2() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/explorar5");
  };

  return (
    <div className="explorar-container">
      <div className="explorar-content">
        <img src="/assets/image4.jpeg" alt="Foto" className="explorar-image" />

        <div className="explorar-text-box">
          <h2 className="explorar-title">Familia</h2>
          <p className="explorar-text">
            Ela ainda conseguiu com muito pouco estruturar essa familia LINDA, passando por muitas dificuldades, eu sempre vou me lembrar de tudo que você passou e do tamanho da sua força(Essa foto doeu o coração do programador)
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
