// app/projects/mitacs-cold-chain-routing/page.tsx
import React from 'react'
import { BlockMath } from 'react-katex'

export const metadata = {
  title: 'Cold-Chain Multi-Compartment Multi-Trip VRP (CC-MCMT-VRP)',
  description: '',
}

// -----------------------------
// UI helpers
// -----------------------------
function HR() {
  return <hr className="my-14 border-slate-700/60" />
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-slate-700/60 bg-slate-900/40 px-3 py-1 font-mono text-xs text-slate-200">
      {children}
    </span>
  )
}

function Callout({
  title,
  children,
  tone = 'neutral',
}: {
  title?: string
  children: React.ReactNode
  tone?: 'neutral' | 'info' | 'warn'
}) {
  const toneClasses =
    tone === 'info'
      ? 'border-cyan-600/40 bg-cyan-950/20'
      : tone === 'warn'
        ? 'border-amber-600/40 bg-amber-950/20'
        : 'border-slate-700/60 bg-slate-900/30'

  return (
    <div className={`my-7 rounded-2xl border p-5 text-slate-300 ${toneClasses}`}>
      {title ? <div className="mb-2 text-sm font-semibold text-slate-100">{title}</div> : null}
      <div className="text-sm leading-relaxed">{children}</div>
    </div>
  )
}

function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mt-2">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      {subtitle ? <p className="mt-2 text-slate-400">{subtitle}</p> : null}
    </div>
  )
}

function SubTitle({ children }: { children: React.ReactNode }) {
  return <h3 className="mt-10 text-xl font-semibold text-white">{children}</h3>
}

function MathBlock({ label, tex }: { label?: string; tex: string }) {
  return (
    <div className="my-6 overflow-x-auto rounded-2xl border border-slate-700/60 bg-slate-950/45">
      {label ? (
        <div className="border-b border-slate-700/60 bg-slate-900/40 px-4 py-2 text-xs font-bold tracking-wide text-slate-400 uppercase">
          {label}
        </div>
      ) : null}
      <div className="p-4 text-slate-200">
        <BlockMath math={tex} />
      </div>
    </div>
  )
}

// -----------------------------
// LaTeX (KaTeX-safe) strings
// -----------------------------
const OBJ_BASE = String.raw`
\begin{aligned}
\min\quad
&\sum_{k\in\mathcal{K}}\sum_{t\in\mathcal{T}}\sum_{j\in\mathcal{N}_c} f^{k}\,x_{0j}^{kt}
\;+\;
\sum_{k\in\mathcal{K}}\sum_{t\in\mathcal{T}}\sum_{(i,j)\in\mathcal{A}} c_{ij}^{k}\,x_{ij}^{kt}.
\end{aligned}
`

