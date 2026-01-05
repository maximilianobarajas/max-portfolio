import Image from 'next/image'
import katex from 'katex'
import 'katex/dist/katex.min.css'

import {
  SiPython,
  SiFastapi,
  SiPytorch,
  SiOpencv,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiNvidia,
  SiGit,
  SiLinux,
} from 'react-icons/si'
import { FaCogs, FaBolt, FaShieldAlt, FaProjectDiagram, FaCamera } from 'react-icons/fa'
import { MdMemory, MdOutlineSpeed, MdOutlineWorkspaces } from 'react-icons/md'
import { TbBinaryTree2, TbGeometry, TbRoute, TbMathFunction } from 'react-icons/tb'

export const metadata = {
  title: 'Pruébatelo Tú Mismo · Smart Mirrors (Liverpool AI Internship)',
  description:
    'Production computer vision backend for smart mirrors: DensePose/OpenPose conditioning and a Virtual Try On model serving, engineered as a self-contained FastAPI system with GPU profiling, concurrency design, and reproducible MLOps on Vertex AI/Kubeflow.',
}

function HR() {
  return <hr className="my-10 border-slate-700/60 opacity-40" />
}

function Figure({
  src,
  alt,
  caption,
  width = 1400,
  height = 800,
  priority = false,
  maxWidth = '100%',
}: {
  src: string
  alt: string
  caption?: string
  width?: number
  height?: number
  priority?: boolean
  maxWidth?: string
}) {
  return (
    <figure className="my-7">
      <div className="mx-auto" style={{ maxWidth }}>
        <div className="relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/50">
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            className="h-auto w-full"
          />
        </div>
      </div>
      {caption ? (
        <figcaption className="mt-3 text-center font-mono text-sm text-slate-400">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

function InlineMath({ tex }: { tex: string }) {
  const html = katex.renderToString(tex, {
    throwOnError: false,
    strict: 'ignore',
    trust: false,
    displayMode: false,
  })
  return <span className="katex-inline" dangerouslySetInnerHTML={{ __html: html }} />
}

function BlockMath({ tex }: { tex: string }) {
  const html = katex.renderToString(tex, {
    throwOnError: false,
    strict: 'ignore',
    trust: false,
    displayMode: true,
  })
  return (
    <div
      className="my-6 overflow-x-auto rounded-2xl border border-slate-700/60 bg-slate-900/40 px-4 py-3"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-2xl border border-slate-700/60 bg-slate-900/30 p-5">
      <div className="mb-3 text-sm font-bold tracking-wide text-slate-300 uppercase">{title}</div>
      <div className="leading-relaxed text-slate-300">{children}</div>
    </div>
  )
}

function SectionTitle({
  kicker,
  title,
  subtitle,
}: {
  kicker?: string
  title: string
  subtitle?: string
}) {
  return (
    <div className="mt-12">
      {kicker ? <div className="font-mono text-sm text-cyan-300/90">{kicker}</div> : null}
      <h2 className="mt-2 text-2xl font-bold text-white">{title}</h2>
      {subtitle ? <p className="mt-3 leading-relaxed text-slate-300">{subtitle}</p> : null}
    </div>
  )
}

function TechIcon({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="group inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/35 px-4 py-2">
      <span className="text-slate-100">{icon}</span>
      <span className="font-mono text-xs text-slate-300 transition group-hover:text-white">
        {label}
      </span>
    </div>
  )
}

function TechCard({
  icon,
  title,
  subtitle,
}: {
  icon: React.ReactNode
  title: string
  subtitle?: string
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-slate-700/60 bg-slate-900/35 px-5 py-4">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700/60 bg-slate-950/40 text-slate-100">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="truncate font-mono text-sm text-slate-100">{title}</div>
        {subtitle ? <div className="truncate text-xs text-slate-400">{subtitle}</div> : null}
      </div>
    </div>
  )
}

const TEX = {
  latency: String.raw`
\textbf{Tail-latency constraint:}\qquad
\mathrm{p95}(\tau_{\mathrm{e2e}})\le \tau_{\max},\qquad
\tau_{\mathrm{e2e}}=\tau_{\mathrm{pre}}+\tau_{\mathrm{infer}}+\tau_{\mathrm{post}}+\tau_{\mathrm{queue}}+\tau_{\mathrm{io}}.
`,
  reliability: String.raw`
\textbf{Operational reliability (targets):}\qquad
\mathrm{OOM}=0,\quad \mathrm{error\ rate}\le \epsilon,\quad
\sup_{t\in[0,T]}\mathrm{VRAM}(t)\ \text{bounded},\quad
\text{no sustained throughput degradation under load.}
`,
  conditioning: String.raw`
\textbf{Conditioned generation (virtual try-on):}\qquad
\widehat{y}=G(x,c),\quad
x=\text{person image},\quad
c=\text{conditioning signals (pose, dense correspondences, segmentation, masks)}.
`,
  pose: String.raw`
\textbf{Pose keypoints:}\qquad
\mathcal{K}=\{(u_j,v_j,s_j)\}_{j=1}^{J},\qquad s_j\in[0,1]\ \text{confidence}.
`,
  dense: String.raw`
\textbf{Dense correspondences (DensePose-like):}\qquad
\mathcal{D}=\{(p,\ (I(p),U(p),V(p)))\ :\ p\in\Omega\},
\quad I\in\{1,\dots,24\},\ (U,V)\in[0,1]^2.
`,
  hex: String.raw`
\textbf{Hexagonal architecture:}\qquad
\text{Domain core} \rightarrow \text{Ports (interfaces)} \rightarrow \text{Adapters (I/O)}.
\quad \text{Infrastructure depends on interfaces, not the reverse.}
`,
  pipeline: String.raw`
\textbf{Reproducible pipeline operator:}\qquad
\mathcal{P}:\ (\mathcal{D},\mathcal{C},\mathcal{M})\mapsto(\mathrm{metrics},\mathrm{artifacts},\mathrm{registry}),
\quad \text{with versioned configs and immutable artifacts.}
`,
  accept: String.raw`
\textbf{SA acceptance (global search):}\qquad
\mathbb{P}(\text{accept})=\min\{1,\exp(-\Delta\Phi/T)\},\qquad T\downarrow 0.
`,
  constrained: String.raw`
\textbf{Constrained objective (serving-aligned):}\qquad
\min_{\theta}\ \Phi(\theta)\quad
\text{s.t.}\quad
\mathrm{p95}(\tau_{\mathrm{e2e}})\le \tau_{\max},\ \ \mathrm{VRAM}(\theta)\le V_{\max},\ \ \theta\in\mathcal{B}.
`,
}

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        Pruébatelo Tú Mismo · Smart Mirrors
      </h1>
      <p className="mt-4 font-mono text-lg text-cyan-300">
        AI Internship at El Puerto de Liverpool · production computer vision backend
        (DensePose/OpenPose and Virtual Try On serving)
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <TechIcon icon={<SiPython size={16} />} label="Python" />
        <TechIcon icon={<SiFastapi size={16} />} label="FastAPI" />
        <TechIcon icon={<SiPytorch size={16} />} label="PyTorch" />
        <TechIcon icon={<SiOpencv size={16} />} label="OpenCV" />
        <TechIcon icon={<TbGeometry size={16} />} label="DensePose" />
        <TechIcon icon={<FaCamera size={16} />} label="OpenPose" />
        <TechIcon icon={<TbRoute size={16} />} label="VTON" />
        <TechIcon icon={<SiNvidia size={16} />} label="NVIDIA" />
        <TechIcon icon={<MdOutlineSpeed size={16} />} label="Tail latency" />
        <TechIcon icon={<MdMemory size={16} />} label="VRAM control" />
        <TechIcon icon={<FaBolt size={16} />} label="Async pipelines" />
        <TechIcon icon={<FaShieldAlt size={16} />} label="Reliability" />
        <TechIcon icon={<SiDocker size={16} />} label="Docker" />
        <TechIcon icon={<SiKubernetes size={16} />} label="Kubernetes" />
        <TechIcon icon={<SiGooglecloud size={16} />} label="Vertex AI" />
        <TechIcon icon={<FaProjectDiagram size={16} />} label="Kubeflow" />
        <TechIcon icon={<SiLinux size={16} />} label="Linux" />
        <TechIcon icon={<SiGit size={16} />} label="Git" />
        <TechIcon icon={<FaCogs size={16} />} label="Hex architecture" />
        <TechIcon icon={<TbBinaryTree2 size={16} />} label="Clean interfaces" />
        <TechIcon icon={<MdOutlineWorkspaces size={16} />} label="MLOps rigor" />
        <TechIcon icon={<TbMathFunction size={16} />} label="Optimization mindset" />
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-6 rounded-2xl border border-slate-700/60 bg-slate-800/30 p-6">
        <div className="w-[120px] flex-none">
          <Image
            src="/static/images/medallainternship.png"
            alt="Liverpool internship badge"
            width={240}
            height={240}
            priority
            className="h-auto w-[120px] rounded-xl border border-slate-700/60 bg-slate-950/40"
          />
        </div>

        <div className="min-w-[260px] flex-1">
          <div className="text-xl font-bold text-white">
            El Puerto de Liverpool · Artificial Intelligence
          </div>
          <div className="mt-1 text-sm text-slate-300/90">
            Smart-mirror CV: perception + conditioning + generative try-on under strict latency and
            reliability constraints
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
            <div>
              <span className="block text-xs font-bold tracking-wide text-slate-500 uppercase">
                Supervisor
              </span>
              <span className="text-cyan-300">Guillermo Oswaldo Cota Martínez</span>
              <div className="mt-1 text-xs text-slate-400">Co-supervision: Iván Trejo Martínez</div>
            </div>

            <div>
              <span className="block text-xs font-bold tracking-wide text-slate-500 uppercase">
                Credential
              </span>
              <a
                className="text-cyan-300 hover:underline"
                href="https://www.credly.com/badges/0c2cda9a-46dc-4783-82ee-4353132c9e91/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
              >
                Credly badge (verification link)
              </a>
            </div>
          </div>
        </div>
      </div>

      <HR />

      <SectionTitle
        title="Context"
        subtitle="What Liverpool is, and why a smart-mirror CV system must be engineered like a research-grade product rather than a demo."
      />
      <div className="mt-5 space-y-4 leading-relaxed text-slate-300">
        <p>
          <b>El Puerto de Liverpool</b> is one of Mexico&apos;s largest retail groups, operating at
          national scale with a reputation built over generations. In that kind of environment, an
          AI system is not judged by whether it works once on a developer laptop, but by whether it
          can be trusted <i>every day</i>under real traffic, under real variability, and under the
          kinds of edge cases that only show up in front of customers.
        </p>

        <p>
          During my internship, I worked on the backend powering{' '}
          <b>&ldquo;Pruébatelo Tú Mismo&rdquo;</b>, a smart-mirror experience where computer vision
          and generative modeling must cooperate in a tight loop. The goal is simple to explain and
          genuinely hard to deliver: take a person image, infer reliable structure (pose and dense
          correspondences), and produce a controlled virtual try-on output that looks believable,
          remains stable, and returns within strict latency limits.
        </p>

        <p>
          This was my <b>first professional role</b>, and it mattered in a very real way. It helped
          me keep moving forward academically and financially while living with my mother. That
          pressure did not distract me it sharpened me. I learned to show up consistently, to own
          outcomes, and to iterate until the system earned trust.
        </p>

        <p className="text-slate-400">
          I did not want to ship something that was merely impressive. I wanted to ship something
          that was dependable.
        </p>
      </div>

      <Figure
        src="/static/images/espejospruebalotumismo.jpeg"
        alt="Smart mirrors in Liverpool"
        caption="Smart mirrors for “Pruébatelo Tú Mismo”: the backend must satisfy real tail-latency and reliability constraints."
        priority
      />

      <HR />

      <SectionTitle
        kicker="Part I · Problem statement"
        title="From a person image to a controllable try-on output"
        subtitle="DensePose/OpenPose conditioning + VTON model families served through a unified, testable API surface."
      />
      <div className="mt-5 space-y-5 leading-relaxed text-slate-300">
        <p>
          The backend can be formalized as a composition of perception and generation operators. We
          start from an input image <InlineMath tex={'x\\in\\mathbb{R}^{H\\times W\\times 3}'} />{' '}
          and compute structured conditioning signals <InlineMath tex={'c'} /> that make the
          synthesis step controllable, debuggable, and robust to distribution shift.
        </p>

        <Callout title="Conditioning as a first-class object">
          <p className="mb-3">
            A defining decision was to treat intermediate representations as explicit artifacts:
            pose keypoints, dense correspondences, masks, and segmentation-derived priors. This
            design makes the system diagnosable. When something fails, you can locate the failure
            mode instead of guessing.
          </p>
          <BlockMath tex={TEX.pose} />
          <BlockMath tex={TEX.dense} />
          <BlockMath tex={TEX.conditioning} />
        </Callout>

        <p>
          For perception, <b>OpenPose</b> supplied 2D keypoints as a stable geometric scaffold,
          while <b>DensePose</b> provided dense surface correspondences that are valuable for
          alignment and semantic consistency. For generation, the serving layer supported multiple
          <b>VTON model variants</b>, enabling systematic comparison under identical constraints and
          identical pre/post-processing contracts.
        </p>

        <p>
          Conceptually, this work sits at a sweet spot: geometry-aware CV conditioning, nonconvex
          model behavior, and practical constraints that force clean thinking. The implementation
          cannot be fragile; it must behave like a system, not a notebook.
        </p>
      </div>

      <HR />

      <SectionTitle
        kicker="Part II · Architecture"
        title="Self-contained FastAPI service with research-grade modularity"
        subtitle="Hexagonal architecture to keep domain semantics stable while allowing infrastructure to evolve."
      />
      <div className="mt-5 space-y-5 leading-relaxed text-slate-300">
        <p>
          I engineered the backend as a <b>self-contained FastAPI</b> service. A hard constraint was
          to avoid external inference APIs: all processing is internal, end-to-end. This reduces
          latency variance, improves reproducibility, and makes profiling meaningful because the
          measured system is the deployed system.
        </p>

        <Callout title="Hexagonal architecture (formal separation of concerns)">
          <p className="mb-3">
            Domain logic defines contracts and invariants (inputs, outputs, checks, and model
            abstractions). Infrastructure is expressed as adapters around ports. This is how the
            system stays maintainable as models, runtimes, and deployment targets change.
          </p>
          <BlockMath tex={TEX.hex} />
        </Callout>

        <p>
          The result was a codebase that stayed calm under iteration. New model variants could be
          added without breaking the rest of the system. Preprocessing could evolve without leaking
          ad-hoc changes into business logic. The work felt less like building a demo and more like
          building an instrument: carefully designed, testable, and honest about its assumptions.
        </p>
      </div>

      <HR />

      <SectionTitle
        kicker="Part III · Performance engineering"
        title="Latency tails, VRAM stability, and the reality of deployment"
        subtitle="Many deployment attempts, measured iteration, and disciplined optimization under load."
      />
      <div className="mt-5 space-y-5 leading-relaxed text-slate-300">
        <p>
          The path to a stable deployment took <b>many attempts</b>. The challenge was not
          &ldquo;does it run&rdquo;it was &ldquo;does it run predictably&rdquo; across sustained
          testing. In real user-facing systems, averages are comforting and misleading; what matters
          is the tail.
        </p>

        <Callout title="Production-style constraints as invariants">
          <p className="mb-3">
            I treated tail latency and stability goals as formal constraints. The engineering
            process was structured around end-to-end latency decomposition and careful control of
            memory behavior under load.
          </p>
          <BlockMath tex={TEX.latency} />
          <BlockMath tex={TEX.reliability} />
        </Callout>

        <p>
          Concretely, I used asynchronous multi-threaded routines to overlap CPU-side preprocessing
          with GPU execution and to reduce I/O stalls. On the GPU side, I adopted a profiling-first
          workflow to improve utilization and to avoid VRAM failure modes. The outcome was not just
          speed, it was composure: stable behavior under concurrent inference, bounded memory, and
          predictable throughput.
        </p>

        <p>
          I also learned that optimization is emotional discipline disguised as engineering. You
          instrument, you measure, you change one thing at a time, you keep what works, and you keep
          going until the system feels trustworthy because it is.
        </p>

        <Callout title="Serving-aligned view of optimization">
          <p className="mb-3">
            Even when model families are fixed, deployment becomes a constrained optimization
            problem over configurations, batching regimes, runtime choices, and preprocessing paths.
          </p>
          <BlockMath tex={TEX.constrained} />
        </Callout>
      </div>

      <HR />

      <SectionTitle
        kicker="Part IV · MLOps and reproducibility"
        title="Kubeflow + Vertex AI: systematic evaluation and repeatable iteration"
        subtitle="Pipelines as operators mapping data/config/model versions to metrics and immutable artifacts."
      />
      <div className="mt-5 space-y-5 leading-relaxed text-slate-300">
        <p>
          Beyond serving, I built orchestration pipelines using <b>Kubeflow</b> and translated R&D
          workflows into scalable solutions on <b>Google Cloud Vertex AI</b>. The purpose was
          discipline: repeatable runs, consistent metrics, immutable artifacts, and clean
          comparisons across model variants (including different try-on backbones and conditioning
          choices).
        </p>

        <Callout title="Pipelines as an abstraction">
          <p className="mb-3">
            This viewpoint forces clarity. If two runs are not comparable, the conclusion is not
            real. Versioned configurations and immutable artifacts make iteration honest.
          </p>
          <BlockMath tex={TEX.pipeline} />
        </Callout>

        <p>
          This also shaped my research habits: careful experiment design, systematic ablations, and
          the ability to move between theory and implementation without losing reproducibility.
        </p>

        <Callout title="Global-to-local thinking (deployment iteration)">
          <p className="mb-3">
            In practice, I treated deployment iteration like a global-to-local process: explore
            configurations broadly, identify a stable basin, and then refine aggressively.
          </p>
          <BlockMath tex={TEX.accept} />
        </Callout>
      </div>

      <HR />

      <SectionTitle
        title="Technical Arsenal"
        subtitle="Capability snapshot, presented as concrete engineering commitments."
      />
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <TechCard
          icon={<SiPython size={18} />}
          title="Python"
          subtitle="Production CV backend + tooling discipline"
        />
        <TechCard
          icon={<SiFastapi size={18} />}
          title="FastAPI"
          subtitle="High-throughput inference API design"
        />
        <TechCard
          icon={<SiPytorch size={18} />}
          title="PyTorch"
          subtitle="Model integration, profiling-aware execution"
        />
        <TechCard
          icon={<FaCamera size={18} />}
          title="OpenPose"
          subtitle="Pose scaffolding for robust conditioning"
        />
        <TechCard
          icon={<TbGeometry size={18} />}
          title="DensePose"
          subtitle="Dense correspondences and body-part parameterization"
        />
        <TechCard
          icon={<TbRoute size={18} />}
          title="VTON model families"
          subtitle="Conditioned try-on serving and evaluation"
        />
        <TechCard
          icon={<SiOpencv size={18} />}
          title="OpenCV"
          subtitle="Pre/post-processing primitives and validation checks"
        />
        <TechCard
          icon={<SiNvidia size={18} />}
          title="NVIDIA stack"
          subtitle="GPU profiling mindset under constrained hardware"
        />
        <TechCard
          icon={<MdMemory size={18} />}
          title="Memory discipline"
          subtitle="VRAM stability, avoiding fragmentation/OOM"
        />
        <TechCard
          icon={<MdOutlineSpeed size={18} />}
          title="Tail-latency focus"
          subtitle="p95-driven engineering, not averages"
        />
        <TechCard
          icon={<FaBolt size={18} />}
          title="Concurrency patterns"
          subtitle="Async pipelines to reduce I/O stalls"
        />
        <TechCard
          icon={<FaShieldAlt size={18} />}
          title="Reliability"
          subtitle="Sustained testing and bounded failure rates"
        />
        <TechCard
          icon={<SiDocker size={18} />}
          title="Docker"
          subtitle="Pinned environments and reproducible images"
        />
        <TechCard
          icon={<SiKubernetes size={18} />}
          title="Kubernetes"
          subtitle="Deployment patterns and scaling logic"
        />
        <TechCard
          icon={<SiGooglecloud size={18} />}
          title="Vertex AI"
          subtitle="Cloud-native workflows and repeatability"
        />
        <TechCard
          icon={<FaProjectDiagram size={18} />}
          title="Kubeflow"
          subtitle="Orchestration pipelines for evaluation/inference"
        />
        <TechCard
          icon={<SiLinux size={18} />}
          title="Linux"
          subtitle="Systems fluency for ML deployment work"
        />
        <TechCard
          icon={<SiGit size={18} />}
          title="Git"
          subtitle="Reviewable history and maintainable iteration"
        />
        <TechCard
          icon={<FaCogs size={18} />}
          title="Architecture"
          subtitle="Hexagonal separation of domain vs adapters"
        />
        <TechCard
          icon={<TbBinaryTree2 size={18} />}
          title="Structured artifacts"
          subtitle="Debuggable conditioning objects and metrics"
        />
        <TechCard
          icon={<MdOutlineWorkspaces size={18} />}
          title="Experiment discipline"
          subtitle="Comparable runs across model families"
        />
        <TechCard
          icon={<TbMathFunction size={18} />}
          title="Optimization mindset"
          subtitle="Measured iteration and principled trade-offs"
        />
      </div>

      <HR />

      <SectionTitle
        kicker="Part V · What I learned"
        title="A first role that taught me to earn trust through rigor"
        subtitle="Owning outcomes, communicating clearly, and refusing to ship something fragile."
      />
      <div className="mt-5 space-y-5 leading-relaxed text-slate-300">
        <p>
          This internship made me fall even more in love with computer vision, because it showed me
          the full arc: theory meets hardware, models meet real constraints, and beautiful ideas
          become real products only when the engineering is disciplined.
        </p>

        <p>
          I learned to take responsibility for the parts that are easy to ignore: documentation,
          clean interfaces, stable deployments, and the kind of careful measurement that turns
          &ldquo;it works&rdquo; into &ldquo;it holds.&rdquo; I also learned to communicate across
          levels—how to explain technical decisions with clarity, and how to defend a methodology
          with calm confidence.
        </p>

        <p className="text-slate-400">
          I left with something I did not have before: the feeling that I can walk into a hard
          system, learn what it needs, and keep iterating until it becomes reliable. That is the
          standard I carry forward.
        </p>
      </div>

      <Figure
        src="/static/images/fotointerns.jpeg"
        alt="Intern cohort"
        caption="With the intern cohort: a summer defined by learning fast, building carefully, and delivering something real."
      />

      <div className="mt-10">
        <a href="/projects" className="text-cyan-400 hover:underline">
          ← Back to Projects
        </a>
      </div>
    </div>
  )
}
