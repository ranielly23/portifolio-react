// Projetos.jsx
// Seção de projetos renderizada dinamicamente a partir de um array de objetos
const projetos = [
  {
    id: 1,
    emoji:       '✅',
    thumbClass:  'proj-thumb--lilac',
    tags:        ['HTML', 'CSS', 'JavaScript'],
    titulo:      'Lista de Tarefas',
    descricao:   'App de gerenciamento de tarefas com adição, remoção e marcação de conclusão. Dados persistidos via localStorage e interface responsiva com animações suaves.',
    linkDemo:    'https://ranielly23.github.io/lista-de-tarefas/',
    linkGithub:  'https://github.com/ranielly23/lista-de-tarefas',
    delay:       0,
  },
  {
    id: 2,
    emoji:       '🛍️',
    thumbClass:  'proj-thumb--yellow',
    tags:        ['HTML', 'CSS', 'JavaScript'],
    titulo:      'Catálogo de Produtos',
    descricao:   'Catálogo dinâmico com busca em tempo real e filtros por categoria. Cards de produto gerados via JavaScript com imagens, preços e layout em grid responsivo.',
    linkDemo:    'https://ranielly23.github.io/catalogo-de-produtos/', 
    linkGithub:  'https://github.com/ranielly23/catalogo-de-produtos', 
    delay:       0.1,
  },
  {
    id: 3,
    emoji:       '👤',
    thumbClass:  'proj-thumb--pink',
    tags:        ['HTML', 'CSS', 'JavaScript'],
    titulo:      'Sistema de Cadastro',
    descricao:   'Formulário de cadastro de usuários com validação completa em JavaScript. Verifica campos obrigatórios, formato de e-mail e duplicatas, com feedback visual e localStorage.',
    linkDemo:    'https://ranielly23.github.io/sistema-de-cadastro/', 
    linkGithub:  'https://github.com/ranielly23/sistema-de-cadastro', 
    delay:       0.2,
  },
  {
    id: 4,
    emoji:       '🍽️',
    thumbClass:  'proj-thumb--green',
    tags:        ['HTML', 'CSS', 'Grid', 'Responsivo'],
    titulo:      'Restaurante Mais Sabor',
    descricao:   'Site completo de restaurante com cardápio de combos e pirões, galeria de bebidas em carrossel horizontal, mapa de localização integrado e botões de pedido via WhatsApp.',
    linkDemo:    'https://ranielly23.github.io/restaurante-mais-sabor/',
    linkGithub:  'https://github.com/ranielly23/restaurante-mais-sabor',
    delay:       0.3,
  },
]

// Componente de card individual de projeto
function ProjetoCard({ projeto }) {
  return (
    <div
      className="proj-card reveal"
      style={{ transitionDelay: `${projeto.delay}s` }}
    >
      <div className={`proj-thumb ${projeto.thumbClass}`}>
        {projeto.emoji}
      </div>

      <div className="proj-body">
        <div className="proj-tags">
          {projeto.tags.map((tag) => (
            <span key={tag} className="proj-tag">{tag}</span>
          ))}
        </div>

        <div className="proj-title">{projeto.titulo}</div>
        <p className="proj-desc">{projeto.descricao}</p>

        <div className="proj-links">
          <a href={projeto.linkDemo}   className="proj-link" target="_blank"  rel="noopener noreferrer">🔗 Ver projeto</a>
          <a href={projeto.linkGithub} className="proj-link" target="_blank" rel="noopener noreferrer">💻 GitHub</a>
        </div>
      </div>
    </div>
  )
}

export default function Projetos() {
  return (
    <section id="projetos">
      <div className="proj-header">
        <p className="sec-label">Projetos</p>
        <h2>Meus trabalhos 🛠️</h2>
      </div>

      <div className="projects-grid">
        {projetos.map((projeto) => (
          <ProjetoCard key={projeto.id} projeto={projeto} />
        ))}
      </div>
    </section>
  )
}
