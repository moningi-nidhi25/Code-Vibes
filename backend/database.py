import logging
from typing import Optional, Dict, Any, List
from datetime import datetime, timezone
import uuid

from config import settings

logger = logging.getLogger("uvicorn.error")

# Global Supabase client instance
_supabase_client = None

def get_supabase():
    global _supabase_client
    if _supabase_client is not None:
        return _supabase_client

    if settings.is_supabase_configured:
        try:
            from supabase import create_client, Client
            _supabase_client = create_client(settings.SUPABASE_URL, settings.SUPABASE_KEY)
            logger.info(" Connected to Supabase at %s", settings.SUPABASE_URL)
            return _supabase_client
        except Exception as e:
            logger.warning(" Could not initialize Supabase client: %s. Using in-memory fallback store.", e)
            return None
    else:
        logger.info("ℹ️ Supabase credentials not set in .env. Running with in-memory fallback store.")
        return None


# ---------------- INITIAL IN-MEMORY SEED STORE ----------------
# This fallback allows the application to function immediately out-of-the-box,
# and also acts as the seed source for Supabase cloud DB.

INITIAL_PROJECTS = [
    {
        "id": "devpulse",
        "slug": "devpulse",
        "title": "DevPulse: Real-time Developer Analytics & Telemetry",
        "subtitle": "Multi-cloud telemetry collector with eBPF hooks",
        "category": "Systems Engineering",
        "stage": "Flagship OS",
        "pitch": "Open-source telemetry collector for multi-cloud developer environments with eBPF hooks. Captures sub-millisecond execution traces and translates runtime syscalls directly into actionable distributed tracing graphs.",
        "stack": ["Rust", "eBPF", "Apache Kafka", "React", "Tailwind CSS"],
        "repo_url": "https://github.com/thecodevibe/devpulse",
        "stars": 1820,
        "forks": 142,
        "contributors_count": 5,
        "roles": [
            {
                "title": "eBPF Systems Engineer",
                "spots": "1 Opening",
                "commitment": "8 hrs/week",
                "description": "Required: Low-level C/Rust kernel tracing, system probes, memory safe concurrent ring-buffers."
            },
            {
                "title": "Full-Stack UI Engineer",
                "spots": "2 Openings",
                "commitment": "8 hrs/week",
                "description": "Required: React, Canvas / WebGL metrics canvas, high-frequency telemetry charting with WebSockets."
            }
        ],
        "created_at": datetime.now(timezone.utc).isoformat()
    },
    {
        "id": "neuroflow",
        "slug": "neuroflow",
        "title": "NeuroFlow: Local LLM Orchestration Studio",
        "subtitle": "Multi-agent workflows running locally via WebGPU",
        "category": "AI & Machine Learning",
        "stage": "Active Sprint",
        "pitch": "Lightweight desktop UI for running and routing multi-agent workflows locally using WebGPU acceleration. Zero data egress, local quant models, and node-based prompt chain visualizer.",
        "stack": ["Python", "PyTorch", "WebGPU", "TypeScript", "Electron", "AI"],
        "repo_url": "https://github.com/thecodevibe/neuroflow",
        "stars": 940,
        "forks": 89,
        "contributors_count": 6,
        "roles": [
            {
                "title": "Frontend Performance Specialist",
                "spots": "1 Opening",
                "commitment": "10 hrs/week",
                "description": "Required: WebGPU shader compute passes, Canvas rendering speedups, and responsive reactive node trees."
            },
            {
                "title": "Python API Dev",
                "spots": "1 Opening",
                "commitment": "10 hrs/week",
                "description": "Required: FastAPI, model weight streaming, local ONNX conversion pipelines, asynchronous IPC messaging."
            }
        ],
        "created_at": datetime.now(timezone.utc).isoformat()
    },
    {
        "id": "cloudmesh",
        "slug": "cloudmesh",
        "title": "CloudMesh: Serverless Workflow Engine",
        "subtitle": "Distributed event-driven task coordinator in Go",
        "category": "Cloud Infrastructure",
        "stage": "Rolling Admissions",
        "pitch": "Distributed, event-driven task coordinator built in Golang. Orchestrates hybrid multi-cloud workloads with zero cold start latency via smart container hibernation and warm pre-allocations.",
        "stack": ["Go", "Kubernetes", "gRPC", "Protobuf", "Prometheus"],
        "repo_url": "https://github.com/thecodevibe/cloudmesh",
        "stars": 520,
        "forks": 62,
        "contributors_count": 4,
        "roles": [
            {
                "title": "Backend Go Engineer",
                "spots": "2 Openings",
                "commitment": "6 hrs/week",
                "description": "Required: Advanced Go goroutines channel choreography, Kubernetes CRDs, and high-throughput gRPC stream optimizations."
            }
        ],
        "created_at": datetime.now(timezone.utc).isoformat()
    },
    {
        "id": "omnianchor",
        "slug": "omnianchor",
        "title": "OmniAnchor: Cross-Chain State Oracle",
        "subtitle": "Zero-knowledge proof state synchronizer",
        "category": "Protocol & Web3",
        "stage": "Active Audit",
        "pitch": "Zero-knowledge proof-based data synchronizer securing high-frequency state updates between EVM networks and Solana without relying on centralized validator rings.",
        "stack": ["Solidity", "Rust", "Foundry", "TypeScript"],
        "repo_url": "https://github.com/thecodevibe/omnianchor",
        "stars": 388,
        "forks": 41,
        "contributors_count": 3,
        "roles": [
            {
                "title": "Smart Contract Auditor / Dev",
                "spots": "1 Opening",
                "commitment": "8 hrs/week",
                "description": "Required: Solidity gas optimization, Foundry fuzzing, and reentrancy proof verification."
            },
            {
                "title": "Product Designer",
                "spots": "1 Opening",
                "commitment": "8 hrs/week",
                "description": "Required: Figma design system design for technical explorer panels, token bridges, and status telemetry monitors."
            }
        ],
        "created_at": datetime.now(timezone.utc).isoformat()
    },
    {
        "id": "vibecanvas",
        "slug": "vibecanvas",
        "title": "VibeCanvas: Reactive Shader Playground",
        "subtitle": "Fragment shader editor with WebGPU & audio reactives",
        "category": "Creative Tech",
        "stage": "Sprint Launch",
        "pitch": "Interactive web-based fragment shader editor with generative AI audio reactives and instantaneous live WebAssembly exports.",
        "stack": ["TypeScript", "React", "WebGPU", "WASM"],
        "repo_url": "https://github.com/thecodevibe/vibecanvas",
        "stars": 310,
        "forks": 29,
        "contributors_count": 2,
        "roles": [
            {
                "title": "Frontend Dev",
                "spots": "1 Opening",
                "commitment": "5 hrs/week",
                "description": "Required: React performance tuning, monaco-editor customization, and WebAudio API integrations."
            },
            {
                "title": "Product Designer",
                "spots": "1 Opening",
                "commitment": "5 hrs/week",
                "description": "Required: Prototyping dark and light mode UI controls, knobs, and timeline scrubbers."
            }
        ],
        "created_at": datetime.now(timezone.utc).isoformat()
    }
]