const CONS_BASE = String.raw`
\begin{aligned}
&\textbf{Service (no split):}
&&\sum_{k\in\mathcal{K}}\sum_{t\in\mathcal{T}} y_{ip}^{kt} = 1
&&\forall i\in\mathcal{N}_c,\ \forall p\in\mathcal{P}.
\\[4pt]
&\textbf{One product per compartment per trip:}
&&\sum_{p\in\mathcal{P}} z_{p}^{mkt} \le 1
&&\forall k\in\mathcal{K},\ \forall t\in\mathcal{T},\ \forall m\in\mathcal{M}^{k}.
\\[4pt]
&\textbf{Trip activation (at most one departure/return):}
&&\sum_{j\in\mathcal{N}_c} x_{0j}^{kt} \le 1,\qquad
\sum_{i\in\mathcal{N}_c} x_{i,n+1}^{kt} \le 1
&&\forall k\in\mathcal{K},\ \forall t\in\mathcal{T}.
\\[4pt]
&\textbf{Capacity by product (vehicle-trip):}
&&\sum_{i\in\mathcal{N}_c} q_{ip}\,y_{ip}^{kt} \le \sum_{m\in\mathcal{M}^{k}} Q^{mk}\,z_{p}^{mkt}
&&\forall p\in\mathcal{P},\ \forall k\in\mathcal{K},\ \forall t\in\mathcal{T}.
\\[4pt]
&\textbf{Time propagation (big-}M\textbf{):}
&&u_{j}^{kt} \ge u_{i}^{kt} + \theta_{ij} + \sum_{p\in\mathcal{P}} s_{jp}\,y_{jp}^{kt}
- M\bigl(1-x_{ij}^{kt}\bigr)
&&\forall (i,j)\in\mathcal{A},\ \forall k\in\mathcal{K},\ \forall t\in\mathcal{T}.
\\[4pt]
&\textbf{Time windows:}
&&e_{ip}\,y_{ip}^{kt} \le u_{i}^{kt} \le l_{ip}\,y_{ip}^{kt}
&&\forall i\in\mathcal{N}_c,\ \forall p\in\mathcal{P},\ \forall k\in\mathcal{K},\ \forall t\in\mathcal{T}.
\\[4pt]
&\textbf{Max on-board time (per product, within a trip):}
&&u_{i}^{kt} - u_{0}^{kt} \le T_{p} + M\bigl(1-y_{ip}^{kt}\bigr)
&&\forall i\in\mathcal{N}_c,\ \forall p\in\mathcal{P},\ \forall k\in\mathcal{K},\ \forall t\in\mathcal{T}.
\\[4pt]
&\textbf{Depot-time variables active only if trip is used:}
&&u_{0}^{kt} \le T_{\mathrm{day}}\sum_{j\in\mathcal{N}_c} x_{0j}^{kt},\qquad
u_{n+1}^{kt} \le T_{\mathrm{day}}\sum_{i\in\mathcal{N}_c} x_{i,n+1}^{kt}
&&\forall k\in\mathcal{K},\ \forall t\in\mathcal{T}.
\\[4pt]
&\textbf{Max trip duration:}
&&u_{n+1}^{kt} - u_{0}^{kt} \le T_{\mathrm{trip}}
&&\forall k\in\mathcal{K},\ \forall t\in\mathcal{T}.
\\[4pt]
&\textbf{Max workday duration:}
&&\sum_{t\in\mathcal{T}} \bigl(u_{n+1}^{kt} - u_{0}^{kt}\bigr) \le T_{\mathrm{day}}
&&\forall k\in\mathcal{K}.
\\[4pt]
&\textbf{Inter-trip transition (original nonlinear form):}
&&u_{0}^{k,t+1} \ge u_{n+1}^{kt} +
\max_{m\in\mathcal{M}^{k}}
\left(
\sum_{p\in\mathcal{P}}\sum_{p'\in\mathcal{P}}
\tau_{pp'}\, z_{p}^{mkt}\, z_{p'}^{mk,t+1}
\right)
&&\forall k\in\mathcal{K},\ \forall t=1,\dots,\lvert\mathcal{T}\rvert-1.
\\[6pt]
&\textbf{Domains:}
&&x_{ij}^{kt},\ y_{ip}^{kt},\ z_{p}^{mkt}\in\{0,1\},\qquad u_{i}^{kt}\ge 0.
\end{aligned}
`

const TEMP_DEP = String.raw`
\begin{aligned}
&\textbf{Additional parameters:}\quad
\beta_{p}^{mk}\ \text{(energy/fuel coefficient)},\qquad d_{ij}\ \text{(distance)}.
\\[4pt]
&\textbf{Trip-level energy consumption:}\quad
\bar{\beta}^{kt} = \sum_{p\in\mathcal{P}}\sum_{m\in\mathcal{M}^{k}} \beta_{p}^{mk}\,z_{p}^{mkt}.
\\[4pt]
&\textbf{Temperature-dependent arc cost:}\quad
c_{ij}^{kt} = \bar{\beta}^{kt}\, d_{ij}.
\\[6pt]
&\textbf{Updated objective (nonlinear due to }c_{ij}^{kt}\textbf{):}\\
&\min\quad
\sum_{k\in\mathcal{K}}\sum_{t\in\mathcal{T}}\sum_{j\in\mathcal{N}_c} f^{k}\,x_{0j}^{kt}
\;+\;
\sum_{k\in\mathcal{K}}\sum_{t\in\mathcal{T}}\sum_{(i,j)\in\mathcal{A}} c_{ij}^{kt}\,x_{ij}^{kt}.
\end{aligned}
`

const LM_XI = String.raw`
\begin{aligned}
&\textbf{Arc }\times\textbf{ configuration conjunction:}\qquad
\xi_{ijpm}^{kt} = x_{ij}^{kt}\ \wedge\ z_{p}^{mkt}.
\\[4pt]
&\textbf{Hull constraints:}\\
&\xi_{ijpm}^{kt} \le x_{ij}^{kt},\qquad
\xi_{ijpm}^{kt} \le z_{p}^{mkt},\qquad
\xi_{ijpm}^{kt} \ge x_{ij}^{kt} + z_{p}^{mkt} - 1,\qquad
\xi_{ijpm}^{kt}\in\{0,1\}.
\end{aligned}
`

