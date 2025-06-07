import "../styles/Explorar.css";
import { useNavigate } from "react-router-dom";

export default function Explorar2() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/explorar17");
  };

  return (
    <div className="explorar-container">
      <div className="explorar-content">
        <img src="/assets/image15.jpeg" alt="Foto" className="explorar-image" />

        <div className="explorar-text-box">
          <h2 className="explorar-title">Gratidão</h2>
          <p className="explorar-text">
            Tudo que eu sou e vou ser é graças a vocês duas, sou muito grato a isso, tento ser a minha melhor versão todos os dias e isso é por conta da minha familia, sem ela eu não sou ninguém.
          </p>
          <p className="explorar-text">
            Eu te amo mãe, Muito, e também amo demais a feiosa.
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
