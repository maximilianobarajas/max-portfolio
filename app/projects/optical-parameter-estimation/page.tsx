import Image from 'next/image'
import katex from 'katex'
import 'katex/dist/katex.min.css'

export const metadata = {
  title: 'Optical Constants Retrieval from Spectral Transmittance (IER Internship)',
  description:
    'A physics-constrained inverse problem: retrieve n(λ), k(λ) from spectral transmittance using Maxwell-consistent thin-film optics (TMM), regularization, and hybrid global-to-local optimization with diagnostic validation.',
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

const TEX = {
  complexIndex: String.raw`
\tilde n(\lambda)=n(\lambda)+i\,k(\lambda),\qquad
\varepsilon(\lambda)=\varepsilon'(\lambda)+i\,\varepsilon''(\lambda)=\tilde n(\lambda)^2=(n^2-k^2)+i(2nk).
`,
  absorption: String.raw`
\alpha(\lambda)=\frac{4\pi}{\lambda}k(\lambda),\qquad
I(z,\lambda)=I_0(\lambda)\exp(-\alpha(\lambda)\,z).
`,
  maxwellBC: String.raw`
\hat{\mathbf n}\times(\mathbf E_2-\mathbf E_1)=\mathbf 0,\qquad
\hat{\mathbf n}\times(\mathbf H_2-\mathbf H_1)=\mathbf 0.
`,
  snellComplex: String.raw`
\tilde n_0\sin\theta_0=\tilde n_j\sin\theta_j,\qquad
\cos\theta_j=\sqrt{1-\left(\frac{\tilde n_0}{\tilde n_j}\sin\theta_0\right)^2},
`,
  fresnel: String.raw`
r^{(s)}_{j,j+1}=\frac{\tilde n_j\cos\theta_j-\tilde n_{j+1}\cos\theta_{j+1}}
{\tilde n_j\cos\theta_j+\tilde n_{j+1}\cos\theta_{j+1}},\quad
t^{(s)}_{j,j+1}=\frac{2\tilde n_j\cos\theta_j}
{\tilde n_j\cos\theta_j+\tilde n_{j+1}\cos\theta_{j+1}},
\\
r^{(p)}_{j,j+1}=\frac{\tilde n_{j+1}\cos\theta_j-\tilde n_j\cos\theta_{j+1}}
{\tilde n_{j+1}\cos\theta_j+\tilde n_j\cos\theta_{j+1}},\quad
t^{(p)}_{j,j+1}=\frac{2\tilde n_j\cos\theta_j}
{\tilde n_{j+1}\cos\theta_j+\tilde n_j\cos\theta_{j+1}}.
`,
  phase: String.raw`
\delta_j(\lambda)=\frac{2\pi}{\lambda}\,\tilde n_j(\lambda)\,d_j\,\cos\theta_j(\lambda).
`,
  admittances: String.raw`
q_j^{(s)}=\tilde n_j\cos\theta_j,\qquad
q_j^{(p)}=\frac{\tilde n_j}{\cos\theta_j}.
`,
  charMatrix: String.raw`
M_j(\lambda)=
\begin{pmatrix}
\cos\delta_j & \frac{i}{q_j}\sin\delta_j\\
i q_j\sin\delta_j & \cos\delta_j
\end{pmatrix},\qquad
M(\lambda)=\prod_{j=1}^{L}M_j(\lambda)=
\begin{pmatrix}
A & B\\
C & D
\end{pmatrix}.
`,
  rtFromM: String.raw`
r(\lambda)=\frac{q_0A+q_0q_sB-C-q_sD}{q_0A+q_0q_sB+C+q_sD},\qquad
t(\lambda)=\frac{2q_0}{q_0A+q_0q_sB+C+q_sD}.
`,
  Tfromt: String.raw`
T(\lambda)=\Re\!\left(\frac{q_s}{q_0}\right)\,|t(\lambda)|^2,\qquad
R(\lambda)=|r(\lambda)|^2.
`,
  forwardMap: String.raw`
\Lambda=\{\lambda_i\}_{i=1}^N,\qquad
\mathcal F:\ (n(\cdot),k(\cdot))\mapsto
\big(T^{\mathrm{sim}}(\lambda_i;n,k)\big)_{i=1}^N\in\mathbb R^N.
`,
  discretize: String.raw`
n=(n_1,\dots,n_N)^\top,\quad k=(k_1,\dots,k_N)^\top,\quad
\theta=(n^\top,k^\top)^\top\in\mathbb R^{2N},\quad
r(\theta)=T^{\mathrm{exp}}-\mathcal F(\theta)\in\mathbb R^N.
`,
  objective: String.raw`
\min_{\theta\in\mathbb R^{2N}} \ \Phi(\theta)=
\frac12\|W\,r(\theta)\|_2^2
+\frac{\lambda_n}{2}\|L n\|_2^2+\frac{\lambda_k}{2}\|L k\|_2^2
+\iota_{\mathcal B}(\theta).
`,
  Lop: String.raw`
(Lx)_i=x_{i+1}-2x_i+x_{i-1},\quad i=2,\dots,N-1,\qquad
L\in\mathbb R^{(N-2)\times N}.
`,
  box: String.raw`
\mathcal B=\{\theta:\ n_{\min}\le n_i\le n_{\max},\ 0\le k_i\le k_{\max}\ \forall i\}.
`,
  hadamard: String.raw`
\textbf{Hadamard well-posedness:} \ \text{existence, uniqueness, stability.}\quad
\text{Optical retrieval from transmittance alone commonly violates stability, motivating regularization.}
`,
  gn: String.raw`
(J^\top W^\top W J+\lambda_n\,\mathrm{blkdiag}(L^\top L,0)+\lambda_k\,\mathrm{blkdiag}(0,L^\top L))\,\Delta\theta
=J^\top W^\top W\,r(\theta),
\qquad
J(\theta)=\frac{\partial\mathcal F}{\partial\theta}(\theta).
`,
  bfgs: String.raw`
H_{t+1}=(I-\rho s y^\top)H_t(I-\rho y s^\top)+\rho s s^\top,\quad
\rho=(y^\top s)^{-1},\quad
s=\theta_{t+1}-\theta_t,\quad y=\nabla\Phi(\theta_{t+1})-\nabla\Phi(\theta_t).
`,
  sa: String.raw`
\mathbb P(\text{accept})=\min\{1,\exp(-\Delta\Phi/T)\},\qquad T\downarrow 0.
`,
  metrics: String.raw`
e_i=\left|T^{\mathrm{exp}}_i-T^{\mathrm{sim}}_i\right|,\qquad
\widehat F(x)=\frac1N\sum_{i=1}^N\mathbf 1(e_i\le x),
\\
S(n)=\|Ln\|_2^2,\quad S(k)=\|Lk\|_2^2,\qquad
\mathrm{BHF}=\frac{1}{2N}\sum_{i=1}^N\Big(\mathbf 1(n_i\in\{n_{\min},n_{\max}\})+\mathbf 1(k_i\in\{0,k_{\max}\})\Big).
`,
  kk: String.raw`
n(\omega)-1=\frac{2}{\pi}\,\mathcal P\!\!\int_0^\infty \frac{\omega'\,k(\omega')}{\omega'^2-\omega^2}\,d\omega'.
`,
}

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        Optical Constants Retrieval from Spectral Transmittance
      </h1>
      <p className="mt-4 font-mono text-lg leading-relaxed text-cyan-300">
        Maxwell-consistent forward modeling coupled with regularized inversion and hybrid
        optimization
        <br className="hidden sm:block" />
        <span className="mt-1 block text-base text-cyan-500/80 sm:mt-0 sm:inline">
          <span className="mx-2 hidden sm:inline">—</span>
          Research at{' '}
          <a
            href="https://yaotl.ier.unam.mx/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 underline decoration-cyan-500/30 transition-all hover:text-cyan-100 hover:decoration-cyan-100"
          >
            IER-UNAM
          </a>
        </span>
      </p>
      <div className="mt-10 flex flex-wrap items-center gap-6 rounded-2xl border border-slate-700/60 bg-slate-800/30 p-6">
        <div className="min-w-[260px] flex-1">
          <div className="text-xl font-bold text-white">IER · Research Internship</div>
          <div className="mt-1 text-sm text-slate-300/90">
            Inverse modeling for optical metrology from spectral transmittance
          </div>
          <div className="mt-4 grid grid-cols-1 gap-4 text-sm sm:grid-cols-2">
            <div>
              <span className="block text-xs font-bold tracking-wide text-slate-500 uppercase">
                Collaboration
              </span>
              <a
                className="text-cyan-300 hover:underline"
                href="https://www.researchgate.net/profile/Fernando-Ayala-Mato-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prof. Fernando Ayala Mato
              </a>
            </div>
            <div>
              <span className="block text-xs font-bold tracking-wide text-slate-500 uppercase">
                Deliverables
              </span>
              <span className="text-slate-200">
                Recovered spectra n(λ), k(λ) + diagnostics pack
              </span>
            </div>
          </div>
        </div>
      </div>

      <HR />

      <SectionTitle title="Abstract" />
      <div className="mt-4 space-y-4 leading-relaxed text-slate-300">
        <p>
          We address the inverse problem of retrieving the wavelength-dependent complex refractive
          index <InlineMath tex={'\\tilde n(\\lambda)=n(\\lambda)+i\\,k(\\lambda)'} /> of a thin
          film from measured spectral transmittance{' '}
          <InlineMath tex={'T^{\\mathrm{exp}}(\\lambda)'} />. The forward operator is derived from
          Maxwell boundary conditions and is implemented via the transfer-matrix method (TMM) for
          complex-valued multilayer stacks, allowing both normal and oblique incidence and s/p
          polarization. The inverse map is ill-conditioned and typically violates Hadamard
          stability; consequently, we formulate a constrained, regularized variational problem that
          enforces passivity, boundedness, and smoothness of the recovered spectra.
        </p>
        <p>
          We compare global-to-local optimization strategies tailored to nonconvex
          interference-driven landscapes: simulated annealing (SA) for basin exploration,
          Hooke–Jeeves (HJ) pattern search for derivative-free basin identification, and BFGS
          quasi-Newton refinement for efficient local convergence. A comprehensive diagnostics suite
          (per-wavelength errors, ECDFs, bandwise statistics, residual structure, fit–smoothness
          trade-offs, and bound-hit fractions) is reported to quantify both numerical performance
          and physical plausibility.
        </p>
      </div>

      <HR />

      <SectionTitle
        kicker="Part I · Material response"
        title="Complex optical constants, permittivity, and absorption"
        subtitle="Definitions, physical interpretation, and constraints used throughout."
      />
      <div className="mt-5 space-y-4 leading-relaxed text-slate-300">
        <p>
          For linear isotropic media (with magnetic permeability approximated by unity), the optical
          response is represented by the complex refractive index <InlineMath tex={'\\tilde n'} />.
          The extinction coefficient <InlineMath tex={'k'} /> governs dissipative losses, captured
          by the absorption coefficient <InlineMath tex={'\\alpha'} />.
        </p>
      </div>
      <BlockMath tex={TEX.complexIndex} />
      <BlockMath tex={TEX.absorption} />

      <Callout title="Physical admissibility">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Passivity: <InlineMath tex={'k(\\lambda)\\ge 0'} />.
          </li>
          <li>
            Box constraints: <InlineMath tex={'n_{\\min}\\le n(\\lambda)\\le n_{\\max}'} />,{' '}
            <InlineMath tex={'0\\le k(\\lambda)\\le k_{\\max}'} />.
          </li>
          <li>
            Optional causality consistency: Kramers–Kronig relations when broadband assumptions are
            defensible.
          </li>
        </ul>
      </Callout>
      <BlockMath tex={TEX.kk} />

      <HR />

      <SectionTitle
        kicker="Part II · Forward problem"
        title="Maxwell boundary conditions and transfer-matrix formulation"
        subtitle="A rigorous forward operator for transmittance of multilayer stacks with complex indices."
      />
      <div className="mt-5 space-y-5 leading-relaxed text-slate-300">
        <p>
          Consider a stratified medium with planar interfaces normal to{' '}
          <InlineMath tex={'\\hat{\\mathbf n}'} />. For time-harmonic fields, the electromagnetic
          boundary-value problem is determined by continuity of tangential components of{' '}
          <InlineMath tex={'\\mathbf E'} /> and <InlineMath tex={'\\mathbf H'} /> across each
          interface.
        </p>
      </div>
      <BlockMath tex={TEX.maxwellBC} />

      <div className="mt-5 space-y-4 leading-relaxed text-slate-300">
        <p>
          For oblique incidence, complex Snell’s law induces complex propagation angles in absorbing
          layers. The physically relevant branch is selected to ensure decaying waves in lossy
          media.
        </p>
      </div>
      <BlockMath tex={TEX.snellComplex} />

      <div className="mt-5 space-y-4 leading-relaxed text-slate-300">
        <p>
          Fresnel amplitudes are written for both polarizations. Each layer contributes a complex
          phase thickness <InlineMath tex={'\\delta_j'} />. Using optical admittances{' '}
          <InlineMath tex={'q_j'} />, the characteristic matrix compactly encodes propagation and
          internal reflections. The total stack matrix is an ordered product.
        </p>
      </div>
      <BlockMath tex={TEX.fresnel} />
      <BlockMath tex={TEX.phase} />
      <BlockMath tex={TEX.admittances} />
      <BlockMath tex={TEX.charMatrix} />
      <BlockMath tex={TEX.rtFromM} />
      <BlockMath tex={TEX.Tfromt} />

      <HR />

      <SectionTitle
        kicker="Part III · Inverse problem"
        title="Regularized retrieval as a constrained variational optimization"
        subtitle="Discretization on a wavelength grid, ill-posedness, and stabilization by smoothness priors."
      />
      <div className="mt-5 space-y-5 leading-relaxed text-slate-300">
        <p>
          Let <InlineMath tex={'\\Lambda=\\{\\lambda_i\\}_{i=1}^N'} /> denote the measurement grid
          and <InlineMath tex={'T^{\\mathrm{exp}}\\in\\mathbb R^N'} /> the observed spectrum. The
          forward operator <InlineMath tex={'\\mathcal F'} /> maps optical constants to predicted
          transmittance samples. We treat <InlineMath tex={'n(\\lambda),k(\\lambda)'} /> as
          discretized functions and solve for a finite-dimensional parameter{' '}
          <InlineMath tex={'\\theta\\in\\mathbb R^{2N}'} />.
        </p>
      </div>
      <BlockMath tex={TEX.forwardMap} />
      <BlockMath tex={TEX.discretize} />
      <BlockMath tex={TEX.hadamard} />

      <div className="mt-5 space-y-4 leading-relaxed text-slate-300">
        <p>
          To stabilize the inversion, we add quadratic Tikhonov penalties on discrete second
          differences, enforcing spectral smoothness and suppressing noise-amplified oscillations.
          The feasible set is a box constraint enforcing passivity and plausible ranges.
        </p>
      </div>
      <BlockMath tex={TEX.Lop} />
      <BlockMath tex={TEX.box} />
      <BlockMath tex={TEX.objective} />

      <Callout title="Interpretation of the objective">
        <ul className="list-disc space-y-2 pl-6">
          <li>
            The weighted misfit <InlineMath tex={'\\|W r(\\theta)\\|_2^2'} /> encodes measurement
            confidence and can incorporate wavelength-dependent noise models.
          </li>
          <li>
            The smoothness terms <InlineMath tex={'\\|Ln\\|_2^2,\\|Lk\\|_2^2'} /> act as a Gaussian
            prior on second derivatives of the spectra.
          </li>
          <li>
            The indicator <InlineMath tex={'\\iota_{\\mathcal B}'} /> enforces physical bounds
            exactly.
          </li>
        </ul>
      </Callout>

      <HR />

      <SectionTitle
        kicker="Part IV · Optimization"
        title="Nonconvex landscape: global exploration and local refinement"
        subtitle="SA and HJ for basin discovery, followed by BFGS quasi-Newton polishing."
      />
      <div className="mt-5 space-y-5 leading-relaxed text-slate-300">
        <p>
          Thin-film interference produces highly oscillatory spectral structure, which translates
          into a nonconvex objective landscape in <InlineMath tex={'\\theta'} />. We therefore
          compare hybrid strategies that separate basin discovery from local convergence.
        </p>
      </div>

      <Callout title="Formal local model and conditioning">
        <p className="mb-4">
          In smooth unconstrained regimes, a Gauss–Newton linearization clarifies the role of the
          Jacobian <InlineMath tex={'J(\\theta)=\\partial\\mathcal F/\\partial\\theta'} /> and the
          regularization operator. This motivates why quasi-Newton refinement is highly effective
          once a good basin is reached.
        </p>
        <BlockMath tex={TEX.gn} />
      </Callout>

      <div className="mt-5 space-y-4 leading-relaxed text-slate-300">
        <p>
          The global exploration stage uses simulated annealing acceptance rules. Hooke–Jeeves
          provides robust derivative-free basin identification. BFGS then accelerates convergence in
          the final regime.
        </p>
      </div>
      <BlockMath tex={TEX.sa} />
      <BlockMath tex={TEX.bfgs} />

      <CodeBox title="Algorithmic structure (high-level)">
        {`Input: Λ, measured T_exp, fixed stack geometry (d_j, ambient/substrate), bounds B, (λ_n, λ_k)
Forward: T_sim(Λ; n,k) via TMM with complex indices (s/p polarization)
Objective: Φ(θ)= 1/2 ||W(T_exp - F(θ))||^2 + (λ_n/2)||L n||^2 + (λ_k/2)||L k||^2 + ι_B(θ)
Strategies:
  (1) SA
  (2) SA → BFGS
  (3) HJ
  (4) HJ → BFGS
Output: θ* = (n*,k*) and full diagnostics pack`}
      </CodeBox>

      <HR />

      <SectionTitle
        kicker="Part V · Diagnostics"
        title="Error geometry, stability indicators, and physical plausibility checks"
        subtitle="Metrics designed to expose failure modes hidden by a single mean error."
      />
      <div className="mt-5 space-y-4 leading-relaxed text-slate-300">
        <p>
          We report per-wavelength errors, empirical distribution functions, bandwise summaries,
          residual structure, smoothness energies, and a bound-hit fraction quantifying how often
          the solution saturates constraints. These diagnostics distinguish genuine retrieval from
          constraint-saturation artifacts or localized spectral failures.
        </p>
      </div>
      <BlockMath tex={TEX.metrics} />

      <HR />

      <SectionTitle
        title="Results (generated figures)"
        subtitle="All figures are exported by the analysis pipeline and referenced via /static/images/<name>.png."
      />

      <Figure
        src="/static/images/01_transmittance.png"
        alt="Transmittance: experimental vs simulated"
        caption="Experimental transmittance T_exp(λ) and forward-model predictions T_sim(λ) across optimization strategies."
        priority
      />

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Figure
          src="/static/images/03_n.png"
          alt="Retrieved n(λ)"
          caption="Retrieved refractive index n(λ)."
        />
        <Figure
          src="/static/images/02_k.png"
          alt="Retrieved k(λ)"
          caption="Retrieved extinction coefficient k(λ)."
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Figure
          src="/static/images/05_per_lambda_error.png"
          alt="Per-wavelength error"
          caption="Per-wavelength absolute error |T_exp(λ) − T_sim(λ)| (log-scale visualization in the exported figure)."
        />
        <Figure
          src="/static/images/09_ecdf_error.png"
          alt="ECDF of per-wavelength error"
          caption="ECDF of per-wavelength errors; curves further left/up indicate uniformly smaller errors."
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Figure
          src="/static/images/08_boxplot_error.png"
          alt="Boxplot of error distributions"
          caption="Distributional comparison via boxplots (log-scale visualization in the exported figure)."
        />
        <Figure
          src="/static/images/07_violin_log_error.png"
          alt="Violin plot of log-errors"
          caption="Violin density of log-errors highlighting tails and variability across methods."
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Figure
          src="/static/images/12_bandwise_error.png"
          alt="Bandwise mean ± std error"
          caption="Bandwise mean error with ±1σ uncertainty over predefined wavelength bands."
        />
        <Figure
          src="/static/images/13_fit_vs_smoothness.png"
          alt="Fit vs smoothness"
          caption="Fit–smoothness trade-off (data misfit vs regularity energy), exposing the regularization balance."
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Figure
          src="/static/images/14_bound_hit_fraction.png"
          alt="Bound-hit fraction"
          caption="Bound-hit fraction (BHF), indicating how often reconstructions saturate physical box constraints."
        />
        <Figure
          src="/static/images/04_mean_error_ratio.png"
          alt="Mean error ratio relative to best"
          caption="Mean error ratio relative to the best-performing method (1.0 = best)."
        />
      </div>

      <SectionTitle
        title="Joint-structure diagnostic: n–k scatter"
        subtitle="Geometric structure of retrieved (n,k) pairs across wavelength; colored by λ in the analysis pipeline."
      />

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Figure
          src="/static/images/15_nk_scatter_HJ.png"
          alt="n–k scatter for HJ"
          caption="n–k scatter for Hooke–Jeeves."
        />
        <Figure
          src="/static/images/15_nk_scatter_HJ_BFGS.png"
          alt="n–k scatter for HJ→BFGS"
          caption="n–k scatter for Hooke–Jeeves → BFGS."
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Figure
          src="/static/images/15_nk_scatter_SA.png"
          alt="n–k scatter for SA"
          caption="n–k scatter for simulated annealing."
        />
        <Figure
          src="/static/images/15_nk_scatter_SA_BFGS.png"
          alt="n–k scatter for SA→BFGS"
          caption="n–k scatter for simulated annealing → BFGS."
        />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        <Figure
          src="/static/images/10_residuals_vs_lambda.png"
          alt="Residuals vs wavelength"
          caption="Residual structure T_exp(λ) − T_sim(λ), revealing localized spectral mismatch."
        />
        <Figure
          src="/static/images/11_residual_hist.png"
          alt="Residual histogram"
          caption="Residual histogram as a distributional sanity check (centering and tails)."
        />
      </div>

      <HR />

      <SectionTitle title="Conclusion" />
      <div className="mt-4 space-y-4 leading-relaxed text-slate-300">
        <p>
          We formulated optical-constant retrieval from transmittance as a constrained, regularized
          variational problem built on a Maxwell-consistent thin-film forward operator implemented
          via TMM for complex multilayer stacks. The diagnostics suite provides rigorous evidence of
          retrieval quality beyond a single mean error, including distributional behavior, spectral
          robustness, regularity, and constraint saturation.
        </p>
        <p>
          Empirically, the HJ→BFGS hybrid strategy is the most reliable across these criteria:
          derivative-free basin identification reduces sensitivity to poor local minima, while
          quasi-Newton refinement accelerates convergence in a favorable basin, yielding stable and
          physically plausible spectra n(λ), k(λ).
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
