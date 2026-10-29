import React, { useState } from 'react';

export default function ProjectSpecsModal({ isOpen, onClose, project }) {
  const [copied, setCopied] = useState(false);

  if (!isOpen || !project) return null;

  const cloneCmd = `git clone https://github.com/thecodevibe/${project.id || 'specs'}-blueprint.git`;

  const handleCopy = () => {
    navigator.clipboard.writeText(cloneCmd);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/40 backdrop-blur-sm transition-all duration-200">
      <div className="relative w-full max-w-2xl bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant/30 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="h-1.5 w-full bg-secondary" />

        <div className="p-6 md:p-8 space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <span className="font-mono-sm text-mono-sm text-secondary uppercase tracking-wider">
                Architecture Brief &amp; Requirements
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface mt-1">
                {project.title?.split(':')[0] || 'Project'} Blueprint Specifications
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-outline hover:text-on-surface p-1 rounded-lg hover:bg-surface-container cursor-pointer transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="space-y-4 font-body-md text-body-md text-on-surface-variant max-h-[60vh] overflow-y-auto pr-2">
            <div className="p-4 rounded-lg bg-surface-container-low space-y-2">
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                Target Architecture
              </h4>
              <p>
                Components follow strict zero-copy ingestion patterns with decoupled telemetry rings. Low latency syscall inspection utilizes kernel BPF maps before piping into regional Kafka buffers.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                Development Milestones
              </h4>
              <ul className="space-y-1.5 list-disc list-inside font-body-sm text-body-sm">
                <li>
                  <strong className="text-on-surface">Milestone 1:</strong> Trace Collector Kernel Probe implementation (Weeks 1-3)
                </li>
                <li>
                  <strong className="text-on-surface">Milestone 2:</strong> gRPC Streaming Channel &amp; Session multiplexing (Weeks 4-6)
                </li>
                <li>
                  <strong className="text-on-surface">Milestone 3:</strong> High-DPI UI Canvas real-time event visualizer (Weeks 7-9)
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-headline-sm text-headline-sm text-on-surface">
                Codebase Standards
              </h4>
              <div className="p-3 bg-surface-container rounded font-mono-sm text-mono-sm text-on-surface flex items-center justify-between">
                <code className="text-primary truncate mr-2">{cloneCmd}</code>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="text-primary hover:underline cursor-pointer font-semibold shrink-0"
                >
                  {copied ? 'Copied!' : 'Copy'}
                </button>
              </div>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label-ui text-label-ui cursor-pointer hover:bg-primary-container transition-colors"
            >
              Close Specs
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
