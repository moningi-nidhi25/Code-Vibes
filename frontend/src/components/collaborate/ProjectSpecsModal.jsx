import React, { useState } from 'react';

/**
 * ProjectSpecsModal Component
 * Implements Glass Tier 4 modal for rapid architecture blueprint inspection.
 */
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-container-lowest/40  transition-all duration-200">
      <div className="relative w-full max-w-2xl glass-modal rounded-lg  border border-outline-variant overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="h-1.5 w-full gradient-core-action" />

        <div className="p-6 md:p-8 space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <span className="font-mono-sm text-mono-sm text-primary font-semibold uppercase tracking-wider">
                Architecture Brief &amp; Requirements
              </span>
              <h2 className="font-headline-md text-headline-md text-on-surface mt-1 font-bold">
                {project.title?.split(':')[0] || 'Project'} Blueprint Specifications
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-outline hover:text-on-surface p-1 rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          <div className="space-y-4 font-body-md text-body-md text-on-surface-variant max-h-[60vh] overflow-y-auto pr-2">
            <div className="p-4 rounded-xl bg-surface-container border border-outline-variant  space-y-2">
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Target Architecture
              </h4>
              <p className="leading-relaxed">
                Components follow strict zero-copy ingestion patterns with decoupled telemetry rings. Low latency syscall inspection utilizes kernel BPF maps before piping into regional Kafka buffers.
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Development Milestones
              </h4>
              <ul className="space-y-1.5 list-disc list-inside font-body-sm text-body-sm leading-relaxed">
                <li>
                  <strong className="text-on-surface font-semibold">Milestone 1:</strong> Trace Collector Kernel Probe implementation (Weeks 1-3)
                </li>
                <li>
                  <strong className="text-on-surface font-semibold">Milestone 2:</strong> gRPC Streaming Channel &amp; Session multiplexing (Weeks 4-6)
                </li>
                <li>
                  <strong className="text-on-surface font-semibold">Milestone 3:</strong> Canvas WebGL Node Visualizer Engine (Weeks 7-9)
                </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Local Sandbox Quickstart
              </h4>
              <div className="p-3 rounded-lg bg-surface-container border border-outline-variant font-mono-sm text-mono-sm text-primary flex items-center justify-between gap-3 ">
                <code className="truncate">{cloneCmd}</code>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-2.5 py-1 rounded-md bg-surface-container-high border border-outline-variant text-on-surface hover:text-primary flex items-center gap-1 text-xs shrink-0 cursor-pointer "
                >
                  <span className="material-symbols-outlined text-[14px]">
                    {copied ? 'check' : 'content_copy'}
                  </span>
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>
          </div>

          <div className="pt-2 border-t border-outline-variant flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="btn-frosted-glass px-5 py-2.5 rounded-lg font-label-ui text-label-ui cursor-pointer"
            >
              Close Specifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