INITIAL_APPLICATIONS = [
    {
        "id": "APP-8941",
        "name": "Julian Vance (@jvance)",
        "pod": "DevPulse Telemetry",
        "role": "eBPF Systems Engineer",
        "time": "12m ago",
        "status": "Under Review",
        "statusColor": "bg-[rgba(0,229,255,0.12)] border border-[rgba(0,229,255,0.30)] text-primary",
        "github": "https://github.com/jvance",
        "email": "jvance@devpulse.io",
        "commitment": "8 hrs/wk",
        "pitch": "Extensive experience with Linux kernel tracing, libbpf, and writing custom ring buffers.",
        "created_at": datetime.now(timezone.utc).isoformat()
    },
    {
        "id": "APP-8940",
        "name": "Maya Patel (@mpatel)",
        "pod": "NeuroFlow AI Studio",
        "role": "Frontend Performance Specialist",
        "time": "1h ago",
        "status": "Pending",
        "statusColor": "bg-surface-container border border-outline-variant text-on-surface-variant",
        "github": "https://github.com/mpatel",
        "email": "maya@flowstudio.ai",
        "commitment": "10 hrs/wk",
        "pitch": "Specializing in WebGL/WebGPU shaders, canvas virtualized node graphs, and low-latency UI.",
        "created_at": datetime.now(timezone.utc).isoformat()
    },
    {
        "id": "APP-8939",
        "name": "Kenji Sato (@ksato)",
        "pod": "CloudMesh Engine",
        "role": "Backend Go Engineer",
        "time": "3h ago",
        "status": "Accepted",
        "statusColor": "bg-emerald-500/10 border border-emerald-500/40 text-emerald-300",
        "github": "https://github.com/ksato",
        "email": "kenji@meshcloud.org",
        "commitment": "6 hrs/wk",
        "pitch": "Core contributor to open source Kubernetes operators and high performance gRPC streaming.",
        "created_at": datetime.now(timezone.utc).isoformat()
    },
    {
        "id": "APP-8938",
        "name": "Sarah Lindqvist (@slind)",
        "pod": "OmniAnchor Oracle",
        "role": "Smart Contract Auditor",
        "time": "5h ago",
        "status": "Accepted",
        "statusColor": "bg-emerald-500/10 border border-emerald-500/40 text-emerald-300",
        "github": "https://github.com/slind",
        "email": "sarah@auditsec.io",
        "commitment": "8 hrs/wk",
        "pitch": "Audited 15+ EVM and Rust contracts with zero post-deployment exploit reports.",
        "created_at": datetime.now(timezone.utc).isoformat()
    }
]

