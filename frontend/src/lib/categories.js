// One place that decides how an event category looks everywhere in the app.
const STYLES = {
  hackathon: {
    key: 'hackathon',
    label: 'Hackathon',
    color: '#2FD8FF',
    icon: 'trophy',
    lines: ['$ git push origin main', 'remote: demo deployed ✓', '$ vibe submit --team 4'],
  },
  talk: {
    key: 'talk',
    label: 'Tech talk',
    color: '#C58BFF',
    icon: 'podcasts',
    lines: ['await shard.route(key);', 'consensus: quorum(3/5)', '// questions in chat'],
  },
  workshop: {
    key: 'workshop',
    label: 'Workshop',
    color: '#6FA0FF',
    icon: 'build',
    lines: ['SELECT id FROM docs', 'ORDER BY embedding <-> $1', 'LIMIT 10;'],
  },
  competition: {
    key: 'competition',
    label: 'Competition',
    color: '#3DDC97',
    icon: 'bolt',
    lines: ['fn golf(src: &str) -> usize', '  // fewer bytes wins', 'leaderboard.push(score);'],
  },
};

export function getCategoryStyle(value = '') {
  const v = String(value).toLowerCase();
  if (v.startsWith('hack')) return STYLES.hackathon;
  if (v.startsWith('tech') || v.startsWith('talk')) return STYLES.talk;
  if (v.startsWith('work')) return STYLES.workshop;
  if (v.startsWith('comp')) return STYLES.competition;
  return STYLES.workshop;
}
