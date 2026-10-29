import React, { useState } from 'react';

export default function JoinCommunityModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    github: '',
    interest: 'Open Source Pods'
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/40 backdrop-blur-md transition-all duration-200">
      <div className="relative w-full max-w-lg bg-surface-container-lowest rounded-2xl shadow-2xl border border-outline-variant/30 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="h-1.5 w-full bg-gradient-to-r from-secondary-container via-primary to-tertiary" />

        <div className="p-6 md:p-8 space-y-6">
          {!submitted ? (
            <>
              <div className="flex items-start justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-secondary-fixed/50 font-mono-sm text-xs text-on-secondary-fixed-variant">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                    COHORT 08 ONBOARDING
                  </div>
                  <h2 className="font-headline-md text-headline-md text-on-surface mt-2">
                    Join The Code Vibe
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Connect with 12,400+ builders, gain instant access to private pods, and start shipping.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-outline hover:text-on-surface p-1 rounded-lg hover:bg-surface-container transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="font-label-ui text-label-ui text-on-surface">
                    Full Name or Handle
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Chen (@achen)"
                    className="w-full px-3.5 py-2.5 bg-surface rounded-lg font-body-md text-body-md text-on-surface outline-none ring-1 ring-outline-variant focus:ring-2 focus:ring-primary-container transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-label-ui text-label-ui text-on-surface">
                    Developer Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 bg-surface rounded-lg font-body-md text-body-md text-on-surface outline-none ring-1 ring-outline-variant focus:ring-2 focus:ring-primary-container transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-label-ui text-label-ui text-on-surface">
                    GitHub Profile
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                    placeholder="https://github.com/username"
                    className="w-full px-3.5 py-2.5 bg-surface rounded-lg font-body-md text-body-md text-on-surface outline-none ring-1 ring-outline-variant focus:ring-2 focus:ring-primary-container transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-label-ui text-label-ui text-on-surface">
                    Primary Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-surface rounded-lg font-body-md text-body-md text-on-surface outline-none ring-1 ring-outline-variant focus:ring-2 focus:ring-primary-container transition-all"
                  >
                    <option value="Open Source Pods">Open Source Pods & Co-Building</option>
                    <option value="Pair Programming">Weekly Pair Programming Circles</option>
                    <option value="Hackathons">Flagship Hackathons & Sprints</option>
                    <option value="Tech Talks">Deep-Dive Tech Talks & Workshops</option>
                  </select>
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
                    className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-secondary-container via-primary to-tertiary text-on-primary font-label-ui text-label-ui shadow-sm hover:opacity-95 active:scale-95 transition-all cursor-pointer"
                  >
                    Join Cohort 08
                  </button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-secondary-fixed/50 flex items-center justify-center text-primary mx-auto">
                <span className="material-symbols-outlined text-4xl">verified</span>
              </div>
              <div className="space-y-1">
                <h3 className="font-headline-md text-headline-md text-on-surface">
                  Welcome aboard, {formData.name || 'Builder'}!
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mx-auto">
                  Your onboarding credentials and Discord server invite have been dispatched to{' '}
                  <strong className="text-on-surface">{formData.email}</strong>.
                </p>
              </div>
              <div className="p-3 bg-surface-container rounded-lg font-mono-sm text-xs text-on-surface-variant flex items-center justify-between">
                <span>Verification ID: <code className="text-primary font-semibold">VIBE-ID-9921</code></span>
                <span className="text-secondary font-medium">Auto-Synced</span>
              </div>
              <button
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 rounded-lg bg-primary text-on-primary font-label-ui text-label-ui cursor-pointer hover:bg-primary-container transition-all"
              >
                Go to Dashboard
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
