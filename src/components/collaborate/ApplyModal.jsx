import React, { useState, useEffect } from 'react';

export default function ApplyModal({
  isOpen,
  onClose,
  project,
  defaultRole = ''
}) {
  const [selectedRole, setSelectedRole] = useState('');
  const [github, setGithub] = useState('');
  const [commitment, setCommitment] = useState('5-10');
  const [pitch, setPitch] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (project) {
      if (defaultRole) {
        setSelectedRole(defaultRole);
      } else if (project.roleSpots && project.roleSpots.length > 0) {
        setSelectedRole(project.roleSpots[0].title);
      } else {
        setSelectedRole('General Contributor');
      }
      setSubmitted(false);
      setGithub('');
      setPitch('');
    }
  }, [project, defaultRole, isOpen]);

  if (!isOpen || !project) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-on-surface/40 backdrop-blur-sm transition-all duration-200">
      <div className="relative w-full max-w-xl bg-surface-container-lowest rounded-xl shadow-xl border border-outline-variant/30 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Top Accent Bar */}
        <div className="h-1.5 w-full bg-gradient-to-r from-primary via-secondary-container to-tertiary" />

        {!submitted ? (
          <div className="p-6 md:p-8 space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary-container" />
                  <span className="font-mono-sm text-mono-sm text-primary uppercase tracking-wide">
                    Contributor Intake
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface mt-1">
                  Apply to join {project.title.split(':')[0]} team
                </h2>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="text-outline hover:text-on-surface p-1 rounded-lg hover:bg-surface-container cursor-pointer transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Role Selection */}
              <div className="space-y-1.5">
                <label className="font-label-ui text-label-ui text-on-surface">
                  Target Role / Discipline
                </label>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-surface rounded-lg font-body-md text-body-md text-on-surface outline-none ring-1 ring-outline-variant focus:ring-2 focus:ring-primary-container transition-all"
                >
                  {project.roleSpots?.map((spot, idx) => (
                    <option key={idx} value={spot.title}>
                      {spot.title}
                    </option>
                  ))}
                  {(!project.roleSpots || project.roleSpots.length === 0) && (
                    <option value="General Contributor">General Contributor</option>
                  )}
                </select>
              </div>

              {/* GitHub Profile */}
              <div className="space-y-1.5">
                <label className="font-label-ui text-label-ui text-on-surface">
                  GitHub Profile Link
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg">
                    code
                  </span>
                  <input
                    type="url"
                    required
                    value={github}
                    onChange={(e) => setGithub(e.target.value)}
                    placeholder="https://github.com/your-username"
                    className="w-full pl-10 pr-3.5 py-2.5 bg-surface rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline outline-none ring-1 ring-outline-variant focus:ring-2 focus:ring-primary-container transition-all"
                  />
                </div>
              </div>

              {/* Availability */}
              <div className="space-y-1.5">
                <label className="font-label-ui text-label-ui text-on-surface">
                  Available Commitment (Hours / Week)
                </label>
                <select
                  value={commitment}
                  onChange={(e) => setCommitment(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-surface rounded-lg font-body-md text-body-md text-on-surface outline-none ring-1 ring-outline-variant focus:ring-2 focus:ring-primary-container transition-all"
                >
                  <option value="5-10">5 - 10 hrs / week (Part-time sprint)</option>
                  <option value="10-20">10 - 20 hrs / week (Core contributor)</option>
                  <option value="20+">20+ hrs / week (Dedicated sprint lead)</option>
                </select>
              </div>

              {/* Experience Pitch */}
              <div className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="font-label-ui text-label-ui text-on-surface">
                    Experience &amp; Why You're Excited
                  </label>
                  <span className="font-mono-sm text-mono-sm text-outline">Max 300 words</span>
                </div>
                <textarea
                  required
                  rows={3}
                  value={pitch}
                  onChange={(e) => setPitch(e.target.value)}
                  placeholder="Briefly describe low-level systems or frontend work you've authored, PRs merged, or relevant repositories..."
                  className="w-full px-3.5 py-2.5 bg-surface rounded-lg font-body-md text-body-md text-on-surface placeholder:text-outline outline-none ring-1 ring-outline-variant focus:ring-2 focus:ring-primary-container transition-all resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-4 py-2 rounded-lg bg-surface-container-high text-on-surface font-label-ui text-label-ui hover:bg-surface-container-highest transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-secondary-container via-primary to-tertiary text-on-primary font-label-ui text-label-ui shadow-sm hover:opacity-95 active:scale-95 transition-all cursor-pointer"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>
            <div className="space-y-1">
              <h3 className="font-headline-md text-headline-md text-on-surface">
                Application Dispatched
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">
                Your application has been routed directly to the project maintainers. Review velocity is typically within{' '}
                <strong className="font-semibold text-on-surface">2 business days</strong>.
              </p>
            </div>
            <div className="w-full p-4 rounded-lg bg-surface-container font-mono-sm text-mono-sm text-on-surface-variant text-left flex items-center justify-between">
              <span>
                Tracking ID: <code className="text-primary font-semibold">VIBE-APP-8941</code>
              </span>
              <span className="flex items-center gap-1 text-secondary">
                <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
                Queued for maintainer review
              </span>
            </div>
            <button
              type="button"
              onClick={handleClose}
              className="mt-2 px-6 py-2 rounded-lg bg-primary text-on-primary font-label-ui text-label-ui cursor-pointer hover:bg-primary-container transition-colors"
            >
              Return to Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
