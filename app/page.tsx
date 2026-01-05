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
} from 'react-icons/fa'
import { SiPytorch, SiCplusplus, SiGurobi } from 'react-icons/si'

export const metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
}

export default async function Page() {
  return (
    <>
      <AnimatedBackground />

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
            Undergraduate Researcher at UAM. Specializing in{' '}
            <b className="text-white">Stochastic Analysis</b>,{' '}
            <b className="text-white">Graph Theory</b>, and{' '}
            <b className="text-white">Advanced Optimization</b>.
            <br className="mb-2" />
            Bridging the gap between rigorous mathematical theory and high-performance engineering.
          </p>
        </div>

        <div className="mt-10 flex justify-center space-x-8">
          <SocialLink href={siteMetadata.github} icon={<FaGithub />} />
          <SocialLink href={siteMetadata.linkedin} icon={<FaLinkedin />} />
          <SocialLink href={`mailto:${siteMetadata.email}`} icon={<FaEnvelope />} />
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 py-16">
        <div className="mb-10 flex items-center">
          <div className="mr-4 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
          <h2 className="text-3xl font-bold tracking-tight text-white">Technical Arsenal</h2>
        </div>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          <SkillCard icon={<FaPython className="text-yellow-400" />} name="Python / PyMC" />
          <SkillCard icon={<SiPytorch className="text-orange-500" />} name="PyTorch / Geometric" />
          <SkillCard icon={<FaRust className="text-orange-600" />} name="Rust / Systems" />
          <SkillCard icon={<SiCplusplus className="text-blue-500" />} name="C++ / CUDA" />
          <SkillCard icon={<SiGurobi className="text-red-500" />} name="Gurobi / CPLEX" />
          <SkillCard icon={<FaChartLine className="text-blue-400" />} name="MATLAB / R" />
          <SkillCard icon={<FaBrain className="text-purple-400" />} name="Swarm Intelligence" />
          <SkillCard icon={<FaCogs className="text-slate-400" />} name="PDEs / ODEs" />
        </div>
      </div>

      <div className="container mx-auto max-w-5xl px-4 py-12 pb-24">
        <div className="mb-12 flex items-center">
          <div className="mr-4 h-1 w-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-600" />
          <h2 className="text-3xl font-bold tracking-tight text-white">Research Experience</h2>
        </div>

        <div className="relative ml-4 space-y-16 border-l-2 border-slate-700">
          <ExperienceItem
            date="2025"
            org="CIRRELT - Montreal, Canada"
            desc="Designed a mixed-integer linear model for cold-chain routing optimization. Calibrated with operational data using Pyomo and Gurobi under supervision of Hani Zbib."
          />

          <ExperienceItem
            date="2024"
            org="El Puerto de Liverpool"
            desc="Implemented scalable pipelines for Virtual Try-On models. Utilized Markov Chain Monte-Carlo (PyMC) for Bayesian distribution drift monitoring in production environments."
          />

          <ExperienceItem
            date="2024"
            org="IER - UNAM"
            desc="Developed hybrid heuristics (Hooke-Jeeves + Simulated Annealing) for optical parameter estimation in semiconductors. Optimized for non-convex landscapes."
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
      <div className="text-3xl transition-transform duration-300 group-hover:scale-110">{icon}</div>
      <span className="font-mono text-sm text-slate-300 group-hover:text-white">{name}</span>
    </div>
  )
}

function ExperienceItem({
  date,
  role,
  org,
  desc,
}: {
  date: string
  role: string
  org: string
  desc: string
}) {
  return (
    <div className="group relative pl-10">
      <div className="absolute top-2 -left-[9px] h-4 w-4 rounded-full border-4 border-slate-600 bg-slate-900 transition-all duration-300 group-hover:scale-125 group-hover:border-cyan-400" />

      <div className="mb-2 flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-2xl font-bold text-white transition-colors group-hover:text-cyan-300">
          {role}
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
