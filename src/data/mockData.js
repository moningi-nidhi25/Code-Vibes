export const PLATFORM_STATS = [
  { value: "12,400+", label: "Active Builders", color: "text-primary" },
  { value: "180+", label: "Shipped Open Projects", color: "text-secondary" },
  { value: "45+", label: "Hackathons & Talks", color: "text-tertiary" },
  { value: "98%", label: "Mentorship Match", color: "text-primary-container" }
];

export const ABOUT_STATS = [
  { value: "12,400+", label: "Active Builders", color: "text-primary" },
  { value: "180+", label: "Shipped Projects", color: "text-secondary" },
  { value: "45+", label: "Deep Tech Talks", color: "text-tertiary" },
  { value: "98%", label: "Pairing Match Rate", color: "text-primary-container" }
];

export const TELEMETRY_METRICS = [
  { label: "TOTAL OPEN ROLES", value: "38 Seats", icon: "group_add", iconColor: "text-primary" },
  { label: "ACTIVE REVIEW VELOCITY", value: "< 48 hrs", icon: "bolt", iconColor: "text-secondary" },
  { label: "WEEKLY CODE COMMITS", value: "1,480+", icon: "terminal", iconColor: "text-tertiary" },
  { label: "COMMUNITY MATCH RATE", value: "91.4%", icon: "verified", iconColor: "text-primary-container" }
];

export const WHAT_WE_DO_CARDS = [
  {
    id: "co-building",
    title: "Ship Real Production Software",
    category: "Co-Building",
    description: "Join active engineering pods building distributed systems, AI agent frameworks, and developer tooling. Ship to production with peer code reviews and architectural oversight.",
    stat: "180+ Open Source Repos",
    icon: "terminal",
    color: "primary",
    accent: "bg-primary/20",
    hoverBorder: "hover:border-primary/50"
  },
  {
    id: "mentorship",
    title: "Peer Pair Programming",
    category: "Mentorship",
    description: "Level up faster through structured weekly pairing sessions, algorithmic breakdowns, and guidance from senior and staff engineers from top tech companies.",
    stat: "Weekly Rhythm • Zero Ego",
    icon: "group",
    color: "secondary",
    accent: "bg-secondary/20",
    hoverBorder: "hover:border-secondary/50"
  },
  {
    id: "hackathons",
    title: "Flagship Hackathons & Sprints",
    category: "Hackathons",
    description: "Compete in high-stakes build challenges with automated sandbox environments, verifiable deliverables, sponsor bounties, and cash prize pools.",
    stat: "$50,000+ Distributed Bounties",
    icon: "trophy",
    color: "tertiary",
    accent: "bg-tertiary/20",
    hoverBorder: "hover:border-tertiary/50"
  },
  {
    id: "knowledge",
    title: "Deep-Dive Workshops & Tech Talks",
    category: "Knowledge",
    description: "Deconstruct complex topics like eBPF internals, distributed consensus, memory-safe languages, and zero-knowledge systems in hands-on workshops.",
    stat: "45+ Deep Dives Hosted",
    icon: "menu_book",
    color: "primary-container",
    accent: "bg-primary-container/20",
    hoverBorder: "hover:border-primary-container/50"
  }
];

export const FEATURED_EVENTS_HOME = [
  {
    id: "ai-agent-hackathon-2025",
    type: "Hackathon",
    typeBadgeClass: "bg-secondary-fixed/50 border border-secondary/20 text-on-secondary-fixed-variant",
    time: "09:00 AM - 06:00 PM PST",
    title: "AI Agent Hackathon 2025",
    description: "48-hour sprint to craft self-healing, stateful autonomous agents with memory persistence.",
    date: "May 16 - 18, 2025",
    location: "Online & Worldwide • Discord Stage",
    link: "/events/wasm-memory-safety"
  },
  {
    id: "rust-typescript-devs",
    type: "Workshop",
    typeBadgeClass: "bg-tertiary-fixed/50 border border-tertiary/20 text-on-tertiary-fixed-variant",
    time: "11:00 AM - 02:00 PM PST",
    title: "Rust for TypeScript Devs",
    description: "Demystifying memory safety, lifetimes, and WebAssembly compilation paths for JavaScript veterans.",
    date: "June 02, 2025",
    location: "Interactive Lab • Virtual Sandbox",
    link: "/events/wasm-memory-safety"
  },
  {
    id: "system-architecture-scale",
    type: "Tech Talk",
    typeBadgeClass: "bg-primary-fixed/50 border border-primary/20 text-on-primary-fixed-variant",
    time: "05:00 PM - 07:30 PM PST",
    title: "System Architecture at Scale",
    description: "Deep architectural breakdown of zero-downtime database sharding and distributed consensus under 100k QPS.",
    date: "June 18, 2025",
    location: "SF Tech Hall & Global Stream",
    link: "/events/wasm-memory-safety"
  }
];

