import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import TerminalBlock from '../components/ui/TerminalBlock';
import Toast from '../components/ui/Toast';

export default function ProjectSpecsPage() {
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [applyRoleTitle, setApplyRoleTitle] = useState('eBPF Systems Engineer');
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [projectSwitcherOpen, setProjectSwitcherOpen] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3500);
  };

  const handleOpenApply = (roleName) => {
    setApplyRoleTitle(roleName);
    setApplyModalOpen(true);
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    setApplyModalOpen(false);
    showToast(`Application for ${applyRoleTitle} dispatched! Alex & Elena will review in Discord within 48h.`);
  };

  const rustAgentCommands = [
    { type: 'comment', text: '1. Clone & prepare submodules (libbpf)' },
    { type: 'command', text: 'git clone https://github.com/thecodevibe/devpulse.git' },
    { type: 'command', text: 'cd devpulse && git submodule update --init --recursive' },
    { type: 'comment', text: '2. Build kernel probes & agent' },
    { type: 'command', text: 'cargo build --release -p devpulse-collector' },
    { type: 'comment', text: '3. Test probe attachments (requires sudo for eBPF)' },
    { type: 'command', text: 'sudo ./target/release/devpulse-collector --dry-run' },
  ];

  const dockerStackCommands = [
    { type: 'comment', text: '1. Spin up Kafka, ClickHouse & Mock Ingest' },
    { type: 'command', text: 'docker compose -f deploy/local-testbed.yml up -d' },
    { type: 'comment', text: '2. Launch real-time React dashboard' },
    { type: 'command', text: 'cd web && pnpm install && pnpm dev' },
    { type: 'comment', text: '3. View telemetry live at http://localhost:5173' },
    { type: 'success', text: '[Ready] Connected to WebGL canvas telemetry socket' },
  ];

  return (
    <div className="flex flex-col w-full relative">
      <Toast
        message={toastMessage}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />

      {/* Ambient Radiant Tech Glows */}
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-secondary-container/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-96 right-10 w-96 h-96 bg-tertiary-container/15 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-[1400px] left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-8 space-y-8">
        {/* 1. Top Breadcrumb & Status Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-2">
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/collaborate"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-ui text-label-ui transition-all shadow-sm border border-outline-variant/30"
            >
              <span className="material-symbols-outlined text-[16px]">arrow_back</span>
              <span>Back to All Projects</span>
            </Link>
            <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
              <span className="text-outline">/</span>
              <Link to="/collaborate" className="hover:text-primary transition-colors">
                Collaborate
              </Link>
              <span className="text-outline">/</span>
              <Link to="/collaborate" className="hover:text-primary transition-colors">
                Projects
              </Link>
              <span className="text-outline">/</span>
              <span className="font-medium text-on-surface truncate max-w-xs md:max-w-md">
                DevPulse
              </span>
            </div>
          </div>

          {/* Quick Switcher & Project Actions */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <button
                type="button"
                onClick={() => setProjectSwitcherOpen(!projectSwitcherOpen)}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high font-mono-sm text-mono-sm text-on-surface transition-all cursor-pointer border border-outline-variant/20"
              >
                <span className="material-symbols-outlined text-primary text-[18px]">swap_horiz</span>
                <span>Switch Project</span>
                <span className="material-symbols-outlined text-[14px]">expand_more</span>
              </button>

              {projectSwitcherOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant/30 p-2 z-30">
                  <div className="font-mono-sm text-xs text-outline px-3 py-1.5 uppercase">
                    Open Projects
                  </div>
                  {[
                    { name: 'DevPulse (Active)', current: true },
                    { name: 'NeuroFlow: AI Studio', current: false },
                    { name: 'CloudMesh: Serverless', current: false },
                    { name: 'OmniAnchor: Oracle', current: false },
                  ].map((p, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setProjectSwitcherOpen(false);
                        if (!p.current) showToast(`Switched view to ${p.name}`);
                      }}
                      className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-colors cursor-pointer ${
                        p.current
                          ? 'bg-primary text-on-primary font-medium'
                          : 'text-on-surface hover:bg-surface-container'
                      }`}
                    >
                      {p.name}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <a
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-surface-container-low hover:bg-surface-container-high text-on-surface font-label-ui text-label-ui shadow-sm transition-all border border-outline-variant/30"
              href="https://github.com"
              rel="noreferrer"
              target="_blank"
            >
              <svg className="w-4 h-4 fill-current text-on-surface" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>Fork on GitHub</span>
            </a>

            <a
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-secondary via-primary to-tertiary text-on-primary font-label-ui text-label-ui shadow-md hover:opacity-95 active:scale-95 transition-all"
              href="#open-positions"
            >
              <span className="material-symbols-outlined text-[16px]">how_to_reg</span>
              <span>Apply for Role</span>
            </a>
          </div>
        </div>

        {/* Active Status Telemetry Banner */}
        <div className="flex flex-wrap items-center gap-3 p-3 rounded-xl bg-surface-container-low shadow-sm border border-outline-variant/30">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container font-mono-sm text-mono-sm text-secondary font-medium">
            <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
            <span>Open until Nov 30</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-mono-sm text-mono-sm">
            <span className="material-symbols-outlined text-[15px] text-primary">groups</span>
            <span>6 Applications Received</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-mono-sm text-mono-sm">
            <span className="material-symbols-outlined text-[15px] text-tertiary">commit</span>
            <span>Repository: github.com/thecodevibe/devpulse</span>
          </div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container text-on-surface-variant font-mono-sm text-mono-sm">
            <span className="material-symbols-outlined text-[15px] text-secondary">verified_user</span>
            <span>License: Apache-2.0</span>
          </div>
        </div>

        {/* 2. Project Header & Executive Summary Bento Module */}
        <div className="rounded-2xl p-8 bg-surface-container-lowest shadow-md space-y-8 relative overflow-hidden border border-outline-variant/30">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-secondary-fixed text-on-secondary-fixed font-mono-sm text-mono-sm uppercase tracking-wider">
                <span>Systems Infrastructure Pod #04</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
                DevPulse: Real-time Developer Analytics &amp; Telemetry
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Open-source telemetry collector for multi-cloud developer environments with eBPF hooks. Captures sub-millisecond execution traces and translates runtime syscalls directly into actionable distributed tracing graphs.
              </p>
            </div>

            {/* Project Leads & Core Maintainers Grid */}
            <div className="lg:w-80 p-5 rounded-xl bg-surface-container-low shadow-sm space-y-4 shrink-0 border border-outline-variant/30">
              <div className="flex items-center justify-between">
                <span className="font-label-ui text-label-ui text-on-surface-variant uppercase tracking-wider">
                  Maintainers &amp; Leads
                </span>
                <span className="font-mono-sm text-mono-sm text-primary">6 Active</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <img
                    className="w-10 h-10 rounded-full object-cover shadow-sm"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwkp7fhYwwJ-HjHuuc70IRQo1XN777OECY8E5z2nTNOQ7x-8u9FnTqzeQndeH3acKb1MKbyWWv0NqoMEggh-r0l4qHY7UK0lMmqcoK2P_Wu3XGLR0F5wliRAkwZ1rPje7mOYMflOllDYzhh6SFdAgowsqYumhoDVQ6MrjWfEAZ12hAqGRBP9wzcWDTEghPyHqHlFPxvmDUwBQMUAAc8KeC6-6pl17SES0dqidS__vhllnU23MYH2CA"
                    alt="Alex Chen"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="font-label-ui text-label-ui text-on-surface truncate">
                      Alex Chen (@achen)
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">
                      Staff SRE · Pod Lead
                    </div>
                  </div>
                  <span className="font-mono-sm text-mono-sm px-2 py-0.5 rounded bg-surface-container text-on-surface">
                    Core
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <img
                    className="w-10 h-10 rounded-full object-cover shadow-sm"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNU0kYRRDAQpmhst1pzooo8LZr3omIzIG1jTvNUBUm7tHpdRMVNTNkFCgz_6eoo_DhN-5JogLAeu5faAmnivE--melQ3vEYvInU4xz6Ar6DXT66_pgw_gOfnRy3J8zXeFQaflCabIEKefU_25R6RVKgNplmXRwt25CCvGwNjoAAjHh-bIlcOPn9A2IesS049hsMn16ARmXgicYPMIwrQ7ROrpJkqQxhdgp7Byg96ifWrnm8oEUe4_n"
                    alt="Elena Rostova"
                  />
                  <div className="min-w-0 flex-1">
                    <div className="font-label-ui text-label-ui text-on-surface truncate">
                      Elena Rostova
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">
                      Kernel Tracing Lead
                    </div>
                  </div>
                  <span className="font-mono-sm text-mono-sm px-2 py-0.5 rounded bg-surface-container text-on-surface">
                    Core
                  </span>
                </div>

                <div className="pt-2 flex items-center justify-between border-t border-surface-container">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center font-mono-sm text-mono-sm text-on-primary">
                      SR
                    </div>
                    <div className="w-7 h-7 rounded-full bg-tertiary flex items-center justify-center font-mono-sm text-mono-sm text-on-tertiary">
                      MK
                    </div>
                    <div className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center font-mono-sm text-mono-sm text-on-secondary">
                      DT
                    </div>
                    <div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center font-mono-sm text-mono-sm text-on-surface">
                      +1
                    </div>
                  </div>
                  <span className="font-mono-sm text-mono-sm text-on-surface-variant">
                    github/thecodevibe
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Key Architecture Metrics Bento Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            <div className="p-5 rounded-xl bg-surface-container-low shadow-sm space-y-1 border border-outline-variant/30">
              <div className="flex items-center justify-between text-on-surface-variant">
                <span className="font-label-ui text-label-ui uppercase tracking-wide">Traction</span>
                <span className="material-symbols-outlined text-[18px] text-secondary">star</span>
              </div>
              <div className="font-headline-md text-headline-md text-on-surface">1.8k</div>
              <div className="font-body-sm text-body-sm text-on-surface-variant">142 Active Forks</div>
            </div>

            <div className="p-5 rounded-xl bg-surface-container-low shadow-sm space-y-1 border border-outline-variant/30">
              <div className="flex items-center justify-between text-on-surface-variant">
                <span className="font-label-ui text-label-ui uppercase tracking-wide">Target Release</span>
                <span className="material-symbols-outlined text-[18px] text-primary">rocket_launch</span>
              </div>
              <div className="font-headline-md text-headline-md text-on-surface">v0.4.0-α</div>
              <div className="font-body-sm text-body-sm text-on-surface-variant">Sprint Q4 2025</div>
            </div>

            <div className="p-5 rounded-xl bg-surface-container-low shadow-sm space-y-1 border border-outline-variant/30">
              <div className="flex items-center justify-between text-on-surface-variant">
                <span className="font-label-ui text-label-ui uppercase tracking-wide">Commitment</span>
                <span className="material-symbols-outlined text-[18px] text-tertiary">schedule</span>
              </div>
              <div className="font-headline-md text-headline-md text-on-surface">~8 hrs</div>
              <div className="font-body-sm text-body-sm text-on-surface-variant">Weekly Syncs &amp; Pairing</div>
            </div>

            <div className="p-5 rounded-xl bg-surface-container-low shadow-sm space-y-1 border border-outline-variant/30">
              <div className="flex items-center justify-between text-on-surface-variant">
                <span className="font-label-ui text-label-ui uppercase tracking-wide">Pod Structure</span>
                <span className="material-symbols-outlined text-[18px] text-secondary-container">hub</span>
              </div>
              <div className="font-headline-md text-headline-md text-on-surface">5 + 3</div>
              <div className="font-body-sm text-body-sm text-on-surface-variant">5 Core + 3 Contributors</div>
            </div>
          </div>
        </div>

        {/* 3. Deep Technical Architecture & Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Specs, Dataflow Pipeline & Milestones (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Architecture Pipeline Visual Bento */}
            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-md space-y-6 border border-outline-variant/30">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="font-mono-sm text-mono-sm text-primary uppercase tracking-wider">
                    Topology Map
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">
                    Telemetry Ingestion Pipeline
                  </h2>
                </div>
                <span className="font-mono-sm text-mono-sm px-3 py-1 rounded bg-surface-container text-on-surface-variant">
                  Zero-Copy Sub-ms
                </span>
              </div>

              {/* Pipeline Flow Architecture 5 Step Cards */}
              <div className="p-6 rounded-xl bg-surface-container-low space-y-6 border border-outline-variant/20">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-3 relative">
                  {/* Step 1 */}
                  <div className="p-4 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between space-y-3 border border-outline-variant/20">
                    <div className="flex items-center justify-between">
                      <span className="font-mono-sm text-mono-sm text-secondary font-bold">01</span>
                      <span className="material-symbols-outlined text-secondary text-[20px]">memory</span>
                    </div>
                    <div>
                      <div className="font-headline-sm text-[15px] font-semibold text-on-surface leading-snug">
                        Kernel Space
                      </div>
                      <div className="font-mono-sm text-[11px] text-on-surface-variant mt-1">
                        eBPF Probes
                      </div>
                    </div>
                    <div className="font-body-sm text-[11px] text-on-surface-variant leading-tight">
                      kprobes, tracepoints
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="p-4 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between space-y-3 border border-outline-variant/20">
                    <div className="flex items-center justify-between">
                      <span className="font-mono-sm text-mono-sm text-primary font-bold">02</span>
                      <span className="material-symbols-outlined text-primary text-[20px]">
                        settings_input_composite
                      </span>
                    </div>
                    <div>
                      <div className="font-headline-sm text-[15px] font-semibold text-on-surface leading-snug">
                        User Agent
                      </div>
                      <div className="font-mono-sm text-[11px] text-on-surface-variant mt-1">
                        Rust Ring Buffer
                      </div>
                    </div>
                    <div className="font-body-sm text-[11px] text-on-surface-variant leading-tight">
                      Zero-copy mmap()
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="p-4 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between space-y-3 border border-outline-variant/20">
                    <div className="flex items-center justify-between">
                      <span className="font-mono-sm text-mono-sm text-tertiary font-bold">03</span>
                      <span className="material-symbols-outlined text-tertiary text-[20px]">sync_alt</span>
                    </div>
                    <div>
                      <div className="font-headline-sm text-[15px] font-semibold text-on-surface leading-snug">
                        Kafka Ingest
                      </div>
                      <div className="font-mono-sm text-[11px] text-on-surface-variant mt-1">
                        Buffer Pool
                      </div>
                    </div>
                    <div className="font-body-sm text-[11px] text-on-surface-variant leading-tight">
                      Batch window 10ms
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="p-4 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between space-y-3 border border-outline-variant/20">
                    <div className="flex items-center justify-between">
                      <span className="font-mono-sm text-mono-sm text-secondary font-bold">04</span>
                      <span className="material-symbols-outlined text-secondary text-[20px]">database</span>
                    </div>
                    <div>
                      <div className="font-headline-sm text-[15px] font-semibold text-on-surface leading-snug">
                        ClickHouse
                      </div>
                      <div className="font-mono-sm text-[11px] text-on-surface-variant mt-1">
                        OLAP Store
                      </div>
                    </div>
                    <div className="font-body-sm text-[11px] text-on-surface-variant leading-tight">
                      Columnar indexing
                    </div>
                  </div>

                  {/* Step 5 */}
                  <div className="p-4 rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between space-y-3 border border-outline-variant/20">
                    <div className="flex items-center justify-between">
                      <span className="font-mono-sm text-mono-sm text-primary font-bold">05</span>
                      <span className="material-symbols-outlined text-primary text-[20px]">monitoring</span>
                    </div>
                    <div>
                      <div className="font-headline-sm text-[15px] font-semibold text-on-surface leading-snug">
                        React Engine
                      </div>
                      <div className="font-mono-sm text-[11px] text-on-surface-variant mt-1">
                        WebGL Flamegraph
                      </div>
                    </div>
                    <div className="font-body-sm text-[11px] text-on-surface-variant leading-tight">
                      60fps dynamic UI
                    </div>
                  </div>
                </div>

                {/* Inline Architecture Telemetry Graph (SVG Sparkline) */}
                <div className="pt-4 border-t border-surface-container flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="space-y-1">
                    <div className="font-label-ui text-label-ui text-on-surface font-semibold">
                      Target Throughput Benchmark
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">
                      Measured kernel ring buffer load at 1.4M events/sec
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-36 h-8">
                      <svg className="w-full h-full text-primary" fill="none" viewBox="0 0 144 32">
                        <path
                          d="M0 24L16 20L32 25L48 12L64 16L80 8L96 14L112 4L128 9L144 2"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        />
                        <path
                          d="M0 24L16 20L32 25L48 12L64 16L80 8L96 14L112 4L128 9L144 2V32H0Z"
                          fill="currentColor"
                          fillOpacity="0.1"
                        />
                      </svg>
                    </div>
                    <span className="font-mono-sm text-mono-sm text-primary font-bold">
                      99.8% P99
                    </span>
                  </div>
                </div>
              </div>

              {/* Tech Stack Pill Group */}
              <div className="space-y-3">
                <span className="font-label-ui text-label-ui text-on-surface-variant uppercase tracking-wider">
                  Pod Technologies &amp; Runtimes
                </span>
                <div className="flex flex-wrap gap-2">
                  {[
                    'Rust (Core Engine)',
                    'eBPF / libbpf (Kernel)',
                    'Apache Kafka',
                    'ClickHouse OLAP',
                    'React 19 & WebGL',
                    'Tailwind CSS',
                    'gRPC / Protocol Buffers',
                  ].map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded bg-surface-container font-mono-sm text-mono-sm text-on-surface"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Milestone Deliverables & Sprint Roadmap */}
            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-md space-y-6 border border-outline-variant/30">
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <span className="font-mono-sm text-mono-sm text-secondary uppercase tracking-wider">
                    Sprint Roadmap
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">
                    Deliverables &amp; Milestones
                  </h2>
                </div>
                <span className="font-mono-sm text-mono-sm text-on-surface-variant">
                  Sprint Cycle 4 of 6
                </span>
              </div>

              <div className="space-y-4">
                {/* Milestone 1 */}
                <div className="p-4 rounded-xl bg-surface-container-low flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-secondary-container/20 text-secondary flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">check_circle</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Phase 1: eBPF Probe Stabilization
                      </div>
                      <span className="font-mono-sm text-mono-sm px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
                        Completed
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Kernel probes calibrated for Linux kernels 5.15 through 6.8+ across x86_64 and aarch64 arch targets.
                    </p>
                  </div>
                </div>

                {/* Milestone 2 */}
                <div className="p-4 rounded-xl bg-surface-container-low flex items-start gap-4 ring-2 ring-primary/20">
                  <div className="w-8 h-8 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">cached</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Phase 2: High-throughput Circular Ring Buffer
                      </div>
                      <span className="font-mono-sm text-mono-sm px-2.5 py-0.5 rounded-full bg-primary text-on-primary font-semibold">
                        Active Sprint
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Zero-copy ring buffer readers implemented in Rust. Benchmark target: 0% dropped packets during burst compile traces.
                    </p>
                  </div>
                </div>

                {/* Milestone 3 */}
                <div className="p-4 rounded-xl bg-surface-container-low flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">radio_button_unchecked</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Phase 3: Distributed Trace Context Propagation
                      </div>
                      <span className="font-mono-sm text-mono-sm px-2.5 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed font-semibold">
                        Open for Pod
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Injecting OpenTelemetry W3C tracecontext headers into outgoing gRPC calls automatically at the socket probe layer.
                    </p>
                  </div>
                </div>

                {/* Milestone 4 */}
                <div className="p-4 rounded-xl bg-surface-container-low flex items-start gap-4 opacity-75">
                  <div className="w-8 h-8 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[18px]">schedule</span>
                  </div>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <div className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        Phase 4: WebGPU Flamegraph Visualizer
                      </div>
                      <span className="font-mono-sm text-mono-sm px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
                        Upcoming
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      Rendering hierarchical flame charts with over 500k frames at solid 60fps within the browser canvas.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Getting Started & Dev Setup / Contribution Guide */}
            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-md space-y-6 border border-outline-variant/30">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="font-mono-sm text-mono-sm text-primary uppercase tracking-wider">
                    Developer Sandbox
                  </span>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface">
                    Local Environment &amp; First Run
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-mono-sm text-mono-sm text-on-surface-variant">
                    Rust 1.78+ · Clang/LLVM 16+ · Docker 24+
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TerminalBlock title="terminal ~ rust-agent" commands={rustAgentCommands} />
                <TerminalBlock title="terminal ~ docker-stack" commands={dockerStackCommands} />
              </div>

              {/* Quick Contribution Checklist */}
              <div className="pt-4 border-t border-surface-container flex flex-wrap items-center justify-between gap-4 font-body-sm text-body-sm text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-secondary">verified</span>
                  <span>Sign CLA via GitHub Bot</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-secondary">verified</span>
                  <span>
                    Run <code className="text-primary font-semibold">cargo test --all</code> before pushing
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-secondary">verified</span>
                  <span>
                    Join <code className="text-secondary font-semibold">#pod-devpulse-telemetry</code> on Discord
                  </span>
                </div>
                <a
                  className="font-label-ui text-label-ui text-primary hover:underline cursor-pointer"
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Read CONTRIBUTING.md →
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Open Positions & Role Requirements (4 cols) */}
          <div className="lg:col-span-4 space-y-8" id="open-positions">
            <div className="p-8 rounded-2xl bg-surface-container-lowest shadow-md space-y-6 border border-outline-variant/30">
              <div className="space-y-1">
                <span className="font-mono-sm text-mono-sm text-tertiary uppercase tracking-wider">
                  Join The Pod
                </span>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Open Roles
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Apply to pair with core engineers and ship production-grade systems software.
                </p>
              </div>

              {/* Role Spot 1: eBPF Systems Engineer */}
              <div className="p-6 rounded-xl bg-surface-container-low shadow-sm space-y-4 border border-outline-variant/20">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      eBPF Systems Engineer
                    </h3>
                    <span className="font-mono-sm text-mono-sm text-secondary">
                      1 Opening · High Priority
                    </span>
                  </div>
                  <span className="p-1.5 rounded-full bg-secondary-fixed text-on-secondary-fixed">
                    <span className="material-symbols-outlined text-[18px]">terminal</span>
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Low-level kernel probes, memory safe concurrent ring-buffers, tracepoint extraction, and integration with BCC/libbpf.
                </p>
                <div className="space-y-2 pt-2 border-t border-surface-container">
                  <div className="flex items-center justify-between font-mono-sm text-mono-sm">
                    <span className="text-on-surface-variant">Weekly Scope:</span>
                    <span className="text-on-surface font-medium">6–8 hrs / week</span>
                  </div>
                  <div className="flex items-center justify-between font-mono-sm text-mono-sm">
                    <span className="text-on-surface-variant">Pairing Lead:</span>
                    <span className="text-primary font-medium">Alex Chen (@achen)</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleOpenApply('eBPF Systems Engineer')}
                  className="w-full py-2.5 px-4 rounded-lg bg-primary hover:bg-primary-container text-on-primary font-label-ui text-label-ui shadow-sm active:scale-95 transition-all text-center cursor-pointer"
                >
                  Apply for eBPF Role
                </button>
              </div>

              {/* Role Spot 2: Full-Stack UI Engineer */}
              <div className="p-6 rounded-xl bg-surface-container-low shadow-sm space-y-4 border border-outline-variant/20">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      Full-Stack UI Engineer
                    </h3>
                    <span className="font-mono-sm text-mono-sm text-tertiary">
                      2 Openings · Pair Spot
                    </span>
                  </div>
                  <span className="p-1.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed">
                    <span className="material-symbols-outlined text-[18px]">web</span>
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  React 19 telemetry dashboard, WebGL canvas streaming visualizations, live WebSocket ingestion, and Tailwind micro-components.
                </p>
                <div className="space-y-2 pt-2 border-t border-surface-container">
                  <div className="flex items-center justify-between font-mono-sm text-mono-sm">
                    <span className="text-on-surface-variant">Weekly Scope:</span>
                    <span className="text-on-surface font-medium">5–8 hrs / week</span>
                  </div>
                  <div className="flex items-center justify-between font-mono-sm text-mono-sm">
                    <span className="text-on-surface-variant">Pairing Lead:</span>
                    <span className="text-tertiary font-medium">Sophia Rodriguez</span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => handleOpenApply('Full-Stack UI Engineer')}
                  className="w-full py-2.5 px-4 rounded-lg bg-surface-container-highest hover:bg-surface-container text-on-surface font-label-ui text-label-ui shadow-sm active:scale-95 transition-all text-center cursor-pointer border border-outline-variant/30"
                >
                  Apply for UI Role
                </button>
              </div>

              {/* Role Mentorship & Community Badge */}
              <div className="p-4 rounded-xl bg-surface-container-high/40 flex items-center gap-3 border border-outline-variant/20">
                <span className="material-symbols-outlined text-primary text-[24px]">school</span>
                <div className="font-body-sm text-body-sm text-on-surface">
                  All pods include dedicated 1:1 async PR feedback and weekly technical office hours.
                </div>
              </div>
            </div>

            {/* Quick Pod Channels Bento */}
            <div className="p-6 rounded-2xl bg-surface-container-lowest shadow-md space-y-3 border border-outline-variant/30">
              <span className="font-label-ui text-label-ui text-on-surface-variant uppercase tracking-wider">
                Sync Channels
              </span>
              <div className="space-y-2">
                <a
                  className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors"
                  href="https://discord.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono-sm text-mono-sm text-primary">#</span>
                    <span className="font-mono-sm text-mono-sm text-on-surface font-medium">
                      pod-devpulse-telemetry
                    </span>
                  </div>
                  <span className="font-mono-sm text-[11px] text-on-surface-variant">
                    Discord (24/7)
                  </span>
                </a>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-secondary">
                      videocam
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface">Weekly Huddle</span>
                  </div>
                  <span className="font-mono-sm text-[11px] text-on-surface-variant">
                    Thurs 17:00 UTC
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Apply Modal */}
      {applyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/40 backdrop-blur-md">
          <div className="w-full max-w-xl rounded-2xl bg-surface-container-lowest shadow-2xl p-8 space-y-6 border border-outline-variant/30 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="font-mono-sm text-mono-sm text-primary uppercase">
                  Pod Application
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface">
                  Apply: {applyRoleTitle}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setApplyModalOpen(false)}
                className="w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high flex items-center justify-center text-on-surface transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <form className="space-y-4" onSubmit={handleModalSubmit}>
              <div className="space-y-1">
                <label className="font-label-ui text-label-ui text-on-surface">
                  Full Name or Handle
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Rivera (@arivera)"
                  className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30"
                />
              </div>

              <div className="space-y-1">
                <label className="font-label-ui text-label-ui text-on-surface">
                  GitHub Profile / Portfolio Link
                </label>
                <input
                  type="url"
                  required
                  placeholder="https://github.com/yourhandle"
                  className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30"
                />
              </div>

              <div className="space-y-1">
                <label className="font-label-ui text-label-ui text-on-surface">
                  Relevant Experience &amp; Motivation
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Briefly describe what you've built with systems code, Rust, eBPF, or high-perf UI..."
                  className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30 resize-none"
                />
              </div>

              <div className="space-y-1">
                <label className="font-label-ui text-label-ui text-on-surface">
                  Weekly Availability
                </label>
                <select className="w-full px-4 py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-primary border border-outline-variant/30">
                  <option>5–8 hrs / week (Standard pod commitment)</option>
                  <option>8–12 hrs / week (Sprint contributor)</option>
                  <option>2–4 hrs / week (Reviewer / Advisory)</option>
                </select>
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setApplyModalOpen(false)}
                  className="px-4 py-2 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-ui text-label-ui transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-gradient-to-r from-secondary via-primary to-tertiary text-on-primary font-label-ui text-label-ui shadow-md hover:opacity-95 transition-all cursor-pointer"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
