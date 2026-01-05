import Image from 'next/image'

import {
  SiPython,
  SiPytorch,
  SiTensorflow,
  SiKeras,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiJupyter,
  SiDocker,
  SiLinux,
  SiGit,
  SiGithub,
  SiGooglecloud,
} from 'react-icons/si'

import {
  FaBrain,
  FaProjectDiagram,
  FaShieldAlt,
  FaFilePdf,
  FaExternalLinkAlt,
} from 'react-icons/fa'
import { MdOutlineModelTraining, MdOutlineDataset, MdOutlineInsights } from 'react-icons/md'
import { TbMathFunction, TbNetwork, TbEye, TbMessageLanguage } from 'react-icons/tb'

export const metadata = {
  title: 'Huawei IA 1000 · Applied AI Training Program',
  description:
    'Certificates + technical overview of my Huawei IA 1000 training: core ML theory, deep learning practice, CV/NLP foundations, platform thinking, and responsible AI—articulated as research-ready preparation for advanced AI programs.',
}

function HR() {
  return <hr className="my-10 border-slate-700/60 opacity-40" />
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

function Card({
  title,
  subtitle,
  children,
}: {
  title: string
  subtitle?: string
  children: React.ReactNode
}) {
  return (
    <div className="rounded-2xl border border-slate-700/60 bg-slate-900/30 p-6">
      <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
        <div className="text-lg font-bold text-white">{title}</div>
        {subtitle ? <div className="text-sm text-slate-400">{subtitle}</div> : null}
      </div>
      <div className="mt-4 leading-relaxed text-slate-300">{children}</div>
    </div>
  )
}

function PdfPanel({ title, src }: { title: string; src: string }) {
  return (
    <div className="rounded-2xl border border-slate-700/60 bg-slate-900/35 p-5">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <FaFilePdf className="text-slate-200" />
            <div className="truncate font-mono text-sm text-slate-100">{title}</div>
          </div>
          <div className="mt-1 truncate text-xs text-slate-400">{src}</div>
        </div>

        <a
          href={src}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-950/40 px-3 py-1 text-xs font-bold tracking-wide text-cyan-300 uppercase hover:underline"
        >
          Open <FaExternalLinkAlt size={11} />
        </a>
      </div>

      {/* PDF embed */}
      <div className="mt-4 overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-950/40">
        <object data={`${src}#view=FitH`} type="application/pdf" className="h-[520px] w-full">
          <iframe src={`${src}#view=FitH`} className="h-[520px] w-full" title={title} />
        </object>
      </div>
    </div>
  )
}

export default function Page() {
  // Ajusta si tus assets viven en otra ruta:
  const pdf1 = '/static/images/huawei1.pdf'
  const pdf2 = '/static/images/huawei2.pdf'

  const photo1 = '/static/images/fotomaxhuawei1.jpeg'
  const photo2 = '/static/images/fotomaxhuawei2.jpeg'

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        Huawei IA 1000 · Applied AI Training Program
      </h1>

      <p className="mt-4 font-mono text-lg text-cyan-300">
        Certificates + technical narrative · ML theory → DL practice → responsible deployment
        mindset
      </p>

      {/* Top tech icons */}
      <div className="mt-6 flex flex-wrap gap-2">
        <TechIcon icon={<SiPython size={16} />} label="Python" />
        <TechIcon icon={<SiNumpy size={16} />} label="NumPy" />
        <TechIcon icon={<SiPandas size={16} />} label="Pandas" />
        <TechIcon icon={<SiScikitlearn size={16} />} label="scikit-learn" />
        <TechIcon icon={<SiPytorch size={16} />} label="PyTorch" />
        <TechIcon icon={<SiTensorflow size={16} />} label="TensorFlow" />
        <TechIcon icon={<SiKeras size={16} />} label="Keras" />
        <TechIcon icon={<MdOutlineModelTraining size={16} />} label="Deep Learning" />
        <TechIcon icon={<TbEye size={16} />} label="Computer Vision" />
        <TechIcon icon={<TbMessageLanguage size={16} />} label="NLP" />
        <TechIcon icon={<TbMathFunction size={16} />} label="Statistical ML" />
        <TechIcon icon={<MdOutlineDataset size={16} />} label="Data-centric workflow" />
        <TechIcon icon={<MdOutlineInsights size={16} />} label="Evaluation & rigor" />
        <TechIcon icon={<FaShieldAlt size={16} />} label="Responsible AI" />
        <TechIcon icon={<FaProjectDiagram size={16} />} label="System thinking" />
        <TechIcon icon={<TbNetwork size={16} />} label="Representation learning" />
        <TechIcon icon={<SiDocker size={16} />} label="Docker" />
        <TechIcon icon={<SiLinux size={16} />} label="Linux" />
        <TechIcon icon={<SiGit size={16} />} label="Git" />
        <TechIcon icon={<SiGithub size={16} />} label="GitHub" />
        <TechIcon icon={<SiJupyter size={16} />} label="Jupyter" />
        <TechIcon icon={<SiGooglecloud size={16} />} label="Cloud-aware mindset" />
      </div>

      <div className="mt-10 rounded-2xl border border-slate-700/60 bg-slate-800/30 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <FaBrain className="text-slate-200" />
              <div className="text-xl font-bold text-white">Program summary</div>
            </div>

            <p className="mt-3 leading-relaxed text-slate-300">
              Huawei IA 1000 was a compact but serious training arc designed to connect{' '}
              <b>mathematical ML foundations</b> with
              <b> modern deep learning practice</b> and <b>responsible engineering habits</b>. For
              me, the value was not only “covering topics”, but forcing a coherent mental model: how
              learning objectives, data assumptions, architecture choices, and evaluation
              constraints interact—especially when you want results that hold up under scrutiny.
            </p>
          </div>

          <div className="flex-none rounded-2xl border border-slate-700/60 bg-slate-900/35 px-5 py-4">
            <div className="text-xs font-bold tracking-wide text-slate-500 uppercase">
              Artifacts
            </div>
            <div className="mt-1 text-sm text-slate-200">
              2 PDF certificates + photo documentation
            </div>
            <div className="mt-1 text-xs text-slate-400">Embedded below for fast verification</div>
          </div>
        </div>
      </div>

      <HR />

      <SectionTitle
        title="Certificates (PDF)"
        subtitle="Embedded for quick review; also available as direct links."
      />

      <div className="mt-6 grid grid-cols-1 gap-5">
        <PdfPanel title="Huawei IA 1000 · Completion Certificate" src={pdf1} />
        <PdfPanel title="Huawei IA 1000 · Honor / Recognition" src={pdf2} />
      </div>

      <HR />

      <SectionTitle
        title="What I studied (curriculum → competencies)"
        subtitle="A technical breakdown of the content and the specific skills it reinforced."
      />

      <div className="mt-6 space-y-5 leading-relaxed text-slate-300">
        <Card
          title="Artificial Intelligence & its applications"
          subtitle="From problem framing to solution archetypes"
        >
          <p>
            The program emphasized a practical taxonomy of AI problems: classification vs.
            regression, structured prediction, generative modeling, and decision-making loops. I
            treated this as an exercise in research maturity: the first question is never “what
            model do I like?”, but “what assumptions am I allowed to make, what is observable, and
            what constitutes evidence?” That style of thinking scales from applied industry tasks to
            academic work where the evaluation standard is higher and the failure modes are more
            subtle.
          </p>
        </Card>

        <Card
          title="Machine Learning (core theory)"
          subtitle="Generalization, bias/variance, and measurement discipline"
        >
          <p>
            IA 1000 reinforced the central idea that modern ML is a{' '}
            <b>mathematical discipline of controlled approximation</b>. Even when the implementation
            is fast, the intellectual bottleneck is often in the definition of the objective, the
            data generating process, and the evaluation protocol. I focused especially on topics
            that translate directly to research settings: robust validation, leakage avoidance,
            class imbalance, and the mechanics behind why a metric can look impressive while still
            being scientifically unconvincing.
          </p>
        </Card>

        <Card
          title="Deep Learning"
          subtitle="Optimization behavior, representation learning, and architectural intuition"
        >
          <p>
            The deep learning block was most useful as a consolidation of “first principles”
            intuition: gradients are only the surface layer—what matters is how architectures shape
            optimization landscapes and how representations compress and separate information. This
            is the same conceptual axis behind many advanced AI projects: intrinsic dimension,
            geometric priors, manifold assumptions, and the reality that what we call “performance”
            is often an interaction between model capacity, training dynamics, and data support.
          </p>
        </Card>

        <Card
          title="Computer Vision"
          subtitle="Pipelines, invariances, and deployment-aware thinking"
        >
          <p>
            The CV module strengthened my ability to reason about the full chain: data acquisition →
            augmentation → representation → loss → calibration → evaluation. I paid special
            attention to the kind of details that matter in real systems: shifts in
            lighting/background, long-tail artifacts, and how you validate robustness without
            fooling yourself. This “pipeline literacy” is exactly what you need when a project
            expects you to implement, debug, and critically evaluate models rather than merely run
            them.
          </p>
        </Card>

        <Card
          title="Natural Language Processing"
          subtitle="From tokenization to model behavior under constraint"
        >
          <p>
            The NLP section connected well with my broader interest in foundation models: how
            tokenization affects modeling efficiency, how objectives shape behavior, and why
            evaluation needs to be phrased in terms of measurable outcomes (not vibes). I treated it
            as training for research-grade clarity: define what constitutes a correct output,
            enforce constraints, and write experiments that remain interpretable even when models
            are large and opaque.
          </p>
        </Card>

        <Card
          title="AI frameworks & development platforms"
          subtitle="Reproducibility, environment control, and systems hygiene"
        >
          <p>
            Beyond “learning libraries”, IA 1000 implicitly teaches something more important:
            disciplined engineering infrastructure. I framed this as:{' '}
            <b>if you cannot reproduce it, you cannot defend it</b>. This includes clean dependency
            management, deterministic evaluation where feasible, artifact tracking, and clarity
            around dataset versions and splits.
          </p>
        </Card>

        <Card
          title="AI ethics & career development"
          subtitle="Responsible AI as a technical constraint, not a marketing paragraph"
        >
          <p>
            The responsible AI component mattered because it treats ethics as an engineering
            boundary condition: documentation, transparency, and identifying where harm can enter
            via data, metrics, or deployment context. In serious research settings, these
            considerations show up as constraints on how you design and justify methods—not as an
            afterthought.
          </p>
        </Card>
      </div>

      <HR />

      <SectionTitle
        title="Relevance to research-grade AI projects"
        subtitle="How this training maps to the competencies expected in competitive research programs."
      />

      <div className="mt-6 space-y-4 leading-relaxed text-slate-300">
        <p>
          I structured my takeaways from IA 1000 around the same expectations that appear in elite
          research environments:
          <b> mathematical grounding</b>, <b>implementation literacy</b>, and{' '}
          <b>evaluation honesty</b>.
        </p>

        <ul className="mt-2 list-disc space-y-2 pl-6 text-slate-300">
          <li>
            <b>Mathematical maturity:</b> framing learning as controlled approximation, with
            explicit assumptions and measurable criteria.
          </li>
          <li>
            <b>Systems readiness:</b> environment control, reproducibility habits, and clean
            end-to-end pipeline reasoning.
          </li>
          <li>
            <b>Model critique:</b> understanding why metrics fail, where models shortcut, and how to
            design evaluations that actually test what matters.
          </li>
          <li>
            <b>Representation-first thinking:</b> connecting modern DL practice to concepts like
            manifolds, geometry, intrinsic structure, and inductive bias.
          </li>
          <li>
            <b>Responsible AI:</b> treated as engineering constraints that affect data, training,
            reporting, and deployment.
          </li>
        </ul>

        <p className="text-slate-400">
          The net effect is a training baseline that I can translate into research work quickly: I
          can read a technical spec, map it to an experimental design, implement and debug under
          constraints, and defend results using transparent measurement rather than rhetoric.
        </p>
      </div>

      <HR />

      <SectionTitle
        title="Photo log"
        subtitle="Program context and participation (documentation)."
      />

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/35">
          <Image
            src={photo1}
            alt="Huawei IA 1000 — photo 1"
            width={900}
            height={1200}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/35">
          <Image
            src={photo2}
            alt="Huawei IA 1000 — photo 2"
            width={900}
            height={1200}
            className="h-auto w-full object-cover"
          />
        </div>
      </div>

      <div className="mt-10">
        <a href="/projects" className="text-cyan-400 hover:underline">
          ← Back to Projects
        </a>
      </div>
    </div>
  )
}
