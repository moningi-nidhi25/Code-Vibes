import React, { useState } from 'react';

/**
 * SubmitProjectModal Component
 * Implements Glass Tier 4 Modal for community project submissions.
 */
export default function SubmitProjectModal({ isOpen, onClose, onProjectCreated }) {
  const [formData, setFormData] = useState({
    title: '',
    pitch: '',
    stack: '',
    repoUrl: '',
    roles: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onProjectCreated?.(formData);
      setSubmitted(false);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1120]/40 backdrop-blur-md transition-all duration-200">
      <div className="relative w-full max-w-xl glass-modal rounded-2xl shadow-2xl border border-white/80 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="h-1.5 w-full gradient-core-action" />

        <div className="p-6 md:p-8 space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                <span className="font-mono-sm text-mono-sm text-[#0056c5] uppercase tracking-wide font-semibold">
                  Community Launchpad
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface mt-1 font-bold">
                Submit an Open Project
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-outline hover:text-on-surface p-1 rounded-lg hover:bg-black/5 cursor-pointer transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="font-label-ui text-label-ui text-on-surface font-semibold">
                  Project Title
                </label>
                <input
                  type="text"
                  required
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="e.g. NexusDB - Vector-native edge cache"
                  className="w-full px-3.5 py-2.5 glass-input rounded-md font-body-md text-body-md text-on-surface"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-label-ui text-label-ui text-on-surface font-semibold">
                  One-line Technical Pitch
                </label>
                <textarea
                  rows={2}
                  required
                  value={formData.pitch}
                  onChange={(e) => setFormData({ ...formData, pitch: e.target.value })}
                  placeholder="What does it do, and what problem does it solve with high throughput?"
                  className="w-full px-3.5 py-2.5 glass-input rounded-md font-body-md text-body-md text-on-surface resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-label-ui text-label-ui text-on-surface font-semibold">
                    Core Tech Stack (comma separated)
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.stack}
                    onChange={(e) => setFormData({ ...formData, stack: e.target.value })}
                    placeholder="Rust, WebAssembly, Tokyo"
                    className="w-full px-3.5 py-2.5 glass-input rounded-md font-body-md text-body-md text-on-surface"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-label-ui text-label-ui text-on-surface font-semibold">
                    Repository URL (GitHub / GitLab)
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.repoUrl}
                    onChange={(e) => setFormData({ ...formData, repoUrl: e.target.value })}
                    placeholder="https://github.com/org/repo"
                    className="w-full px-3.5 py-2.5 glass-input rounded-md font-body-md text-body-md text-on-surface"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-label-ui text-label-ui text-on-surface font-semibold">
                  Roles Needed (comma separated)
                </label>
                <input
                  type="text"
                  required
                  value={formData.roles}
                  onChange={(e) => setFormData({ ...formData, roles: e.target.value })}
                  placeholder="e.g. Systems Engineer (2), Benchmark Specialist (1)"
                  className="w-full px-3.5 py-2.5 glass-input rounded-md font-body-md text-body-md text-on-surface"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="btn-frosted-glass px-4 py-2 rounded-lg font-label-ui text-label-ui cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-gradient-primary px-5 py-2.5 rounded-lg font-label-ui text-label-ui shadow-sm active:scale-95 cursor-pointer"
                >
                  Dispatch Pod Submission
                </button>
              </div>
            </form>
          ) : (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[rgba(0,229,255,0.15)] flex items-center justify-center text-[#006875] border border-[rgba(0,229,255,0.35)] shadow-glow-cyan mx-auto">
                <span className="material-symbols-outlined text-4xl">check</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                Project Dispatched to Intake Queue
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mx-auto">
                Your pod has been indexed into the community review stream. Check the admin console or your notifications.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
