// Habilidades.jsx
// Seção de habilidades renderizada dinamicamente a partir de um array de objetos

// Array de objetos com os dados de cada habilidade
const habilidades = [
  { icone: '🌐', nome: 'HTML5',          nivel: 90,  delay: 0    },
  { icone: '🎨', nome: 'CSS3',           nivel: 85,  delay: 0.1  },
  { icone: '⚡', nome: 'JavaScript',     nivel: 75,  delay: 0.2  },
  { icone: '📐', nome: 'Flexbox & Grid', nivel: 88,  delay: 0.3  },
  { icone: '📱', nome: 'Responsividade', nivel: 80,  delay: 0.4  },
  { icone: '🎭', nome: 'UI/UX Design',   nivel: 70,  delay: 0.5  },
]

export default function Habilidades() {
  return (
    <section id="habilidades">
      <p className="sec-label">Habilidades</p>
      <h2>O que eu sei fazer 💫</h2>

      <div className="skills-grid">
        {habilidades.map((hab) => (
          <div
            key={hab.nome}
            className="skill-card reveal"
            style={{ transitionDelay: `${hab.delay}s` }}
          >
            <div className="skill-icon">{hab.icone}</div>
            <div className="skill-name">{hab.nome}</div>
            <div className="skill-bar">
              <div
                className="skill-fill"
                style={{ width: `${hab.nivel}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
