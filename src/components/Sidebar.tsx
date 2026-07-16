export default function Sidebar() {
  const menu = [
    "🏠 Dashboard",
    "📚 Protocolos",
    "📖 Glossário",
    "🖼️ Atlas",
    "⭐ Favoritos",
    "📦 Biblioteca",
    "⚙️ Definições"
  ];

  return (
    <aside className="sidebar">
      <div className="logo">
        <span className="logo-icon">🔬</span>

        <div>
          <h2>MacroAP</h2>
          <small>Florence Alpha</small>
        </div>
      </div>

      <nav>
        {menu.map((item) => (
          <button key={item}>{item}</button>
        ))}
      </nav>

      <footer className="sidebar-footer">
        <small>Versão 0.3.0</small>
      </footer>
    </aside>
  );
}