export const OPEN_COLLABORATION_SPOTLIGHT = [
  {
    id: "chroma-flow",
    repo: "github.com/thecodevibe/chroma-flow",
    seats: "2 Seats Open",
    seatColor: "bg-secondary-container/20 border-secondary-container/40 text-on-secondary-container",
    indicatorColor: "bg-secondary",
    title: "ChromaFlow WebGL Canvas Engine",
    description: "GPU-accelerated vector rendering engine for high-density node graphs. Seeking a shaders engineer and a performance tester.",
    tags: ["TypeScript", "WebGL 2.0", "GLSL", "Vitest"],
    lead: "@alex_k",
    leadAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7U7-jBpHbrY--TMb-okvztgn0o78lK4Xf1HhFelVWhLM7pvK2Rx68wGqAXIjuKjbccYMcPPy8uIF3fMdRcT5P1-BgjYg6rGDOdgAYDJyKlB39yft5loqmo-i5s-dfk5wAVwcW2lMIGbL-1CnvdmZev3M7U66xv-I4uJ0ZMB1VxKFrdIEXsxIyu2ic0YHI2D5qAEjb12jK-8EIAi-Pccvz1uTlCuUotCvu1FAYAz8NINMXqNEAX25W",
    projectKey: "ChromaFlow"
  },
  {
    id: "nexus-queue",
    repo: "github.com/thecodevibe/nexus-queue",
    seats: "1 Seat Open",
    seatColor: "bg-tertiary-fixed/50 border-tertiary/20 text-on-tertiary-fixed-variant",
    indicatorColor: "bg-tertiary",
    title: "Nexus Distributed Task Scheduler",
    description: "Fault-tolerant asynchronous job broker written in Go with raft-backed leader election and gRPC interface.",
    tags: ["Golang 1.23", "gRPC", "Protobuf", "Docker"],
    lead: "@tarik_dev",
    leadAvatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhD6tXPy7_PL2x9eyr0ex34o6GJxqyUMQskTE2L5kYWFLukjYjcj24Gxge0EU9ZAYyhrIVko4yPfwXe4v0HU6W2-LstmIp1-KHd3qZGBb4VOGu5dg86paFdKOspcGIYNffMBJyKaP45Gyvxc3rTOeu3R-nTPq19gzRhGhirFjwBs9IDPQI__EQa1yUJ1uAAgN5SZvSVw7a9sioTHA7rxvsojrk9fVKZu-6urFbfDX80DDrQTJmqxzY",
    projectKey: "NexusQueue"
  }
];

