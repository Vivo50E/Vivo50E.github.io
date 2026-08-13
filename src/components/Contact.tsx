import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const socials = [
  {
    name: 'GitHub',
    handle: '@Vivo50E',
    url: 'https://github.com/Vivo50E',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
    color: 'hover:border-cyan-500/40 hover:bg-zinc-800/50',
  },
  {
    name: 'LinkedIn',
    handle: 'in/yiqixue',
    url: 'https://www.linkedin.com/in/yiqixue/',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    color: 'hover:border-cyan-500/50 hover:bg-cyan-500/5',
  },
]

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-32 px-6 bg-zinc-950/50" ref={ref}>
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="hud-label text-amber-400 text-sm mb-3">Sector 04 · Transmission</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Open a{' '}
            <span className="gradient-text">Transmission</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Open to AI/ML roles, full-stack projects, and interesting collaborations.
            If you've got a cool idea or just want to chat tech — reach out!
          </p>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-12"
        >
          <a
            href="mailto:yiqixue@usc.edu"
            className="btn-sci inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-amber-500 to-cyan-500 hover:from-amber-400 hover:to-cyan-400 text-black font-bold text-lg transition-all hover:shadow-[0_0_40px_rgba(251,191,36,0.35)] hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Say Hello
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          {socials.map(social => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn-sci flex items-center gap-3 px-6 py-3 border border-zinc-800 text-zinc-400 hover:text-white transition-all ${social.color}`}
            >
              {social.icon}
              <div className="text-left">
                <div className="text-xs text-zinc-600 font-mono">{social.name}</div>
                <div className="text-sm font-medium">{social.handle}</div>
              </div>
            </a>
          ))}
        </motion.div>

        {/* Fun fact */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hud-panel mt-16 p-5 border border-zinc-800 bg-zinc-900/20 max-w-md mx-auto"
        >
          <p className="font-mono text-zinc-600 text-sm">
            <span className="text-amber-400">const</span>{' '}
            <span className="text-cyan-400">me</span> = {'{'}{' '}
            <span className="text-emerald-400">available</span>:{' '}
            <span className="text-orange-400">true</span>,{' '}
            <span className="text-emerald-400">coffee</span>:{' '}
            <span className="text-orange-400">always</span> {'}'}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
