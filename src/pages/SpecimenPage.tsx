import { useNavigate } from "react-router-dom";

export default function SpecimenPage() {
  const navigate = useNavigate();

  return (
    <div className="dashboard">
      <button
        className="back-button"
        onClick={() => navigate(-1)}
      >
        ← Voltar
      </button>

      <h1>Tipos de Peça</h1>

      <div className="cards">
        <div className="card">
          <h3>Biópsia</h3>
        </div>

        <div className="card">
          <h3>Peça Cirúrgica</h3>
        </div>

        <div className="card">
          <h3>Polipectomia</h3>
        </div>
      </div>
    </div>
  );
}