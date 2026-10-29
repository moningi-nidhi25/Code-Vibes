import React from 'react';
import { useNavigate } from 'react-router-dom';

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
    primary: 'bg-primary-fixed text-on-primary-fixed',
    secondary: 'bg-secondary-fixed text-on-secondary-fixed',
    tertiary: 'bg-tertiary-fixed text-on-tertiary-fixed',
    surface: 'bg-surface-container-highest text-on-surface',
  };

  return (
    <article className="project-card rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-all p-6 lg:p-8 flex flex-col gap-6 relative overflow-hidden backdrop-blur-xl border border-outline-variant/30">
      {/* Visual Accent Left Edge */}
      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-primary via-secondary-container to-tertiary" />

      {/* Header section with icon, title, meta & maintainers */}
      <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center shrink-0 shadow-sm">
            <span className={`material-symbols-outlined text-3xl ${project.iconColor || 'text-primary'}`}>
              {project.icon}
            </span>
          </div>

          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className={`px-2.5 py-0.5 rounded-full font-mono-sm text-mono-sm uppercase tracking-wider ${badgeColors[project.badgeType] || badgeColors.primary}`}>
                {project.badge}
              </span>
              <span className="px-2 py-0.5 rounded-full font-mono-sm text-mono-sm bg-surface-container-high text-on-surface-variant flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                {project.statusText}
              </span>
              <span className="font-mono-sm text-mono-sm text-outline">
                · {project.applicationsText}
              </span>
            </div>

            <h2 className="font-headline-md text-headline-md text-on-surface">
              {project.title}
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-3xl leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Maintainers cluster */}
        <div className="flex items-center gap-2 self-start lg:self-center shrink-0">
          <div className="flex -space-x-2 overflow-hidden">
            {project.maintainerAvatars?.map((avatar, idx) => (
              <img
                key={idx}
                className="inline-block h-8 w-8 rounded-full ring-2 ring-surface-container-lowest object-cover"
                src={avatar}
                alt="Maintainer"
              />
            ))}
          </div>
          <span className="font-mono-sm text-mono-sm text-on-surface-variant font-medium">
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
            className="px-2.5 py-1 rounded bg-surface-container font-mono-sm text-mono-sm text-on-surface"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Open Roles Split Bento Panel */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.roleSpots?.map((spot, idx) => (
          <div
            key={idx}
            className={`p-4 rounded-xl bg-surface-container-low flex flex-col justify-between gap-3 ${spot.colSpan || ''}`}
          >
            <div className="flex items-start justify-between">
              <div>
                <div className={`font-label-ui text-label-ui uppercase tracking-wide ${spot.tagColor}`}>
                  {spot.tag}
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mt-0.5">
                  {spot.title}
                </h3>
              </div>
              <span className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-mono-sm text-mono-sm font-semibold shrink-0">
                {spot.openings}
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {spot.requirements}
            </p>
          </div>
        ))}
      </div>

      {/* Card Footprint & CTA Actions */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
        <div className="flex flex-wrap items-center gap-4 text-on-surface-variant font-mono-sm text-mono-sm w-full sm:w-auto">
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base text-outline">fork_right</span>
            {project.forks}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base text-outline">star</span>
            {project.stars}
          </span>
          <span className="flex items-center gap-1.5">
            <span className="material-symbols-outlined text-base text-outline">schedule</span>
            {project.commitment}
          </span>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
          <button
            type="button"
            onClick={handleSpecsClick}
            className="px-4 py-2 rounded-lg bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-ui text-label-ui transition-colors cursor-pointer border border-outline-variant/30"
          >
            View Project Specs
          </button>
          <button
            type="button"
            onClick={() => onApply?.(project)}
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-secondary-container via-primary to-tertiary text-on-primary font-label-ui text-label-ui shadow-sm hover:opacity-95 active:scale-95 transition-all cursor-pointer"
          >
            Apply to Collaborate
          </button>
        </div>
      </div>
    </article>
  );
}
