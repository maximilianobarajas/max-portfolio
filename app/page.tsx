import siteMetadata from '@/data/siteMetadata'
import Image from 'next/image'
import CursorGlow from '@/components/CursorGlow'
import type { CSSProperties } from 'react'
import {
  FaPython,
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDocker,
  FaLinux,
  FaMicroscope,
  FaEye,
  FaShieldAlt,
  FaBug,
  FaGavel,
} from 'react-icons/fa'
import {
  SiPytorch,
  SiGurobi,
  SiFastapi,
  SiGooglecloud,
  SiGooglebigquery,
  SiGoogledataflow,
  SiGooglepubsub,
  SiLatex,
  SiScikitlearn,
  SiHuggingface,
  SiDatabricks,
  SiTerraform,
} from 'react-icons/si'
import { TbMathFunction, TbGeometry, TbBrandAzure } from 'react-icons/tb'
import { VscAzureDevops } from 'react-icons/vsc'

export const metadata = {
  title: siteMetadata.title,
  description: siteMetadata.description,
}

type LogoSpec = { src?: string; alt: string; mono?: string }
type LinkSpec = { label: string; href: string }
type SupervisorSpec = { name: string; href: string }

export default async function Page() {
  return (
    <>
      <AnimatedBackground />
      <CursorGlow />

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center overflow-hidden pt-36 pb-12 text-center">
        <div className="group relative mb-8">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-slate-300 via-slate-400 to-slate-500 opacity-40 blur transition duration-1000 group-hover:opacity-70 dark:from-slate-600 dark:via-slate-700 dark:to-slate-800" />
          <div className="relative mx-auto h-48 w-48 rounded-full bg-white p-1 ring-2 ring-slate-300 dark:bg-slate-900 dark:ring-slate-700">
            <Image
              src="/static/images/avatar.png"
              alt="Max Barajas"
              width={192}
              height={192}
              className="h-full w-full rounded-full object-cover"
              priority
            />
          </div>
        </div>

        <h1 className="mb-2 text-5xl leading-tight font-extrabold tracking-tight text-slate-900 drop-shadow-lg sm:text-7xl dark:text-white">
          Max Barajas
        </h1>

        <p className="mt-1 font-mono text-base tracking-wide text-slate-500 dark:text-slate-400">
          they/them <span aria-hidden>🏳️‍🌈</span>
        </p>

        <p className="mt-3 font-mono text-xl tracking-wide text-slate-500 dark:text-slate-400">
          Applied Mathematics & Machine Learning
        </p>

        <div className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-lg border border-slate-200 bg-slate-50 text-left shadow-2xl backdrop-blur-sm dark:border-slate-700 dark:bg-slate-900/60">
          <div className="flex items-center gap-1.5 border-b border-slate-200 bg-slate-100 px-4 py-2 dark:border-slate-700 dark:bg-slate-800/60">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-400 dark:bg-slate-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-400 dark:bg-slate-600" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-400 dark:bg-slate-600" />
            <span className="ml-3 font-mono text-xs text-slate-500 dark:text-slate-500">
              whoami.sh
            </span>
          </div>
          <div className="p-6 font-mono text-base leading-relaxed">
            <p className="text-slate-500 dark:text-slate-500">
              <span className="text-slate-400 dark:text-slate-600">$</span> whoami
            </p>
            <p className="mt-2 text-slate-700 dark:text-slate-300">
              <span className="terminal-cursor">
                BSc in Applied Mathematics. I build models that have to work twice: once in a paper,
                once in production.
              </span>
            </p>
          </div>
        </div>

        <div className="mt-10 flex justify-center space-x-8">
          <SocialLink href={siteMetadata.github} icon={<FaGithub />} />
          <SocialLink href={siteMetadata.linkedin} icon={<FaLinkedin />} />
          <SocialLink href={`mailto:${siteMetadata.email}`} icon={<FaEnvelope />} />
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="container mx-auto max-w-5xl px-4 py-12">
        <SectionHeading title="Technical Skills" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <SkillCard icon={<FaPython className="text-yellow-400" />} name="Python / SciPy" />
          <SkillCard icon={<SiPytorch className="text-orange-500" />} name="PyTorch / Geometric" />
          <SkillCard icon={<SiHuggingface className="text-yellow-400" />} name="LLMs / LoRA" />
          <SkillCard icon={<TbGeometry className="text-slate-400" />} name="Geometric DL" />
          <SkillCard icon={<SiGurobi className="text-red-500" />} name="Gurobi / MILP" />
          <SkillCard icon={<SiFastapi className="text-teal-400" />} name="FastAPI / Async" />
          <SkillCard icon={<FaDocker className="text-blue-500" />} name="Docker / Kubeflow" />
          <SkillCard icon={<FaLinux className="text-slate-400" />} name="Linux / Bash" />
          <SkillCard icon={<TbMathFunction className="text-slate-400" />} name="Numerical Opt." />
          <SkillCard icon={<SiScikitlearn className="text-orange-300" />} name="scikit-learn" />
          <SkillCard icon={<SiLatex className="text-slate-400" />} name="LaTeX / Writing" />
          <SkillCard icon={<SiTerraform className="text-purple-400" />} name="Terraform (IaC)" />

          <SkillCard icon={<SiGooglecloud className="text-blue-400" />} name="Vertex AI / GCP" />
          <SkillCard
            icon={<SiGooglebigquery className="text-blue-400" />}
            name="BigQuery / Cloud Storage"
          />
          <SkillCard
            icon={<SiGoogledataflow className="text-blue-400" />}
            name="Dataflow / Dataproc"
          />
          <SkillCard
            icon={<SiGooglepubsub className="text-blue-400" />}
            name="Pub/Sub / Composer"
          />

          <SkillCard icon={<TbBrandAzure className="text-sky-500" />} name="Azure ML / OpenAI" />
          <SkillCard
            icon={<VscAzureDevops className="text-sky-500" />}
            name="Azure Data Factory / DevOps"
          />
          <SkillCard icon={<SiDatabricks className="text-red-400" />} name="Databricks" />

          <SkillCard
            icon={<FaMicroscope className="text-slate-500 dark:text-slate-300" />}
            name="Mechanistic Interpretability"
          />
          <SkillCard
            icon={<FaEye className="text-slate-500 dark:text-slate-300" />}
            name="Scalable Oversight"
          />
          <SkillCard
            icon={<FaShieldAlt className="text-slate-500 dark:text-slate-300" />}
            name="AI Control"
          />
          <SkillCard
            icon={<FaBug className="text-slate-500 dark:text-slate-300" />}
            name="Adversarial Robustness"
          />
          <SkillCard
            icon={<FaGavel className="text-slate-500 dark:text-slate-300" />}
            name="AI Governance & Policy"
          />
        </div>
      </div>

      {/* Education Section */}
      <div className="container mx-auto max-w-5xl px-4 py-12">
        <SectionHeading title="Education" />

        <div className="grid gap-6 md:grid-cols-2">
          <EducationCard
            school="Université Gustave Eiffel"
            schoolHref="https://www.univ-gustave-eiffel.fr/en/"
            location="Paris, France"
            degree="Exchange Semester"
            date="Sept 2025 – Jan 2026"
            desc="Courses in advanced probability, stochastic processes, and risk theory. Full international mobility scholarship, on UAM mobility funding."
            logo={{
              src: '/static/images/logos/gustave-eiffel.svg',
              alt: 'Université Gustave Eiffel',
            }}
          />
          <EducationCard
            school="Universidad Autónoma Metropolitana"
            schoolHref="https://www.uam.mx/"
            location="Mexico City"
            degree="B.S. Applied Mathematics & Computer Science"
            date="Oct 2021 – Present"
            desc="GPA: 9.88/10. Thesis on curvature-guided topology optimization for graph neural networks, with highest honors."
            logo={{ src: '/static/images/thesis/uamlogo.png', alt: 'UAM' }}
          />
        </div>
      </div>

      {/* Experience Section */}
      <div className="container mx-auto max-w-5xl px-4 py-12 pb-24">
        <SectionHeading title="Experience" />

        <div className="relative ml-4 space-y-16 border-l-2 border-slate-200 dark:border-slate-700">
          <ExperienceItem
            date="Present"
            title="AI Analyst"
            org="Banorte"
            orgHref="https://www.banorte.com/"
            location="Mexico City, Mexico"
            logos={[{ src: '/static/images/logos/banorte.svg', alt: 'Banorte' }]}
            desc="I work on the adoption of artificial intelligence models at the bank. My work includes data governance for the data these models use, which means checking where the data comes from, how it is stored, and who can access it. I also help design workflows that meet the compliance requirements set by the CNBV, the Mexican banking regulator. Beyond governance, I work with transformer-based models for more traditional banking use cases, such as text classification and information extraction. I use tools from Google Cloud Platform and Microsoft Azure to build and deploy these systems."
          />

          <ExperienceItem
            date="Summer 2026"
            title="Summer Research Student, FS-PRI Group"
            org="DESY"
            orgHref="https://photon-science.desy.de/research/research_teams/fs_pri/index_eng.html"
            location="Hamburg, Germany"
            logos={[{ src: '/static/images/logos/desy.svg', alt: 'DESY' }]}
            desc="I worked on model merging methods in the FS-PRI group. The goal was to add new knowledge to a machine learning model over time, without retraining it from scratch each time new data becomes available. The model I worked with was used for optical coating design, where the goal is to choose material layers that produce a desired optical response. I studied how different merging strategies affect the accuracy and stability of the model after each update."
            supervisors={[
              { name: 'Dr. Henrik Tünnermann', href: 'https://orcid.org/0000-0002-3850-0356' },
              { name: 'Utsa Chattopadhyay', href: 'https://orcid.org/0009-0006-6570-5820' },
            ]}
          />

          <ExperienceItem
            date="Summer 2026"
            title="Summer Research Student"
            org="Fields Institute"
            orgHref="https://www.fields.utoronto.ca/"
            location="Toronto, Canada"
            logos={[
              { src: '/static/images/logos/uoft.svg', alt: 'University of Toronto' },
              { src: '/static/images/logos/york.svg', alt: 'York University' },
            ]}
            desc="I studied Physics-Informed Neural Networks as a new way to model how diseases spread. Traditional models such as SIR and SEIR describe infections using differential equations with fixed rules. Physics-Informed Neural Networks combine these equations with data, so the model can learn from real outbreak information while still following the mathematical structure of the disease. I trained these networks on simple epidemic models first, then compared the results against real and simulated outbreak data, including data that was noisy or incomplete. I also looked at how public behavior and vaccination policies change the predictions. This project connects mathematics, data, and computing to support public health forecasting."
            supervisors={[
              { name: 'Dr. Divya Sharma', href: 'https://divyasharma.faculty.bio/' },
              { name: 'Dr. Jude Kong', href: 'https://aimmlab.org/' },
            ]}
          />

          <ExperienceItem
            date="Aug 2024 – Present"
            title="Undergraduate Researcher"
            org="Center for Genomic Sciences (CCG · UNAM)"
            orgHref="https://www.ccg.unam.mx/"
            location="Cuernavaca, Mexico"
            logos={[{ src: '/static/images/logos/unam.svg', alt: 'UNAM' }]}
            desc="I fine-tune language models such as LLaMA and GPT-4o to find gene regulation relationships described in scientific papers. Bacteria regulate their genes through transcription factors, and this information is often reported in text rather than in structured databases. I built data pipelines to prepare training and evaluation sets for this task, and I used low-rank adaptation and 4-bit quantization to fine-tune LLaMA efficiently with limited computing resources. The models classify each relationship as activator, repressor, regulator, or no relation, and the results support the reconstruction of transcriptional regulatory networks for specific bacteria. I presented this work at CIBB 2025 in Milan."
            link={{
              label: 'CIBB 2025 presentation',
              href: 'https://www.bioinformatics.polimi.it/CIBB2025/index.html#',
            }}
            supervisors={[
              {
                name: 'Dr. Carlos Francisco Méndez Cruz',
                href: 'https://scholar.google.com/citations?user=nyQNW0gAAAAJ&hl=es',
              },
            ]}
          />

          <ExperienceItem
            date="2024 – 2025"
            title="Undergraduate Thesis Researcher"
            org="Laboratory of Applied Mathematics & Systems (UAM)"
            orgHref="https://www.uam.mx/"
            location="Mexico City, Mexico"
            logos={[{ src: '/static/images/thesis/uamlogo.png', alt: 'UAM' }]}
            desc="For my undergraduate thesis, I studied graph neural networks and a problem called over-squashing, where information from distant nodes gets compressed and lost as it passes through the network. I used discrete curvature, a way to measure how connected or bottlenecked different parts of a graph are, to decide where to add or remove edges. I designed a stochastic search method that uses this curvature information to guide changes to the graph structure. The goal was to improve how well the network separates different classes of nodes, without changing the learning algorithm itself."
            supervisors={[
              {
                name: 'Dr. Edwin Montes Orozco',
                href: 'https://scholar.google.com/citations?user=Af4x8LIAAAAJ&hl=es',
              },
            ]}
          />

          <ExperienceItem
            date="Summer 2024"
            title="Mitacs Globalink Research Scholar"
            org="CIRRELT"
            orgHref="https://www.cirrelt.ca/"
            location="Montreal, Canada"
            logos={[{ mono: 'CIRRELT', alt: 'CIRRELT' }]}
            desc="At CIRRELT, I worked on cold-chain logistics, where vehicles need to keep perishable food at a controlled temperature while making multiple stops. I built a mixed-integer linear program that models vehicle routes, delivery times, and temperature control together, instead of treating them as separate problems. Part of the model included terms that were not linear, so I worked on a reformulation to make the problem solvable with standard optimization solvers. I implemented and tested the model using Pyomo and Gurobi, and I calibrated it with real operational data from the project."
            supervisors={[
              {
                name: 'Dr. Maryam Darvish',
                href: 'https://scholar.google.com/citations?user=hzonmnIAAAAJ&hl=en',
              },
              {
                name: 'Dr. Hani Zbib',
                href: 'https://scholar.google.com/citations?user=d_7993oAAAAJ&hl=en',
              },
            ]}
          />

          <ExperienceItem
            date="Jan 2024 – May 2024"
            title="Research Fellow, Computational Physics"
            org="IER · UNAM"
            orgHref="https://www.ier.unam.mx/"
            location="Temixco, Mexico"
            logos={[{ src: '/static/images/logos/unam.svg', alt: 'UNAM' }]}
            desc="At the Institute of Renewable Energies, I worked on an inverse problem: given how much light a thin semiconductor film transmits at different wavelengths, I needed to recover the optical constants of the material. This type of problem is ill-posed, meaning small errors in the data can lead to large errors in the result. I used global optimization methods, such as simulated annealing, to find a good starting point, and then refined the result with local optimization methods such as BFGS. I also added regularization to keep the solution stable."
            supervisors={[
              {
                name: 'Dr. Fernando Ayala Mato',
                href: 'https://scholar.google.com/citations?user=EP2-Rr0AAAAJ&hl=es',
              },
            ]}
          />

          <ExperienceItem
            date="Jul 2023 – Jan 2024"
            title="AI Engineer Intern"
            org="El Puerto de Liverpool"
            orgHref="https://www.liverpool.com.mx/tienda/home"
            location="Mexico City, Mexico"
            logos={[{ src: '/static/images/logos/liverpool.png', alt: 'El Puerto de Liverpool' }]}
            desc="At El Puerto de Liverpool, I worked on the backend for a project called Pruébatelo Tú Mismo, which used smart mirrors placed in stores. These mirrors let customers see themselves wearing clothes from the catalog without trying them on. I built a self-contained inference API that did not depend on external services, so the system could respond quickly even under heavy use. I tested the system under different levels of concurrent traffic to keep response times low, and I helped move the evaluation and inference workflows to Google Cloud Vertex AI to make the results easier to reproduce."
            supervisors={[
              { name: 'Guillermo Oswaldo Cota Martínez', href: 'https://github.com/Gcota51' },
            ]}
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
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white dark:bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(100,116,139,0.10),transparent_55%),radial-gradient(circle_at_bottom,rgba(100,116,139,0.08),transparent_55%)] dark:bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.06),transparent_55%),radial-gradient(circle_at_bottom,rgba(148,163,184,0.06),transparent_55%)]" />

      <div
        className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(100,116,139,0.20),transparent_70%)] dark:bg-[radial-gradient(circle,rgba(148,163,184,0.25),transparent_70%)]"
        style={blobA}
      />
      <div
        className="absolute top-1/3 -right-24 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(120,113,108,0.16),transparent_70%)] dark:bg-[radial-gradient(circle,rgba(168,162,158,0.16),transparent_70%)]"
        style={blobB}
      />
      <div
        className="absolute -bottom-24 left-1/3 h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle,rgba(100,116,139,0.14),transparent_70%)] dark:bg-[radial-gradient(circle,rgba(100,116,139,0.18),transparent_70%)]"
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

