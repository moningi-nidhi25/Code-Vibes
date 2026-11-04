import React, { useState } from 'react';
import EventCard from '../components/events/EventCard';
import PastEventCard from '../components/events/PastEventCard';
import SearchBar from '../components/ui/SearchBar';
import Toast from '../components/ui/Toast';
import { EVENTS_PAGE_ITEMS, PAST_SESSIONS } from '../data/mockData';

const wrap = 'w-full max-w-7xl mx-auto px-5 lg:px-10';

function Tab({ active, onClick, children, count }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`relative px-4 py-3 text-sm font-medium cursor-pointer transition-colors whitespace-nowrap ${
        active ? 'text-on-surface after:absolute after:inset-x-0 after:bottom-[-1px] after:h-0.5 after:bg-primary' : 'text-on-surface-variant hover:text-on-surface'
      }`}
    >
      {children}
      <span className="ml-2 font-mono text-xs text-outline">{count}</span>
    </button>
  );
}

export default function EventsPage() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [pastFilter, setPastFilter] = useState('all');
  const [toast, setToast] = useState({ msg: '', show: false });

  const notify = (msg) => {
    setToast({ msg, show: true });
    setTimeout(() => setToast((t) => ({ ...t, show: false })), 3500);
  };

  const count = (key) => (key === 'all' ? EVENTS_PAGE_ITEMS.length : EVENTS_PAGE_ITEMS.filter((e) => e.category === key).length);
  const categories = [
    { key: 'all', label: 'All' },
    { key: 'hackathon', label: 'Hackathons' },
    { key: 'workshop', label: 'Workshops' },
    { key: 'talk', label: 'Tech talks' },
    { key: 'meetup', label: 'Meetups' },
  ].filter((c) => c.key === 'all' || count(c.key) > 0);

  const q = query.toLowerCase().trim();
  const events = EVENTS_PAGE_ITEMS.filter(
    (e) =>
      (category === 'all' || e.category === category) &&
      (!q || e.title.toLowerCase().includes(q) || e.description.toLowerCase().includes(q) || e.categoryLabel.toLowerCase().includes(q))
  );

  const pastOptions = [
    { key: 'all', label: 'All' },
    { key: 'talk', label: 'Talks' },
    { key: 'workshop', label: 'Workshops' },
    { key: 'hackathon', label: 'Hackathon demos' },
  ];
  const past = PAST_SESSIONS.filter((s) => pastFilter === 'all' || s.category === pastFilter);

  return (
    <div className="flex flex-col w-full">
      <Toast message={toast.msg} visible={toast.show} onClose={() => setToast((t) => ({ ...t, show: false }))} />

      <header className={`${wrap} pt-16 pb-10 lg:pt-20`}>
        <h1 className="font-display font-bold text-display-hero text-on-surface">Events</h1>
        <p className="mt-5 max-w-[56ch] text-body-lg text-on-surface-variant">
          Hackathons, workshops and talks run by students and the engineers who mentor them. Everything is free to join.
        </p>
      </header>

      <section className={`${wrap} pb-20`} aria-labelledby="upcoming-h">
        <h2 id="upcoming-h" className="sr-only">Upcoming events</h2>
        <div className="border-b border-outline-variant flex flex-col lg:flex-row lg:items-center justify-between gap-3">
          <div className="flex overflow-x-auto -mb-px" role="group" aria-label="Filter by type">
            {categories.map((c) => (
              <Tab key={c.key} active={category === c.key} onClick={() => setCategory(c.key)} count={count(c.key)}>
                {c.label}
              </Tab>
            ))}
          </div>
          <div className="w-full lg:w-96 pb-3 lg:pb-0 flex">
            <SearchBar value={query} onChange={setQuery} placeholder="Search by topic or technology" id="eventSearchInput" />
          </div>
        </div>

        {events.length > 0 ? (
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {events.map((e) => <EventCard key={e.id} event={e} />)}
          </div>
        ) : (
          <div className="mt-8 border border-dashed border-outline-variant rounded-md p-12 text-center">
            <h3 className="font-display text-lg font-semibold text-on-surface">No events match that search</h3>
            <p className="mt-1 text-on-surface-variant">Clear the search or pick a different type.</p>
            <button
              type="button"
              onClick={() => { setQuery(''); setCategory('all'); }}
              className="btn-gradient-primary mt-5 px-5 py-2 text-sm cursor-pointer"
            >
              Clear filters
            </button>
          </div>
        )}
      </section>

      <section className="border-t border-outline-variant bg-surface-container-lowest/60" aria-labelledby="past-h">
        <div className={`${wrap} py-16 lg:py-20`}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div>
              <h2 id="past-h" className="font-display font-bold text-headline-xl text-on-surface">Past sessions</h2>
              <p className="mt-3 max-w-[52ch] text-on-surface-variant">Recordings, slides and code from earlier events. Catch up at your own pace.</p>
            </div>
            <div className="flex flex-wrap gap-2" role="group" aria-label="Filter archive">
              {pastOptions.map((o) => (
                <button
                  key={o.key}
                  type="button"
                  onClick={() => setPastFilter(o.key)}
                  aria-pressed={pastFilter === o.key}
                  className={`px-3 py-1.5 text-sm rounded border cursor-pointer transition-colors ${
                    pastFilter === o.key ? 'border-primary text-primary bg-primary/10' : 'border-outline-variant text-on-surface-variant hover:text-on-surface hover:border-outline'
                  }`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </div>
          <ul className="mt-8 border-t border-outline-variant">
            {past.map((s) => <PastEventCard key={s.id} session={s} onActionNotice={notify} />)}
          </ul>
        </div>
      </section>
    </div>
  );
}
