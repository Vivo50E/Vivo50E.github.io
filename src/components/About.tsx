import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { label: 'GitHub Stars', value: '96k+', note: 'across contributed repos' },
  { label: 'Focus Area', value: 'AI/ML', note: 'inference & serving' },
  { label: 'Education', value: 'USC · UCLA', note: 'CS & Math' },
  { label: 'Location', value: 'Bay Area', note: 'California' },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="font-mono text-violet-400 text-sm mb-3">01. about</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">Who am I?</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5 text-zinc-400 text-lg leading-relaxed"
          >
            <p>
              Hey! I'm <span className="text-white font-semibold">Yiqi Xue</span>, a Full-Stack AI
              Engineer / Machine Learning Systems Engineer based in the Bay Area. I studied Math at{' '}
              <span className="text-violet-400">UCLA</span> before earning my degree in Computer
              Science from <span className="text-violet-400">USC</span>.
            </p>
            <p>
              I'm obsessed with the intersection of AI and software engineering — particularly around
              <span className="text-white"> efficient LLM inference</span>, model serving at scale,
              and AI-driven content creation. I've contributed to projects like{' '}
              <a
                href="https://github.com/vllm-project/vllm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-violet-400 hover:text-violet-300 transition-colors"
              >
                vLLM
              </a>{' '}
              — one of the most starred LLM serving frameworks in the open-source ecosystem.
            </p>
            <p>
              When I'm not coding, you'll find me deep in sci-fi universes, binge-watching anime,
              or losing myself in video games. Proud <span className="text-white">INTJ</span> 🧠
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['AI Enthusiast', 'Open Source', 'Freelancer', 'INTJ', 'Sci-fi nerd'].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm border border-zinc-700 text-zinc-400 bg-zinc-900/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="p-6 rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:border-violet-500/30 hover:bg-violet-500/5 transition-all group"
              >
                <div className="text-3xl font-black text-white mb-1 group-hover:text-violet-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-zinc-300 mb-1">{stat.label}</div>
                <div className="text-xs text-zinc-600">{stat.note}</div>
              </motion.div>
            ))}

            {/* MBTI card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="col-span-2 p-5 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-500/5 to-blue-500/5"
            >
              <div className="flex items-center gap-3">
                <div className="text-2xl">🧠</div>
                <div>
                  <div className="text-white font-semibold text-sm">INTJ · "The Architect"</div>
                  <div className="text-zinc-500 text-xs">Strategic · Independent · Decisive</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