export const TESTIMONIALS = [
  {
    quote: "“The pair programming sessions accelerated my understanding of distributed systems faster than any paid course. Shipped my first production Go microservice in 3 weeks.”",
    name: "Samantha Roy",
    handle: "@samroy_dev",
    role: "SRE at CloudScale",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCtPlC1wpc4qJoMLCUxHTKTqacVtMjRyI3dBwfu2vnI9wiDzXRNAlwFSl2101jxdRD1Csx0vrXtQkk5Fbc6fkr_xo0qJsM7AMJd25qwXboVRRK8dEjCRdft7yX6ecUzg0-qIfyrksar5vyclJwIM5E1pH_piofjtXn-j_o4htmh3AaH_W_59rB76gFOM9W1q38suIzlaF2VwuwbFntVaSaZiZDi6U0EjkXIPGeJsgQJ8AkHK5PpyeVB"
  },
  {
    quote: "“Found our technical co-founder during the AI Agents Hackathon. The signal-to-noise ratio in this community is leagues beyond traditional Discord forums.”",
    name: "Liam Chen",
    handle: "@liam_builds",
    role: "Founder, AgenticOS",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCcasoZaX4qH1xb3GBfF1PI2zOSxe6AF_QjQJ7xwcCnFv-sRXo6UAS14YgDVVspQRdlv-IlZpUzprgWbGP7h_wOIboDxXAB-dhar0a6i-RWGUx_nP57Y2qW8UWX4AdxOXXKFqLdTzjYEMJbcqIWvIwc96mFiUlT9Cl7OSb5nz0GpPpYc1Mr4Em2-mNlEitII90k2EOQeDHF0Y9lrcrFMs-sWs18WWvu8ZYASboqGOzLGpTu63j0mlBP"
  },
  {
    quote: "“Mentoring junior engineers here has refined how I write architectural documentation. The collaborative feedback loop is remarkably thoughtful and rigorous.”",
    name: "Davide Moretti",
    handle: "@dmoretti",
    role: "Staff Eng at Datasync",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJRR1f9IkzhbpzVcSRtK1_yk9Sxvwja60KOsUK84bH734qqLCoGOtE7ZHXBXeYBeGC2BKD0CzRduEOlsjvMnb8AvhXmM0ZF9D2iRP_DxNgjE4gyN1lKrAm0zCB0pgJncTpHQpl-gg1um8qXo8uPhJbV9ZO1R_0R8Tvk_TVUnsZafx2afhnPawxl0QqRElYE7DG53ckPkDsnxtLAH6fZQ6PiBPwFaTuWEQcnQ4mM4jPh2LxA6mjaE-V"
  }
];

export const CORE_VALUES = [
  {
    number: "01",
    title: "Real-World Engineering",
    description: "We ship to production clusters, not local branches. Every commit must withstand linting, end-to-end integration tests, and telemetry monitoring.",
    badge: "CI/CD & Helm Ready",
    icon: "dns",
    color: "primary"
  },
  {
    number: "02",
    title: "Radical Transparency",
    description: "All architectural design docs, RFC debates, and PR review decisions are openly discussed in publicly searchable community channels.",
    badge: "100% Open RFC Protocol",
    icon: "visibility",
    color: "secondary"
  },
  {
    number: "03",
    title: "Mentorship & Pairing",
    description: "Senior staff engineers pair directly with emerging talent on weekly schedules to unblock tricky bugs, design APIs, and refactor bottlenecks.",
    badge: "Weekly Live Pair Syncs",
    icon: "group_work",
    color: "tertiary"
  },
  {
    number: "04",
    title: "Open-Source Ecosystem",
    description: "Every tool and library authored within our public cohorts is published under Apache 2.0 or MIT to give back unconditionally to the global developer commons.",
    badge: "Apache 2.0 & MIT First",
    icon: "code_blocks",
    color: "primary-container"
  }
];

