import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import type { CSSProperties } from 'react'
import {
  FaPython,
  FaRust,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaBrain,
  FaCogs,
  FaChartLine,
  FaDocker,
  FaLinux,
  FaDna,
} from 'react-icons/fa'
import {
  SiPytorch,
  SiCplusplus,
  SiGurobi,
  SiFastapi,
  SiGooglecloud,
  SiKubernetes,
  SiLatex,
  SiScikitlearn,
  SiHuggingface,
} from 'react-icons/si'
import { MdOutlineScience, MdOutlineSchool } from 'react-icons/md'
import { TbMathFunction, TbGeometry } from 'react-icons/tb'

export const metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
}

export default async function Page() {
  return (
    <>
      <AnimatedBackground />

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center overflow-hidden pt-36 pb-12 text-center">
        <div className="group relative mb-8">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 opacity-50 blur transition duration-1000 group-hover:opacity-100 group-hover:duration-200" />
          <div className="relative mx-auto h-48 w-48 rounded-full bg-slate-900 p-1 ring-2 ring-slate-700">
            <Image
              src="/static/images/avatar.png"
              alt="Maximiliano Barajas"
              width={192}
              height={192}
              className="h-full w-full rounded-full object-cover"
              priority
            />
          </div>
        </div>

        <h1 className="mb-2 text-5xl leading-tight font-extrabold tracking-tight text-white drop-shadow-lg sm:text-7xl">
          Maximiliano Barajas
        </h1>

        <p className="mt-4 font-mono text-xl tracking-wide text-cyan-400">
          Applied Mathematics & Scientific Computing
        </p>

        <div className="mx-auto mt-8 max-w-3xl rounded-xl border border-slate-700 bg-slate-800/40 p-6 shadow-2xl backdrop-blur-sm">
          <p className="text-left text-lg leading-relaxed text-slate-300">
            Researcher at the intersection of <b className="text-white">Geometric Deep Learning</b>,{' '}
            <b className="text-white">Scientific Computing</b>, and{' '}
            <b className="text-white">Optimization</b>.
            <br className="mb-2" />
            I build rigorous mathematical frameworks and robust engineering systems to solve complex
            problems in biology, physics, and logistics.
          </p>
        </div>

        <div className="mt-10 flex justify-center space-x-8">
          <SocialLink href={siteMetadata.github} icon={<FaGithub />} />
          <SocialLink href={siteMetadata.linkedin} icon={<FaLinkedin />} />
          <SocialLink href={`mailto:${siteMetadata.email}`} icon={<FaEnvelope />} />
        </div>
      </div>

      {/* Education Section */}
      <div className="container mx-auto max-w-5xl px-4 py-12">
        <div className="mb-10 flex items-center">
          <div className="mr-4 h-1 w-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-600" />
          <h2 className="text-3xl font-bold tracking-tight text-white">Education</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <EducationCard
            school="Université Gustave Eiffel"
            location="Paris, France"
            degree="Exchange Program, M1 Actuarial Science"
            date="Present"
            desc="Focus on Advanced Probability, Stochastic Processes, and Risk Theory. Recipient of full International Mobility Scholarship, on UAM Mobility funding."
          />
          <EducationCard
            school="Universidad Autónoma Metropolitana"
            location="Mexico City"
            degree="B.S. Applied Mathematics & Computer Science"
            date="2025"
            desc="GPA: 9.88/10. Thesis on Curvature-Guided Topology Optimization for GNNs (Highest Honors)."
          />
        </div>
      </div>

      {/* Technical Arsenal Section */}
      <div className="container mx-auto max-w-5xl px-4 py-12">
        <div className="mb-10 flex items-center">
          <div className="mr-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
          <h2 className="text-3xl font-bold tracking-tight text-white">Technical Arsenal</h2>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          <SkillCard icon={<FaPython className="text-yellow-400" />} name="Python / SciPy" />
          <SkillCard
            icon={<SiPytorch className="text-orange-500" />}
            name="PyTorch / Geometric"
          />
          <SkillCard icon={<SiHuggingface className="text-yellow-400" />} name="LLMs / LoRA" />
          <SkillCard icon={<TbGeometry className="text-pink-400" />} name="Geometric DL" />
          <SkillCard icon={<SiGurobi className="text-red-500" />} name="Gurobi / MILP" />
          <SkillCard icon={<SiFastapi className="text-teal-400" />} name="FastAPI / Async" />
          <SkillCard icon={<FaDocker className="text-blue-500" />} name="Docker / Kubeflow" />
          <SkillCard icon={<SiGooglecloud className="text-yellow-500" />} name="Vertex AI / GCP" />
          <SkillCard icon={<FaLinux className="text-slate-200" />} name="Linux / Bash" />
          <SkillCard icon={<TbMathFunction className="text-purple-400" />} name="Numerical Opt." />
          <SkillCard icon={<SiScikitlearn className="text-orange-300" />} name="SciKit-Learn" />
          <SkillCard icon={<SiLatex className="text-slate-100" />} name="LaTeX / Writing" />
        </div>
      </div>

      {/* Research Experience Section */}
      <div className="container mx-auto max-w-5xl px-4 py-12 pb-24">
        <div className="mb-12 flex items-center">
          <div className="mr-4 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-600" />
          <h2 className="text-3xl font-bold tracking-tight text-white">Research Experience</h2>
        </div>

        <div className="relative ml-4 space-y-16 border-l-2 border-slate-700">
          
          {/* LAMA Entry (Nuevo) */}
          <ExperienceItem
            date="Present"
            title="Research Intern (M1 Actuarial Science)"
            org="Le Laboratoire d’analyse et de mathématiques appliquées (LAMA)"
            desc="Conducting research in applied mathematics and stochastic modeling as part of the Master 1 Actuarial Science curriculum at Université Gustave Eiffel. Focusing on risk theory and statistical processes."
          />

          {/* CCG Entry */}
          <ExperienceItem
            date="Aug 2024 – Present"
            title="Undergraduate Researcher"
            org="Center for Genomic Sciences (CCG · UNAM)"
            desc="Fine-tuning Foundation Models (LLaMA, GPT-4o) for bacterial TRN curation. Implementing LoRA and 4-bit quantization pipelines to extract regulatory networks from literature. Work accepted for oral presentation at CIBB 2025 (Milan)."
          />

          <ExperienceItem
            date="Aug 2024 – Present"
            title="Undergraduate Thesis Researcher"
            org="Laboratory of Applied Mathematics & Systems (UAM)"
            desc="Proposing a discrete-geometric framework using Ollivier-Ricci Curvature to mitigate 'over-squashing' in Graph Neural Networks. Designing stochastic search algorithms to optimize spectral gaps."
          />

          <ExperienceItem
            date="Summer 2024"
            title="Mitacs Globalink Research Scholar"
            org="CIRRELT · Montreal, Canada"
            desc="Formulated a Mixed-Integer Linear Program (MILP) for cold-chain routing optimization. Developed a 'Delta-primary' reformulation to linearize bilinear energy terms, solving large-scale instances."
          />

          <ExperienceItem
            date="Jan 2024 – May 2024"
            title="Research Fellow (Computational Physics)"
            org="IER · UNAM"
            desc="Solved ill-posed inverse problems to retrieve optical constants using Maxwell-consistent Transfer Matrix Methods. Implemented global-to-local optimization (Simulated Annealing → BFGS) with Tikhonov regularization."
          />

          <ExperienceItem
            date="July 2023 – Jan 2024"
            title="AI Engineer Intern"
            org="El Puerto de Liverpool"
            desc="Engineered production-grade Virtual Try-On backends. Optimized tail-latency (p95) for smart mirrors using async GPU pipelines and established MLOps workflows on Vertex AI/Kubeflow."
          />
        </div>
      </div>
    </>
  )
}

