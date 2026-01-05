// app/projects/curvature-guided-topology-optimization/page.tsx
import Image from 'next/image'
import katex from 'katex'
import 'katex/dist/katex.min.css'

export const metadata = {
  title: 'Curvature-Guided Topology Optimization for Graph Convolutional Learning',
  description:
    'A discrete-geometric stochastic-search framework for mitigating over-squashing and improving separability.',
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

function CodeBox({ title, children }: { title?: string; children: string }) {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-950/40">
      {title ? (
        <div className="border-b border-slate-700/60 bg-slate-900/50 px-4 py-2 text-xs font-bold tracking-wide text-slate-300 uppercase">
          {title}
        </div>
      ) : null}
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-slate-200">
        <code>{children}</code>
      </pre>
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

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      {/* Title */}
      <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        Curvature-Guided Topology Optimization for Graph Convolutional Learning
      </h1>
      <p className="mt-4 font-mono text-lg text-cyan-300">
        A discrete-geometric stochastic-search framework for mitigating over-squashing and improving
        separability
      </p>

      {/* Header Card */}
      <div className="mt-10 flex flex-wrap items-center gap-6 rounded-2xl border border-slate-700/60 bg-slate-800/30 p-6">
        <div className="w-[140px] flex-none">
          <Image
            src="/static/images/thesis/logo_uam.jpg"
            alt="UAM logo"
            width={280}
            height={280}
            priority
            className="h-auto w-[140px] rounded-lg"
          />
        </div>

        <div className="min-w-[260px] flex-1">
          <div className="text-xl font-bold text-white">Universidad Autónoma Metropolitana</div>
          <div className="mt-1 text-sm text-slate-300/90">
            Unidad Cuajimalpa · Departamento de Matemáticas Aplicadas y Sistemas
          </div>
          <div className="mt-1 font-medium text-slate-400">
            Licenciatura en Matemáticas Aplicadas
          </div>

          <div className="mt-4 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
            <div>
              <span className="block text-xs font-bold tracking-wide text-slate-500 uppercase">
                Author
              </span>
              <span className="text-cyan-300">Maximiliano Barajas</span>
            </div>
            <div>
              <span className="block text-xs font-bold tracking-wide text-slate-500 uppercase">
                Date
              </span>
              <span className="text-slate-200">August 2025</span>
            </div>
          </div>
        </div>
      </div>

      <HR />

      {/* Abstract */}
      <SectionTitle title="Abstract" />
      <div className="mt-4 space-y-4 leading-relaxed text-slate-300">
        <p>
          Let <InlineMath tex={'G=(V,E)'} /> be a finite simple graph with node features{' '}
          <InlineMath tex={'X\\in\\mathbb{R}^{n\\times d}'} /> and labels{' '}
          <InlineMath tex={'Y\\in\\{1,\\dots,C\\}^n'} />. We treat graph topology as a decision
          variable and optimize it to improve the predictive performance of a fixed Graph
          Convolutional Network (GCN), under a controlled training protocol.
        </p>

        <p>
          The core principle is that message-passing limitations—particularly <b>over-squashing</b>{' '}
          (information bottlenecks) and <b>over-smoothing</b> (representation collapse)—are governed
          by discrete-geometric properties of the graph (cuts, expansion, curvature profiles,
          corridor structure). We therefore integrate <b>discrete curvature</b> as a computational
          ingredient, not merely as post-hoc analysis:
        </p>

        <ul className="list-disc space-y-2 pl-6">
          <li>
            <b>Action-space design:</b> curvature filters define a candidate rewiring set,
            collapsing the combinatorial dimension from <InlineMath tex={'\\binom{n}{2}'} /> to{' '}
            <InlineMath tex={'d=|E_{\\mathrm{cand}}|'} />.
          </li>
          <li>
            <b>Curvature-weighted priors:</b> curvature-derived weights bias stochastic proposals
            toward bottleneck-relieving edits (targeting negatively curved corridors).
          </li>
          <li>
            <b>Curvature-regularized scoring (optional):</b> a soft penalty discourages excessively
            negative curvature while preserving local clustering.
          </li>
          <li>
            <b>Interpretability:</b> curvature summaries and spectral diagnostics provide a
            structural explanation for improved separability.
          </li>
        </ul>

        <p>
          Empirically, curvature-guided population-based topology search yields large accuracy gains
          on node classification benchmarks under a fixed architecture, with improvements
          attributable primarily to <b>topology</b> rather than hyperparameter tuning.
        </p>
      </div>

      <HR />

      {/* Visual Motivation */}
      <SectionTitle title="Visual Motivation" />
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Figure
          src="/static/images/thesis/diagrama_cnn.png"
          alt="CNN schematic"
          caption="Convolutional locality (Euclidean grids): kernels aggregate from fixed local neighborhoods."
          priority
        />
        <Figure
          src="/static/images/thesis/gcn_vec.png"
          alt="GCN neighborhood aggregation schematic"
          caption="Graph locality: a GCN layer aggregates over neighborhoods, which are topology-dependent."
        />
      </div>

      <Figure
        src="/static/images/thesis/over_squashing.png"
        alt="Over-squashing bottleneck schematic"
        caption="Over-squashing: long-range signals compress through narrow cuts / bottlenecks in the graph."
      />

      <Callout title="A cut-based bottleneck proxy">
        <p className="mb-4">
          A coarse structural proxy for over-squashing is the presence of thin cuts. For{' '}
          <InlineMath tex={'S\\subset V'} />, let <InlineMath tex={'\\partial S'} /> be boundary
          edges. A bottleneck-style quantity is
        </p>
        <BlockMath
          tex={'\\mathcal{C}(G)=\\max_{S\\subset V}\\frac{|S|\\,|V\\setminus S|}{|\\partial S|}.'}
        />
        <p>
          Large <InlineMath tex={'\\mathcal{C}(G)'} /> indicates compression of information
          traveling between distant regions through small edge boundaries.
        </p>
      </Callout>

      <HR />

      {/* Operator Setup */}
      <SectionTitle
        kicker="Part I · Operators"
        title="Notation and Operator Setup"
        subtitle="Topology enters GCNs through a propagation operator; rewiring modifies this operator and its spectral/variational properties."
      />

      <div className="mt-5 space-y-4 leading-relaxed text-slate-300">
        <p>
          Let <InlineMath tex={'A\\in\\{0,1\\}^{n\\times n}'} /> be adjacency and{' '}
          <InlineMath tex={'D=\\mathrm{diag}(d_1,\\dots,d_n)'} /> the degree matrix. With self-loops{' '}
          <InlineMath tex={'\\widehat{A}=A+I'} /> and{' '}
          <InlineMath tex={'\\widehat{D}=\\mathrm{diag}(\\widehat{A}\\mathbf{1})'} />, define the
          normalized propagation operator
        </p>
        <BlockMath tex={'\\mathcal{S}(G)=\\widehat{D}^{-1/2}\\widehat{A}\\,\\widehat{D}^{-1/2}.'} />
        <p>
          A depth-
          <InlineMath tex={'L'} /> GCN takes the form
        </p>
        <BlockMath
          tex={
            'H^{(\\ell+1)}=\\sigma\\!\\big(\\mathcal{S}(G)\\,H^{(\\ell)}W^{(\\ell)}\\big),\\quad H^{(0)}=X,\\;\\ell=0,\\dots,L-1.'
          }
        />
        <p>
          Therefore the topology affects learning through <InlineMath tex={'\\mathcal{S}(G)'} /> and
          the induced Laplacian. In the linearized regime{' '}
          <InlineMath tex={'\\sigma=\\mathrm{Id}'} />,
          <InlineMath tex={'H^{(L)}\\propto \\mathcal{S}(G)^L X'} />, linking depth to mixing and
          smoothing.
        </p>
      </div>

      <Callout title="Over-smoothing as spectral mixing">
        <p className="mb-4">
          Since <InlineMath tex={'\\mathcal{S}(G)'} /> is symmetric, its eigenvalues satisfy{' '}
          <InlineMath tex={'1=\\lambda_1\\ge\\lambda_2\\ge\\cdots\\ge\\lambda_n\\ge -1'} />. Let{' '}
          <InlineMath tex={'\\Pi'} /> be the projector onto the principal eigenspace. Then
        </p>
        <BlockMath tex={'\\|\\mathcal{S}^L-\\Pi\\|_2\\le |\\lambda_2|^L,'} />
        <p>
          so the rate of representation collapse is governed by <InlineMath tex={'|\\lambda_2|'} />.
          Rewiring perturbs the operator and can reshape the spectral gap and mixing behavior.
        </p>
      </Callout>

      <HR />

      {/* Curvature as Operational Component */}
      <SectionTitle
        kicker="Part II · Discrete Geometry"
        title="Discrete Curvature as an Operational Component"
        subtitle="Curvature is used as (i) a dimensionality reducer, (ii) a stochastic prior, (iii) a regularizer, and (iv) an interpretation layer."
      />

      <div className="mt-5 space-y-5 leading-relaxed text-slate-300">
        <p>
          We attach to each edge <InlineMath tex={'e=\\{u,v\\}'} /> a curvature-like diagnostic. For
          concreteness we use Forman-type proxies:
        </p>

        <div className="space-y-2">
          <p>
            <b>Forman (degree-based):</b> <InlineMath tex={'F(e)=4-(\\deg(u)+\\deg(v))'} />
          </p>
          <p>
            <b>Triangle-enhanced:</b> <InlineMath tex={'F^{\\#}(e)=F(e)+3\\,t(e)'} /> where{' '}
            <InlineMath tex={'t(e)'} /> is the number of triangles containing{' '}
            <InlineMath tex={'e'} />.
          </p>
        </div>

        <p className="text-slate-400">
          Heuristic meaning: strongly negative <InlineMath tex={'F^{\\#}(e)'} /> often appears on
          bridge-like edges and tree-like corridors (bottleneck suspects), while large triangle
          support protects local cohesion.
        </p>

        <h3 className="mt-6 text-xl font-semibold text-white">
          Curvature → candidate pool (action-space design)
        </h3>
        <p>
          We do <b>not</b> optimize over all possible edges. Curvature defines a feasible action set{' '}
          <InlineMath tex={'E_{\\mathrm{cand}}'} /> that collapses combinatorial dimension:
        </p>

        <BlockMath
          tex={
            'E_{\\mathrm{cand}}=E_{\\mathrm{keep}}\\cup E_{\\mathrm{rem}}\\cup E_{\\mathrm{add}},\\qquad |E_{\\mathrm{cand}}|\\ll \\binom{n}{2}.'
          }
        />

        <p>
          Typical construction uses thresholds <InlineMath tex={'\\tau_-'} />,{' '}
          <InlineMath tex={'\\tau_+'} /> and locality constraints:
        </p>

        <BlockMath
          tex={
            '\\begin{aligned}\n' +
            'E_{\\mathrm{rem}} &= \\{e\\in E_0: F^{\\#}(e)\\le -\\tau_-\\},\\\\\n' +
            'E_{\\mathrm{keep}}&= \\{e\\in E_0: t(e)\\ge \\tau_+\\},\\\\\n' +
            'E_{\\mathrm{add}}&= \\{\\{u,v\\}\\notin E_0: \\mathrm{dist}_{G_0}(u,v)\\le r,\\ \\langle x_u,x_v\\rangle\\ge \\xi\\}.\n' +
            '\\end{aligned}'
          }
        />

        <h3 className="mt-6 text-xl font-semibold text-white">
          Curvature-weighted stochastic priors
        </h3>
        <p>
          Let <InlineMath tex={'\\mathsf{K}(G,\\cdot)'} /> be a stochastic transition kernel
          proposing local edits. Curvature enters as weights <InlineMath tex={'\\eta'} /> biasing
          proposal probabilities.
        </p>

        <BlockMath
          tex={
            '\\eta_e^{\\mathrm{rem}}\\propto \\exp\\!\\big(-\\gamma F^{\\#}(e)\\big),\\qquad' +
            '\\eta_e^{\\mathrm{keep}}\\propto \\exp\\!\\big(+\\gamma t(e)\\big).'
          }
        />

        <p>For additions we quantify negatively curved corridors. Define a corridor energy</p>

        <BlockMath
          tex={
            '\\mathcal{Q}(u,v)=\\min_{p:u\\leadsto v}\\ \\sum_{e\\in p}\\big[-F^{\\#}(e)\\big]_+,' +
            '\\qquad [z]_+=\\max\\{z,0\\}.'
          }
        />

        <p>
          Then add-edge priors favor shortcuts that reduce travel through negative-curvature
          corridors:
        </p>

        <BlockMath
          tex={'\\eta_{uv}^{\\mathrm{add}}\\propto \\exp\\!\\big(\\gamma\\mathcal{Q}(u,v)\\big).'}
        />

        <h3 className="mt-6 text-xl font-semibold text-white">
          Curvature-regularized objective (optional but included)
        </h3>
        <p>
          Our scoring functional combines predictive performance with a curvature regularizer. Let{' '}
          <InlineMath tex={'\\theta'} /> be GCN parameters and{' '}
          <InlineMath tex={'\\theta^\\star(G)'} /> the trained solution on graph{' '}
          <InlineMath tex={'G'} />:
        </p>

        <BlockMath
          tex={'\\theta^\\star(G)\\in\\arg\\min_\\theta\\ \\mathcal{L}_{\\mathrm{tr}}(\\theta;G).'}
        />

        <p>Define the bilevel objective</p>

        <BlockMath
          tex={
            '\\min_{G\\in\\Omega}\\ \\underbrace{\\mathcal{L}_{\\mathrm{te}}(\\theta^\\star(G);G)}_{\\mathcal{E}(G)}' +
            '+\\lambda\\,\\Phi_\\kappa(G),'
          }
        />

        <p>where a curvature penalty is</p>
        <BlockMath
          tex={
            '\\Phi_\\kappa(G)=\\sum_{e\\in E(G)}\\psi\\big(F^{\\#}(e)\\big),\\qquad \\psi(z)=\\big[\\tau-z\\big]_+^2.'
          }
        />
      </div>

      <HR />

      {/* Unified Swarm Framework */}
      <SectionTitle
        kicker="Part III · Curvature-Guided Swarm Optimization"
        title="Unified Framework: Bilevel Topology Search with Curvature Priors"
        subtitle="We cast rewiring as constrained combinatorial optimization over graphs, solved by curvature-guided population dynamics."
      />

      <div className="mt-5 space-y-4 leading-relaxed text-slate-300">
        <p>
          Let <InlineMath tex={'\\mathcal{G}_n\\cong\\{0,1\\}^{\\binom{n}{2}}'} /> be the space of
          all simple graphs on <InlineMath tex={'n'} /> nodes. We restrict to a feasible domain
        </p>
        <BlockMath
          tex={
            '\\Omega=\\Big\\{G=(V,E):\\ E_{\\mathrm{core}}\\subseteq E\\subseteq E_{\\mathrm{cand}},\\ |E|=m\\Big\\},'
          }
        />
        <p>
          preserving an edge budget and preventing degeneracy. Each swarm agent encodes a candidate
          graph <InlineMath tex={'G'} /> (equivalently, a binary vector over{' '}
          <InlineMath tex={'E_{\\mathrm{cand}}'} />
          ). Fitness is computed from a fixed GCN under a standardized protocol, and (optionally)
          curvature regularization:
        </p>
        <BlockMath tex={'\\mathrm{Fit}(G)=\\mathrm{Acc}(G)-\\lambda\\,\\Phi_\\kappa(G).'} />
      </div>

      <Callout title="Key diagnostic functionals (for Fields-level interpretability)">
        <ul className="list-disc space-y-3 pl-6">
          <li>
            <b>Dirichlet energy (smoothness):</b>{' '}
            <InlineMath
              tex={
                '\\mathcal{E}_D(Z;G)=\\frac12\\sum_{\\{i,j\\}\\in E}\\|z_i-z_j\\|^2=\\mathrm{tr}(Z^\\top L Z)'
              }
            />
            .
          </li>
          <li>
            <b>Fisher separability ratio:</b>{' '}
            <InlineMath tex={'\\mathcal{J}(Z)=\\frac{\\mathrm{tr}(S_B)}{\\mathrm{tr}(S_W)}'} />.
          </li>
          <li>
            <b>Cheeger–spectral link:</b> with conductance <InlineMath tex={'\\Phi'} /> and
            normalized Laplacian gap <InlineMath tex={'1-\\lambda_2(\\mathcal{S})'} />, Cheeger
            yields{' '}
            <InlineMath tex={'\\frac{\\Phi^2}{2}\\le 1-\\lambda_2(\\mathcal{S})\\le 2\\Phi'} />.
          </li>
          <li>
            <b>Operator perturbation:</b> for <InlineMath tex={'\\Delta'} /> with{' '}
            <InlineMath tex={'\\|\\Delta\\|_2'} /> small, Weyl gives{' '}
            <InlineMath
              tex={
                '|\\lambda_k(\\mathcal{S}+\\Delta)-\\lambda_k(\\mathcal{S})|\\le \\|\\Delta\\|_2'
              }
            />
            .
          </li>
        </ul>
      </Callout>

      <HR />

      {/* Algorithms: ACS */}
      <SectionTitle
        kicker="Part IV · Algorithms"
        title="Curvature-Guided Ant Colony System (CG-ACS)"
        subtitle="ACS selects edits with pheromone reinforcement and curvature-weighted heuristics; both proposal and updates are curvature-aware."
      />

      <div className="mt-5 space-y-4 leading-relaxed text-slate-300">
        <p>
          Let <InlineMath tex={'\\tau_e'} /> denote pheromone on action{' '}
          <InlineMath tex={'e\\in E_{\\mathrm{cand}}'} /> and define curvature heuristic
        </p>

        <BlockMath
          tex={
            '\\eta_e =\n' +
            '\\begin{cases}\n' +
            '\\exp\\!\\big(-\\gamma F^{\\#}(e)\\big), & e\\in E_{\\mathrm{rem}},\\\\\n' +
            '\\exp\\!\\big(+\\gamma t(e)\\big), & e\\in E_{\\mathrm{keep}},\\\\\n' +
            '\\exp\\!\\big(\\gamma\\mathcal{Q}(u,v)\\big), & e=\\{u,v\\}\\in E_{\\mathrm{add}}.\n' +
            '\\end{cases}'
          }
        />

        <p>
          The ACS transition rule on a neighborhood <InlineMath tex={'\\mathcal{N}'} /> becomes
        </p>

        <BlockMath
          tex={
            '\\mathbb{P}(e\\mid \\text{state})=\n' +
            '\\frac{\\tau_e^{\\alpha}\\,\\eta_e^{\\beta}}{\\sum_{e\\in\\mathcal{N}}\\tau_{e}^{\\alpha}\\,\\eta_{e}^{\\beta}}.'
          }
        />

        <p>Global pheromone reinforcement is curvature-modulated:</p>

        <BlockMath
          tex={
            '\\tau_e\\leftarrow (1-\\rho)\\,\\tau_e+\\rho\\,\\Delta\\tau_e,\\qquad\n' +
            '\\Delta\\tau_e=\\begin{cases}\n' +
            '\\mathrm{Fit}(G^\\star)\\,\\eta_e, & e\\in E(G^\\star),\\\\\n' +
            '0, & \\text{otherwise.}\n' +
            '\\end{cases}'
          }
        />
      </div>

      <CodeBox title="CG-ACS (high-level pseudocode)">
        {`Input: base graph G0=(V,E0), candidate actions Ecand, fixed GCN protocol, parameters (T, nh, alpha, beta, rho, lambda)
Precompute curvature diagnostics: F#, t(e), corridor energy Q(u,v)
Initialize pheromones tau_e = tau0 for all e in Ecand
For t = 1..T:
  For k = 1..nh (ants):
    Construct candidate G_k by sampling actions with P(e) ∝ tau_e^alpha * eta_e^beta
    Train/evaluate fixed GCN on G_k -> Acc(G_k)
    Compute Fit(G_k) = Acc(G_k) - lambda*Phi_kappa(G_k)
    Apply local update on visited actions
  End
  Let G* = argmax_k Fit(G_k)
  Apply global update: tau_e ← (1-rho)tau_e + rho*(Fit(G*)*eta_e) for e in E(G*)
End
Return best graph found`}
      </CodeBox>

      <HR />

      {/* Algorithms: PSO */}
      <SectionTitle
        title="Curvature-Guided Discrete PSO (CG-BPSO)"
        subtitle="Binary PSO on a restricted action space, with a curvature-induced external field that biases velocity updates."
      />

      <div className="mt-5 space-y-4 leading-relaxed text-slate-300">
        <p>
          Encode a candidate graph by <InlineMath tex={'x\\in\\{0,1\\}^{d}'} /> where{' '}
          <InlineMath tex={'d=|E_{\\mathrm{cand}}|'} />. Let{' '}
          <InlineMath tex={'b\\in\\mathbb{R}^{d}'} /> be the curvature field defined by{' '}
          <InlineMath tex={'b_j=\\log\\eta_{e_j}'} />.
        </p>

        <p>The velocity update becomes curvature-aware:</p>

        <BlockMath
          tex={
            'v_i \\leftarrow \\omega v_i + c_1 r_1\\,(p_i-x_i)+c_2 r_2\\,(g-x_i)+\\lambda_b\\,b.'
          }
        />

        <p>Positions are sampled via a logistic map:</p>

        <BlockMath
          tex={
            '\\mathbb{P}\\big(x_i^{(j)}=1\\big)=\\sigma(v_i^{(j)}),\\qquad \\sigma(z)=\\frac{1}{1+e^{-z}}.'
          }
        />

        <p>
          This preserves the PSO philosophy while injecting a geometric prior that pushes particles
          toward curvature-beneficial edits.
        </p>
      </div>

      <CodeBox title="CG-BPSO (high-level pseudocode)">
        {`Input: candidate space Ecand, parameters (T, np, omega, c1, c2, lambda_b, lambda)
Compute curvature weights eta_e and field b_j=log eta_{e_j}
Initialize particles x_i ∈ {0,1}^d and velocities v_i
For t = 1..T:
  For each particle i:
    Decode x_i -> graph G_i in Ω (enforce |E|=m, keep core edges)
    Evaluate Fit(G_i) = Acc(G_i) - lambda*Phi_kappa(G_i)
    Update p_i (personal best) and g (global best)
    Update velocity: v_i ← ω v_i + c1 r1(p_i-x_i)+c2 r2(g-x_i)+λ_b b
    Sample x_i^(j) ~ Bernoulli(σ(v_i^(j))) for all j
  End
End
Return best graph found`}
      </CodeBox>

      <HR />

      {/* Algorithms: ABC */}
      <SectionTitle
        title="Curvature-Guided Artificial Bee Colony (CG-ABC)"
        subtitle="ABC neighborhood moves are implemented as curvature-weighted k-flips (remove bottleneck edges, add corridor shortcuts) under an edge-budget constraint."
      />

      <div className="mt-5 space-y-4 leading-relaxed text-slate-300">
        <p>
          Each food source encodes a candidate graph (binary vector over{' '}
          <InlineMath tex={'E_{\\mathrm{cand}}'} />
          ). A curvature-aware neighbor operator uses a <InlineMath tex={'k'} />
          -flip exchange that preserves the edge budget:
        </p>

        <BlockMath tex={'E(v)=(E(x)\\setminus R)\\cup A,\\qquad |R|=|A|=k,'} />

        <p>where removals and additions are sampled with curvature-biased probabilities:</p>

        <BlockMath
          tex={
            '\\mathbb{P}(e\\in R)\\propto \\eta_e^{\\mathrm{rem}},\\qquad \\mathbb{P}(e\\in A)\\propto \\eta_e^{\\mathrm{add}}.'
          }
        />
      </div>

      <CodeBox title="CG-ABC (high-level pseudocode)">
        {`Input: candidate space Ecand, parameters (T, nFood, limit, k, lambda)
Compute curvature weights (eta_rem, eta_add) from F#, t(e), corridor Q(u,v)
Initialize food sources {x_1,...,x_nFood} (graphs in Ω)
For t = 1..T:
  Employed bees:
    For each i: propose neighbor v_i via k-flip with curvature-biased sampling
    If Fit(v_i) > Fit(x_i) then x_i ← v_i else increase trial counter
  Onlooker bees:
    Select sources proportional to Fit(x_i) and perform curvature-biased k-flip
  Scout bees:
    If trial counter > limit: reinitialize x_i (respect Ω) and reset counter
  Track best solution
End
Return best graph found`}
      </CodeBox>

      <HR />

      {/* Diagnostics */}
      <SectionTitle
        kicker="Part V · Analysis"
        title="Diagnostics: Variational, Spectral, and Separability Criteria"
        subtitle="Beyond accuracy, we analyze how rewiring reshapes smoothness, mixing, and class geometry in the latent space."
      />

      <div className="mt-5 space-y-5 leading-relaxed text-slate-300">
        <h3 className="text-xl font-semibold text-white">Dirichlet energy and over-smoothing</h3>
        <p>
          For embeddings <InlineMath tex={'Z\\in\\mathbb{R}^{n\\times p}'} />, define the Dirichlet
          energy
        </p>
        <BlockMath
          tex={
            '\\mathcal{E}_D(Z;G)=\\frac12\\sum_{\\{i,j\\}\\in E}\\|z_i-z_j\\|^2=\\mathrm{tr}(Z^\\top L Z).'
          }
        />
        <p>
          Decreasing <InlineMath tex={'\\mathcal{E}_D'} /> across layers indicates collapse of
          variation. By changing <InlineMath tex={'L'} /> and the spectrum of{' '}
          <InlineMath tex={'\\mathcal{S}'} />, rewiring alters smoothing rates.
        </p>

        <h3 className="text-xl font-semibold text-white">Fisher separability ratio</h3>
        <p>
          Let <InlineMath tex={'\\mu_c'} /> be class centroids and <InlineMath tex={'S_W,S_B'} />{' '}
          within/between scatter. We track
        </p>
        <BlockMath tex={'\\mathcal{J}(Z)=\\frac{\\mathrm{tr}(S_B)}{\\mathrm{tr}(S_W)}.'} />

        <h3 className="text-xl font-semibold text-white">
          Cheeger bounds, conductance, and bottlenecks
        </h3>
        <p>
          With conductance <InlineMath tex={'\\Phi'} /> and normalized Laplacian gap, Cheeger yields
        </p>
        <BlockMath tex={'\\frac{\\Phi^2}{2}\\le 1-\\lambda_2(\\mathcal{S})\\le 2\\Phi.'} />
        <p>
          Increasing expansion (raising <InlineMath tex={'\\Phi'} /> on poor cuts) simultaneously
          enlarges the spectral gap and reduces reliance on narrow corridors, mitigating
          over-squashing.
        </p>
      </div>

      <HR />

      {/* Hyperparameter Sensitivity */}
      <SectionTitle title="Hyperparameter Sensitivity" />
      <Figure
        src="/static/images/thesis/violin_plot.png"
        alt="Violin plot baseline sweep"
        caption="Baseline GCN performance under a broad hyperparameter sweep; topology-optimized graphs remain substantially better."
      />

      <HR />

      {/* Reported Results */}
      <SectionTitle title="Reported Results" />
      <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-700/60">
        <table className="min-w-full text-left text-sm">
          <thead className="bg-slate-900/60 text-slate-200">
            <tr>
              <th className="px-4 py-3 font-semibold">Method</th>
              <th className="px-4 py-3 font-semibold">Cora (%)</th>
              <th className="px-4 py-3 font-semibold">Citeseer (%)</th>
              <th className="px-4 py-3 font-semibold">Pubmed (%)</th>
            </tr>
          </thead>
          <tbody className="bg-slate-950/30 text-slate-300">
            <tr className="border-t border-slate-700/50">
              <td className="px-4 py-3">None</td>
              <td className="px-4 py-3">59.112 ± 1.245</td>
              <td className="px-4 py-3">58.237 ± 1.331</td>
              <td className="px-4 py-3">42.335 ± 1.312</td>
            </tr>
            <tr className="border-t border-slate-700/50">
              <td className="px-4 py-3">Swarm A</td>
              <td className="px-4 py-3">78.562 ± 1.320</td>
              <td className="px-4 py-3">68.867 ± 0.798</td>
              <td className="px-4 py-3">78.774 ± 0.191</td>
            </tr>
            <tr className="border-t border-slate-700/50">
              <td className="px-4 py-3">Swarm B</td>
              <td className="px-4 py-3">79.509 ± 2.517</td>
              <td className="px-4 py-3">68.551 ± 0.285</td>
              <td className="px-4 py-3">79.511 ± 2.303</td>
            </tr>
            <tr className="border-t border-slate-700/50">
              <td className="px-4 py-3">Swarm C</td>
              <td className="px-4 py-3">80.771 ± 1.208</td>
              <td className="px-4 py-3">69.894 ± 0.190</td>
              <td className="px-4 py-3">78.886 ± 0.294</td>
            </tr>
          </tbody>
        </table>
      </div>

      <HR />

      {/* Latent Geometry Analysis */}
      <SectionTitle title="Latent Geometry Analysis" />
      <p className="mt-4 leading-relaxed text-slate-300">
        Rewiring removes strongly negative-curvature edges and adds shortcuts that reduce negatively
        curved corridor energies. This modifies <InlineMath tex={'\\mathcal{S}(G)'} /> and improves
        class-conditional neighborhood consistency, increasing separability (e.g., raising{' '}
        <InlineMath tex={'\\mathcal{J}(Z)'} />) under a fixed model.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Figure
          src="/static/images/thesis/ABC_2D.png"
          alt="UMAP 2D embeddings (Swarm A)"
          caption="UMAP 2D projection of node embeddings after Swarm A rewiring."
          maxWidth="78%"
        />
        <Figure
          src="/static/images/thesis/ABC_3D.png"
          alt="UMAP 3D embeddings (Swarm A)"
          caption="UMAP 3D projection of node embeddings after Swarm A rewiring."
          maxWidth="78%"
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Figure
          src="/static/images/thesis/ACS_2D.png"
          alt="UMAP 2D embeddings (Swarm C)"
          caption="UMAP 2D projection of node embeddings after Swarm C rewiring."
          maxWidth="78%"
        />
        <Figure
          src="/static/images/thesis/ACS_3D.png"
          alt="UMAP 3D embeddings (Swarm C)"
          caption="UMAP 3D projection of node embeddings after Swarm C rewiring."
          maxWidth="78%"
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Figure
          src="/static/images/thesis/PSO_2D.png"
          alt="UMAP 2D embeddings (Swarm A’ / PSO)"
          caption="UMAP 2D projection of node embeddings after PSO-guided rewiring."
          maxWidth="78%"
        />
        <Figure
          src="/static/images/thesis/PSO_3D.png"
          alt="UMAP 3D embeddings (Swarm A’ / PSO)"
          caption="UMAP 3D projection of node embeddings after PSO-guided rewiring."
          maxWidth="78%"
        />
      </div>

      <HR />

      {/* Conclusion */}
      <SectionTitle title="Conclusion" />
      <div className="mt-4 space-y-4 leading-relaxed text-slate-300">
        <p>
          We treat topology as a variable in a constrained configuration space and optimize a
          learning-induced functional. Discrete curvature acts as a geometric oracle that (i)
          identifies bottleneck-like structures, (ii) defines a curvature-informed action space,
          (iii) provides proposal priors and regularization inside population-based search, and (iv)
          yields interpretable explanations (spectral/variational) for improved separability.
        </p>

        <p className="text-slate-400">
          In this presentation, curvature is fully integrated into the proposed swarm algorithms
          (ACS/PSO/ABC) via the candidate set, transition priors, and curvature-regularized
          fitness—so the optimization is explicitly curvature-guided rather than curvature-adjacent.
        </p>
      </div>

      <div className="mt-10">
        <a href="/projects" className="text-cyan-400 hover:underline">
          ← Back to Projects
        </a>
      </div>
    </div>
  )
}