export const COMMUNITY_LEADERS = [
  {
    name: "Alex Chen",
    handle: "@achen",
    handleColor: "text-primary",
    title: "Staff SRE & Pods Lead",
    titleColor: "text-secondary",
    bio: "Ex-Cloudflare infrastructure engineer focusing on eBPF packet processing, Linux kernel tracing, and distributed cluster reliability.",
    tags: ["Rust", "eBPF", "K8s"],
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvEHjQgpbw7VM4y1R-kQS9vZltQdO7-DLrOzIaWJQfarDuhgbvWKuGT-32AhmW3ujf0XBvQpCs6ua_ucEMg_7ouSjMS4DXXu9E9_BjThlPWukP34HtVV3mNZSE-nGnyb_sojo_e_OsxhehNcBMjumrLgSfQJeBc5N7jhaJo6Sl5jS5AQZWmBy3pjaUO8-MwacbrC4B5tkX4tCgwdbvsMgTsG-ZR5B6w-zfLb4eveLrN5dKEL93W2hD"
  },
  {
    name: "Elena Rostova",
    handle: "@elena_k",
    handleColor: "text-tertiary",
    title: "Kernel Tracing & Systems Architect",
    titleColor: "text-tertiary",
    bio: "Specialized in low-level concurrency engines, lock-free memory models, and zero-copy microservice telemetry systems.",
    tags: ["Go", "C++", "Linux"],
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCLX9RzBjf1Hwo4sIF33nxyEKgDTHmuq7BW7IVe1m7ChtWbFeS5sBJjZ-z4ElWP_Dz9i2siPhjhOmBbtIZLz3aHfNiU5ZunHpIazXgkPR6kf2mytQZ9ZQmAqQCnyCZ2kk0OvRjkPL2TBBZ1IPZLGVjt__3l3tCVVm5XrhI_i-LzTSWgXK1GpWWmsa-KG0RvXNLFmtuNsUrMp3uO63-1H46wiINR1YZ51SuscAvPd2P4r-DNG6Ax09Un"
  },
  {
    name: "Sophia Rodriguez",
    handle: "@sophia_r",
    handleColor: "text-secondary",
    title: "Full-Stack UI & WebGL Visuals Lead",
    titleColor: "text-secondary",
    bio: "Pioneering shader graph tools and dynamic vector graphics pipelines. Advocates for hyper-accessible developer tooling and reactive state engines.",
    tags: ["TypeScript", "WebGL", "Three.js"],
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuC8-BIMhbsKLB689qAnOglrQ1ptNjYCrj2ajT1UnCFHWSmnRiyqOIFomc_kq6JSTLxtm5IwKjVGKwh6ERoRCkHZNzhi1PkBN4U4fRxptzrSqdsyTBG6lCBqKanBWRb_HJE8wpoVoIm18rBXUkXiVgkyGUeJGeH6m8BkandFAm5f3Jeet5BDs7zKDD6KS3tVQO8dd1SZNkcPr8nVkL9U140rsZNb2O8nLQ8cTF1KLVbtXMYtcoO3DXdW"
  },
  {
    name: "Liam Chen",
    handle: "@liam_builds",
    handleColor: "text-primary-container",
    title: "Founder & Agentic Systems Lead",
    titleColor: "text-primary-container",
    bio: "Researching autonomous developer agents, deterministic compiler tooling, and decentralized code synthesis protocols across edge clusters.",
    tags: ["Python", "LLMs", "WASM"],
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAhGiR_X0N-u-6aON6gCdLsOwqkcfOicg5Kd-yD_7kf4hcAP6_S_ckZ3hI42WMzQHbZBthgdTe0RRbfI84VlmBQoNwu67SqauSJAUWQVyQ1N2lRu1T4MfzWgg-3pYqut3Z5n84JuhC3I9MYFMdm_v9hkdw899qDxdTM6PWeTtQdKuUeNO2CoAbYF50mihWJHBo-n1ZMwlpXjgbt_v9p5yJGYJ30oYIpFvbZTVbGvFSkIa0sDD9qYRA-"
  }
];

export const FAQ_ITEMS = [
  {
    question: "What makes The Code Vibe different from standard Discord or Slack communities?",
    answer: "We are project-first and output-driven. Rather than open-ended endless chat rooms, our members organize into focused Pods with 2-week sprint cycles, paired code reviews, architectural RFCs, and real production releases with verifiable user metrics."
  },
  {
    question: "Is The Code Vibe free to join?",
    answer: "Yes, community membership, public hackathons, tech talks, and open-source collaboration pods are 100% free and open. We are funded by ecosystem sponsors, compute grants, and institutional open-source foundations."
  },
  {
    question: "What skill level is required to participate in engineering pods?",
    answer: "We have cohorts spanning from intermediate builders up to staff/principal engineers. While we assume familiarity with at least one programming language (TypeScript, Rust, Go, Python), each pod pairs newer contributors directly with veteran leads to accelerate ramp-up time."
  },
  {
    question: "How do pair programming circles work?",
    answer: "Every week, builders can schedule 1:1 or small-group 60-minute pairing sessions through our automated scheduler to debug complex issues, review PRs, or tackle algorithmic and distributed system bottlenecks collaboratively."
  },
  {
    question: "How can organizations or sponsors partner with The Code Vibe?",
    answer: "Companies can sponsor bounty issues, host deep-dive technical masterclasses, or sponsor specialized hackathon tracks by reaching out via our partner desk at partners@thecodevibe.dev."
  }
];

