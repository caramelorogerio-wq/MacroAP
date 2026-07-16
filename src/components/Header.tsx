export default function Header() {
  return (
    <header className="header">
      <div>
        <h1>MacroAP</h1>
        <p>Plataforma de Apoio à Macroscopia em Anatomia Patológica</p>
      </div>

      <div className="header-right">
        <input
          type="text"
          placeholder="🔍 Pesquisar protocolos..."
        />

        <div className="user">
          👤 Ana
        </div>
      </div>
    </header>
  );
}