function SectionHeading({ title }: { title: string }) {
  const slug = title
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')

  return (
    <div className="mb-10">
      <div className="font-mono text-xs text-slate-400 dark:text-slate-600">~/{slug}</div>
      <div className="mt-1 flex items-center">
        <div className="mr-4 h-1 w-16 rounded-full bg-gradient-to-r from-slate-500 to-transparent dark:from-slate-500 dark:to-transparent" />
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white">
          {title}
        </h2>
      </div>
    </div>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-4xl text-slate-400 drop-shadow-lg transition-all duration-300 hover:-translate-y-1 hover:text-slate-700 dark:text-slate-500 dark:hover:text-slate-300"
    >
      {icon}
    </a>
  )
}

function SkillCard({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="group flex items-center space-x-4 rounded-xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-slate-400/60 hover:shadow-[0_0_20px_rgba(100,116,139,0.10)] dark:border-slate-700/50 dark:bg-slate-800/40 dark:hover:border-slate-500/50 dark:hover:bg-slate-800 dark:hover:shadow-[0_0_20px_rgba(148,163,184,0.12)]">
      <div className="text-3xl transition-transform duration-300 group-hover:scale-110">{icon}</div>
      <span className="min-w-0 font-mono text-sm break-words text-slate-600 group-hover:text-slate-900 dark:text-slate-300 dark:group-hover:text-white">
        {name}
      </span>
    </div>
  )
}

