import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * ProjectCard Component
 * Implements the Electric Glass Standard Bento Card specification:
 * - rgba(255, 255, 255, 0.80) fill with 16px backdrop-blur, specular top border.
 * - Directional Cobalt glow on hover.
 * - Precision JetBrains Mono telemetry chips and role badges.
 */
export default function ProjectCard({
  project,
  onApply,
  onViewSpecs
}) {
  const navigate = useNavigate();

  const handleSpecsClick = () => {
    if (project.specsRoute) {
      navigate(project.specsRoute);
    } else {
      onViewSpecs?.(project);
    }
  };

  const badgeColors = {
    primary: 'bg-primary-fixed text-on-primary-fixed border border-primary/20',
    secondary: 'bg-[rgba(0,229,255,0.12)] border border-[rgba(0,229,255,0.30)] text-[#006875]',
    tertiary: 'bg-[rgba(179,36,229,0.12)] border border-[rgba(179,36,229,0.30)] text-[#9700c6]',
    surface: 'bg-white/90 text-on-surface border border-outline-variant/40',
  };

  return (
    <article className="project-card rounded-xl bento-card p-6 lg:p-8 flex flex-col gap-6 relative overflow-hidden">
      {/* Visual Accent Left Edge: Core Action Spectrum */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 gradient-core-action" />

      {/* Header section with icon, title, meta & maintainers */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-white/90 border border-white/80 flex items-center justify-center shrink-0 shadow-sm">
            <span className={`material-symbols-outlined text-3xl ${project.iconColor || 'text-primary'}`}>
              {project.icon}
            </span>
          </div>

          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-full font-mono-sm text-mono-sm uppercase tracking-wider font-semibold ${badgeColors[project.badgeType] || badgeColors.primary}`}>
                {project.badge}
              </span>
              <span className="px-2.5 py-0.5 rounded-full font-mono-sm text-mono-sm bg-white/70 border border-white/60 text-on-surface-variant flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] animate-pulse" />
                {project.statusText}
              </span>
              <span className="font-mono-sm text-mono-sm text-outline">
                · {project.applicationsText}
              </span>
            </div>

            <h2 className="font-headline-md text-headline-md text-on-surface font-bold tracking-tight">
              {project.title}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Maintainers cluster */}
        <div className="flex items-center gap-2 self-start lg:self-center shrink-0 bg-white/60 px-3 py-1.5 rounded-full border border-white/80 shadow-xs">
          <div className="flex -space-x-2 overflow-hidden">
            {project.maintainerAvatars?.map((avatar, idx) => (
              <img
                key={idx}
                className="inline-block h-8 w-8 rounded-full ring-2 ring-white object-cover"
                src={avatar}
                alt="Maintainer"
              />
            ))}
          </div>
          <span className="font-mono-sm text-mono-sm text-on-surface-variant font-semibold">
            {project.maintainers}
          </span>
        </div>
      </div>

      {/* Stack Badges */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-mono-sm text-mono-sm font-semibold text-outline uppercase tracking-wider mr-1">
          Stack:
        </span>
        {project.techs?.map((tech, idx) => (
          <span
            key={idx}
            className="px-2.5 py-1 rounded-md bg-white/85 border border-[#c2c6d7]/40 font-mono-sm text-mono-sm text-on-surface font-medium shadow-xs"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Open Roles & Action Footer */}
      <div className="pt-4 border-t border-[#c2c6d7]/30 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-mono-sm text-mono-sm font-semibold text-outline uppercase tracking-wider mr-1">
            Open Spots:
          </span>
          {project.roles?.map((role, idx) => (
            <span
              key={idx}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-mono-sm text-mono-sm bg-white/70 border border-white/80 text-on-surface shadow-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#2979FF]" />
              <span className="font-semibold">{role.title}</span>
              <span className="text-outline">({role.count})</span>
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <button
            onClick={handleSpecsClick}
            type="button"
            className="btn-frosted-glass px-4 py-2 rounded-lg font-label-ui text-label-ui flex items-center gap-1.5 shadow-xs cursor-pointer"
          >
            <span className="material-symbols-outlined text-base">architecture</span>
            <span>View Specs</span>
          </button>
          <button
            onClick={() => onApply?.(project)}
            type="button"
            className="btn-gradient-primary px-5 py-2 rounded-lg font-label-ui text-label-ui flex items-center gap-1.5 shadow-sm active:scale-95 cursor-pointer"
          >
            <span>Apply to Pod</span>
            <span className="material-symbols-outlined text-base">arrow_forward</span>
          </button>
        </div>
      </div>
    </article>
  );
}