const LM_ETA_W = String.raw`
\begin{aligned}
&\textbf{Transition conjunction between consecutive trips:}\qquad
\eta_{pp'm}^{kt} = z_{p}^{mkt}\ \wedge\ z_{p'}^{mk,t+1}.
\\[4pt]
&\textbf{Hull constraints:}\\
&\eta_{pp'm}^{kt} \le z_{p}^{mkt},\qquad
\eta_{pp'm}^{kt} \le z_{p'}^{mk,t+1},\qquad
\eta_{pp'm}^{kt} \ge z_{p}^{mkt} + z_{p'}^{mk,t+1} - 1,\qquad
\eta_{pp'm}^{kt}\in\{0,1\}.
\\[6pt]
&\textbf{Max-setup proxy }w_{kt}\textbf{ (continuous):}\\
&u_{0}^{k,t+1} \ge u_{n+1}^{kt} + w_{kt}
\qquad \forall k,\ \forall t=1,\dots,\lvert\mathcal{T}\rvert-1,
\\
&w_{kt} \ge \sum_{p\in\mathcal{P}}\sum_{p'\in\mathcal{P}} \tau_{pp'}\,\eta_{pp'm}^{kt}
\qquad \forall k,\ \forall t=1,\dots,\lvert\mathcal{T}\rvert-1,\ \forall m\in\mathcal{M}^{k},
\\
&w_{kt}\ge 0.
\end{aligned}
`

const LM_OBJ = String.raw`
\begin{aligned}
&\textbf{Linear traversal term using }\xi:\\
&\sum_{k\in\mathcal{K}}\sum_{t\in\mathcal{T}}\sum_{(i,j)\in\mathcal{A}}
\sum_{p\in\mathcal{P}}\sum_{m\in\mathcal{M}^{k}}
d_{ij}\,\beta_{p}^{mk}\,\xi_{ijpm}^{kt}.
\\[8pt]
&\textbf{Full LM objective:}\\
&\min\quad
\sum_{k\in\mathcal{K}}\sum_{t\in\mathcal{T}}\sum_{j\in\mathcal{N}_c} f^{k}\,x_{0j}^{kt}
\;+\;
\sum_{k\in\mathcal{K}}\sum_{t\in\mathcal{T}}\sum_{(i,j)\in\mathcal{A}}
\sum_{p\in\mathcal{P}}\sum_{m\in\mathcal{M}^{k}}
d_{ij}\,\beta_{p}^{mk}\,\xi_{ijpm}^{kt}.
\end{aligned}
`

const CA_DEF = String.raw`
\begin{aligned}
&\textbf{Assignment-enumeration (CA) formulation:}\\
&\Phi^{k}:\ \text{set of all compartment assignments for vehicle }k,\qquad
\lvert\Phi^{k}\rvert = \lvert\mathcal{P}\rvert^{\lvert\mathcal{M}^{k}\rvert}.
\\
&a_{\phi}^{pm}\in\{0,1\}:\ \text{assignment } \phi \text{ places product }p\text{ in compartment }m.
\\[4pt]
&\textbf{Decision variable (replaces }z\textbf{):}\qquad
\pi_{\phi}^{kt}\in\{0,1\}:\ \text{trip }t\text{ of vehicle }k\text{ uses assignment }\phi.
\\[6pt]
&\textbf{Trip-to-assignment activation:}\qquad
\sum_{\phi\in\Phi^{k}} \pi_{\phi}^{kt} = \sum_{j\in\mathcal{N}_c} x_{0j}^{kt}
\quad \forall k,t.
\end{aligned}
`

const CA_CONSTS = String.raw`
\begin{aligned}
&\textbf{Precomputed constants per assignment:}\\[4pt]
&\bar{\beta}_{\phi}^{k} = \sum_{p\in\mathcal{P}}\sum_{m\in\mathcal{M}^{k}} \beta_{p}^{mk}\,a_{\phi}^{pm}
\qquad \text{(energy/fuel for assignment }\phi\text{)}.
\\
&\gamma_{ij\phi}^{k} = \bar{\beta}_{\phi}^{k}\, d_{ij}
\qquad \text{(temperature-dependent arc coefficient)}.
\\
&Q_{\phi}^{p} = \sum_{m\in\mathcal{M}^{k}} Q^{mk}\,a_{\phi}^{pm}
\qquad \text{(capacity reserved for product }p\text{ under }\phi\text{)}.
\end{aligned}
`

const CA_MCCORMICK = String.raw`
\begin{aligned}
&\textbf{Linearizing }x_{ij}^{kt}\cdot \pi_{\phi}^{kt}:\\
&\delta_{ij\phi}^{kt}\in\{0,1\},\qquad
\delta_{ij\phi}^{kt} \le x_{ij}^{kt},\quad
\delta_{ij\phi}^{kt} \le \pi_{\phi}^{kt},\quad
\delta_{ij\phi}^{kt} \ge x_{ij}^{kt} + \pi_{\phi}^{kt} - 1.
\\[8pt]
&\textbf{Linear CA objective:}\\
&\min\quad
\sum_{k\in\mathcal{K}}\sum_{t\in\mathcal{T}}\sum_{j\in\mathcal{N}_c} f^{k}\,x_{0j}^{kt}
\;+\;
\sum_{k\in\mathcal{K}}\sum_{t\in\mathcal{T}}\sum_{(i,j)\in\mathcal{A}}\sum_{\phi\in\Phi^{k}}
\gamma_{ij\phi}^{k}\,\delta_{ij\phi}^{kt}.
\end{aligned}
`

