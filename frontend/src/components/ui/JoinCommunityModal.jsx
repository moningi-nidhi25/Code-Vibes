import React, { useState } from 'react';
import Button from './Button';

/**
 * JoinCommunityModal Component
 * Implements Glass Tier 4 modal (rgba(255, 255, 255, 0.92), 40px blur, specular highlight borders, glass inputs).
 */
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
    window.open('https://chat.whatsapp.com/Jp2xLed8Z7q5wpljKA2SKe', '_blank', 'noopener,noreferrer');
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0B1120]/40 backdrop-blur-md transition-all duration-200">
      <div className="relative w-full max-w-lg glass-modal rounded-2xl shadow-2xl border border-white/80 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Core Action Linear Accent Bar */}
        <div className="h-1.5 w-full gradient-core-action" />

        <div className="p-6 md:p-8 space-y-6">
          {!submitted ? (
            <>
              <div className="flex items-start justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[rgba(0,229,255,0.12)] border border-[rgba(0,229,255,0.30)] font-mono-sm text-xs text-[#006875] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                    COHORT 08 ONBOARDING
                  </div>
                  <h2 className="font-headline-md text-headline-md text-on-surface mt-2 font-bold">
                    Join The Code Vibe
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                    Connect with 12,400+ builders, gain instant access to private pods, and start shipping.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="text-outline hover:text-on-surface p-1 rounded-lg hover:bg-black/5 transition-colors cursor-pointer"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <label className="font-label-ui text-label-ui text-on-surface font-semibold">
                    Full Name or Handle
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex Chen (@achen)"
                    className="w-full px-3.5 py-2.5 glass-input rounded-md font-body-md text-body-md text-on-surface"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-label-ui text-label-ui text-on-surface font-semibold">
                    Developer Email
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className="w-full px-3.5 py-2.5 glass-input rounded-md font-body-md text-body-md text-on-surface"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-label-ui text-label-ui text-on-surface font-semibold">
                    GitHub Profile
                  </label>
                  <input
                    type="url"
                    required
                    value={formData.github}
                    onChange={(e) => setFormData({ ...formData, github: e.target.value })}
                    placeholder="https://github.com/alexchen"
                    className="w-full px-3.5 py-2.5 glass-input rounded-md font-body-md text-body-md text-on-surface"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="font-label-ui text-label-ui text-on-surface font-semibold">
                    Primary Area of Interest
                  </label>
                  <select
                    value={formData.interest}
                    onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                    className="w-full px-3.5 py-2.5 glass-input rounded-md font-body-md text-body-md text-on-surface cursor-pointer"
                  >
                    <option value="Open Source Pods">Open Source Engineering Pods</option>
                    <option value="Masterclass Workshops">Deep-Dive Technical Workshops</option>
                    <option value="Incubation Mentorship">Project Incubation & Mentorship</option>
                    <option value="Hackathons">Competitive Hackathons & Sprints</option>
                  </select>
                </div>

                <div className="pt-2 flex items-center justify-end gap-3">
                  <Button
                    variant="ghost"
                    onClick={onClose}
                    type="button"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="gradient"
                    size="md"
                    icon="bolt"
                    iconPosition="right"
                  >
                    Request Pod Access
                  </Button>
                </div>
              </form>
            </>
          ) : (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[rgba(0,229,255,0.15)] text-[#006875] border border-[rgba(0,229,255,0.30)] flex items-center justify-center mx-auto shadow-glow-cyan">
                <span className="material-symbols-outlined text-3xl">verified</span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface font-bold">
                Application Received!
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mx-auto">
                Welcome to the collective, <span className="font-semibold text-on-surface">{formData.name}</span>. An invite token has been dispatched to your email.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href="https://chat.whatsapp.com/Jp2xLed8Z7q5wpljKA2SKe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gradient-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold"
                >
                  <span>Open WhatsApp Group</span>
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
                <Button
                  variant="ghost"
                  onClick={handleReset}
                  size="md"
                >
                  Close
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
