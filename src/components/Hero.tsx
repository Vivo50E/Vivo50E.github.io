import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import Wormhole from './three/Wormhole'

export default function Hero() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg">
      {/* 3D Gargantua-style accretion disk */}
      <div className="absolute inset-0 opacity-60">
        <Wormhole />
      </div>

      {/* Fade to page background at the edges so the disk reads as a distant backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#04060b] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_15%,#04060b_78%)] pointer-events-none" />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Scrim behind copy for legibility against the glowing disk */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[520px] max-w-2xl blur-3xl bg-[#04060b]/60 pointer-events-none -z-10" />
        {/* Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 border border-amber-400/30 bg-amber-400/5 text-amber-300 hud-label text-xs mb-8"
        >
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          Status: Available · Bay Area Sector
        </motion.div>

        {/* Callsign */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="hud-label text-cyan-400/70 text-xs mb-3"
        >
          Transmission incoming // Pilot Log 001
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-6xl md:text-8xl font-black mb-4 tracking-tight"
        >
          <span className="gradient-text">Yiqi Xue</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl font-mono text-zinc-400 mb-6 h-8"
        >
          <TypeAnimation
            sequence={[
              'Full-Stack AI Engineer',
              2000,
              'Machine Learning Systems Engineer',
              2000,
              'USC CS Grad',
              2000,
              'Charting the frontier of AI',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-cyan-400"
          />
        </motion.div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-zinc-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          AI enthusiast & freelance programmer passionate about AI-driven content creation.
          Into sci-fi, anime, and video games. <span className="text-zinc-300">INTJ.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-sci px-8 py-3.5 bg-amber-500 hover:bg-amber-400 text-black font-bold transition-all hover:shadow-[0_0_30px_rgba(251,191,36,0.4)] hover:-translate-y-0.5"
          >
            View Mission Log
          </button>
          <a
            href="https://www.linkedin.com/in/yiqixue/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sci px-8 py-3.5 border border-zinc-700 hover:border-cyan-500/50 text-zinc-300 hover:text-white font-semibold transition-all hover:-translate-y-0.5 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
          <a
            href="https://github.com/Vivo50E"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-sci px-8 py-3.5 border border-zinc-700 hover:border-cyan-500/50 text-zinc-300 hover:text-white font-semibold transition-all hover:-translate-y-0.5 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          onClick={scrollToAbout}
          className="hidden sm:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 text-zinc-600 hover:text-cyan-400 transition-colors"
        >
          <span className="hud-label text-[10px]">descend</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            ↓
          </motion.div>
        </motion.button>
      </div>
    </section>
  )
}
