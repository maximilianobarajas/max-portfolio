import katex from 'katex'
import 'katex/dist/katex.min.css'

import {
  SiPython,
  SiPytorch,
  SiHuggingface,
  SiJupyter,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiDocker,
  SiLinux,
  SiGit,
  SiGithub,
  SiLatex,
  SiGooglecloud,
} from 'react-icons/si'
import {
  FaDatabase,
  FaProjectDiagram,
  FaSearch,
  FaExternalLinkAlt,
  FaBookOpen,
} from 'react-icons/fa'
import { MdOutlineModelTraining, MdOutlineDataset } from 'react-icons/md'
import { TbBinaryTree2, TbMathFunction, TbNetwork, TbReportAnalytics } from 'react-icons/tb'

export const metadata = {
  title: 'Fine-tuning Foundation Models for TRN Curation (CIBB 2025 · Milan)',
  description:
    'Biomedical NLP for bacterial transcriptional regulatory networks: fine-tuning GPT-style foundation models (LLaMA + GPT-4o mini) for TF–gene relation extraction from literature, corpus-scale TRN reconstruction, and rigorous evaluation. Oral presentation at CIBB 2025 (Bioinformatics session, Day 12).',
}

function HR() {
  return <hr className="my-10 border-slate-700/60 opacity-40" />
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

function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="my-6 rounded-2xl border border-slate-700/60 bg-slate-900/30 p-5">
      <div className="mb-3 text-sm font-bold tracking-wide text-slate-300 uppercase">{title}</div>
      <div className="leading-relaxed text-slate-300">{children}</div>
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

function StatPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-slate-700/60 bg-slate-900/35 px-4 py-3">
      <div className="text-[11px] font-bold tracking-wide text-slate-500 uppercase">{label}</div>
      <div className="mt-1 font-mono text-sm text-slate-200">{value}</div>
    </div>
  )
}

