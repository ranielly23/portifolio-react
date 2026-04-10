// Hero.jsx
// Seção principal com apresentação e avatar animado

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-text">
        <div className="hero-tag">Bem-vinda ao meu portfólio ✨</div>
        <h1>
          Olá, sou <em>Francisca</em>
          <br />
          Ranielly
        </h1>
        <p className="hero-sub">
          Desenvolvedora front-end apaixonada por criar interfaces bonitas,
          acessíveis e cheias de personalidade. 🌸
        </p>
        <div className="hero-btns">
          <a href="#projetos" className="btn btn-primary">Ver Projetos</a>
          <a href="#sobre"    className="btn btn-outline">Sobre mim</a>
        </div>
      </div>

      <div className="hero-avatar">
        <div className="avatar-inner">
          <span className="avatar-initial">FR</span>
          <span className="avatar-label">DEV ✦ DESIGN</span>
        </div>
      </div>

      <div className="dots-deco" />
    </section>
  )
}