const CA_COMP_CAP = String.raw`
\begin{aligned}
&\textbf{Product–assignment compatibility:}\\
&y_{ip}^{kt} \le
\sum_{\phi\in\Phi^{k}}\Bigl(\sum_{m\in\mathcal{M}^{k}} a_{\phi}^{pm}\Bigr)\pi_{\phi}^{kt}
\qquad \forall i,p,k,t.
\\[8pt]
&\textbf{Capacity by product:}\\
&\sum_{i\in\mathcal{N}_c} q_{ip}\,y_{ip}^{kt} \le
\sum_{\phi\in\Phi^{k}} Q_{\phi}^{p}\,\pi_{\phi}^{kt}
\qquad \forall p,k,t.
\end{aligned}
`

const CA_TRANS = String.raw`
\begin{aligned}
&\textbf{Transition between assignments:}\\[4pt]
&b_{\phi\phi'}^{m} =
\sum_{p\in\mathcal{P}}\sum_{p'\in\mathcal{P}} \tau_{pp'}\,a_{\phi}^{pm}\,a_{\phi'}^{p'm},
\qquad
\bar{b}_{\phi\phi'}^{k}=\max_{m\in\mathcal{M}^{k}} b_{\phi\phi'}^{m}.
\\[6pt]
&\textbf{Binary product for consecutive assignment selection:}\quad
w_{\phi\phi'}^{kt}=\pi_{\phi}^{kt}\,\pi_{\phi'}^{k,t+1},
\\
&w_{\phi\phi'}^{kt} \le \pi_{\phi}^{kt},\quad
w_{\phi\phi'}^{kt} \le \pi_{\phi'}^{k,t+1},\quad
w_{\phi\phi'}^{kt} \ge \pi_{\phi}^{kt}+\pi_{\phi'}^{k,t+1}-1.
\\[8pt]
&\textbf{Trip-to-trip time linking:}\\
&u_{0}^{k,t+1} \ge u_{n+1}^{kt} + \sum_{\phi\in\Phi^{k}}\sum_{\phi'\in\Phi^{k}}
\bar{b}_{\phi\phi'}^{k}\,w_{\phi\phi'}^{kt}
\qquad \forall k,\ \forall t=1,\dots,\lvert\mathcal{T}\rvert-1.
\end{aligned}
`

const DELTA_PRIMARY = String.raw`
\begin{aligned}
&\textbf{Delta-primary reformulation:}\quad \delta_{ij\phi}^{kt}\ \text{encodes arc usage under assignment }\phi.\\[6pt]
&\textbf{Recover routing and assignment selection:}\\
&x_{ij}^{kt} := \sum_{\phi\in\Phi^{k}} \delta_{ij\phi}^{kt},\qquad
\pi_{\phi}^{kt} := \sum_{j\in\mathcal{N}_c} \delta_{0j\phi}^{kt}.
\\[8pt]
&\textbf{Consistency (enforces binaries):}\\
&\sum_{\phi\in\Phi^{k}} \delta_{ij\phi}^{kt} \le 1
\qquad \forall (i,j)\in\mathcal{A},\ \forall k,\forall t,\\
&\sum_{j\in\mathcal{N}_c}\sum_{\phi\in\Phi^{k}} \delta_{0j\phi}^{kt} \le 1
\qquad \forall k,\forall t.
\\[8pt]
&\textbf{Flow conservation over }\delta\textbf{:}\\
&\sum_{j\in\mathcal{N}}\sum_{\phi\in\Phi^{k}} \delta_{ij\phi}^{kt}
=
\sum_{j\in\mathcal{N}}\sum_{\phi\in\Phi^{k}} \delta_{ji\phi}^{kt}
\qquad \forall i\in\mathcal{N}_c,\ \forall k,\forall t.
\\[8pt]
&\textbf{Time propagation becomes:}\\
&u_{j}^{kt} \ge u_{i}^{kt} + \theta_{ij} + \sum_{p\in\mathcal{P}} s_{jp}\,y_{jp}^{kt}
- M\left(1-\sum_{\phi\in\Phi^{k}} \delta_{ij\phi}^{kt}\right)
\qquad \forall (i,j)\in\mathcal{A},\ \forall k,\forall t.
\\[6pt]
&\textbf{All remaining constraints are written with }x,\pi\textbf{ replaced by their recovered expressions where needed.}
\end{aligned}
`

