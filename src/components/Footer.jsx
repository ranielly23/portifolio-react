// Footer.jsx
// Rodapé com logo, links sociais e créditos

const redesSociais = [
  { titulo: 'GitHub',    emoji: '💻', href: 'https://github.com/ranielly23' }, 
  { titulo: 'LinkedIn',  emoji: '💼', href: 'http://linkedin.com/in/francisca-ranielly-706913359' }, 
]

export default function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        Fran<span>ielly</span>
      </div>

      <div className="social-links">
        {redesSociais.map((rede) => (
          <a key={rede.titulo} href={rede.href} title={rede.titulo} target="_blank"rel="noopener noreferrer">
            {rede.emoji}
        
          </a>
        ))}
      </div>

      <p>
        Feito com <span className="footer-heart">♥</span> por Francisca Ranielly &nbsp;·&nbsp; 2026
      </p>
    </footer>
  )
}
