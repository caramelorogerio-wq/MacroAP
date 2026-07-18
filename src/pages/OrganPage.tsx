import { useNavigate, useParams } from "react-router-dom";

import { AnatomicalSystemService } from "../services/anatomicalSystem.service";
import { OrganService } from "../services/organ.service";

export default function OrganPage() {
  const navigate = useNavigate();
  const { systemId } = useParams();

  const system = AnatomicalSystemService.getById(systemId ?? "");
  const organs = OrganService.getBySystem(systemId ?? "");

  return (
    <div className="dashboard">
      <button
        className="back-button"
        onClick={() => navigate("/")}
      >
        ← Voltar
      </button>

      <h1>Órgãos</h1>

      <h2>{system?.name}</h2>

      <div className="cards">
        {organs.map((organ) => (
          <div
            key={organ.id}
            className="card"
            onClick={() =>
              navigate(`/specimens/${systemId}/${organ.id}`)
            }
          >
            <h3>{organ.name}</h3>
            <p>{organ.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}