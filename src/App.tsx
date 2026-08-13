import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Nav from './components/Nav'
import SpaceBackground from './components/three/SpaceBackground'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      const sections = ['hero', 'about', 'skills', 'projects', 'contact']
      const current = sections.find(section => {
        const el = document.getElementById(section)
        if (el) {
          const rect = el.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      if (current) setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="noise vignette bg-[#04060b] text-white min-h-screen overflow-x-hidden">
      <SpaceBackground />
      <Nav activeSection={activeSection} scrolled={scrolled} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer className="relative z-10 text-center py-8 text-zinc-600 text-sm border-t border-cyan-500/10 font-mono">
        <p>// end of transmission — © 2025 Yiqi Xue</p>
      </footer>
    </div>
  )
}

export default App