function EducationCard({
  school,
  schoolHref,
  location,
  degree,
  date,
  desc,
  logo,
}: {
  school: string
  schoolHref?: string
  location: string
  degree: string
  date: string
  desc: string
  logo?: LogoSpec
}) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:border-slate-400/50 dark:border-slate-700/50 dark:bg-slate-800/20 dark:hover:border-slate-500/40 dark:hover:bg-slate-800/40">
      <div className="mb-2 flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          {logo && <LogoChip {...logo} />}
          <div>
            <h3 className="text-xl font-bold text-slate-900 group-hover:text-slate-700 dark:text-white dark:group-hover:text-slate-200">
              {schoolHref ? (
                <a
                  href={schoolHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {school}
                </a>
              ) : (
                school
              )}
            </h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">{location}</p>
          </div>
        </div>
        <span className="rounded border border-slate-200 bg-slate-100 px-2 py-1 font-mono text-xs text-slate-500 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-500">
          {date}
        </span>
      </div>
      <div className="mt-3 font-mono text-sm font-medium text-slate-700 dark:text-slate-200">
        {degree}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-slate-500 dark:text-slate-400">{desc}</p>
    </div>
  )
}

function LogoChip({ src, alt, mono }: LogoSpec) {
  return (
    <div
      className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-slate-300 bg-slate-100 p-1.5 dark:border-slate-700/50"
      title={alt}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={40}
          height={40}
          className="h-full w-full object-contain"
        />
      ) : (
        <span className="text-center text-[8px] leading-tight font-bold tracking-tight text-slate-600">
          {mono}
        </span>
      )}
    </div>
  )
}

