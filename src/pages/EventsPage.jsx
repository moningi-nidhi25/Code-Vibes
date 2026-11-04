import React, { useState } from 'react';
import EventCard from '../components/events/EventCard';
import PastEventCard from '../components/events/PastEventCard';
import SearchBar from '../components/ui/SearchBar';
import Toast from '../components/ui/Toast';
import { EVENTS_PAGE_ITEMS, PAST_SESSIONS } from '../data/mockData';

/**
 * EventsPage Component
 * Implements Electric Glass & Precision Syntax for community events, workshops, and recorded sessions.
 */
export default function EventsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [timeframe, setTimeframe] = useState('Upcoming Events');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [pastArchiveExpanded, setPastArchiveExpanded] = useState(true);
  const [pastCategoryFilter, setPastCategoryFilter] = useState('all');
  const [toastMessage, setToastMessage] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 3500);
  };

  const categories = [
    { key: 'all', label: 'All Events (24)' },
    { key: 'hackathon', label: 'Hackathons (5)' },
    { key: 'workshop', label: 'Workshops (8)' },
    { key: 'talk', label: 'Tech Talks (7)' },
    { key: 'meetup', label: 'Meetups (4)' },
  ];

  const pastCategoryOptions = [
    { key: 'all', label: 'All Recorded Sessions (48)' },
    { key: 'talk', label: 'Tech Talks & Keynotes' },
    { key: 'workshop', label: 'Hands-on Workshops' },
    { key: 'hackathon', label: 'Hackathon Demos' },
  ];

  const filteredEvents = EVENTS_PAGE_ITEMS.filter((event) => {
    const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      event.title.toLowerCase().includes(query) ||
      event.description.toLowerCase().includes(query) ||
      event.categoryLabel.toLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });

  const filteredPast = PAST_SESSIONS.filter((session) => {
    if (pastCategoryFilter === 'all') return true;
    return session.category === pastCategoryFilter;
  });

  return (
    <div className="flex flex-col w-full relative overflow-hidden">
      <Toast
        message={toastMessage}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-space-xl space-y-12">
        {/* Header Section: Discoverability & Filter Toolbar */}
        <section className="space-y-space-lg">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
            <div className="space-y-space-xs max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full telemetry-chip font-mono-sm text-mono-sm text-[#0056c5] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF] mr-1.5 animate-ping" />
                  LIVE EVENT PROTOCOL
                </span>
                <span className="font-mono-sm text-mono-sm text-[#424655]">SYS.REV.2025</span>
              </div>
              <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight font-bold">
                Community Events &amp; Workshops
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                Learn, compete, and level up with fellow developers across hackathons, deep-dive workshops, and tech talks.
              </p>
            </div>

            <div className="flex items-center gap-space-sm p-2 rounded-xl bento-card self-start md:self-auto">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-white/90 rounded-lg border border-white/80 shadow-xs">
                <span className="material-symbols-outlined text-[#0056c5] text-base">calendar_month</span>
                <span className="font-mono-sm text-mono-sm text-on-surface font-semibold">Q4 2025 COHORT</span>
              </div>
              <span className="font-mono-sm text-mono-sm text-on-surface-variant px-2">
                Synced: 18m ago
              </span>
            </div>
          </div>

          {/* Search & Dynamic Filter Suite */}
          <div className="p-space-md rounded-2xl glass-base border-t border-l border-white/80 border-r border-b border-[#c2c6d7]/35 shadow-card-default space-y-space-md">
            <div className="flex flex-col lg:flex-row gap-space-md items-center justify-between">
              {/* Search Bar */}
              <SearchBar
                value={searchQuery}
                onChange={setSearchQuery}
                placeholder="Search events by topic, technology, or speaker..."
                id="eventSearchInput"
              />

              {/* Timeframe Dropdown */}
              <div className="relative w-full lg:w-72">
                <div
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center justify-between px-4 py-2.5 glass-input rounded-md cursor-pointer select-none"
                >
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#0056c5] text-sm">schedule</span>
                    <span className="font-label-ui text-label-ui text-on-surface font-medium">{timeframe}</span>
                  </div>
                  <span
                    className={`material-symbols-outlined text-outline text-sm transition-transform ${
                      dropdownOpen ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </div>

                {dropdownOpen && (
                  <div className="absolute top-full left-0 right-0 mt-2 rounded-xl glass-elevated border border-white/90 shadow-2xl z-30 py-2 animate-in fade-in zoom-in-95">
                    {[
                      { label: 'Upcoming Events', badge: 'Active', count: null },
                      { label: 'This Month', badge: null, count: '8 items' },
                      { label: 'Past Archive', badge: null, count: '42 recorded' },
                    ].map((opt) => (
                      <button
                        key={opt.label}
                        type="button"
                        onClick={() => {
                          setTimeframe(opt.label);
                          setDropdownOpen(false);
                          showToast(`Viewing: ${opt.label}`);
                        }}
                        className="w-full text-left px-4 py-2 font-body-sm text-body-sm text-on-surface hover:bg-white/80 transition-colors flex items-center justify-between cursor-pointer"
                      >
                        <span>{opt.label}</span>
                        {opt.badge && (
                          <span className="font-mono-sm text-mono-sm text-[#0056c5] font-semibold">{opt.badge}</span>
                        )}
                        {opt.count && (
                          <span className="font-mono-sm text-mono-sm text-on-surface-variant">
                            {opt.count}
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1 overflow-x-auto">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setSelectedCategory(cat.key)}
                    className={`category-btn px-4 py-1.5 rounded-full font-label-ui text-label-ui transition-all cursor-pointer ${
                      isActive
                        ? 'btn-gradient-primary shadow-sm'
                        : 'bg-white/70 hover:bg-white text-on-surface border border-white/80 shadow-xs'
                    }`}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>
        </section>

        {/* Main Upcoming Events Grid */}
        <section className="space-y-space-md mb-space-xl">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <h2 className="font-headline-md text-headline-md text-on-surface font-bold">
                Upcoming Scheduled Sessions
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Deep technical immersion hosted weekly by community leads.
              </p>
            </div>
            <div className="font-mono-sm text-mono-sm text-on-surface-variant hidden sm:block">
              Showing{' '}
              <span className="font-semibold text-on-surface">
                {filteredEvents.length} of {EVENTS_PAGE_ITEMS.length}
              </span>{' '}
              confirmed sessions
            </div>
          </div>

          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
              {filteredEvents.map((event) => (
                <EventCard
                  key={event.id}
                  event={event}
                  onOpenDetails={() => showToast(`Opening ${event.title}`)}
                />
              ))}
            </div>
          ) : (
            <div className="p-12 text-center rounded-xl bento-card flex flex-col items-center justify-center gap-3">
              <span className="material-symbols-outlined text-5xl text-outline">event_busy</span>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                No sessions match your filter
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Try clearing search terms or selecting 'All Events'.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="btn-gradient-primary mt-2 px-5 py-2 rounded-lg font-label-ui text-label-ui cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
        </section>

        {/* Past Events Archive (Collapsible / Expandable Section) */}
        <section className="space-y-space-md">
          <div
            onClick={() => setPastArchiveExpanded(!pastArchiveExpanded)}
            className="flex items-center justify-between p-4 rounded-xl bento-card cursor-pointer select-none"
          >
            <div className="flex items-center gap-3">
              <span className="p-2 rounded-lg bg-white/90 text-[#0056c5] border border-white/80 material-symbols-outlined shadow-xs">
                history_edu
              </span>
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-bold">
                  Past Events &amp; Recorded Sessions
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Review recordings, benchmark repos, and slides from past hackathons and talks.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono-sm text-mono-sm text-on-surface-variant hidden sm:inline font-semibold">
                {PAST_SESSIONS.length} Archives Available
              </span>
              <span
                className={`material-symbols-outlined text-outline transition-transform duration-200 ${
                  pastArchiveExpanded ? 'rotate-180' : 'rotate-0'
                }`}
              >
                expand_more
              </span>
            </div>
          </div>

          {pastArchiveExpanded && (
            <div className="space-y-4 pt-2 animate-in fade-in duration-200">
              {/* Archive filter pills */}
              <div className="flex flex-wrap items-center justify-between gap-3 p-4 rounded-xl bento-card">
                <div className="flex flex-wrap items-center gap-2">
                  {pastCategoryOptions.map((opt) => {
                    const isActive = pastCategoryFilter === opt.key;
                    return (
                      <button
                        key={opt.key}
                        type="button"
                        onClick={() => setPastCategoryFilter(opt.key)}
                        className={`px-3.5 py-1.5 rounded-full font-label-ui text-label-ui transition-colors cursor-pointer ${
                          isActive
                            ? 'btn-gradient-primary shadow-sm'
                            : 'bg-white/70 hover:bg-white text-on-surface border border-white/80 shadow-xs'
                        }`}
                      >
                        {opt.label}
                      </button>
                    );
                  })}
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant font-mono-sm text-mono-sm">
                  <span className="material-symbols-outlined text-sm text-[#0056c5]">tune</span>
                  <span>Filtered by: Latest 2025 Sessions</span>
                </div>
              </div>

              {/* Grid of Past Sessions Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                {filteredPast.map((session) => (
                  <PastEventCard
                    key={session.id}
                    session={session}
                    onActionNotice={showToast}
                  />
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </div>
  );
}
