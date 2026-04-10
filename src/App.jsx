// App.jsx
// Componente raiz — monta o layout e gerencia cursor e scroll reveal

import { useEffect } from 'react'

import Navbar      from './components/Navbar.jsx'
import Hero        from './components/Hero.jsx'
import Sobre       from './components/Sobre.jsx'
import Habilidades from './components/Habilidades.jsx'
import Projetos    from './components/Projetos.jsx'
import Footer      from './components/Footer.jsx'

export default function App() {

  // ── Cursor personalizado ──────────────────────────────────────────
  useEffect(() => {
    const cursor     = document.getElementById('cursor')
    const cursorRing = document.getElementById('cursorRing')

    const moveCursor = (e) => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top  = e.clientY + 'px'

      setTimeout(() => {
        cursorRing.style.left = e.clientX + 'px'
        cursorRing.style.top  = e.clientY + 'px'
      }, 80)
    }

    document.addEventListener('mousemove', moveCursor)
    return () => document.removeEventListener('mousemove', moveCursor)
  }, [])

  // ── Scroll Reveal ─────────────────────────────────────────────────
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.15 }
    )

    // Observa todos os elementos .reveal presentes no DOM
    const revealEls = document.querySelectorAll('.reveal')
    revealEls.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  // ─────────────────────────────────────────────────────────────────
  return (
    <>
      {/* Cursor personalizado */}
      <div className="cursor"      id="cursor"     />
      <div className="cursor-ring" id="cursorRing" />

      {/* Blobs de fundo animados */}
      <div className="blobs">
        <div className="blob blob1" />
        <div className="blob blob2" />
        <div className="blob blob3" />
      </div>

      {/* Componentes da página */}
      <Navbar />
      <Hero />
      <Sobre />
      <Habilidades />
      <Projetos />
      <Footer />
    </>
  )
}
