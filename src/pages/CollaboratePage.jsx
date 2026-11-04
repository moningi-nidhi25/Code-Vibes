import React, { useState } from 'react';
import ProjectCard from '../components/collaborate/ProjectCard';
import ApplyModal from '../components/collaborate/ApplyModal';
import SubmitProjectModal from '../components/collaborate/SubmitProjectModal';
import ProjectSpecsModal from '../components/collaborate/ProjectSpecsModal';
import SearchBar from '../components/ui/SearchBar';
import Toast from '../components/ui/Toast';
import { TELEMETRY_METRICS, COLLABORATE_PROJECTS } from '../data/mockData';

/**
 * CollaboratePage Component
 * Implements Electric Glass & Precision Syntax for collaborative pods,
 * telemetry metrics, and project application pipelines.
 */
export default function CollaboratePage() {
  const [projects, setProjects] = useState(COLLABORATE_PROJECTS);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTech, setActiveTech] = useState('all');
  const [activeRole, setActiveRole] = useState('all');
  const [sortBy, setSortBy] = useState('Recent First');

  // Modal states
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [submitModalOpen, setSubmitModalOpen] = useState(false);
  const [specsModalOpen, setSpecsModalOpen] = useState(false);
  const [specsProject, setSpecsProject] = useState(null);

  // Toast
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3500);
  };

  const techFilters = [
    { label: 'All', value: 'all' },
    { label: 'Rust', value: 'Rust' },
    { label: 'TypeScript', value: 'TypeScript' },
    { label: 'Python', value: 'Python' },
    { label: 'Go', value: 'Go' },
    { label: 'React / Next.js', value: 'React' },
    { label: 'AI / ML', value: 'AI' },
    { label: 'Solidity', value: 'Solidity' },
  ];

  const roleFilters = [
    { label: 'Any Role', value: 'all' },
    { label: 'Frontend Dev', value: 'Frontend Dev' },
    { label: 'Backend / Systems', value: 'Backend / Systems' },
    { label: 'AI Engineer', value: 'AI Engineer' },
    { label: 'Product Designer', value: 'Product Designer' },
    { label: 'DevOps', value: 'DevOps' },
  ];

  const handleOpenApply = (proj) => {
    setSelectedProject(proj);
    setApplyModalOpen(true);
  };

  const handleOpenSpecs = (proj) => {
    setSpecsProject(proj);
    setSpecsModalOpen(true);
  };

  const handleNewProjectCreated = (newProjData) => {
    const newProj = {
      id: newProjData.title.toLowerCase().replace(/[^a-z0-9]/g, '-'),
      title: newProjData.title,
      badge: 'Community Pod',
      badgeType: 'primary',
      statusText: 'Review Ingest',
      applicationsText: '1 application received',
      description: newProjData.pitch,
      icon: 'rocket_launch',
      iconColor: 'text-primary',
      techs: newProjData.stack.split(',').map((s) => s.trim()),
      roles: newProjData.roles.split(',').map((s) => s.trim()),
      maintainers: 'You (@builder) & Community Contributors',
      maintainerAvatars: [
        'https://lh3.googleusercontent.com/aida-public/AB6AXuDyuVx_d7jSI4eKcNT-HnXOtS7osOz_D-zjSjTPwJm6r5FVkIaYJu8ROcCoyl4YutObKhxihlJdtxTtxgfIQCtIGu4xH155rF6pK-VIaP92os1u_b8Gdviogsib4yBkI16_hG0F8buJ33uda__jWwAEGn_hr191O9_sjEZbYG-cosQ4piHHkHWPbckTPxYc9l5SN_VbBWX4c14Rd3DCR6JEQdBF5AO9sm1TYn0z9W9F6WVe_kJq3zhV',
      ],
      roleSpots: [
        {
          tag: 'Open Spot',
          tagColor: 'text-primary',
          title: newProjData.roles,
          openings: '1 Opening',
          requirements: 'Initial sprint bootstrap and repo architecture setup.',
        },
      ],
      forks: '0 Forks',
      stars: '1 Star',
      commitment: '~5 hrs/week',
      specsRoute: null,
    };
    setProjects([newProj, ...projects]);
    showToast(`Project "${newProjData.title}" dispatched to Community review!`);
  };

  const resetAllFilters = () => {
    setSearchQuery('');
    setActiveTech('all');
    setActiveRole('all');
  };

  const filteredProjects = projects.filter((project) => {
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.techs.some((t) => t.toLowerCase().includes(query));

    const matchesTech =
      activeTech === 'all' ||
      project.techs.some((t) => t.toLowerCase().includes(activeTech.toLowerCase()));

    const matchesRole =
      activeRole === 'all' ||
      project.roles.some((r) => r.toLowerCase().includes(activeRole.toLowerCase()));

    return matchesSearch && matchesTech && matchesRole;
  });

  return (
    <div className="flex flex-col w-full">
      <Toast
        message={toastMessage}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />

      {/* Top Visual Accent & Signal Tracker */}
      <div className="relative w-full overflow-hidden hero-mesh-canvas py-10 px-6 lg:px-12 border-b border-[#c2c6d7]/30">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full telemetry-chip text-on-surface-variant font-mono-sm text-mono-sm shadow-card-default">
              <span className="w-2 h-2 rounded-full bg-[#00E5FF] animate-ping" />
              <span className="font-semibold text-on-surface">DISPATCH // {projects.length + 19} ACTIVE OPEN-SOURCE CELL CLUSTERS</span>
            </div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-bold">
              Open Collaboration Projects
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Find your next team, contribute to production-grade open source, or launch your own project with passionate builders.
            </p>
          </div>

          {/* Action Button Group */}
          <div className="flex items-center gap-3 self-start md:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setSubmitModalOpen(true)}
              className="btn-gradient-primary inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-label-ui text-label-ui shadow-sm active:scale-95 cursor-pointer"
            >
              <span className="material-symbols-outlined text-lg">add_circle</span>
              <span>+ Submit a Project</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Exploration Hub */}
      <div className="max-w-7xl mx-auto w-full px-6 lg:px-12 py-8 flex flex-col gap-8 relative">
        {/* Controls: Filter & Search Console */}
        <div className="w-full glass-base border-t border-l border-white/80 border-r border-b border-[#c2c6d7]/35 p-6 rounded-2xl shadow-card-default flex flex-col gap-6">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            {/* Search Input */}
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              placeholder="Search projects by name, keyword, or tech..."
              id="collaborateSearchInput"
            />

            {/* Sort & Count */}
            <div className="flex items-center gap-3 self-end lg:self-center">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/80 backdrop-blur-sm text-on-surface font-mono-sm text-mono-sm border border-[#c2c6d7]/35 shadow-xs">
                <span className="material-symbols-outlined text-sm text-[#006875]">tune</span>
                <span>
                  Sort: <strong className="font-semibold">{sortBy}</strong>
                </span>
              </div>
              <span className="font-mono-sm text-mono-sm text-on-surface-variant bg-white/70 border border-white/80 px-3 py-1.5 rounded-lg shadow-xs">
                Showing {filteredProjects.length} of {projects.length + 19}
              </span>
            </div>
          </div>

          {/* Tech Stack Filter Pills */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="font-label-ui text-label-ui uppercase tracking-wider text-outline font-semibold">
                Tech Stack Filter
              </span>
              <button
                type="button"
                onClick={resetAllFilters}
                className="text-[#0056c5] font-mono-sm text-mono-sm hover:underline cursor-pointer font-medium"
              >
                Reset Filters
              </button>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              {techFilters.map((pill) => {
                const isActive = activeTech === pill.value;
                return (
                  <button
                    key={pill.value}
                    type="button"
                    onClick={() => setActiveTech(pill.value)}
                    className={`px-3 py-1.5 rounded-lg font-mono-sm text-mono-sm transition-all cursor-pointer ${
                      isActive
                        ? 'btn-gradient-primary shadow-sm'
                        : 'bg-white/80 text-on-surface border border-[#c2c6d7]/40 hover:bg-white shadow-xs'
                    }`}
                  >
                    {pill.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Open Positions Role Filter */}
          <div className="flex flex-col gap-2 pt-2 border-t border-[#c2c6d7]/30">
            <span className="font-label-ui text-label-ui uppercase tracking-wider text-outline font-semibold">
              Open Positions
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {roleFilters.map((rf) => {
                const isActive = activeRole === rf.value;
                return (
                  <button
                    key={rf.value}
                    type="button"
                    onClick={() => setActiveRole(rf.value)}
                    className={`px-3 py-1 rounded-full font-label-ui text-label-ui transition-all cursor-pointer ${
                      isActive
                        ? 'bg-[rgba(0,229,255,0.15)] border border-[rgba(0,229,255,0.40)] text-[#006875] font-semibold'
                        : 'bg-white/70 text-on-surface-variant border border-white/80 hover:bg-white'
                    }`}
                  >
                    {rf.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Active Telemetry Metric Strip */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {TELEMETRY_METRICS.map((metric, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bento-card flex items-center justify-between"
            >
              <div>
                <div className="font-mono-sm text-mono-sm text-outline font-medium">{metric.label}</div>
                <div className="font-headline-md text-headline-md text-on-surface font-bold mt-0.5">
                  {metric.value}
                </div>
              </div>
              <div className={`w-10 h-10 rounded-lg bg-white/90 border border-white/80 shadow-xs flex items-center justify-center ${metric.iconColor}`}>
                <span className="material-symbols-outlined">{metric.icon}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Project Cards Feed */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {filteredProjects.map((proj) => (
              <ProjectCard
                key={proj.id}
                project={proj}
                onApply={handleOpenApply}
                onViewSpecs={handleOpenSpecs}
              />
            ))}
          </div>
        ) : (
          <div className="p-12 text-center rounded-xl bento-card flex flex-col items-center justify-center gap-3">
            <span className="material-symbols-outlined text-5xl text-outline">manage_search</span>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
              No matching projects found
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md leading-relaxed">
              Try clearing some filters or searching for alternative tech keywords like "Rust", "WebGPU", or "Go".
            </p>
            <button
              type="button"
              onClick={resetAllFilters}
              className="btn-gradient-primary mt-2 px-5 py-2 rounded-lg font-label-ui text-label-ui cursor-pointer"
            >
              Reset All Filters
            </button>
          </div>
        )}
      </div>

      {/* Modals */}
      <ApplyModal
        isOpen={applyModalOpen}
        project={selectedProject}
        onClose={() => setApplyModalOpen(false)}
      />

      <SubmitProjectModal
        isOpen={submitModalOpen}
        onClose={() => setSubmitModalOpen(false)}
        onProjectCreated={handleNewProjectCreated}
      />

      <ProjectSpecsModal
        isOpen={specsModalOpen}
        project={specsProject}
        onClose={() => setSpecsModalOpen(false)}
      />
    </div>
  );
}
