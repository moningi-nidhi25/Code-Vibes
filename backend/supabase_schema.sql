-- ==============================================================================
-- THE CODE VIBE PLATFORM - SUPABASE DATABASE SCHEMA & SEED SCRIPT
-- ==============================================================================
-- Run this script in your Supabase Project:
-- Dashboard -> SQL Editor -> New Query -> Paste & Run
-- ==============================================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ------------------------------------------------------------------------------
-- 2. PROJECTS TABLE
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.projects (
    id TEXT PRIMARY KEY,
    slug TEXT UNIQUE NOT NULL,
    title TEXT NOT NULL,
    subtitle TEXT,
    category TEXT NOT NULL DEFAULT 'Systems Engineering',
    stage TEXT DEFAULT 'Active Pod',
    pitch TEXT NOT NULL,
    stack TEXT[] DEFAULT '{}',
    repo_url TEXT,
    stars INTEGER DEFAULT 0,
    forks INTEGER DEFAULT 0,
    contributors_count INTEGER DEFAULT 0,
    roles JSONB DEFAULT '[]'::jsonb,
    spec_data JSONB DEFAULT '{}'::jsonb,
    created_at TIMESTAMPTZ DEFAULT NOW(),
    updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for search and slugs
CREATE INDEX IF NOT EXISTS idx_projects_slug ON public.projects(slug);
CREATE INDEX IF NOT EXISTS idx_projects_category ON public.projects(category);

-- ------------------------------------------------------------------------------
-- 3. APPLICATIONS TABLE (Intake & Admin Review Queue)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.applications (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    pod TEXT NOT NULL,
    role TEXT NOT NULL,
    time TEXT DEFAULT 'Just now',
    status TEXT NOT NULL DEFAULT 'Under Review',
    github TEXT,
    email TEXT,
    commitment TEXT,
    pitch TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_applications_status ON public.applications(status);
CREATE INDEX IF NOT EXISTS idx_applications_pod ON public.applications(pod);

-- ------------------------------------------------------------------------------
-- 4. EVENTS TABLE
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.events (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    date TEXT NOT NULL,
    time TEXT,
    category TEXT NOT NULL,
    location TEXT DEFAULT 'Online / Discord Stage',
    badge TEXT DEFAULT 'Upcoming',
    badge_color TEXT DEFAULT 'primary',
    description TEXT NOT NULL,
    image TEXT,
    attendees INTEGER DEFAULT 0,
    capacity INTEGER DEFAULT 100,
    speakers JSONB DEFAULT '[]'::jsonb,
    agenda JSONB DEFAULT '[]'::jsonb,
    is_past BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_events_is_past ON public.events(is_past);

-- ------------------------------------------------------------------------------
-- 5. EVENT RSVPs TABLE
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.event_rsvps (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    event_id TEXT REFERENCES public.events(id) ON DELETE CASCADE,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    role TEXT DEFAULT 'Builder',
    interest TEXT,
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ------------------------------------------------------------------------------
-- 6. COMMUNITY MEMBERS TABLE (Onboarding Cohorts)
-- ------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS public.community_members (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    github TEXT,
    interest TEXT DEFAULT 'Open Source Pods',
    created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Helper function to atomically increment attendees count on RSVP
CREATE OR REPLACE FUNCTION public.increment_event_attendees(row_id TEXT)
RETURNS VOID AS $$
BEGIN
    UPDATE public.events
    SET attendees = attendees + 1
    WHERE id = row_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;


-- ==============================================================================
-- 7. ROW LEVEL SECURITY (RLS) POLICIES
-- ==============================================================================
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_rsvps ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.community_members ENABLE ROW LEVEL SECURITY;

-- Allow Public/Anon Read for Projects & Events
DROP POLICY IF EXISTS "Public Read Projects" ON public.projects;
CREATE POLICY "Public Read Projects" ON public.projects FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Insert Projects" ON public.projects;
CREATE POLICY "Public Insert Projects" ON public.projects FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Public Read Events" ON public.events;
CREATE POLICY "Public Read Events" ON public.events FOR SELECT USING (true);

-- Allow Public Applications & Admin Management
DROP POLICY IF EXISTS "Public Read Applications" ON public.applications;
CREATE POLICY "Public Read Applications" ON public.applications FOR SELECT USING (true);

DROP POLICY IF EXISTS "Public Insert Applications" ON public.applications;
CREATE POLICY "Public Insert Applications" ON public.applications FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Public Update Applications" ON public.applications;
CREATE POLICY "Public Update Applications" ON public.applications FOR UPDATE USING (true);

DROP POLICY IF EXISTS "Public Delete Applications" ON public.applications;
CREATE POLICY "Public Delete Applications" ON public.applications FOR DELETE USING (true);

-- Allow Event RSVPs
DROP POLICY IF EXISTS "Public Insert RSVPs" ON public.event_rsvps;
CREATE POLICY "Public Insert RSVPs" ON public.event_rsvps FOR INSERT WITH CHECK (true);

-- Allow Community Join
DROP POLICY IF EXISTS "Public Insert Members" ON public.community_members;
CREATE POLICY "Public Insert Members" ON public.community_members FOR INSERT WITH CHECK (true);

DROP POLICY IF EXISTS "Public Read Members" ON public.community_members;
CREATE POLICY "Public Read Members" ON public.community_members FOR SELECT USING (true);


-- ==============================================================================
-- 8. INITIAL SEED DATA
-- ==============================================================================

-- Projects Seed
INSERT INTO public.projects (id, slug, title, subtitle, category, stage, pitch, stack, repo_url, stars, forks, contributors_count, roles)
VALUES
(
    'devpulse',
    'devpulse',
    'DevPulse: Real-time Developer Analytics & Telemetry',
    'Multi-cloud telemetry collector with eBPF hooks',
    'Systems Engineering',
    'Flagship OS',
    'Open-source telemetry collector for multi-cloud developer environments with eBPF hooks. Captures sub-millisecond execution traces and translates runtime syscalls directly into actionable distributed tracing graphs.',
    ARRAY['Rust', 'eBPF', 'Apache Kafka', 'React', 'Tailwind CSS'],
    'https://github.com/thecodevibe/devpulse',
    1820,
    142,
    5,
    '[
        {"title": "eBPF Systems Engineer", "spots": "1 Opening", "commitment": "8 hrs/week", "description": "Required: Low-level C/Rust kernel tracing, system probes, memory safe concurrent ring-buffers."},
        {"title": "Full-Stack UI Engineer", "spots": "2 Openings", "commitment": "8 hrs/week", "description": "Required: React, Canvas / WebGL metrics canvas, high-frequency telemetry charting with WebSockets."}
    ]'::jsonb
),
(
    'neuroflow',
    'neuroflow',
    'NeuroFlow: Local LLM Orchestration Studio',
    'Multi-agent workflows running locally via WebGPU',
    'AI & Machine Learning',
    'Active Sprint',
    'Lightweight desktop UI for running and routing multi-agent workflows locally using WebGPU acceleration. Zero data egress, local quant models, and node-based prompt chain visualizer.',
    ARRAY['Python', 'PyTorch', 'WebGPU', 'TypeScript', 'Electron', 'AI'],
    'https://github.com/thecodevibe/neuroflow',
    940,
    89,
    6,
    '[
        {"title": "Frontend Performance Specialist", "spots": "1 Opening", "commitment": "10 hrs/week", "description": "Required: WebGPU shader compute passes, Canvas rendering speedups, and responsive reactive node trees."},
        {"title": "Python API Dev", "spots": "1 Opening", "commitment": "10 hrs/week", "description": "Required: FastAPI, model weight streaming, local ONNX conversion pipelines, asynchronous IPC messaging."}
    ]'::jsonb
),
(
    'cloudmesh',
    'cloudmesh',
    'CloudMesh: Serverless Workflow Engine',
    'Distributed event-driven task coordinator in Go',
    'Cloud Infrastructure',
    'Rolling Admissions',
    'Distributed, event-driven task coordinator built in Golang. Orchestrates hybrid multi-cloud workloads with zero cold start latency via smart container hibernation and warm pre-allocations.',
    ARRAY['Go', 'Kubernetes', 'gRPC', 'Protobuf', 'Prometheus'],
    'https://github.com/thecodevibe/cloudmesh',
    520,
    62,
    4,
    '[
        {"title": "Backend Go Engineer", "spots": "2 Openings", "commitment": "6 hrs/week", "description": "Required: Advanced Go goroutines channel choreography, Kubernetes CRDs, and high-throughput gRPC stream optimizations."}
    ]'::jsonb
),
(
    'omnianchor',
    'omnianchor',
    'OmniAnchor: Cross-Chain State Oracle',
    'Zero-knowledge proof state synchronizer',
    'Protocol & Web3',
    'Active Audit',
    'Zero-knowledge proof-based data synchronizer securing high-frequency state updates between EVM networks and Solana without relying on centralized validator rings.',
    ARRAY['Solidity', 'Rust', 'Foundry', 'TypeScript'],
    'https://github.com/thecodevibe/omnianchor',
    388,
    41,
    3,
    '[
        {"title": "Smart Contract Auditor / Dev", "spots": "1 Opening", "commitment": "8 hrs/week", "description": "Required: Solidity gas optimization, Foundry fuzzing, and reentrancy proof verification."},
        {"title": "Product Designer", "spots": "1 Opening", "commitment": "8 hrs/week", "description": "Required: Figma design system design for technical explorer panels, token bridges, and status telemetry monitors."}
    ]'::jsonb
),
(
    'vibecanvas',
    'vibecanvas',
    'VibeCanvas: Reactive Shader Playground',
    'Fragment shader editor with WebGPU & audio reactives',
    'Creative Tech',
    'Sprint Launch',
    'Interactive web-based fragment shader editor with generative AI audio reactives and instantaneous live WebAssembly exports.',
    ARRAY['TypeScript', 'React', 'WebGPU', 'WASM'],
    'https://github.com/thecodevibe/vibecanvas',
    310,
    29,
    2,
    '[
        {"title": "Frontend Dev", "spots": "1 Opening", "commitment": "5 hrs/week", "description": "Required: React performance tuning, monaco-editor customization, and WebAudio API integrations."},
        {"title": "Product Designer", "spots": "1 Opening", "commitment": "5 hrs/week", "description": "Required: Prototyping dark and light mode UI controls, knobs, and timeline scrubbers."}
    ]'::jsonb
)
ON CONFLICT (id) DO NOTHING;

