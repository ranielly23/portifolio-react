// Sobre.jsx
// Seção "Sobre mim" com badges e card de estatísticas

const badges = [
  '🎓 Estudante de TI',
  '💜 Amante de UI/UX',
  '🌸 Front-end',
  '✨ Criativa',
]

const stats = [
  { value: '4+',   label: 'Projetos',  className: 'stat-purple' },
  { value: '100%', label: 'Dedicação', className: 'stat-pink'   },
  { value: '∞',    label: 'Carinho',   className: 'stat-yellow' },
]

export default function Sobre() {
  return (
    <section id="sobre">

      {/* ── Texto e badges ── */}
      <div className="sobre-text reveal">
        <p className="sec-label">Sobre mim</p>
        <h2>Quem sou eu? 🌷</h2>

        <div className="sobre-card">
          <p>
            Olá! Sou <strong>Francisca Ranielly</strong>, estudante de Desenvolvimento
            Web apaixonada por transformar ideias em experiências digitais bonitas e funcionais.
          </p>
          <p>
            Gosto de unir <strong>criatividade</strong> com <strong>boas práticas de código </strong>
            para criar projetos que encantam quem usa. Cada detalhe importa!
          </p>

          <div className="about-badges">
            {badges.map((badge) => (
              <span key={badge} className="badge">{badge}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Card de estatísticas ── */}
      <div className="sobre-stats reveal">
        <div className="stats-card">
          <div className="stats-emoji">🌸</div>
          <p className="sec-label">Meu foco</p>
          <h2 className="stats-title">
            Criar com<br /><em>carinho</em>
          </h2>
          <p className="stats-desc">
            Acredito que um bom projeto nasce de código limpo,<br />
            design pensado e muita dedicação. 💜
          </p>

          <div className="stats-numbers">
            {stats.map((stat, index) => (
              <>
                <div key={stat.label} className="stat-item">
                  <span className={`stat-value ${stat.className}`}>{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
                {/* Divisor entre os itens, exceto após o último */}
                {index < stats.length - 1 && (
                  <div key={`divider-${index}`} className="stat-divider" />
                )}
              </>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}