export const COLLABORATE_PROJECTS = [
  {
    id: "devpulse",
    title: "DevPulse: Real-time Developer Analytics & Telemetry",
    badge: "Flagship OS",
    badgeType: "primary",
    statusText: "Open until Nov 30",
    applicationsText: "6 applications received",
    description: "Open-source telemetry collector for multi-cloud developer environments with eBPF hooks. Captures sub-millisecond execution traces and translates runtime syscalls directly into actionable distributed tracing graphs.",
    icon: "insights",
    iconColor: "text-primary",
    techs: ["Rust", "eBPF", "Apache Kafka", "React", "Tailwind CSS"],
    roles: ["Backend / Systems", "Frontend Dev"],
    maintainers: "Alex Chen (@achen) & 4 maintainers",
    maintainerAvatars: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDUUUCBkysTYFy6Ydnwf7HO1sJd4r9WuYESgmFci7lxODronijvSwpH8b10Xwy-Pj5JNlP2vb60QOKs3gSEP5qA3Lf52ahQIsAcSCdjI1N4JXokHnLwdGxbGeArVO1EFVL5KthRyzcXfyQ0sDW_1Bs5xCvJE8ajGqiaRvagrG_vjwk4rO-aUHCyTRjWTXImWqGuqWayhF07SiqmRJbXVDkYW-MlneQ3jnuT4nJdHgnRMrXI5Mmmagt6",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCCemehlgxETL3QaHaosVsHQGdYI186gVy1dACNFXKa_Ooh61GY05kJSw8IA0-kzNq0M356XSKHPz0JyeQfliIyiBVOKVpD9KJIqIoUpW0za2xej9G1FRRZhsdBzF9-Yc8QNG24TdEJUlYrN13a_q1zib1BcR-iNNkecbCa0OE4bw79zkmhAnOVIxtkwLCY8N_ATc5kfnRZqOc_Q85lSJ3Rq1BW9oJhM2g6rIOdAp4lE6PlrXgjyLZQ",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDiuwsvhBvuDuvoEtKEtJFS5Wu8kWI7SNZTofcUic0Ik_fa37KOXquplJ2OdJPRYAfrfIWz4SsWe5OQoEAYMnkFN3r9HDPbAIrWniF9RdlI3gDe6w4Ev_XSgKWXW6aAqCxSEYieUHtyDT5ZfbJVLyBx2ncA0S4ZPFfOWlvE9rmb2NIxPbLUNRigf2qwRQ7y9L3JDMWNr0luU8pWIrkFLf_mcnltAdxpafG6kAYhU7e_Q5dDbPkLjx0g"
    ],
    roleSpots: [
      {
        tag: "Role Spot 01",
        tagColor: "text-primary",
        title: "eBPF Systems Engineer",
        openings: "1 Opening",
        requirements: "Required: Low-level C/Rust kernel tracing, system probes, memory safe concurrent ring-buffers."
      },
      {
        tag: "Role Spot 02",
        tagColor: "text-tertiary",
        title: "Full-Stack UI Engineer",
        openings: "2 Openings",
        requirements: "Required: React, Canvas / WebGL metrics canvas, high-frequency telemetry charting with WebSockets."
      }
    ],
    forks: "142 Forks",
    stars: "1.8k Stars",
    commitment: "~8 hrs/week expected",
    specsRoute: "/projects/devpulse"
  },
  {
    id: "neuroflow",
    title: "NeuroFlow: Local LLM Orchestration Studio",
    badge: "AI Studio",
    badgeType: "tertiary",
    statusText: "Active Sprint",
    applicationsText: "11 applications received",
    description: "Lightweight desktop UI for running and routing multi-agent workflows locally using WebGPU acceleration. Zero data egress, local quant models, and node-based prompt chain visualizer.",
    icon: "psychology",
    iconColor: "text-secondary",
    techs: ["Python", "PyTorch", "WebGPU", "TypeScript", "Electron", "AI"],
    roles: ["Frontend Dev", "AI Engineer"],
    maintainers: "Sophia Rodriguez & AI Working Group",
    maintainerAvatars: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDofp_RPW3en-PN6jrXu0-7Za_BMQHruz2DDJkH_zCn-lj28KVB-iE8EokvLINbHEhCh4QUpRJ0PIcMi1miCf2Sw8XVqce7xdyOEjP5fSQIq6_9E0K7BcmbeoDCadPSV-j7P_GbUosDuz5jv11I2B26kll9mD8x4nq29SBoWRWVibUwchX_C5AO_xKzR9arX6r2C472HO6H6BDBUUlxHj6KB-7a5UIH4JvgCcY0WRXiBS0-S7V1ZI90",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDtOG99e934JauV15Rjcz31YOjSHAObnf6byehiyUW7cYFJb9yYRURyzLhrNyJzbaGQGnyzVC5Qju2NO8Y-OFkGjh1aKMb4TL06njZMKsrhtJnx9LZ3sqOF2Ami9Q7AF-o5dgoShDPYBR8ea8dH7GNXTbry7tylg28ekqsiF6_ItQ_w03-kMPJpH17sd-UqRfV-I43PAHxqtiEOg-LJjsdVeCfoF-zVhB9ljzht8k9FJigT_wncjUM7"
    ],
    roleSpots: [
      {
        tag: "Role Spot 01",
        tagColor: "text-secondary",
        title: "Frontend Performance Specialist",
        openings: "1 Opening",
        requirements: "Required: WebGPU shader compute passes, Canvas rendering speedups, and responsive reactive node trees."
      },
      {
        tag: "Role Spot 02",
        tagColor: "text-secondary",
        title: "Python API Dev",
        openings: "1 Opening",
        requirements: "Required: FastAPI, model weight streaming, local ONNX conversion pipelines, asynchronous IPC messaging."
      }
    ],
    forks: "89 Forks",
    stars: "940 Stars",
    commitment: "~10 hrs/week",
    specsRoute: null
  },
  {
    id: "cloudmesh",
    title: "CloudMesh: Serverless Workflow Engine",
    badge: "Cloud Infrastructure",
    badgeType: "surface",
    statusText: "Rolling Admissions",
    applicationsText: "4 applications received",
    description: "Distributed, event-driven task coordinator built in Golang. Orchestrates hybrid multi-cloud workloads with zero cold start latency via smart container hibernation and warm pre-allocations.",
    icon: "hub",
    iconColor: "text-primary-container",
    techs: ["Go", "Kubernetes", "gRPC", "Protobuf", "Prometheus"],
    roles: ["Backend / Systems", "DevOps"],
    maintainers: "Elena Rostova & Systems SIG",
    maintainerAvatars: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBmI5ofj9gELotzRk1WR5f2gSmKe-b8bK6NNgyCEyQ2NFid1g_sYP4BL2tud7EmH_9LB70kYPYHbOcfxvDMvuP4q339pa3JvM8MV7l8yOA51pe5EKpc0fMOhlpx0ck0pGVR0fPhg15zLibyeqm8xNAdb5ykbb8JjUrjnzFS1dbgt6O2AXgHgk2r5k18dXTe0i2NEPjql4Wk0StsRKz1JKlqBfWFl0z7fhGlJmSuz3GRypzFNadL7T60"
    ],
    roleSpots: [
      {
        tag: "Core Opening",
        tagColor: "text-primary",
        title: "Backend Go Engineer",
        openings: "2 Openings",
        requirements: "Required: Advanced Go goroutines channel choreography, Kubernetes Custom Resource Definitions (CRDs), and high-throughput gRPC stream optimizations.",
        colSpan: "md:col-span-2"
      }
    ],
    forks: "62 Forks",
    stars: "520 Stars",
    commitment: "~6 hrs/week",
    specsRoute: null
  },
  {
    id: "omnianchor",
    title: "OmniAnchor: Cross-Chain State Oracle",
    badge: "Protocol",
    badgeType: "tertiary",
    statusText: "Active Audit",
    applicationsText: "8 applications received",
    description: "Zero-knowledge proof-based data synchronizer securing high-frequency state updates between EVM networks and Solana without relying on centralized validator rings.",
    icon: "token",
    iconColor: "text-tertiary",
    techs: ["Solidity", "Rust", "Foundry", "TypeScript"],
    roles: ["Backend / Systems", "Product Designer"],
    maintainers: "Kaelen Voss (@kvoss)",
    maintainerAvatars: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuC-9l4kyybi8Id7ydcc4Uh6_jbWCKaiZBRRzXXkTMStxTdaxzVYO5UkSGOwBcH-CjRw8lANZY9arf7PX1p8lWLIeufF1QJ_yrrh0VAnR5BcdaRlau_NMt4I6V_3CSi67zriL3kEzUkxakpmQHdg17V0vhGzRGNa8l5cqa9SIVw3sYeL0z9mNMv_bqZjt5nIWqV3J4LPYbztgmrb8s-5-gnXIwDWmcgFxOPeO-A-Q3x9yLd9hLA4HQq1",
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAjSko6TvfKFYe4vSsLo8SZDOWYGRmY-hy-V-c7hbsYtmL_WZTePBRA2pVeLe11XcWA7-b9Z_62EL28iAzqGABTVwk40JWIEHiIKpAXf2bYGaDYU3e_HMzs44ANUcdo1oxfsh3ER46RTOXMxcX-WDmukH3ux7LgnBFwpQ8l_hN9V3446mcBFioFSq08YhEZis7BF_cioMGtf4uOFowigRRglby32X3JDy7LO4rSDVrK9MqiUaun4-JA"
    ],
    roleSpots: [
      {
        tag: "Role Spot 01",
        tagColor: "text-tertiary",
        title: "Smart Contract Auditor / Dev",
        openings: "1 Opening",
        requirements: "Required: Solidity gas optimization, Foundry fuzzing, and reentrancy proof verification."
      },
      {
        tag: "Role Spot 02",
        tagColor: "text-secondary",
        title: "Product Designer",
        openings: "1 Opening",
        requirements: "Required: Figma design system design for technical explorer panels, token bridges, and status telemetry monitors."
      }
    ],
    forks: "41 Forks",
    stars: "388 Stars",
    commitment: "~8 hrs/week",
    specsRoute: null
  },
  {
    id: "vibecanvas",
    title: "VibeCanvas: Reactive Shader Playground",
    badge: "Creative Tech",
    badgeType: "surface",
    statusText: "Sprint Launch",
    applicationsText: "3 applications received",
    description: "Interactive web-based fragment shader editor with generative AI audio reactives and instantaneous live WebAssembly exports.",
    icon: "brush",
    iconColor: "text-secondary-container",
    techs: ["TypeScript", "React", "WebGPU", "WASM"],
    roles: ["Frontend Dev", "Product Designer"],
    maintainers: "Marc Dupont (@mdupont)",
    maintainerAvatars: [
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDytZKinXoaeJ-Az1Zi9d8dUMciHggxNtYsH55E_bVEuld8RDuAYrYBEqzvfagsSqXCJbdS6zXlqTenIIBJZXUouX7fNVhKKkDBtnhaF3bRzlZlPf3DqVyAe7fQqpwi66pHGteoy3WcJOo6d7_h7GevvxUwPTYMUYLkx5O-bGKPQ8X1ShyPml0hfeRjxH0yEoVxjeK4Udh-dOsnXXyA8jLC8YtCWmT6egScfI17_0ibC9o1JocLLQSd"
    ],
    roleSpots: [
      {
        tag: "Role Spot 01",
        tagColor: "text-primary",
        title: "Frontend Dev",
        openings: "1 Opening",
        requirements: "Required: React performance tuning, monaco-editor customization, and WebAudio API integrations."
      },
      {
        tag: "Role Spot 02",
        tagColor: "text-secondary",
        title: "Product Designer",
        openings: "1 Opening",
        requirements: "Required: Prototyping dark and light mode UI controls, knobs, and timeline scrubbers."
      }
    ],
    forks: "29 Forks",
    stars: "310 Stars",
    commitment: "~5 hrs/week",
    specsRoute: null
  }
];

