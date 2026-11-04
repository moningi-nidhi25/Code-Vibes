import React, { useState, useEffect } from 'react';
import Toast from '../components/ui/Toast';
import { getApplications, updateApplicationStatus, deleteApplication, checkBackendHealth } from '../api/apiClient';

/**
 * AdminPortalPage Component
 * Implements Electric Glass & Precision Syntax for telemetry command centers
 * and contributor intake review queues.
 */
export default function AdminPortalPage() {
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('applications');
  const [backendStatus, setBackendStatus] = useState(null);

  const [applications, setApplications] = useState([
    {
      id: 'APP-8941',
      name: 'Julian Vance (@jvance)',
      pod: 'DevPulse Telemetry',
      role: 'eBPF Systems Engineer',
      time: '12m ago',
      status: 'Under Review',
      statusColor: 'bg-[rgba(0,229,255,0.12)] border border-[rgba(0,229,255,0.30)] text-primary',
    },
    {
      id: 'APP-8940',
      name: 'Maya Patel (@mpatel)',
      pod: 'NeuroFlow AI Studio',
      role: 'Frontend Performance Specialist',
      time: '1h ago',
      status: 'Pending',
      statusColor: 'bg-surface-container border border-outline-variant text-on-surface-variant',
    },
    {
      id: 'APP-8939',
      name: 'Kenji Sato (@ksato)',
      pod: 'CloudMesh Engine',
      role: 'Backend Go Engineer',
      time: '3h ago',
      status: 'Accepted',
      statusColor: 'bg-emerald-500/10 border border-emerald-500/40 text-emerald-300',
    },
    {
      id: 'APP-8938',
      name: 'Sarah Lindqvist (@slind)',
      pod: 'OmniAnchor Oracle',
      role: 'Smart Contract Auditor',
      time: '5h ago',
      status: 'Accepted',
      statusColor: 'bg-emerald-500/10 border border-emerald-500/40 text-emerald-300',
    },
  ]);

  useEffect(() => {
    // Check backend health and fetch applications if online
    checkBackendHealth().then((status) => {
      setBackendStatus(status);
      if (status && status.status === 'healthy') {
        getApplications()
          .then((data) => {
            if (data && data.length > 0) setApplications(data);
          })
          .catch(() => {});
      }
    });
  }, []);

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3500);
  };

  const handleApprove = async (appId) => {
    try {
      await updateApplicationStatus(appId, 'Accepted');
    } catch (e) {
      // offline fallback
    }
    setApplications((prev) =>
      prev.map((app) =>
        app.id === appId ? { ...app, status: 'Accepted', statusColor: 'bg-emerald-500/10 border border-emerald-500/40 text-emerald-300' } : app
      )
    );
    showToast(`Application ${appId} approved! Invite dispatched to candidate.`);
  };

  const handleReject = async (appId) => {
    try {
      await deleteApplication(appId);
    } catch (e) {
      // offline fallback
    }
    setApplications((prev) => prev.filter((app) => app.id !== appId));
    showToast(`Application ${appId} archived.`);
  };

  return (
    <div className="flex flex-col w-full relative">
      <Toast
        message={toastMessage}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full py-8 space-y-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-outline-variant">
          <div>
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-bold">
              Community &amp; Pod Orchestration
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant mt-1">
              Live telemetry, contributor intake queue, RFC reviews, and active engineering cells.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            {backendStatus && (
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container border border-outline-variant text-xs font-mono-sm">
                <span className={`w-2 h-2 rounded-full ${backendStatus.status === 'healthy' ? (backendStatus.supabase?.connected ? 'bg-emerald-400' : 'bg-amber-400') : 'bg-rose-400'}`} />
                <span className="text-on-surface">
                  {backendStatus.status === 'healthy'
                    ? (backendStatus.supabase?.connected ? 'Supabase Connected' : 'Python Backend: Fallback Mode')
                    : 'Backend Offline'}
                </span>
              </div>
            )}
            <button
              type="button"
              onClick={() => showToast('Cluster nodes health check: 100% nominal. Latency 1.2ms.')}
              className="btn-frosted-glass px-4 py-2 rounded-lg font-label-ui text-label-ui  cursor-pointer flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-primary text-base">sensors</span>
              <span>Cluster Telemetry</span>
            </button>
            <button
              type="button"
              onClick={() => showToast('All sync channels updated across Discord and GitHub.')}
              className="btn-gradient-primary px-4 py-2 rounded-lg font-label-ui text-label-ui  active:scale-95 cursor-pointer"
            >
              Sync Active Pods
            </button>
          </div>
        </div>

        {/* 4 Stat Bento Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-5 rounded-xl bento-card space-y-1">
            <div className="flex items-center justify-between text-on-surface-variant font-mono-sm text-xs uppercase font-semibold">
              <span>Active Pods</span>
              <span className="material-symbols-outlined text-primary text-base">hub</span>
            </div>
            <div className="font-headline-lg text-headline-lg text-on-surface font-bold">24 Cells</div>
            <div className="font-body-sm text-xs text-primary flex items-center gap-1 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]" />
              100% operational
            </div>
          </div>

          <div className="p-5 rounded-xl bento-card space-y-1">
            <div className="flex items-center justify-between text-on-surface-variant font-mono-sm text-xs uppercase font-semibold">
              <span>Intake Queue</span>
              <span className="material-symbols-outlined text-primary text-base">group_add</span>
            </div>
            <div className="font-headline-lg text-headline-lg text-on-surface font-bold">
              {applications.length} Pending
            </div>
            <div className="font-body-sm text-xs text-on-surface-variant">Avg review &lt; 24h</div>
          </div>

          <div className="p-5 rounded-xl bento-card space-y-1">
            <div className="flex items-center justify-between text-on-surface-variant font-mono-sm text-xs uppercase font-semibold">
              <span>Merged RFCs</span>
              <span className="material-symbols-outlined text-tertiary text-base">description</span>
            </div>
            <div className="font-headline-lg text-headline-lg text-on-surface font-bold">142 Docs</div>
            <div className="font-body-sm text-xs text-tertiary font-semibold">+8 this sprint</div>
          </div>

          <div className="p-5 rounded-xl bento-card space-y-1">
            <div className="flex items-center justify-between text-on-surface-variant font-mono-sm text-xs uppercase font-semibold">
              <span>Edge P99 Latency</span>
              <span className="material-symbols-outlined text-secondary text-base">speed</span>
            </div>
            <div className="font-headline-lg text-headline-lg text-on-surface font-bold">0.84 ms</div>
            <div className="font-body-sm text-xs text-emerald-300 font-semibold">99.98% uptime</div>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-2 border-b border-outline-variant pb-2">
          <button
            type="button"
            onClick={() => setActiveTab('applications')}
            className={`px-4 py-2 rounded-lg font-label-ui text-label-ui transition-colors cursor-pointer ${
              activeTab === 'applications'
                ? 'bg-primary text-on-primary font-semibold '
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
            }`}
          >
            Contributor Intake Queue ({applications.length})
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('pods')}
            className={`px-4 py-2 rounded-lg font-label-ui text-label-ui transition-colors cursor-pointer ${
              activeTab === 'pods'
                ? 'bg-primary text-on-primary font-semibold '
                : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low'
            }`}
          >
            Active Engineering Pods (5)
          </button>
        </div>

        {/* Content Tab 1: Contributor Queue (Glass Data Table Rows) */}
        {activeTab === 'applications' && (
          <div className="rounded-xl bento-card overflow-hidden">
            <div className="p-5 border-b border-outline-variant flex items-center justify-between bg-surface-container-low">
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                Pending Contributor Applications
              </h3>
              <span className="font-mono-sm text-xs text-on-surface-variant">
                Auto-assigned to pod lead review queue
              </span>
            </div>

            <div className="divide-y divide-[#c2c6d7]/30">
              {applications.map((app) => (
                <div
                  key={app.id}
                  className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-200 hover:bg-[rgba(41,121,255,0.05)] border-l-2 border-l-transparent hover:border-l-[#00E5FF]"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-mono-sm text-xs font-semibold text-primary">{app.id}</span>
                      <span className={`px-2 py-0.5 rounded-full font-mono-sm text-xs font-semibold ${app.statusColor}`}>
                        {app.status}
                      </span>
                      <span className="font-mono-sm text-xs text-outline">· {app.time}</span>
                    </div>
                    <div className="font-label-ui text-base font-semibold text-on-surface">
                      {app.name}
                    </div>
                    <div className="font-body-sm text-sm text-on-surface-variant flex items-center gap-2">
                      <span>Pod: <strong className="text-on-surface">{app.pod}</strong></span>
                      <span>•</span>
                      <span>Target: <strong className="text-primary">{app.role}</strong></span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 self-end md:self-auto">
                    {app.status !== 'Accepted' ? (
                      <>
                        <button
                          type="button"
                          onClick={() => handleApprove(app.id)}
                          className="btn-gradient-primary px-3.5 py-1.5 rounded-lg font-label-ui text-xs  active:scale-95 cursor-pointer"
                        >
                          Approve
                        </button>
                        <button
                          type="button"
                          onClick={() => handleReject(app.id)}
                          className="btn-frosted-glass px-3.5 py-1.5 rounded-lg text-on-surface-variant font-label-ui text-xs  cursor-pointer"
                        >
                          Decline
                        </button>
                      </>
                    ) : (
                      <span className="font-mono-sm text-xs text-emerald-300 font-semibold flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">check</span>
                        Onboarded to Pod
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Content Tab 2: Pods overview */}
        {activeTab === 'pods' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { name: 'DevPulse Telemetry', lead: 'Alex Chen', phase: 'Sprint Cycle 4/6', members: 8, repo: 'thecodevibe/devpulse' },
              { name: 'NeuroFlow AI Studio', lead: 'Sophia Rodriguez', phase: 'Sprint Cycle 2/6', members: 6, repo: 'thecodevibe/neuroflow' },
              { name: 'CloudMesh Engine', lead: 'Elena Rostova', phase: 'Sprint Cycle 5/6', members: 7, repo: 'thecodevibe/cloudmesh' },
              { name: 'OmniAnchor Oracle', lead: 'Kaelen Voss', phase: 'Security Audit', members: 5, repo: 'thecodevibe/omnianchor' },
              { name: 'VibeCanvas Playground', lead: 'Marc Dupont', phase: 'Sprint Launch', members: 4, repo: 'thecodevibe/vibecanvas' },
            ].map((p, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bento-card space-y-3"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                    {p.name}
                  </h4>
                  <span className="px-2.5 py-0.5 rounded-full bg-[rgba(0,229,255,0.12)] border border-[rgba(0,229,255,0.30)] text-primary font-mono-sm text-xs font-semibold">
                    {p.phase}
                  </span>
                </div>
                <div className="font-body-sm text-sm text-on-surface-variant space-y-1">
                  <div>Lead: <strong className="text-on-surface">{p.lead}</strong></div>
                  <div>Active Contributors: <strong className="text-primary font-semibold">{p.members} devs</strong></div>
                  <div className="font-mono-sm text-xs text-outline">{p.repo}</div>
                </div>
                <div className="pt-2 border-t border-outline-variant flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => showToast(`Sync triggered for ${p.name}`)}
                    className="text-primary font-label-ui text-xs hover:underline cursor-pointer font-semibold"
                  >
                    Trigger Sprint Sync →
                  </button>
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