INITIAL_EVENTS = [
    {
        "id": "wasm-memory-safety",
        "title": "Deep Dive: WebAssembly, Memory Safety & Sandboxing",
        "date": "Nov 28, 2025",
        "time": "6:00 PM – 8:30 PM PST",
        "category": "Workshop",
        "location": "Online / Discord Stage",
        "badge": "Upcoming Masterclass",
        "badgeColor": "primary",
        "description": "Architecting untrusted edge execution environments with Wasmtime and Rust. Dive into isolated memory linear address spaces, host call boundaries, and zero-overhead sandbox orchestration.",
        "image": "https://lh3.googleusercontent.com/aida/AEtjO1V8xRv2-lE656xEurDdYlPC7wFHUgAc9YGOi1X0bACSu-_ODWIzEf_PNtUCH0hZgKlobWOQfCI0nZgh44ZMW2yY0RzBByKP0tT6bDy4omBrWT6X-KsR024UWBQkFmABbZv7KATfXuMO_rNiEbfc4as31TWurKPUKy4tJjcnvGu8fmh5QBuZY1wQTzOZpl71qSRbodf8EHczQuS5EXJxutSE9KJZZghxS-COO0f_15-6XjabgPMZY_eINg",
        "attendees": 84,
        "capacity": 120,
        "speakers": [
            {"name": "Elena Rostova", "role": "Principal Systems Architect, Wasmer Core", "avatar": ""},
            {"name": "Devin Chen", "role": "Compiler Engineer, Bytecode Alliance", "avatar": ""}
        ],
        "agenda": [
            {"time": "6:00 PM", "title": "Architecture Overview & Sandbox Security"},
            {"time": "6:45 PM", "title": "Hands-on: Writing Wasm Guest Extensions in Rust"},
            {"time": "7:45 PM", "title": "Live Profiling & Q&A"}
        ],
        "is_past": False
    },
    {
        "id": "full-stack-vector-search",
        "title": "Full-Stack Vector Search with Postgres & pgvector",
        "date": "Dec 2, 2025",
        "time": "10:00 AM – 1:00 PM PST",
        "category": "Workshop",
        "location": "Online / Zoom Live",
        "badge": "Hands-on",
        "badgeColor": "secondary",
        "description": "Architecting scalable semantic retrieval pipelines directly in PostgreSQL with HNSW indexing and Supabase.",
        "image": "https://lh3.googleusercontent.com/aida/AEtjO1V8xRv2-lE656xEurDdYlPC7wFHUgAc9YGOi1X0bACSu-_ODWIzEf_PNtUCH0hZgKlobWOQfCI0nZgh44ZMW2yY0RzBByKP0tT6bDy4omBrWT6X-KsR024UWBQkFmABbZv7KATfXuMO_rNiEbfc4as31TWurKPUKy4tJjcnvGu8fmh5QBuZY1wQTzOZpl71qSRbodf8EHczQuS5EXJxutSE9KJZZghxS-COO0f_15-6XjabgPMZY_eINg",
        "attendees": 142,
        "capacity": 200,
        "speakers": [
            {"name": "Marcus Vance", "role": "Database Architect, OpenData", "avatar": ""}
        ],
        "is_past": False
    },
    {
        "id": "building-high-throughput-microservices-go",
        "title": "Building High-Throughput Microservices in Go",
        "date": "Dec 8, 2025",
        "time": "6:00 PM – 8:30 PM PST",
        "category": "Tech Talk",
        "location": "Online / Discord Stage",
        "badge": "Knowledge",
        "badgeColor": "tertiary",
        "description": "Deconstructing zero-allocation serialization, lock-free concurrency rings, and 500k RPS loads.",
        "image": "https://lh3.googleusercontent.com/aida/AEtjO1V1tOU0WqQTsUSsU_f9D1VRXboW0NF1Py15sHlyuQoY0_5-oSr65ZCUWYEtUo0sbUoUAzDoN4lKtep-a31dt5BHtkFNWDERSXm32tl2iSwW1q8_W1L7mVInACjFfyAIYBVgbfB-Ny5c5WqCS96poHHinojsQMLpDc0qEP3_InS2wx0908FrZOW2kgoiK5QtfSYZ4a5kyDYSBPKwtB2rr4qhdJka6n7UUi7asurCThhOq7H3ui-1aYl6WIc",
        "attendees": 210,
        "capacity": 300,
        "is_past": False
    },
    {
        "id": "open-source-ai-sprint",
        "title": "Open Source AI Sprint: Fine-Tuning LLMs",
        "date": "Dec 14–15, 2025",
        "time": "36 Hours Continuous",
        "category": "Hackathon",
        "location": "Hybrid (San Francisco & Online)",
        "badge": "Competition",
        "badgeColor": "primary",
        "description": "Fine-tune open-weights models (Llama 3, Mistral) for niche dev tools with cloud GPU grants.",
        "image": "https://lh3.googleusercontent.com/aida/AEtjO1V9aX6OuzBN_kVEPYmsGA_5dFKZwtMchMLm04UJIutXj_1UH7vah8NGzeL3g-SXN4paLbtWNILCCjsGhw_GGYU3usouzclo4h1XdSLWY3xzzS5izgdIghoIfwVkNoxL9zwUH7_1gq7HFyn_53KDDkoqGHV_Bcf2Jyvxpaz9jKseNd-3XAOCvRIqQVUyMLu2TtZd6Uqb-caGbFViW-YiBqe3LHAb2cIblD69NmYM-laReJOuuMSfc9qbGA",
        "attendees": 380,
        "capacity": 500,
        "is_past": False
    },
    {
        "id": "ebpf-internals",
        "title": "eBPF Internals & Zero-Downtime Microservices",
        "date": "Oct 24, 2025",
        "time": "1h 45m recording",
        "category": "Tech Talk",
        "location": "Recorded",
        "badge": "Past Session",
        "description": "Kernel tracing, dynamic network probes, and custom security sandboxing without kernel module compilation.",
        "image": "",
        "attendees": 340,
        "is_past": True
    }
]

# Memory stores
memory_projects = list(INITIAL_PROJECTS)
memory_applications = list(INITIAL_APPLICATIONS)
memory_events = list(INITIAL_EVENTS)
memory_members = []
memory_rsvps = []
