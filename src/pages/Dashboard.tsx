import { useNavigate } from "react-router-dom";
import { AnatomicalSystemService } from "../services/anatomicalSystem.service";
import "../styles/dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();
  const systems = AnatomicalSystemService.getAll();

  return (
    <>
      <section className="hero">
        <h1>Protocolos Macroscópicos</h1>

        <p>
          Bem-vindo ao MacroAP, um portal de protocolos macroscópicos de Anatomia
          Patológica.
        </p>

        <input
          type="text"
          placeholder="Pesquisar protocolos..."
        />
      </section>

      <section className="systems">
        <h2>Sistemas Anatómicos</h2>

        <div className="cards">
          {systems.map((system) => (
            <div
              key={system.id}
              className="card"
              onClick={() => navigate(`/system/${system.id}`)}
            >
              <h3>{system.name}</h3>

              <p>{system.description}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}