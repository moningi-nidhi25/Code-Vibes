import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/chakra-petch/500.css'
import '@fontsource/chakra-petch/600.css'
import '@fontsource/chakra-petch/700.css'
import '@fontsource-variable/ibm-plex-sans'
import '@fontsource-variable/jetbrains-mono'
import '@fontsource/material-symbols-outlined'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Any remote avatar/photo that fails to load falls back to an on-brand initials tile.
document.addEventListener('error', (e) => {
  const img = e.target;
  if (!(img instanceof HTMLImageElement) || img.dataset.fallback || img.src.startsWith('data:')) return;
  img.dataset.fallback = '1';
  const label = (img.alt || '?').trim().split(/\s+/).map((w) => w[0]).slice(0, 2).join('').toUpperCase();
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" fill="#0F1F45"/><text x="32" y="40" font-family="monospace" font-size="24" font-weight="700" text-anchor="middle" fill="#2FD8FF">${label}</text></svg>`;
  img.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg);
}, true);
