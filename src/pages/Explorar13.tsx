import "../styles/Explorar.css";
import { useNavigate } from "react-router-dom";

export default function Explorar2() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/explorar14");
  };

  return (
    <div className="explorar-container">
      <div className="explorar-content">
        <img src="/assets/image13.jpg" alt="Foto" className="explorar-image" />

        <div className="explorar-text-box">
          <h2 className="explorar-title">Autores</h2>
          <p className="explorar-text">
            Sim, esse site foi feito por nós dois, ela esteve comigo enquanto eu estava fazendo, e estará pra sempre com todos nós, e sem ela esse site não seria possivel, todas as fotos usadas eram favoritadas por ela.
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