export const EVENTS_PAGE_ITEMS = [
  {
    id: "full-stack-vector-search",
    title: "Full-Stack Vector Search with Postgres & pgvector",
    description: "Architecting scalable semantic retrieval pipelines directly in PostgreSQL with HNSW indexing.",
    date: "Dec 2, 2025",
    time: "10:00 AM – 1:00 PM PST",
    category: "workshop",
    categoryLabel: "Workshop",
    status: "Online",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1V8xRv2-lE656xEurDdYlPC7wFHUgAc9YGOi1X0bACSu-_ODWIzEf_PNtUCH0hZgKlobWOQfCI0nZgh44ZMW2yY0RzBByKP0tT6bDy4omBrWT6X-KsR024UWBQkFmABbZv7KATfXuMO_rNiEbfc4as31TWurKPUKy4tJjcnvGu8fmh5QBuZY1wQTzOZpl71qSRbodf8EHczQuS5EXJxutSE9KJZZghxS-COO0f_15-6XjabgPMZY_eINg",
    link: "/events/wasm-memory-safety"
  },
  {
    id: "building-high-throughput-microservices-go",
    title: "Building High-Throughput Microservices in Go",
    description: "Deconstructing zero-allocation serialization, lock-free concurrency rings, and 500k RPS loads.",
    date: "Dec 8, 2025",
    time: "6:00 PM – 8:30 PM PST",
    category: "talk",
    categoryLabel: "Tech Talk",
    status: "Online",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1V1tOU0WqQTsUSsU_f9D1VRXboW0NF1Py15sHlyuQoY0_5-oSr65ZCUWYEtUo0sbUoUAzDoN4lKtep-a31dt5BHtkFNWDERSXm32tl2iSwW1q8_W1L7mVInACjFfyAIYBVgbfB-Ny5c5WqCS96poHHinojsQMLpDc0qEP3_InS2wx0908FrZOW2kgoiK5QtfSYZ4a5kyDYSBPKwtB2rr4qhdJka6n7UUi7asurCThhOq7H3ui-1aYl6WIc",
    link: "/events/wasm-memory-safety"
  },
  {
    id: "open-source-ai-sprint",
    title: "Open Source AI Sprint: Fine-Tuning LLMs",
    description: "Fine-tune open-weights models (Llama 3, Mistral) for niche dev tools with cloud GPU grants.",
    date: "Dec 14–15, 2025",
    time: "36 Hours Continuous",
    category: "hackathon",
    categoryLabel: "Hackathon",
    status: "Online",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1V9aX6OuzBN_kVEPYmsGA_5dFKZwtMchMLm04UJIutXj_1UH7vah8NGzeL3g-SXN4paLbtWNILCCjsGhw_GGYU3usouzclo4h1XdSLWY3xzzS5izgdIghoIfwVkNoxL9zwUH7_1gq7HFyn_53KDDkoqGHV_Bcf2Jyvxpaz9jKseNd-3XAOCvRIqQVUyMLu2TtZd6Uqb-caGbFViW-YiBqe3LHAb2cIblD69NmYM-laReJOuuMSfc9qbGA",
    link: "/events/wasm-memory-safety"
  },
  {
    id: "webassembly-real-world",
    title: "WebAssembly in the Real World: Beyond the Browser",
    description: "Exploration of WASI 0.2, untrusted sandboxed code at edge gateways, and Rust microservices.",
    date: "Dec 20, 2025",
    time: "5:30 PM – 8:00 PM EST",
    category: "meetup",
    categoryLabel: "Meetup",
    status: "Hybrid",
    image: "https://lh3.googleusercontent.com/aida/AEtjO1V8xRv2-lE656xEurDdYlPC7wFHUgAc9YGOi1X0bACSu-_ODWIzEf_PNtUCH0hZgKlobWOQfCI0nZgh44ZMW2yY0RzBByKP0tT6bDy4omBrWT6X-KsR024UWBQkFmABbZv7KATfXuMO_rNiEbfc4as31TWurKPUKy4tJjcnvGu8fmh5QBuZY1wQTzOZpl71qSRbodf8EHczQuS5EXJxutSE9KJZZghxS-COO0f_15-6XjabgPMZY_eINg",
    link: "/events/wasm-memory-safety"
  }
];