const HGA1_DESC = `Among the three metaheuristics evaluated, the penalty-based genetic algorithm with repair (HGA I) was the most reliable and scalable approach across the full difficulty range. The decoder-based variant (HGA II) was extremely fast but its solution quality deteriorated sharply as instances grew. The hybrid variant (HGA III) was competitive in several cases, but HGA I most consistently delivered strong solutions under tight feasibility coupling (workday limits and inter-trip temperature setup times). 

HGA I represents a full-day plan: each vehicle executes a sequence of trips; each trip has an ordered route; and each trip includes a compartment configuration consistent with the served products. The search deliberately allows infeasible intermediate plans. A structured penalty converts all violations into a single fitness signal, while a repair operator actively reduces infeasibility by relocating customers between trips/positions and updating the induced timing and configuration decisions. This combination preserves exploration while steadily steering the population toward feasible, low-cost schedules.`

const HGA1_PSEUDO = String.raw`
\begin{aligned}
&\textbf{HGA I (penalty-based GA with repair):}\\[4pt]
&\textbf{Initialize:}\ \text{population with one repaired baseline solution and the rest random.}\\
&\textbf{Repeat for each generation:}\\
&\quad 1)\ \text{Evaluate fitness: } \text{cost} + \text{large penalties for violations.}\\
&\quad 2)\ \text{Select parents with preference for low-penalty individuals.}\\
&\quad 3)\ \text{Generate offspring via crossover and mutation.}\\
&\quad 4)\ \text{Apply Repair to each offspring (intensification).}\\
&\quad 5)\ \text{Elitism: keep the best individual found so far.}\\
&\textbf{Return:}\ \text{best individual.}\\[10pt]
&\textbf{Repair (compact):}\\
&\quad \text{Iterate a bounded number of times: pick a customer from a violated trip,}\\
&\quad \text{test relocations to alternative trips/positions, apply the best penalty-reducing move,}\\
&\quad \text{and update timing/configuration for affected trips. Stop early if penalties reach zero.}
\end{aligned}
`

const RESULTS_TABLE_ROWS: Array<
  [string, number, number, number, string, string, string, string, string, string, string, string]
> = [
  ['Level-01', 1, 2, 1, '168.08*', '0.03', '168.08', '2.14', '168.08', '1.88', '168.86', '0.76'],
  ['Level-02', 1, 3, 1, '174.70*', '0.02', '174.70', '2.74', '174.70', '3.66', '175.78', '0.93'],
  ['Level-03', 1, 4, 2, '178.44*', '0.27', '178.44', '3.47', '337.90', '5.19', '359.76', '1.36'],
  ['Level-04', 2, 4, 1, '362.51*', '0.12', '362.95', '4.01', '362.51', '5.43', '363.88', '1.33'],
  ['Level-05', 2, 4, 2, '336.11*', '0.16', '336.11', '4.50', '336.62', '4.38', '359.76', '1.73'],
  ['Level-06', 2, 5, 2, '363.57*', '0.48', '364.27', '5.87', '389.77', '7.28', '395.71', '2.14'],
  ['Level-07', 5, 10, 4, '-', '-', '1070.01', '23.60', '1684.45', '9.32', '1081.46', '22.87'],
  ['Level-08', 5, 12, 4, '-', '-', '1333.88', '38.43', '2950.80', '14.59', '1350.90', '59.30'],
  ['Level-09', 6, 12, 4, '-', '-', '1436.15', '58.06', '3769.42', '11.52', '1481.56', '56.03'],
  ['Level-10', 6, 14, 5, '-', '-', '1899.47', '120.43', '4507.22', '14.35', '4052.41', '157.69'],
  ['Level-11', 6, 15, 5, '-', '-', '2149.17', '122.69', '4846.53', '12.54', '2579.76', '114.22'],
  ['Level-12', 7, 16, 5, '-', '-', '2448.68', '176.59', '5325.71', '10.24', '2456.61', '195.27'],
  ['Level-13', 7, 17, 5, '-', '-', '3238.08', '236.82', '5732.34', '10.36', '6092.10', '246.10'],
  ['Level-14', 7, 18, 5, '-', '-', '3930.08', '304.20', '7296.44', '10.87', '5819.62', '285.22'],
  ['Level-15', 8, 18, 5, '-', '-', '4000.83', '382.43', '6735.57', '6.46', '150.00', '338.35'],
  ['Level-16', 8, 19, 5, '-', '-', '4140.25', '474.02', '6951.50', '8.79', '8304.71', '343.99'],
  ['Level-17', 8, 20, 5, '-', '-', '5470.50', '518.74', '8679.93', '8.38', '413.99', '356.67'],
  ['Level-18', 9, 22, 6, '-', '-', '5393.63', '735.52', '10031.42', '14.07', '150.00', '524.47'],
  ['Level-19', 10, 24, 6, '-', '-', '5796.82', '1038.49', '10572.34', '8.04', '930.21', '681.44'],
  ['Level-20', 12, 26, 6, '-', '-', '7562.31', '1738.91', '12244.82', '9.37', '150.00', '905.30'],
]

