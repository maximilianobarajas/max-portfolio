const projectsData: {
  title: string
  description: string
  href: string
}[] = [
  {
    title: 'Optical Parameter Estimation',
    description:
      'Hybrid Optimization Methods for non-convex optical parameter estimation in semiconductors (IER-UNAM).',
    href: '/projects/optical-parameter-estimation',
  },
  {
    title: 'Cold-Chain Logistics Optimization Mitacs Research Internship',
    description:
      'MILP model for multi-trip cold-chain routing calibrated with operational data (Pyomo + Gurobi) at CIRRELT, Montréal.',
    href: '/projects/mitacs-cold-chain-routing',
  },
  {
    slug: 'curvature-guided-topology-optimization',
    title: 'Curvature-Guided Topology Optimization for Graph Convolutional Learning',
    description:
      'A discrete-geometric stochastic-search framework for mitigating over-squashing and improving separability.',
    year: '2023-08-01',
    stack: [
      'Discrete Curvature',
      'Spectral Graph Theory',
      'Geometric Deep Learning',
      'Combinatorial Optimization',
      'Stochastic Population Methods',
    ],
    bullets: [
      'Thesis Work under supervision of professors Edwin Montes Orozco and Abel García Nájera',
      'Treat graph topology as a decision variable and optimize it for node classification performance',
      'Use discrete curvature to define a reduced candidate action space and bias stochastic proposals',
      'Improve separability by relieving bottlenecks responsible for over-squashing and over-smoothing',
    ],
    links: [],
    href: '/projects/curvature-guided-topology-optimization',
  },
  {
    slug: 'pruebalo-tu-mismo',
    title: 'Pruébatelo Tú Mismo · Smart Mirrors (Liverpool AI Internship)',
    description:
      'Production-grade computer vision + MLOps: optimized, self-contained inference API for smart mirrors, with scalable evaluation pipelines on Vertex AI.',
    year: '2025-01-01',
    stack: [
      'Computer Vision',
      'FastAPI',
      'Hexagonal Architecture',
      'CUDA / NVIDIA Profiling',
      'Kubernetes',
      'Kubeflow',
      'Vertex AI',
      'MLOps',
    ],
    bullets: [
      'AI Internship at El Puerto de Liverpool under supervision of Guillermo Oswaldo Cota Martínez (co-supervision: Iván Trejo Martínez)',
      'Lead architect for a self-contained FastAPI inference API powering “Pruébatelo Tú Mismo” smart mirrors (no external inference dependencies)',
      'Iterative deployment + benchmarking to meet latency under sustained concurrent inference loads for heavy CV architectures',
      'Designed scalable orchestration pipelines (Kubeflow) and migrated evaluation/inference workflows to Google Cloud Vertex AI for reproducibility',
    ],
    links: [],
    href: '/projects/pruebalo-tu-mismo',
  },
  {
    slug: 'cibb-2025-trn-llms',
    title: 'Fine-tuning Foundation Models for TRN Curation (CIBB 2025 · Milan)',
    description:
      'NLP for bacterial transcriptional regulatory networks: fine-tuned LLaMA + GPT-4o mini for multiclass relation extraction and TRN reconstruction from literature; oral talk at CIBB 2025.',
    year: '2025-09-01',
    stack: [
      'NLP',
      'LLMs',
      'LLaMA (LoRA + 4-bit)',
      'GPT-4o mini (Fine-tuning)',
      'Relation Extraction',
      'NER',
      'Graph / TRN Reconstruction',
      'Evaluation (Macro-F1, MCC)',
      'PyTorch',
      'Transformers',
    ],
    bullets: [
      'Contributor focused on the LLaMA training track: supervised fine-tuning with LoRA on 4-bit quantized checkpoints for efficient experimentation under limited VRAM',
      'Built reproducible data + evaluation pipelines (splits, cross-validation, strict label formatting) for multiclass relation extraction: activator / repressor / regulator / no_relation',
      'Scaled inference over full-text-derived sentence corpora to reconstruct unique TF–gene–effect interaction sets and evaluate against curated TRNs (TP/FP/FN, Precision/Recall/F1, MCC)',
      'Presented the work as an oral talk in the Bioinformatics session (Day 12) at CIBB 2025 in Milan; two-time consecutive PAPIIT scholarship beneficiary supporting research continuity',
    ],
    links: [
      {
        label: 'CIBB 2025 Event Page',
        href: 'https://www.bioinformatics.polimi.it/CIBB2025/index.html#',
      },
    ],
    href: '/projects/cibb-2025-trn-llms',
  },
]

export default projectsData
