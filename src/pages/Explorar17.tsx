import "../styles/Explorar.css";
import { useNavigate } from "react-router-dom";

export default function Explorar2() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/encerramento");
  };

  return (
    <div className="explorar-container">
      <div className="explorar-content">
        <img src="/assets/image16.jpg" alt="Foto" className="explorar-image" />

        <div className="explorar-text-box">
          <h2 className="explorar-title">Fim</h2>
          <p className="explorar-text">
            E essa foi a nossa galeria de fotos💖, coloquei apenas algumas das fotos favoritas da sua princesa da disney.
          </p>
          <p className="explorar-text">
            Proxima pagina, vou disponibilizar o download de todas as midias especiais que ela tinha, um pouco das favoritadas foram usadas para desenvolver essa geleria.
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
