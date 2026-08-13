import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const skillCategories = [
  {
    name: 'AI / ML',
    icon: '🤖',
    color: 'amber',
    skills: ['Python', 'PyTorch', 'vLLM', 'LLM Inference', 'Model Serving', 'Matplotlib', 'LaTeX'],
  },
  {
    name: 'Backend',
    icon: '⚙️',
    color: 'cyan',
    skills: ['C', 'Python', 'Node.js', 'Kafka', 'Redis', 'MongoDB', 'NGINX', 'Jinja'],
  },
  {
    name: 'Frontend',
    icon: '🎨',
    color: 'emerald',
    skills: ['JavaScript', 'TypeScript', 'React', 'Unity', 'WordPress'],
  },
  {
    name: 'DevOps & Cloud',
    icon: '☁️',
    color: 'orange',
    skills: ['Docker', 'Kubernetes', 'AWS', 'Azure', 'Git', 'Cloudflare', 'Arduino'],
  },
  {
    name: 'Creative',
    icon: '✨',
    color: 'rose',
    skills: ['Photoshop', 'After Effects', 'AI Content Creation', 'Bilibili'],
  },
]

const colorMap: Record<string, string> = {
  amber: 'border-amber-500/20 bg-amber-500/5 text-amber-300 hover:bg-amber-500/15 hover:border-amber-500/40',
  cyan: 'border-cyan-500/20 bg-cyan-500/5 text-cyan-300 hover:bg-cyan-500/15 hover:border-cyan-500/40',
  emerald: 'border-emerald-500/20 bg-emerald-500/5 text-emerald-300 hover:bg-emerald-500/15 hover:border-emerald-500/40',
  orange: 'border-orange-500/20 bg-orange-500/5 text-orange-300 hover:bg-orange-500/15 hover:border-orange-500/40',
  rose: 'border-rose-500/20 bg-rose-500/5 text-rose-300 hover:bg-rose-500/15 hover:border-rose-500/40',
}

const headerColorMap: Record<string, string> = {
  amber: 'text-amber-400',
  cyan: 'text-cyan-400',
  emerald: 'text-emerald-400',
  orange: 'text-orange-400',
  rose: 'text-rose-400',
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="skills" className="py-32 px-6 bg-zinc-950/50" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="hud-label text-amber-400 text-sm mb-3">Sector 02 · Ship Systems</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Systems Loadout</h2>
          <p className="text-zinc-400 mt-4 max-w-xl">
            From LLM inference engines to cloud infrastructure — here's what I work with.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`hud-panel p-6 border border-zinc-800 bg-zinc-900/20 hover:border-zinc-700 transition-all`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className={`font-bold text-lg ${headerColorMap[cat.color]}`}>{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map(skill => (
                  <span
                    key={skill}
                    className={`skill-badge px-3 py-1.5 rounded-lg text-sm font-medium border cursor-default ${colorMap[cat.color]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
