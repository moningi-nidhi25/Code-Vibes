import React, { useState } from 'react';

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/40 backdrop-blur-sm transition-all duration-200">
      <div className="relative w-full max-w-xl bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant/30 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="h-1.5 w-full bg-gradient-to-r from-secondary-container via-primary to-tertiary" />

        <div className="p-6 md:p-8 space-y-6">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary-container" />
                <span className="font-mono-sm text-mono-sm text-primary uppercase tracking-wide">
                  Community Launchpad
                </span>
              </div>
              <h2 className="font-headline-md text-headline-md text-on-surface mt-1">
                Submit an Open Project
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

          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="font-label-ui text-label-ui text-on-surface">
                  Project Title
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., HyperTrace: Distributed Profiler"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-surface rounded-lg font-body-md text-body-md text-on-surface outline-none ring-1 ring-outline-variant focus:ring-2 focus:ring-primary-container transition-all"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-label-ui text-label-ui text-on-surface">
                  One-Sentence Elevator Pitch
                </label>
                <textarea
                  required
                  rows={2}
                  placeholder="Explain the technical problem and architectural vision in 140 chars..."
                  value={formData.pitch}
                  onChange={(e) => setFormData({ ...formData, pitch: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-surface rounded-lg font-body-md text-body-md text-on-surface outline-none ring-1 ring-outline-variant focus:ring-2 focus:ring-primary-container transition-all resize-none"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="font-label-ui text-label-ui text-on-surface">
                    Primary Stack
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Rust, WebAssembly, Go"
                    value={formData.stack}
                    onChange={(e) => setFormData({ ...formData, stack: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-surface rounded-lg font-body-md text-body-md text-on-surface outline-none ring-1 ring-outline-variant focus:ring-2 focus:ring-primary-container transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="font-label-ui text-label-ui text-on-surface">
                    Repository URL
                  </label>
                  <input
                    type="url"
                    required
                    placeholder="https://github.com/org/repo"
                    value={formData.repoUrl}
                    onChange={(e) => setFormData({ ...formData, repoUrl: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-surface rounded-lg font-body-md text-body-md text-on-surface outline-none ring-1 ring-outline-variant focus:ring-2 focus:ring-primary-container transition-all"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-label-ui text-label-ui text-on-surface">
                  Open Contributor Roles Needed
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g., Systems Architect (1), UI Performance (1)"
                  value={formData.roles}
                  onChange={(e) => setFormData({ ...formData, roles: e.target.value })}
                  className="w-full px-3.5 py-2.5 bg-surface rounded-lg font-body-md text-body-md text-on-surface outline-none ring-1 ring-outline-variant focus:ring-2 focus:ring-primary-container transition-all"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-lg bg-surface-container-high text-on-surface font-label-ui text-label-ui hover:bg-surface-container-highest transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-tertiary text-on-primary font-label-ui text-label-ui shadow-sm hover:opacity-95 active:scale-95 transition-all cursor-pointer"
                >
                  Dispatch to Community Review
                </button>
              </div>
            </form>
          ) : (
            <div className="p-6 text-center space-y-3">
              <span className="material-symbols-outlined text-4xl text-primary animate-bounce">
                rocket_launch
              </span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface">
                Project Dispatched to Community SIG!
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Verification link dispatched to your developer profile. Review is underway.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
