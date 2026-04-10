// Navbar.jsx
// Componente de navegação fixo com links para as seções

export default function Navbar() {
  return (
    <nav>
      <div className="logo">
        Fran<span>ielly</span>
      </div>
      <ul>
        <li><a href="#sobre">Sobre</a></li>
        <li><a href="#habilidades">Habilidades</a></li>
        <li><a href="#projetos">Projetos</a></li>
      </ul>
    </nav>
  )
}