-- Applications Seed (Queue in Admin Portal)
INSERT INTO public.applications (id, name, pod, role, time, status, github, email, commitment, pitch)
VALUES
(
    'APP-8941',
    'Julian Vance (@jvance)',
    'DevPulse Telemetry',
    'eBPF Systems Engineer',
    '12m ago',
    'Under Review',
    'https://github.com/jvance',
    'jvance@devpulse.io',
    '8 hrs/wk',
    'Extensive experience with Linux kernel tracing, libbpf, and writing custom ring buffers.'
),
(
    'APP-8940',
    'Maya Patel (@mpatel)',
    'NeuroFlow AI Studio',
    'Frontend Performance Specialist',
    '1h ago',
    'Pending',
    'https://github.com/mpatel',
    'maya@flowstudio.ai',
    '10 hrs/wk',
    'Specializing in WebGL/WebGPU shaders, canvas virtualized node graphs, and low-latency UI.'
),
(
    'APP-8939',
    'Kenji Sato (@ksato)',
    'CloudMesh Engine',
    'Backend Go Engineer',
    '3h ago',
    'Accepted',
    'https://github.com/ksato',
    'kenji@meshcloud.org',
    '6 hrs/wk',
    'Core contributor to open source Kubernetes operators and high performance gRPC streaming.'
),
(
    'APP-8938',
    'Sarah Lindqvist (@slind)',
    'OmniAnchor Oracle',
    'Smart Contract Auditor',
    '5h ago',
    'Accepted',
    'https://github.com/slind',
    'sarah@auditsec.io',
    '8 hrs/wk',
    'Audited 15+ EVM and Rust contracts with zero post-deployment exploit reports.'
)
ON CONFLICT (id) DO NOTHING;