// -----------------------------
// Page
// -----------------------------
export default function Page() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12">
      <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        Cold-Chain Multi-Compartment Multi-Trip Vehicle Routing (CC-MCMT-VRP)
      </h1>

      <div className="mt-8 flex flex-wrap gap-2">
        <Badge>Multi-Compartment</Badge>
        <Badge>Multi-Trip</Badge>
        <Badge>Time Windows</Badge>
        <Badge>Perishability</Badge>
        <Badge>Temperature Setup Times</Badge>
        <Badge>Temp-Dependent Costs</Badge>
        <Badge>MILP</Badge>
        <Badge>Linearization</Badge>
        <Badge>Metaheuristics</Badge>
      </div>

      <div className="mt-8 space-y-5 leading-relaxed text-slate-300">
        <p>
          This research was conducted during my{' '}
          <a
            href="https://drive.google.com/file/d/1cCWFbLaAsICmfMkQZGLBLvX3Cz_D53vV/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-cyan-400 hover:underline"
          >
            Mitacs Globalink Research Internship
          </a>{' '}
          at the{' '}
          <a
            href="https://www.cirrelt.ca/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            Interuniversity Research Centre on Enterprise Networks, Logistics and Transportation
            (CIRRELT)
          </a>{' '}
          in Montreal, Canada. I had the privilege of working under the supervision of{' '}
          <a
            href="https://www4.fsa.ulaval.ca/en/teacher/maryam-darvish/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            Prof. Maryam Darvish
          </a>{' '}
          and{' '}
          <a
            href="https://www.researchgate.net/profile/Hani-Zbib"
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 hover:underline"
          >
            Prof. Hani Zbib
          </a>
          .
        </p>

        <p>
          The project addresses a cold-chain distribution problem where a single depot supplies
          multiple retail customers with several product categories. Each category has distinct
          delivery requirements: tighter delivery time windows for more perishable goods and strict
          limits on maximum time spent on-board a vehicle. Operationally, the fleet is
          heterogeneous, and each vehicle contains multiple insulated compartments whose temperature
          settings can be configured to carry specific product categories.
        </p>

        <p>
          Vehicles can perform multiple trips during a workday. Between consecutive trips,
          compartments may be reconfigured to carry different products, which introduces depot setup
          time due to temperature adjustment. These transition times depend on the pair of products
          involved (for example, switching from ambient to frozen typically requires more time than
          switching from chilled to ambient). Planning therefore couples routing decisions, trip
          sequencing, and temperature configuration decisions under time windows, capacity limits,
          max on-board limits, and global workday limits.
        </p>

        <p>
          The objective minimizes total operating cost. The base model includes a fixed cost each
          time a vehicle leaves the depot for a trip and a traversal cost proportional to arc usage.
          The extended model makes traversal cost temperature-dependent, linking cost to the energy
          consumption induced by compartment settings. This coupling creates bilinear terms and
          motivates the linearization and reformulation strategies presented below.
        </p>
      </div>

      <HR />

      <SectionTitle title="1) Original MILP formulation" subtitle="Base CC-MCMT-VRP model." />

      <div className="mt-6 space-y-5 leading-relaxed text-slate-300">
        <p>
          The base formulation assigns every customer-product demand to exactly one vehicle and one
          trip. The model chooses the sequence of customer visits in each trip and decides which
          product is carried in each compartment for that trip. A key operational restriction is
          that demands are not split: a store’s demand for a product category is delivered by a
          single service on a single trip.
        </p>

        <p>
          Route feasibility is enforced using time propagation with travel and service times, while
          product-specific time windows constrain feasible service times. Perishability is captured
          via a maximum on-board time within a trip. Multi-trip operation is modeled through a
          maximum trip duration and a maximum workday duration per vehicle. Finally, the formulation
          includes an inter-trip transition component: changing compartment configurations between
          consecutive trips can require waiting time at the depot.
        </p>
      </div>

      <MathBlock label="Objective (base)" tex={OBJ_BASE} />
      <MathBlock label="Constraints (base)" tex={CONS_BASE} />

      <HR />

      <SectionTitle
        title="2) Temperature-dependent traversal costs"
        subtitle="Extended model where travel cost depends on compartment energy consumption."
      />

      <div className="mt-6 space-y-5 leading-relaxed text-slate-300">
        <p>
          Cold-chain distribution is strongly affected by energy consumption. Colder regimes (e.g.,
          frozen) impose higher refrigeration load, which increases operating cost per kilometer. To
          capture this, traversal cost is modeled as distance multiplied by a trip-level coefficient
          induced by the chosen compartment configuration.
        </p>

        <p>
          This extension provides a principled way to compare solutions that trade off routing
          structure against temperature configuration. For example, consolidating frozen deliveries
          may reduce the distance traveled under expensive regimes. The key modeling implication is
          nonlinearity: routing decisions and configuration decisions interact multiplicatively in
          the objective.
        </p>
      </div>

      <MathBlock label="Temperature-dependent costs (nonlinear)" tex={TEMP_DEP} />

      <HR />

      <SectionTitle
        title="3) Initial linearization (LM formulation)"
        subtitle="Binary conjunction variables remove bilinear products and linearize transition time."
      />

      <div className="mt-6 space-y-5 leading-relaxed text-slate-300">
        <p>
          The first exact linearization introduces conjunction variables that represent the joint
          decision of traversing an arc and having a particular product configured in a particular
          compartment. This converts the temperature-dependent traversal term into a linear sum. The
          construction is enforced exactly by the convex-hull inequalities for binary AND
          relationships.
        </p>

        <p>
          The same mechanism is used for inter-trip transitions, where conjunction variables
          identify product changes between consecutive trips within each compartment. A continuous
          variable then captures the maximum setup time across compartments, replacing the original
          max expression with linear constraints.
        </p>
      </div>

      <MathBlock label="Arc × configuration conjunction (ξ)" tex={LM_XI} />
      <MathBlock label="Transition conjunction (η) + max-setup proxy (w)" tex={LM_ETA_W} />
      <MathBlock label="Linear LM objective" tex={LM_OBJ} />

      <HR />

      <SectionTitle
        title="4) Assignment-enumeration formulation (CA formulation)"
        subtitle="Enumerate all compartment assignments and select one per vehicle-trip."
      />

      <div className="mt-6 space-y-5 leading-relaxed text-slate-300">
        <p>
          A second formulation enumerates all feasible compartment assignments for each vehicle and
          selects a single assignment per trip. This replaces the per-compartment configuration
          variables with assignment-selection variables. Crucially, assignment-dependent quantities
          can be computed in advance: total energy coefficient, per-product capacity, and
          temperature-dependent arc coefficients.
        </p>

        <p>
          The remaining nonlinearity is the product of routing and assignment selection. A standard
          binary product linearization introduces an auxiliary variable and three inequalities to
          enforce the exact AND relationship.
        </p>
      </div>

      <MathBlock label="CA definition and assignment selection" tex={CA_DEF} />
      <MathBlock label="CA precomputed constants" tex={CA_CONSTS} />
      <MathBlock label="CA linearization and objective" tex={CA_MCCORMICK} />
      <MathBlock label="CA compatibility and capacity" tex={CA_COMP_CAP} />
      <MathBlock label="CA transition between assignments" tex={CA_TRANS} />

      <HR />

      <SectionTitle
        title="5) Delta-primary reformulation"
        subtitle="Treat δ as the primary decision variable and recover routing and assignment choices by summation."
      />

      <div className="mt-6 space-y-5 leading-relaxed text-slate-300">
        <p>
          The delta-primary model encodes arc usage and assignment selection in a single binary
          layer. Each variable indicates that a specific arc is traversed under a specific
          assignment on a specific trip. Routing variables and assignment-selection variables are
          recovered by summation, which can reduce redundancy and simplify the logical structure of
          the formulation.
        </p>

        <p>
          Consistency constraints prevent multiple assignments from being active simultaneously on
          the same arc and ensure at most one active departure per trip. Time propagation is
          deactivated unless at least one delta variable corresponding to the arc is active,
          preserving correctness while maintaining a compact representation.
        </p>
      </div>

      <MathBlock label="Delta-primary structure" tex={DELTA_PRIMARY} />

      <HR />

      <SectionTitle
        title="6) Heuristic solution method (selected)"
        subtitle="Only the strongest heuristic from the computational results is presented here."
      />

      <div className="mt-6 space-y-5 leading-relaxed text-slate-300">
        <p>{HGA1_DESC}</p>

        <p>
          Two components drive performance. First, penalties convert a large set of operational
          rules into a single scalar fitness value, allowing the algorithm to compare partially
          feasible schedules and keep improving them instead of discarding them prematurely. Second,
          repair injects domain structure: it targets the dominant sources of infeasibility in
          multi-trip cold-chain planning— workday coupling, trip-duration violations, inter-trip
          setup interactions, and time-window cascades created by customer sequencing.
        </p>

        <p>
          In practice, crossover and mutation explore new route and trip allocations, while repair
          stabilizes those allocations by restoring feasibility and improving timing/configuration
          consistency. This interaction is especially valuable when feasible schedules occupy a
          small fraction of the overall combinatorial space.
        </p>
      </div>

      <MathBlock label="HGA I — essential pseudocode only" tex={HGA1_PSEUDO} />

      <HR />

      <SectionTitle
        title="7) Computational results"
        subtitle="Full comparison table across all instance levels (Level-01 to Level-20)."
      />

      <div className="mt-6 space-y-5 leading-relaxed text-slate-300">
        <p>
          The experiments compare an exact MILP solver (Gurobi) against the three heuristic
          approaches. For small instances, the exact solver proves optimality quickly, and the
          heuristics generally match proven optimal values. For larger instances, the exact solver
          times out, while the heuristics continue to produce solutions with distinct speed and
          quality profiles.
        </p>

        <p>
          The table reports instance size (vehicles V, customers C, trips T), proven optimal values
          when available, and the fitness (objective value) along with runtime for each heuristic. A
          dash indicates no optimal value was returned by the exact solver within the time limit.
        </p>
      </div>

      <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-700/60">
        <table className="w-full min-w-[1100px] text-left text-sm">
          <thead className="bg-slate-900/60 text-slate-200">
            <tr>
              <th className="px-4 py-3 font-semibold">Instance</th>
              <th className="px-4 py-3 font-semibold">V</th>
              <th className="px-4 py-3 font-semibold">C</th>
              <th className="px-4 py-3 font-semibold">T</th>
              <th className="px-4 py-3 font-semibold">Gurobi (Optimal)</th>
              <th className="px-4 py-3 font-semibold">Gurobi Time (s)</th>
              <th className="px-4 py-3 font-semibold">HGA I (Fitness)</th>
              <th className="px-4 py-3 font-semibold">HGA I Time (s)</th>
              <th className="px-4 py-3 font-semibold">HGA II (Fitness)</th>
              <th className="px-4 py-3 font-semibold">HGA II Time (s)</th>
              <th className="px-4 py-3 font-semibold">HGA III (Fitness)</th>
              <th className="px-4 py-3 font-semibold">HGA III Time (s)</th>
            </tr>
          </thead>
          <tbody className="bg-slate-950/30 text-slate-300">
            {RESULTS_TABLE_ROWS.map((r) => (
              <tr key={r[0]} className="border-t border-slate-700/50">
                {r.map((cell, idx) => (
                  <td key={idx} className="px-4 py-3">
                    <span className={idx === 0 ? 'font-semibold text-slate-100' : undefined}>
                      {String(cell)}
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-slate-900/20 text-slate-400">
            <tr className="border-t border-slate-700/60">
              <td className="px-4 py-3" colSpan={12}>
                * Proven optimal objective value returned by Gurobi.
              </td>
            </tr>
          </tfoot>
        </table>
      </div>

      <HR />

      <SectionTitle
        title="8) Conclusions"
        subtitle="What these formulations and the selected heuristic enable."
      />

      <div className="mt-6 space-y-5 leading-relaxed text-slate-300">
        <p>
          The CC-MCMT-VRP integrates routing, scheduling, and temperature configuration decisions
          under practical cold-chain constraints. The base MILP captures multi-trip operation, time
          windows, perishability, and compartment capacity. Extending the model to include
          temperature-dependent traversal costs creates a tight coupling between route choice and
          compartment configuration, which naturally produces bilinear expressions.
        </p>

        <p>
          The LM formulation provides a direct exact linearization through conjunction variables,
          while the assignment-enumeration (CA) formulation shifts complexity into precomputed
          assignment constants to enable alternative mixed-integer structures. The delta-primary
          reformulation consolidates routing and assignment selection into a single decision layer
          that can simplify implementation and strengthen logical consistency constraints.
        </p>

        <p>
          For large-scale instances, the selected penalty-based genetic algorithm with repair (HGA
          I) offers a practical and robust approach. Its advantage is the ability to navigate the
          difficult feasibility landscape created by multi-trip workday limits and temperature setup
          times, while still making steady progress toward low-cost solutions. This balance is
          well-suited for operational planning settings where instances exceed the comfortable
          limits of exact methods.
        </p>
      </div>

      <div className="mt-14">
        <a href="/projects" className="text-cyan-400 hover:underline">
          ← Back to Projects
        </a>
      </div>
    </div>
  )
}
