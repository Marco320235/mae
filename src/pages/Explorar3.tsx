import "../styles/Explorar.css";
import { useNavigate } from "react-router-dom";

export default function Explorar2() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/explorar4");
  };

  return (
    <div className="explorar-container">
      <div className="explorar-content">
        <img src="/assets/image3.jpg" alt="Foto" className="explorar-image" />

        <div className="explorar-text-box">
          <h2 className="explorar-title">A artista e sua obra mais linda</h2>
          <p className="explorar-text">
            Aqui está, a artista, dona de tudo que citei até agora, e vai ser pra sempre a responsável de tudo isso, a melhor mãe do universo todo.
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
