import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  status: 'live' | 'wip' | 'placeholder'
  github?: string
  demo?: string
  featured?: boolean
  thumbnail?: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'AgentVerse',
    description: 'Watch your AI agent fight. Turns an AI agent\'s real problem-solving workflow into a live, side-scrolling pixel-art JRPG battle — the agent is the hero, your task is the boss, and every tool call becomes a skill cast. Powered by Grok + the X (xAI) API.',
    tech: ['TypeScript', 'React', 'Zustand', 'Grok API'],
    status: 'live',
    github: 'https://github.com/Vivo50E/AgentVerse',
    demo: 'https://vivo50e.github.io/AgentVerse/',
    thumbnail: '/projects/agentverse.png',
    featured: true,
  },
  {
    id: 2,
    title: 'NoteWise',
    description: 'AI-based web app for creating mind graphs and notes from texts — turns raw reading material into structured, connected knowledge.',
    tech: ['TypeScript', 'Python', 'React'],
    status: 'live',
    github: 'https://github.com/Vivo50E/NoteWise',
    demo: 'http://www.notewise.design/',
    thumbnail: '/projects/notewise.png',
    featured: true,
  },
  {
    id: 3,
    title: 'Project Gamma',
    description: 'A short punchy description works well. Focus on the outcome, not just the tech used.',
    tech: ['Docker', 'Kubernetes', 'AWS'],
    status: 'placeholder',
  },
  {
    id: 4,
    title: 'Project Delta',
    description: 'Open source contribution or personal side project. What inspired it?',
    tech: ['Python', 'Redis', 'Kafka'],
    status: 'placeholder',
  },
  {
    id: 5,
    title: 'Project Epsilon',
    description: 'Your AI/ML project — models, datasets, results. Link to paper or demo if available.',
    tech: ['PyTorch', 'vLLM', 'CUDA'],
    status: 'placeholder',
  },
  {
    id: 6,
    title: 'Project Zeta',
    description: 'Another one of your cool builds. Feel free to replace these placeholder cards!',
    tech: ['JavaScript', 'WebGL', 'Unity'],
    status: 'placeholder',
  },
]

const statusConfig = {
  live: { label: 'Live', color: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20' },
  wip: { label: 'WIP', color: 'text-orange-400 bg-orange-400/10 border-orange-400/20' },
  placeholder: { label: 'Coming Soon', color: 'text-zinc-500 bg-zinc-800/50 border-zinc-700' },
}

function ProjectCard({ project, index, isInView }: { project: Project; index: number; isInView: boolean }) {
  const s = statusConfig[project.status]

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className={`group relative p-6 rounded-2xl border bg-zinc-900/20 hover:bg-zinc-900/50 transition-all duration-300 flex flex-col ${
        project.featured
          ? 'border-violet-500/30 hover:border-violet-500/50 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)]'
          : 'border-zinc-800 hover:border-zinc-700'
      }`}
    >
      {project.featured && (
        <div className="absolute -top-2.5 left-5 z-10">
          <span className="px-3 py-0.5 rounded-full text-xs font-semibold bg-violet-600 text-white">Featured</span>
        </div>
      )}

      {project.thumbnail ? (
        <div className="-mx-6 -mt-6 mb-4 relative aspect-video overflow-hidden rounded-t-2xl border-b border-zinc-800">
          <img
            src={project.thumbnail}
            alt={`${project.title} screenshot`}
            loading="lazy"
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
          />
          <span className={`absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-medium border backdrop-blur-sm ${s.color}`}>
            {s.label}
          </span>
        </div>
      ) : (
        <div className="flex items-start justify-between mb-4">
          <div className="text-3xl">
            {['🚀', '💡', '⚡', '🔮', '🧠', '🎮'][index % 6]}
          </div>
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium border ${s.color}`}>
            {s.label}
          </span>
        </div>
      )}

      <h3 className="text-white font-bold text-xl mb-2 group-hover:text-violet-300 transition-colors">
        {project.title}
      </h3>
      <p className="text-zinc-500 text-sm leading-relaxed flex-1 mb-4">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.tech.map(t => (
          <span key={t} className="px-2 py-0.5 rounded text-xs font-mono text-zinc-400 bg-zinc-800 border border-zinc-700">
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3">
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Code
          </a>
        ) : (
          <span className="flex items-center gap-1.5 text-sm text-zinc-700 cursor-not-allowed">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            Private
          </span>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-violet-400 transition-colors"
          >
            ↗ Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="projects" className="py-32 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <p className="font-mono text-violet-400 text-sm mb-3">03. projects</p>
          <h2 className="text-4xl md:text-5xl font-black text-white">What I've Built</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-zinc-400 mb-12 max-w-xl"
        >
          A selection of my work. Cards marked "Coming Soon" are ready for you to fill in — just edit{' '}
          <code className="font-mono text-violet-400 text-sm bg-violet-500/10 px-1 rounded">Projects.tsx</code>.
        </motion.p>

        {/* Contributed to notable OSS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-10 p-5 rounded-2xl border border-zinc-800 bg-zinc-900/20"
        >
          <p className="text-zinc-500 text-sm mb-3 font-mono">// Open source contributions</p>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'vllm-project/vllm', stars: '89k', url: 'https://github.com/vllm-project/vllm' },
              { name: 'vllm-project/vllm-omni', stars: '6.1k', url: 'https://github.com/vllm-project/vllm-omni' },
              { name: 'benchflow-ai/skillsbench', stars: '1.7k', url: 'https://github.com/benchflow-ai/skillsbench' },
            ].map(repo => (
              <a
                key={repo.name}
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-700 bg-zinc-800/50 hover:border-violet-500/40 hover:bg-violet-500/5 transition-all text-sm"
              >
                <svg className="w-4 h-4 text-zinc-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="text-zinc-300 font-medium">{repo.name}</span>
                <span className="text-zinc-500">⭐ {repo.stars}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  )
}