export const PAST_SESSIONS = [
  {
    id: "ebpf-internals",
    title: "eBPF Internals & Zero-Downtime Microservices",
    description: "Kernel tracing, dynamic network probes, and custom security sandboxing without kernel module compilation.",
    date: "Oct 24, 2025",
    duration: "1h 45m",
    status: "Online",
    tags: ["Linux", "Networking"],
    category: "talk"
  },
  {
    id: "autonomous-ai-agents-finale",
    title: "Autonomous AI Agents Hackathon: Grand Finale",
    description: "Showcase of top 12 autonomous agent prototypes, multi-agent debate protocols, and tool use benchmarks.",
    date: "Sep 30, 2025",
    duration: "2h 30m",
    status: "Hybrid",
    tags: ["AI / LLMs", "Demos"],
    category: "hackathon"
  },
  {
    id: "rust-wasm-past",
    title: "Rust for TypeScript Devs: WASM & Memory Safety",
    description: "Bridging async event loops, zero-copy byte buffers, and compiling multi-threaded Web Workers via wasm-bindgen.",
    date: "Sep 12, 2025",
    duration: "2h 10m",
    status: "Online",
    tags: ["Rust", "WASM"],
    category: "workshop"
  },
  {
    id: "webgl-webgpu-engine",
    title: "WebGL & WebGPU Canvas Engine Demo",
    description: "Writing custom compute shaders for 100k GPU particle simulations and browser performance telemetry.",
    date: "Aug 18, 2025",
    duration: "1h 35m",
    status: "Online",
    tags: ["Graphics", "WebGPU"],
    category: "talk"
  }
];