-- Events Seed
INSERT INTO public.events (id, title, date, time, category, location, badge, badge_color, description, attendees, capacity, is_past)
VALUES
(
    'wasm-memory-safety',
    'Deep Dive: WebAssembly, Memory Safety & Sandboxing',
    'Nov 28, 2025',
    '6:00 PM – 8:30 PM PST',
    'Workshop',
    'Online / Discord Stage',
    'Upcoming Masterclass',
    'primary',
    'Architecting untrusted edge execution environments with Wasmtime and Rust. Dive into isolated memory linear address spaces, host call boundaries, and zero-overhead sandbox orchestration.',
    84,
    120,
    FALSE
),
(
    'full-stack-vector-search',
    'Full-Stack Vector Search with Postgres & pgvector',
    'Dec 2, 2025',
    '10:00 AM – 1:00 PM PST',
    'Workshop',
    'Online / Zoom Live',
    'Hands-on',
    'secondary',
    'Architecting scalable semantic retrieval pipelines directly in PostgreSQL with HNSW indexing and Supabase.',
    142,
    200,
    FALSE
),
(
    'building-high-throughput-microservices-go',
    'Building High-Throughput Microservices in Go',
    'Dec 8, 2025',
    '6:00 PM – 8:30 PM PST',
    'Tech Talk',
    'Online / Discord Stage',
    'Knowledge',
    'tertiary',
    'Deconstructing zero-allocation serialization, lock-free concurrency rings, and 500k RPS loads.',
    210,
    300,
    FALSE
),
(
    'open-source-ai-sprint',
    'Open Source AI Sprint: Fine-Tuning LLMs',
    'Dec 14–15, 2025',
    '36 Hours Continuous',
    'Hackathon',
    'Hybrid (San Francisco & Online)',
    'Competition',
    'primary',
    'Fine-tune open-weights models (Llama 3, Mistral) for niche dev tools with cloud GPU grants.',
    380,
    500,
    FALSE
),
(
    'ebpf-internals',
    'eBPF Internals & Zero-Downtime Microservices',
    'Oct 24, 2025',
    '1h 45m recording',
    'Tech Talk',
    'Recorded',
    'Past Session',
    'surface',
    'Kernel tracing, dynamic network probes, and custom security sandboxing without kernel module compilation.',
    340,
    500,
    TRUE
)
ON CONFLICT (id) DO NOTHING;