function AnimatedBackground() {
  const blobA: CSSProperties = { animation: 'floatA 12s ease-in-out infinite' }
  const blobB: CSSProperties = { animation: 'floatB 16s ease-in-out infinite' }
  const blobC: CSSProperties = { animation: 'floatC 18s ease-in-out infinite' }

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.10),transparent_55%),radial-gradient(circle_at_bottom,rgba(168,85,247,0.10),transparent_55%)]" />

      <div
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-cyan-500 opacity-25 blur-3xl"
        style={blobA}
      />
      <div
        className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-purple-600 opacity-20 blur-3xl"
        style={blobB}
      />
      <div
        className="absolute -bottom-24 left-1/3 h-[26rem] w-[26rem] rounded-full bg-blue-500 opacity-15 blur-3xl"
        style={blobC}
      />

      <div className="absolute inset-0 bg-[url('/static/images/noise.png')] opacity-[0.03] mix-blend-overlay" />

      <style>{`
        @keyframes floatA {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(40px, 30px) scale(1.05); }
        }
        @keyframes floatB {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(-50px, 40px) scale(1.08); }
        }
        @keyframes floatC {
          0%,100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(30px, -35px) scale(1.04); }
        }
      `}</style>
    </div>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-4xl text-slate-500 drop-shadow-lg transition-all duration-300 hover:-translate-y-1 hover:text-cyan-400"
    >
      {icon}
    </a>
  )
}

function SkillCard({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="group flex items-center space-x-4 rounded-xl border border-slate-700/50 bg-slate-800/40 p-5 transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-800 hover:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
      <div className="text-3xl transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <span className="font-mono text-sm text-slate-300 group-hover:text-white">{name}</span>
    </div>
  )
}

function EducationCard({
  school,
  location,
  degree,
  date,
  desc,
}: {
  school: string
  location: string
  degree: string
  date: string
  desc: string
}) {
  return (
    <div className="group rounded-xl border border-slate-700/50 bg-slate-800/20 p-6 transition-all duration-300 hover:border-green-500/30 hover:bg-slate-800/40">
      <div className="mb-2 flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-white group-hover:text-green-400">{school}</h3>
          <p className="text-sm text-slate-400">{location}</p>
        </div>
        <span className="rounded border border-slate-700 bg-slate-900/50 px-2 py-1 font-mono text-xs text-slate-500">
          {date}
        </span>
      </div>
      <div className="mt-3 font-mono text-sm font-medium text-slate-200">{degree}</div>
      <p className="mt-2 text-sm leading-relaxed text-slate-400">{desc}</p>
    </div>
  )
}

function ExperienceItem({
  date,
  title,
  org,
  desc,
}: {
  date: string
  title: string
  org: string
  desc: string
}) {
  return (
    <div className="group relative pl-10">
      <div className="absolute top-2 -left-[9px] h-4 w-4 rounded-full border-4 border-slate-600 bg-slate-900 transition-all duration-300 group-hover:scale-125 group-hover:border-cyan-400" />

      <div className="mb-2 flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-cyan-300">
          {title}
        </h3>
        <span className="rounded border border-slate-700 bg-slate-900/50 px-2 py-1 font-mono text-sm text-slate-500">
          {date}
        </span>
      </div>
      <span className="mb-3 block text-lg font-medium text-purple-400">{org}</span>
      <p className="max-w-4xl text-lg leading-relaxed text-slate-400">{desc}</p>
    </div>
  )
}