function Table({
  caption,
  header,
  rows,
}: {
  caption: string
  header: string[]
  rows: (string | React.ReactNode)[][]
}) {
  return (
    <div className="my-6 overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/20">
      <div className="px-5 py-4 text-sm font-semibold text-slate-200">{caption}</div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left text-sm">
          <thead className="bg-slate-900/40">
            <tr>
              {header.map((h, i) => (
                <th
                  key={i}
                  className="border-b border-slate-700/60 px-5 py-3 font-mono text-xs whitespace-nowrap text-slate-300"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr key={i} className="odd:bg-slate-950/20">
                {r.map((c, j) => (
                  <td
                    key={j}
                    className="border-b border-slate-800/60 px-5 py-3 whitespace-nowrap text-slate-300"
                  >
                    {c}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-5 py-3 text-xs text-slate-500">{caption}</div>
    </div>
  )
}

const TEX = {
  task: String.raw`
\textbf{Relation extraction (multiclass):}\qquad
f_\theta(s)=\arg\max_{y\in\mathcal{Y}} p_\theta(y\mid s),\quad
\mathcal{Y}=\{\mathrm{activator},\mathrm{repressor},\mathrm{regulator},\mathrm{no\_relation}\}.
`,
  anonym: String.raw`
\textbf{Entity anonymization:}\qquad
s=\text{sentence(TF, gene)}\ \mapsto\ \tilde s=\text{sentence}(@TF\$, @Regulated\$),
\quad \text{to encourage name-invariant pattern learning.}
`,
  metrics: String.raw`
\textbf{Evaluation:}\qquad
\mathrm{Precision}=\frac{TP}{TP+FP},\quad
\mathrm{Recall}=\frac{TP}{TP+FN},\quad
F_1=\frac{2PR}{P+R},\quad
F_{1,\mathrm{macro}}=\frac{1}{|\mathcal{Y}|}\sum_{y\in\mathcal{Y}} F_1(y),\quad
\mathrm{MCC}\in[-1,1].
`,
  trn: String.raw`
\textbf{TRN reconstruction:}\qquad
\mathcal{G}=(V,E),\quad
E=\{(\mathrm{TF},\mathrm{gene},\mathrm{effect})\},
\quad \text{deduplicate edges across documents to form a unique interaction set.}
`,
  lora: String.raw`
\textbf{LoRA adaptation:}\qquad
W\in\mathbb{R}^{d\times k}\ \mapsto\ W+\Delta W,\quad
\Delta W=BA,\quad
B\in\mathbb{R}^{d\times r},\ A\in\mathbb{R}^{r\times k},\ r\ll \min(d,k).
`,
  quant: String.raw`
\textbf{4-bit quantization (memory focus):}\qquad
W\approx \mathrm{dequant}(\hat W),\quad
\hat W\in \mathrm{INT4},
\quad \text{enabling fine-tuning on limited VRAM while keeping the backbone frozen.}
`,
  tpfn: String.raw`
\textbf{Corpus-level scoring:}\qquad
TP=\{|E_{\text{pred}}\cap E_{\text{gold}}|\},\quad
FP=\{|E_{\text{pred}}\setminus E_{\text{gold}}|\},\quad
FN=\{|E_{\text{gold}}\setminus E_{\text{pred}}|\}.
`,
}

export default function Page() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
        Fine-tuning Foundation Models for TRN Curation
      </h1>
      <p className="mt-4 font-mono text-lg text-cyan-300">
        CIBB 2025 · Milan · Bioinformatics Session (Day 12) · Oral talk
      </p>

      {/* Tech logos (top, as requested) */}
      <div className="mt-6 flex flex-wrap gap-2">
        <TechIcon icon={<SiPython size={16} />} label="Python" />
        <TechIcon icon={<SiPytorch size={16} />} label="PyTorch" />
        <TechIcon icon={<SiHuggingface size={16} />} label="Transformers" />
        <TechIcon
          icon={<MdOutlineModelTraining size={16} />}
          label="Supervised fine-tuning (SFT)"
        />
        <TechIcon icon={<TbMathFunction size={16} />} label="LoRA" />
        <TechIcon icon={<TbBinaryTree2 size={16} />} label="4-bit quantization" />
        <TechIcon icon={<FaSearch size={16} />} label="NER / RE" />
        <TechIcon icon={<TbNetwork size={16} />} label="TRN reconstruction" />
        <TechIcon icon={<SiScikitlearn size={16} />} label="Macro-F1 + MCC" />
        <TechIcon icon={<MdOutlineDataset size={16} />} label="Dataset engineering" />
        <TechIcon icon={<FaProjectDiagram size={16} />} label="Pipelines" />
        <TechIcon icon={<SiPandas size={16} />} label="Pandas" />
        <TechIcon icon={<SiNumpy size={16} />} label="NumPy" />
        <TechIcon icon={<SiJupyter size={16} />} label="Jupyter" />
        <TechIcon icon={<SiDocker size={16} />} label="Docker" />
        <TechIcon icon={<SiLinux size={16} />} label="Linux" />
        <TechIcon icon={<SiGit size={16} />} label="Git" />
        <TechIcon icon={<SiGithub size={16} />} label="GitHub" />
        <TechIcon icon={<SiLatex size={16} />} label="LaTeX" />
        <TechIcon icon={<SiGooglecloud size={16} />} label="Colab / Cloud GPU" />
        <TechIcon icon={<FaDatabase size={16} />} label="RegulonDB-style curation" />
      </div>

      <div className="mt-10 rounded-2xl border border-slate-700/60 bg-slate-800/30 p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <div className="text-xl font-bold text-white">Oral talk · CIBB 2025 (Milan)</div>
              <a
                href="https://www.bioinformatics.polimi.it/CIBB2025/index.html#"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700/60 bg-slate-900/35 px-3 py-1 text-xs font-bold tracking-wide text-cyan-300 uppercase hover:underline"
              >
                Event page <FaExternalLinkAlt size={11} />
              </a>
            </div>

            <div className="mt-2 text-sm text-slate-300/90">
              <span className="font-mono text-slate-200">
                “Fine-tuning foundation models to support curation of TRNs of bacteria from
                literature”
              </span>
            </div>

            <div className="mt-3 text-sm leading-relaxed text-slate-300">
              Authors: José Romero-Vilchis, <b>Maximiliano Barajas-Sánchez</b>, Karyme-Ivette
              Azpeitia-García, Ali-Berenice Posada-Reyes, Julio Collado-Vides, Carlos-Francisco
              Méndez-Cruz.
            </div>

            <div className="mt-4 text-sm text-slate-400">
              Presented in the <b>Bioinformatics session</b> (Day 12). This page summarizes the
              complete methodological pipeline and the key quantitative findings reported in the
              manuscript draft shared above, including dataset construction, model fine-tuning,
              corpus-scale inference, and TRN-level evaluation.
            </div>
          </div>

          <div className="grid flex-none grid-cols-2 gap-3 sm:grid-cols-1">
            <StatPill label="PAPIIT support" value="2 consecutive awards" />
            <StatPill label="Core task" value="TF–gene RE (4 classes)" />
            <StatPill label="Primary track" value="LLaMA (LoRA + INT4)" />
            <StatPill label="Validation" value="Macro-F1 + MCC + TRN F1" />
          </div>
        </div>
      </div>

      <HR />

      <SectionTitle
        title="Executive abstract"
        subtitle="A full-stack view: from full-text articles to reproducible TRN candidates, with transparent accounting of error."
      />
      <div className="mt-5 space-y-4 leading-relaxed text-slate-300">
        <p>
          Bacterial transcriptional regulatory networks (TRNs) represent the functional “wiring
          diagram” of gene regulation: transcription factors (TFs) modulate the expression of target
          genes, enabling bacteria to adapt to changes in their environment. In practice, however,
          TRN reconstruction remains bottlenecked by manual extraction of TF–gene relations from the
          literature. This process is accurate but slow, expensive, and increasingly challenged by
          the scale of modern scientific production.
        </p>
        <p>
          Our work evaluates whether <b>GPT-style foundation models</b> can be adapted to support
          curation in a scientifically responsible way. We formalize TF–gene relation extraction
          (RE) as a strict multiclass prediction problem with four labels: activator, repressor,
          regulator, and no_relation. Predictions are aggregated over full-text corpora to
          reconstruct TRNs as sets of unique interactions, enabling direct, auditable comparisons
          against manually curated reference networks.
        </p>
        <p>
          Methodologically, the contribution is not merely “LLMs can do biology,” but rather: a
          disciplined, reproducible pipeline for training and evaluating foundation models on
          curation-style tasks. This includes entity anonymization to reduce name memorization,
          controlled output spaces to preserve determinism, and metrics designed to remain
          informative under class imbalance.
        </p>
      </div>

      <HR />

      <SectionTitle
        kicker="Background"
        title="Why TRN curation is still a hard problem"
        subtitle="The scientific value of TRNs is high; the human cost of maintaining them is higher."
      />
      <div className="mt-5 space-y-4 leading-relaxed text-slate-300">
        <p>
          TRNs unify a diverse body of experimental evidence into a structured object: the set of
          regulatory interactions that link TFs to target genes. Such networks support biological
          interpretation (e.g., identifying high-degree regulators and communities), translational
          work (e.g., resistance and virulence programs), and comparative analyses across strains
          and conditions.
        </p>
        <p>
          Yet the dominant approach remains manual curation: identifying relevant publications,
          extracting TF–gene interactions, assigning regulatory effects, normalizing entities, and
          updating databases. This is fundamentally an <b>information extraction</b> problem under
          scientific uncertainty: the same interaction can be expressed in multiple ways, effects
          may be implicit or ambiguous, and many sentences mention TFs/genes without expressing a
          regulatory relationship. Any automation must therefore be evaluated not only for recall
          but for precision and failure modes, because false positives can mislead downstream
          biological interpretation.
        </p>
        <p className="text-slate-400">
          The core design constraint of this project is to increase curatorial throughput while
          preserving scientific caution: strict outputs, reproducible evaluation, and explicit
          accounting of error.
        </p>
      </div>

      <HR />

      <SectionTitle
        kicker="Methods · Task definition"
        title="Relation extraction as controlled classification"
        subtitle="Strict label semantics, entity anonymization, and evaluation metrics that penalize shortcuts."
      />
      <div className="mt-5 space-y-5 leading-relaxed text-slate-300">
        <p>
          We define a classifier over evidence sentences <InlineMath tex={'s'} /> containing a TF
          mention and a regulated-gene mention. The model predicts a single label in{' '}
          <InlineMath tex={'\\mathcal{Y}'} />. Controlling the output space is essential for
          evaluation: when a model is generative by construction, reproducible scoring requires that
          outputs be deterministically mapped to one of the allowed categories.
        </p>
        <BlockMath tex={TEX.task} />

        <p>
          A central methodological choice is <b>entity anonymization</b>. Instead of training on raw
          entity names (which can encourage memorization), we replace entities with canonical tags.
          This explicitly aims to learn linguistic and semantic patterns associated with regulation
          rather than surface-form cues.
        </p>
        <BlockMath tex={TEX.anonym} />

        <p>
          We evaluate at two levels: (i) sentence-level RE quality (macro-F1, precision, recall,
          MCC) and (ii) corpus-level TRN extraction quality, where predicted edges are deduplicated
          and compared against curated interaction sets. Under class imbalance, macro-F1 and MCC
          provide stronger signals than plain accuracy.
        </p>
        <BlockMath tex={TEX.metrics} />
      </div>

      <HR />

      <SectionTitle
        kicker="Methods · Datasets"
        title="Datasets and experimental design"
        subtitle="E. coli sentences for fine-tuning, Salmonella full-text corpora for TRN extraction."
      />
      <div className="mt-5 space-y-5 leading-relaxed text-slate-300">
        <Callout title="Fine-tuning dataset (E. coli; 1,562 sentences)">
          <p>
            For supervised fine-tuning and comparability with prior work, we use a curated dataset
            derived from E. coli literature with <b>1,562</b> labeled sentences. Each example
            corresponds to a TF–gene pair and is assigned one of four categories: activator,
            repressor, regulator, or no_relation. The dataset is split with a standard
            train/dev/test protocol, with the dev stage evaluated via <b>5-fold cross validation</b>{' '}
            to quantify stability.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatPill label="Total" value="1,562" />
            <StatPill label="Train+Dev" value="1,249" />
            <StatPill label="Test" value="313" />
            <StatPill label="Labels" value="4 classes" />
          </div>
          <div className="mt-4 text-sm text-slate-400">
            Class distribution (total): activator 593, no_relation 493, repressor 269, regulator
            207.
          </div>
        </Callout>

        <Callout title="TRN extraction dataset (Salmonella; 264 articles)">
          <p>
            To evaluate corpus-scale extraction, we use a Salmonella enterica serovar Typhimurium
            corpus of <b>264</b> full-text articles. Articles are converted to raw text, split into
            sentences, and augmented by pairing recognized TF and gene mentions. This yields{' '}
            <b>14,349</b> anonymized sentence instances. The reference TRN consists of <b>909</b>{' '}
            unique curated TF–gene–effect interactions extracted manually from the same article set.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <StatPill label="Articles" value="264" />
            <StatPill label="Sentence instances" value="14,349" />
            <StatPill label="Gold edges" value="909" />
            <StatPill label="Task" value="Corpus TRN" />
          </div>
        </Callout>

        <p>
          This two-tier design is deliberate: sentence-level metrics test whether the model learns
          the linguistic structure of regulation, while TRN-level evaluation tests whether the
          pipeline remains meaningful under scale, duplication, and aggregation—i.e., the conditions
          that matter for real curation workflows.
        </p>
      </div>

      <HR />

      <SectionTitle
        kicker="Methods · Entity processing"
        title="Entity recognition and annotation strategy (NER → TF/GENE roles)"
        subtitle="A practical bridge between raw text and supervised RE inputs."
      />
      <div className="mt-5 space-y-5 leading-relaxed text-slate-300">
        <p>
          Before relation extraction, we must identify entities. In the manuscript draft, the
          pipeline employs a local deployment of <b>BERN2</b> for biomedical entity recognition and
          normalization, used primarily to detect gene-like entities in text. These detections are
          then refined through additional logic to differentiate regulatory roles (TF vs regulated
          gene), enabling consistent tagging required by the RE formulation.
        </p>
        <p>
          Because BERN2 returns structured spans (with indices) and entity types, the pipeline can:
          (i) insert tags while preserving offsets, (ii) clean spans that include extraneous context
          (e.g., “binding site” artifacts), and (iii) apply rule-based morphological cues and
          context keywords to reclassify a gene mention as a TF when appropriate (e.g., mentions
          framed as proteins/repressors/activators).
        </p>
        <p className="text-slate-400">
          The key point is methodological: even when the downstream model is a foundation model, the
          curation pipeline still benefits from explicit, inspectable preprocessing layers that
          reduce ambiguity and make failure modes diagnosable.
        </p>
      </div>

      <HR />

      <SectionTitle
        kicker="Methods · Models"
        title="Foundation models and fine-tuning strategy"
        subtitle="Closed-model fine-tuning (GPT-4o mini) vs open-model control (LLaMA with LoRA + INT4)."
      />
      <div className="mt-5 space-y-5 leading-relaxed text-slate-300">
        <p>
          We fine-tune and compare two GPT-style foundation models: the closed model{' '}
          <b>GPT-4o mini</b> and the open model <b>LLaMA 3 (Instruct)</b> variants. Both are adapted
          to output a single categorical label for each anonymized sentence instance, enabling
          direct comparison under consistent evaluation.
        </p>

        <Callout title="LLaMA track (my primary contribution)">
          <p className="mb-3">
            The open-model track prioritizes reproducibility and control under constrained compute.
            The pipeline uses 4-bit quantization (INT4) to fit the backbone into limited VRAM, and
            Low-Rank Adaptation (LoRA) to inject trainable updates while keeping base weights
            frozen.
          </p>
          <BlockMath tex={TEX.lora} />
          <BlockMath tex={TEX.quant} />
          <p>
            In the draft, LLaMA experiments are performed with instruction-tuned checkpoints (8B and
            3B), with consistent training settings across runs to isolate capacity effects. Early
            stopping is used to reduce overfitting and to preserve compute.
          </p>
        </Callout>

        <Callout title="GPT-4o mini track (fine-tuning via API)">
          <p>
            GPT-4o mini is fine-tuned via OpenAI endpoints using a chat-format JSONL representation
            of the instruction and labeled response. Temperature is set to 0 during evaluation to
            ensure deterministic outputs. Hyperparameters are selected by the platform. This
            provides a strong baseline for closed models in low-latency settings while preserving
            strict response formatting.
          </p>
        </Callout>

        <p>
          Across both model families, the scientific priority is comparability: same label space,
          consistent anonymization, and evaluation metrics reported in the same form, enabling
          meaningful statements about relative performance and generalization.
        </p>
      </div>

      <HR />

      <SectionTitle
        kicker="Results · Sentence-level RE"
        title="Fine-tuning outcomes on E. coli RE"
        subtitle="Cross-validation stability and held-out test performance."
      />
      <div className="mt-5 space-y-5 leading-relaxed text-slate-300">
        <p>
          The dev-stage evaluation uses 5-fold cross validation and reports mean ± standard
          deviation of macro-F1. This explicitly measures stability across splits and mitigates the
          risk of overinterpreting a single partition. The reported results show that LLaMA 8B is at
          least competitive with GPT-4o mini at the sentence-level RE task, and both outperform the
          prior LUKE baseline.
        </p>

        <Table
          caption="Dev (5-fold CV) macro-F1 and training configuration (from the manuscript draft)"
          header={['Model', 'Macro-F1 (mean ± std)', 'Epochs', 'Batch', 'LR']}
          rows={[
            ['GPT-4o mini', '0.886 ± 0.0168', '3', '1', 'auto'],
            ['LLaMA 8B (INT4 + LoRA)', '0.886 ± 0.0151', '5', '2', '2e-4'],
            ['LLaMA 3B (INT4 + LoRA)', '0.873 ± 0.0149', '5', '2', '2e-4'],
          ]}
        />

        <p>
          On the held-out test set, LLaMA 8B achieves the strongest overall scores among the
          compared models, with improvements visible across macro-F1, precision, recall, and
          MCC—consistent with the hypothesis that additional capacity helps encode nuanced
          regulatory language patterns.
        </p>

        <Table
          caption="Test-set metrics (from the manuscript draft)"
          header={['Model', 'Macro-F1', 'Precision', 'Recall', 'MCC']}
          rows={[
            ['LLaMA 8B (INT4 + LoRA)', '0.892', '0.886', '0.898', '0.852'],
            ['GPT-4o mini', '0.873', '0.869', '0.886', '0.826'],
            ['LUKE (prior work)', '0.868', '0.860', '0.879', '0.816'],
          ]}
        />

        <p className="text-slate-400">
          Interpreting these metrics in a curation context: macro-F1 and MCC indicate that
          improvements are not merely driven by the majority class; rather, the model is learning
          discriminative signals across regulatory categories.
        </p>
      </div>

      <HR />

      <SectionTitle
        kicker="Results · TRN extraction"
        title="Corpus-scale TRN reconstruction on Salmonella"
        subtitle="From 14,349 sentence instances to a deduplicated interaction graph, evaluated against 909 curated edges."
      />
      <div className="mt-5 space-y-5 leading-relaxed text-slate-300">
        <p>
          For TRN extraction, we run inference over the full set of anonymized sentence instances
          derived from the 264-article corpus. Predictions labeled as no_relation are discarded, and
          the remaining predicted TF–gene–effect tuples are deduplicated to form a unique predicted
          interaction set <InlineMath tex={'E_{\\text{pred}}'} />. We then compare against the gold
          curated set <InlineMath tex={'E_{\\text{gold}}'} /> to obtain TP/FP/FN counts and compute
          TRN-level precision, recall, and F1.
        </p>
        <BlockMath tex={TEX.trn} />
        <BlockMath tex={TEX.tpfn} />

        <p>
          The key empirical observation in the draft is that GPT-4o mini performs better at the TRN
          extraction level than LLaMA 8B, despite LLaMA 8B slightly leading at sentence-level RE.
          This illustrates an important methodological point: corpus-scale aggregation can amplify
          specific error modes (notably false positives), and model selection for curation must be
          validated at the graph level, not only at sentence level.
        </p>

        <Table
          caption="Salmonella TRN extraction metrics (from the manuscript draft)"
          header={['Model', 'TP', 'FP', 'FN', 'F1', 'Precision', 'Recall']}
          rows={[
            ['GPT-4o mini', '756', '754', '153', '0.625', '0.500', '0.831'],
            ['LLaMA 8B (INT4 + LoRA)', '748', '873', '161', '0.591', '0.461', '0.822'],
            ['Prior work', '747', '1079', '162', '0.546', '0.409', '0.821'],
          ]}
        />

        <Callout title="Interpretation of the TRN-level results">
          <p>
            The high recall (~0.82–0.83) indicates that the pipeline retrieves the majority of
            curated interactions, which is precisely what makes it useful for assisted curation: it
            can surface candidate edges for expert review at scale. The limiting factor is
            precision, driven by a substantial number of false positives—often unavoidable when
            converting sentence-level predictions into a deduplicated global interaction set.
          </p>
          <p className="mt-3">
            Scientifically, this motivates downstream filtering and prioritization strategies (e.g.,
            evidence aggregation across documents, confidence ranking, consistency checks with known
            TF catalogs, or targeted manual validation) rather than naive acceptance of all
            extracted edges.
          </p>
        </Callout>
      </div>

      <HR />

      <SectionTitle
        kicker="Discussion"
        title="What the paper establishes (and what it does not claim)"
        subtitle="A realistic positioning: throughput gains with explicit uncertainty, not a replacement for experts."
      />
      <div className="mt-5 space-y-5 leading-relaxed text-slate-300">
        <p>
          The manuscript supports a clear claim: foundation models, when fine-tuned and constrained
          appropriately, can produce high-recall candidate interactions from literature at a scale
          that meaningfully supports TRN curation. The results show improvements over prior
          baselines both at sentence-level RE and at TRN extraction level, including a notable
          TRN-level F1 increase (0.625 vs 0.546 in the compared prior work).
        </p>
        <p>
          Equally important, the paper does not overclaim: precision remains the bottleneck at
          corpus scale, and false positives are not a minor nuisance—they are the dominant cost of
          automation. The correct scientific response is therefore{' '}
          <b>transparent measurement and controlled integration</b> into assisted workflows, where
          experts remain in the loop and automation prioritizes recall and triage rather than final
          truth.
        </p>
        <p className="text-slate-400">
          In other words: the system is designed to generate evidence candidates with measurable
          error, not to generate “answers” without accountability.
        </p>
      </div>

      <HR />

      <SectionTitle
        kicker="Professional context"
        title="Research continuity and dissemination"
        subtitle="Sustained scholarship support and international scientific communication."
      />
      <div className="mt-5 space-y-5 leading-relaxed text-slate-300">
        <p>
          I was a recipient of the <b>PAPIIT scholarship for two consecutive cycles</b>, which
          provided the continuity required to iterate rigorously across dataset preparation,
          pipeline engineering, training stability, and evaluation design. In practice, this
          continuity matters: it enables careful ablations, reproducible runs, and the kind of
          methodological refinement that separates a one-off prototype from a credible scientific
          artifact.
        </p>
        <p>
          The work was delivered as an <b>oral presentation</b> at an international venue (CIBB
          2025, Milan), emphasizing scientific communication as part of the project’s output: not
          only building models, but defending methodological choices, limitations, and empirical
          claims in a research-facing setting.
        </p>
      </div>

      <HR />

      <SectionTitle
        title="Technical competencies (verifiable)"
        subtitle="Concrete tools and methods used across the full research pipeline."
      />
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <TechCard
          icon={<SiPython size={18} />}
          title="Python"
          subtitle="End-to-end NLP pipelines and experiment orchestration"
        />
        <TechCard
          icon={<SiPytorch size={18} />}
          title="PyTorch"
          subtitle="Training/eval loops, reproducibility controls"
        />
        <TechCard
          icon={<SiHuggingface size={18} />}
          title="Transformers"
          subtitle="Tokenization, templates, checkpoint management"
        />
        <TechCard
          icon={<MdOutlineModelTraining size={18} />}
          title="Supervised fine-tuning"
          subtitle="Strict outputs for generative models"
        />
        <TechCard
          icon={<TbMathFunction size={18} />}
          title="LoRA"
          subtitle="Parameter-efficient adaptation of large models"
        />
        <TechCard
          icon={<TbBinaryTree2 size={18} />}
          title="INT4 quantization"
          subtitle="Memory-feasible training under limited VRAM"
        />
        <TechCard
          icon={<FaSearch size={18} />}
          title="NER / RE"
          subtitle="Entity tagging, anonymization, relation framing"
        />
        <TechCard
          icon={<TbNetwork size={18} />}
          title="Graph reconstruction"
          subtitle="Deduplicated TRN edges and corpus aggregation"
        />
        <TechCard
          icon={<SiScikitlearn size={18} />}
          title="Evaluation"
          subtitle="Macro-F1, MCC, error analysis"
        />
        <TechCard
          icon={<TbReportAnalytics size={18} />}
          title="Failure-mode analysis"
          subtitle="FP/FN accounting at sentence + TRN level"
        />
        <TechCard
          icon={<MdOutlineDataset size={18} />}
          title="Dataset engineering"
          subtitle="Splits, cross-validation, class balance awareness"
        />
        <TechCard
          icon={<FaProjectDiagram size={18} />}
          title="Pipelines"
          subtitle="Preprocess → train → infer → score separation"
        />
        <TechCard
          icon={<SiPandas size={18} />}
          title="Pandas"
          subtitle="ETL and structured experiment reporting"
        />
        <TechCard
          icon={<SiNumpy size={18} />}
          title="NumPy"
          subtitle="Vectorized scoring and aggregation"
        />
        <TechCard
          icon={<SiJupyter size={18} />}
          title="Jupyter"
          subtitle="Reproducible analysis notebooks"
        />
        <TechCard
          icon={<SiDocker size={18} />}
          title="Docker"
          subtitle="Portable environments for repeatable runs"
        />
        <TechCard
          icon={<SiLinux size={18} />}
          title="Linux"
          subtitle="Stable execution and debugging"
        />
        <TechCard
          icon={<SiGit size={18} />}
          title="Git"
          subtitle="Versioning, reviewable experiments"
        />
        <TechCard
          icon={<SiGithub size={18} />}
          title="GitHub"
          subtitle="Collaboration, reproducibility workflows"
        />
        <TechCard
          icon={<SiLatex size={18} />}
          title="LaTeX"
          subtitle="Scientific writing and publication polish"
        />
        <TechCard
          icon={<FaBookOpen size={18} />}
          title="Scientific communication"
          subtitle="Oral talk at an international conference"
        />
      </div>

      <div className="mt-10">
        <a href="/projects" className="text-cyan-400 hover:underline">
          ← Back to Projects
        </a>
      </div>
    </div>
  )
}
