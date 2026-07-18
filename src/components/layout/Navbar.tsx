import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/">Início</Link>
        <Link to="/">Sistemas Anatómicos</Link>
        <Link to="/">Protocolos</Link>
        <Link to="/">Favoritos</Link>
        <Link to="/">Sobre</Link>
      </div>
    </nav>
  );
}