export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img
            src="/branding/macroap-logo.png"
            alt="MacroAP"
            className="logo-image"
          />
        </div>

        <div className="search">
          <input
            type="search"
            placeholder="Pesquisar protocolos, órgãos ou procedimentos..."
          />
        </div>
      </div>
    </header>
  );
}