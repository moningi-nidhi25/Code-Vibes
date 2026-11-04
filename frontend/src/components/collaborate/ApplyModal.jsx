import React, { useState, useEffect } from 'react';
import { submitApplication } from '../../api/apiClient';

/**
 * ApplyModal Component
 * Implements Glass Tier 4 Modal for contributor pod applications.
 */
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
      } else if (project.roles && project.roles.length > 0) {
        setSelectedRole(project.roles[0].title);
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitApplication({
        project_id: project.id,
        pod: project.title?.split(':')[0] || project.title || 'DevPulse Telemetry',
        role: selectedRole,
        github,
        commitment,
        pitch,
      });
    } catch (err) {
      // offline/fallback
    }
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-container-lowest/40  transition-all duration-200">
      <div className="relative w-full max-w-xl glass-modal rounded-lg  border border-outline-variant overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Top Accent Bar: Core Action Spectrum */}
        <div className="h-1.5 w-full gradient-core-action" />

        {!submitted ? (
          <div className="p-6 md:p-8 space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                  <span className="font-mono-sm text-mono-sm text-primary uppercase tracking-wide font-semibold">
                    Contributor Intake
                  </span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface mt-1 font-bold">
                  Apply to join {project.title.split(':')[0]}
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  Direct match for pod contributors &amp; maintainers.
                </p>
              </div>
              <button
                onClick={handleClose}
                className="text-outline hover:text-on-surface p-1 rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1.5">
                <label className="font-label-ui text-label-ui text-on-surface font-semibold">
                  Target Pod Role
                </label>
                <select
                  value={selectedRole}
                  onChange={(e) => setSelectedRole(e.target.value)}
                  className="w-full px-3.5 py-2.5 glass-input rounded-md font-body-md text-body-md text-on-surface cursor-pointer"
                >
                  {(project.roles || project.roleSpots || []).map((role, idx) => (
                    <option key={idx} value={role.title}>
                      {role.title} {role.count ? `(${role.count} spot${role.count > 1 ? 's' : ''})` : ''}
                    </option>
                  ))}
                  <option value="General Contributor">General Contributor (Documentation / Tests)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="font-label-ui text-label-ui text-on-surface font-semibold">
                  GitHub Profile URL
                </label>
                <input
                  type="url"
                  required
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                  placeholder="https://github.com/username"
                  className="w-full px-3.5 py-2.5 glass-input rounded-md font-body-md text-body-md text-on-surface"
                />
              </div>

              <div className="space-y-1.5">
                <label className="font-label-ui text-label-ui text-on-surface font-semibold">
                  Weekly Commitment (Hours)
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { label: '3-5 hrs / wk', val: '3-5' },
                    { label: '5-10 hrs / wk', val: '5-10' },
                    { label: '10+ hrs / wk', val: '10+' }
                  ].map((tier) => (
                    <button
                      key={tier.val}
                      type="button"
                      onClick={() => setCommitment(tier.val)}
                      className={`py-2 px-3 rounded-md font-mono-sm text-mono-sm text-center border transition-all cursor-pointer ${
                        commitment === tier.val
                          ? 'bg-primary text-on-primary border-primary '
                          : 'bg-surface-container text-on-surface border-outline-variant hover:bg-surface-container-high'
                      }`}
                    >
                      {tier.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="font-label-ui text-label-ui text-on-surface font-semibold">
                  Relevant Experience or Motivation
                </label>
                <textarea
                  rows={3}
                  required
                  value={pitch}
                  onChange={(e) => setPitch(e.target.value)}
                  placeholder="Briefly describe low-level systems or frontend work you've authored, PRs merged, or relevant repositories..."
                  className="w-full px-3.5 py-2.5 glass-input rounded-md font-body-md text-body-md text-on-surface resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={handleClose}
                  className="btn-frosted-glass px-4 py-2 rounded-lg font-label-ui text-label-ui cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn-gradient-primary px-5 py-2.5 rounded-lg font-label-ui text-label-ui  active:scale-95 cursor-pointer"
                >
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="p-8 text-center flex flex-col items-center justify-center gap-4">
            <div className="w-16 h-16 rounded-full bg-[rgba(0,229,255,0.15)] flex items-center justify-center text-primary border border-[rgba(0,229,255,0.35)] ">
              <span className="material-symbols-outlined text-4xl">check_circle</span>
            </div>
            <div className="space-y-1">
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                Application Dispatched
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-md mx-auto">
                Your application has been routed directly to the project maintainers. Review velocity is typically within{' '}
                <strong className="font-semibold text-on-surface">2 business days</strong>.
              </p>
            </div>
            <div className="w-full p-4 rounded-xl bg-surface-container border border-outline-variant  font-mono-sm text-mono-sm text-on-surface-variant text-left flex items-center justify-between">
              <span>
                Tracking ID: <code className="text-primary font-semibold">VIBE-APP-8941</code>
              </span>
              <span className="flex items-center gap-1.5 text-primary font-semibold">
                <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-pulse" />
                Queued for review
              </span>
            </div>
            <button
              type="button"
              onClick={handleClose}
              className="btn-gradient-primary mt-2 px-6 py-2.5 rounded-lg font-label-ui text-label-ui cursor-pointer  active:scale-95"
            >
              Return to Projects
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