function ExperienceItem({
  date,
  title,
  org,
  orgHref,
  location,
  desc,
  logos,
  link,
  supervisors,
}: {
  date: string
  title: string
  org: string
  orgHref?: string
  location?: string
  desc: string
  logos?: LogoSpec[]
  link?: LinkSpec
  supervisors?: SupervisorSpec[]
}) {
  return (
    <div className="group relative pl-10">
      <div className="absolute top-2 -left-[9px] h-4 w-4 rounded-full border-4 border-slate-300 bg-white transition-all duration-300 group-hover:scale-125 group-hover:border-slate-500 dark:border-slate-600 dark:bg-slate-900 dark:group-hover:border-slate-400" />

      <div className="mb-2 flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="text-2xl font-bold text-slate-900 transition-colors group-hover:text-slate-700 dark:text-white dark:group-hover:text-slate-200">
          {title}
        </h3>
        <span className="rounded border border-slate-200 bg-slate-100 px-2 py-1 font-mono text-sm text-slate-500 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-500">
          {date}
        </span>
      </div>

      <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
        <span className="text-lg font-medium text-slate-600 dark:text-slate-400">
          {orgHref ? (
            <a href={orgHref} target="_blank" rel="noopener noreferrer" className="hover:underline">
              {org}
            </a>
          ) : (
            org
          )}
        </span>
        {location && <span className="text-sm text-slate-500 dark:text-slate-500">{location}</span>}
        {logos && logos.length > 0 && (
          <div className="flex items-center gap-2">
            {logos.map((l) => (
              <LogoChip key={l.alt} {...l} />
            ))}
          </div>
        )}
      </div>

      <p className="max-w-4xl text-lg leading-relaxed text-slate-600 dark:text-slate-400">{desc}</p>

      {supervisors && supervisors.length > 0 && (
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-500">
          Supervised by{' '}
          {supervisors.map((s, i) => (
            <span key={s.name}>
              <a
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-600 underline decoration-slate-400 underline-offset-4 hover:text-slate-900 dark:text-slate-400 dark:decoration-slate-600 dark:hover:text-slate-200"
              >
                {s.name}
              </a>
              {i < supervisors.length - 2 ? ', ' : i === supervisors.length - 2 ? ' and ' : ''}
            </span>
          ))}
          .
        </p>
      )}

      {link && (
        <a
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-block text-sm font-medium text-slate-600 underline decoration-slate-400 underline-offset-4 hover:text-slate-900 dark:text-slate-400 dark:decoration-slate-600 dark:hover:text-slate-200"
        >
          {link.label} →
        </a>
      )}
    </div>
  )
}
