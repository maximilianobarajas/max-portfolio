import Link from 'next/link'

import projectsData from '@/data/projectsData'

export const metadata = {
  title: 'Projects',
  description: 'Selected projects and research work.',
}

type ProjectListItem = {
  title: string
  description: string
  href: string
}

export default function ProjectsPage() {
  // Cast defensivo para que no truene si tu archivo tiene objetos con más campos.
  const items = projectsData as unknown as ProjectListItem[]

  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Projects</h1>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
        A curated set of research and engineering projects, with emphasis on methodological rigor,
        reproducibility, and measurable results.
      </p>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {items.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="group rounded-2xl border border-slate-700/60 bg-slate-900/30 p-6 transition hover:border-cyan-500/40 hover:bg-slate-900/40"
          >
            <div className="text-xl font-bold text-white transition group-hover:text-cyan-200">
              {p.title}
            </div>
            <p className="mt-3 leading-relaxed text-slate-300">{p.description}</p>

            <div className="mt-5 inline-flex items-center gap-2 font-mono text-sm text-cyan-400 group-hover:underline">
              View project <span aria-hidden>→</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
