import { useNavigate } from "react-router-dom";
import { AnatomicalSystemService } from "../services/anatomicalSystem.service";
import "../styles/dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const systems = AnatomicalSystemService.getAll();

  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <span className="hero-label">MACROAP</span>

          <h1>
            Protocolos Macroscópicos
            <br />
            de Anatomia Patológica
          </h1>

          <p>
            Biblioteca digital de protocolos macroscópicos, organizada por
            sistemas anatómicos e orientada para a prática clínica.
          </p>

          <div className="hero-search">
            <input
              type="search"
              placeholder="Pesquisar protocolos, órgãos ou procedimentos..."
              aria-label="Pesquisar protocolos, órgãos ou procedimentos"
            />
          </div>
        </div>
      </section>

      <section className="systems">
        <div className="section-header">
          <div>
            <span className="section-label">CONSULTA</span>
            <h2>Sistemas Anatómicos</h2>
          </div>

          <p>
            Selecione um sistema para consultar os órgãos e protocolos
            disponíveis.
          </p>
        </div>

        <div className="cards">
          {systems.map((system) => (
            <article
              key={system.id}
              className="card"
              onClick={() => navigate(`/system/${system.id}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  navigate(`/system/${system.id}`);
                }
              }}
            >
              <h3>{system.name}</h3>

              <p>{system.description}</p>

              <span className="card-link">Consultar protocolos →</span>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}