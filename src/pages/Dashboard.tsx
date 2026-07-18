import { AnatomicalSystemService } from "../services/anatomicalSystem.service";

export default function Dashboard() {
  const sistemas = AnatomicalSystemService.getActive();

  return (
    <section className="dashboard">
      <h2>Bem-vinda ao MacroAP</h2>

      <p>
        Selecione um sistema anatómico para consultar protocolos,
        recomendações e documentação.
      </p>

      <div className="cards">
        {sistemas.map((sistema) => (
          <div key={sistema.id} className="card">
            <h3>{sistema.name}</h3>
            <p>{sistema.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}