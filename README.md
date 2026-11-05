# ⚡ The Code Vibe Platform — Electric Glass & Precision Syntax

A pixel-faithful, responsive React.js frontend built from **Google Stitch** design specs and the authoritative `design.md` design system ("Electric Glass & Precision Syntax").

---

## 📁 Project Structure

```
Code Vibes/
├── frontend/               # React + Vite frontend application
│   ├── src/                # Components, pages, hooks, mock data, and styles
│   ├── public/             # Static public assets (logo, icons, etc.)
│   ├── package.json        # Frontend dependencies & scripts
│   └── vite.config.js      # Vite build configuration
├── backend/                # Backend API services & database configurations
└── package.json            # Root workspace scripts (delegates to frontend)
```

---

## 🚀 Quick Start

### 1. Installation
```bash
cd frontend
npm install
```

### 2. Development Server
From root:
```bash
npm run dev
```
Or directly in `frontend/`:
```bash
cd frontend
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
npm run preview
```

---

## 🎨 Design System: "Electric Glass & Precision Syntax"

- **Primary Colors**:
  - Vivid Cobalt Blue: `#2979FF` / `#0056c5` (Anchor for primary flows, active tabs, buttons)
  - Electric Cyan: `#00E5FF` (Real-time telemetry, WebSocket ping indicators, code accents)
  - Electric Violet: `#B324E5` / `#9700c6` (Administrative states, premium badges, gradient terminals)
  - Cyber Slate-Black: `#0B1120` / `#151b2b` (High-density contrast text)
- **Glass Translucency & Specular Tints**:
  - Glass Subtle: `rgba(255, 255, 255, 0.70)` + `backdrop-filter: blur(12px) saturate(140%)`
  - Glass Base: `rgba(255, 255, 255, 0.80)` + `backdrop-filter: blur(16px) saturate(160%)`
  - Glass Elevated: `rgba(255, 255, 255, 0.90)` + `backdrop-filter: blur(24px) saturate(180%)`
  - Glass Modal: `rgba(255, 255, 255, 0.92)` + `backdrop-filter: blur(40px) saturate(180%)`
- **Luminous Strokes & Edge Highlights**:
  - Specular Highlight Stroke: `rgba(255, 255, 255, 0.60)` top and left edges
  - Ambient Edge Stroke: `rgba(255, 255, 255, 0.20)` bottom and right edges
  - Structural Stroke: `rgba(194, 198, 215, 0.35)`
- **Multi-Stop Ambient Gradients**:
  - Hero Mesh Canvas: `radial-gradient(at 0% 0%, rgba(0, 229, 255, 0.15) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(179, 36, 229, 0.12) 0px, transparent 50%), radial-gradient(at 50% 100%, rgba(41, 121, 255, 0.10) 0px, transparent 60%)`
  - Core Action Linear: `linear-gradient(135deg, #00E5FF 0%, #2979FF 50%, #B324E5 100%)`
- **Typography**:
  - Display & Headings: `Space Grotesk` (600/700 weight, tight tracking)
  - Body & UI: `Inter` (400/500/600 weight, high legibility)
  - Code & Telemetry: `JetBrains Mono` (monospaced system chips, git tags, terminals)
- **Iconography**:
  - Google Material Symbols Outlined (`data_object`, `terminal`, `bolt`, `hub`, `code_blocks`, `lan`, etc.)

---

## 🗺️ Application Routes

| Path | Screen | Description |
| :--- | :--- | :--- |
| `/` | **Home Page** | Glassmorphism hero, stats strip, 4-card What We Do Bento grid, Featured Events carousel, Open Collaboration spotlight, community testimonials, and persistent CTA. |
| `/about` | **About Us** | Manifesto bento, Origin telemetry pill, What We Stand For 4-pillar breakdown, Community Leadership maintainers, interactive FAQ accordion, and onboarding footer. |
| `/events` | **Events & Workshops** | Protocol header, live search filter, timeframe dropdown, category pills, upcoming workshops grid, and collapsible past recorded sessions archive. |
| `/events/:eventId` | **Event Details** | Deep dive into `Rust for TypeScript Devs: WASM & Memory Safety`, interactive RSVP status toggle, calendar invite, share/bookmark toasts, host bio, syllabus timeline, and live attendee roster. |
| `/collaborate` | **Collaborate Pods** | Pod dispatch console, live telemetry counter, search & multi-tag tech stack filtering, Submit Project modal intake, and Bento project cards with maintainers and open roles. |
| `/projects/:projectId` | **Project Specs (DevPulse)** | Comprehensive system architecture breakdown for `DevPulse - Real-time Distributed Tracing Engine`, pipeline diagram, benchmark sparklines, sandbox terminals with copy actions, and Role Application modal. |
| `/admin` | **Admin Portal** | Operations dashboard for pod orchestration, live cluster telemetry, and applicant dispatch approval queue with glass data table hover states. |
| `*` | **404 Recovery** | Cyber-themed unmapped coordinate route handler with fast return actions. |

---

## 🧩 Reusable Component Architecture

```
src/
├── components/
│   ├── layout/
│   │   ├── MainLayout.jsx          # Shell with Navbar, AtmosphereOrbs, Modal Context & Footer
│   │   ├── Navbar.jsx              # Frosted glass floating navigation with active status & mobile drawer
│   │   ├── Footer.jsx              # Cyber branding, operational ping, social SVGs & link matrix
│   │   └── AtmosphereOrbs.jsx      # Multi-layered ambient radiant backdrop
│   ├── ui/
│   │   ├── Button.jsx              # Gradient primary & frosted glass variants
│   │   ├── Badge.jsx               # Frosted telemetry chips & live status badges
│   │   ├── StatCard.jsx            # High-impact metric card with subtle borders
│   │   ├── SearchBar.jsx           # Glass text input with keyboard ⌘K shortcut listener
│   │   ├── TerminalBlock.jsx       # Frosted syntax viewport with traffic light dots & clipboard copy
│   │   ├── FaqAccordion.jsx        # Bento card FAQ item expand/collapse
│   │   ├── Toast.jsx               # Elevated glass telemetry toast notification
│   │   ├── FloatingNeonOrbs.jsx    # Interactive 3D floating neon glass orbs with mouse parallax
│   │   └── JoinCommunityModal.jsx  # Glass Tier 4 developer onboarding dialog
│   ├── collaborate/
│   │   ├── ProjectCard.jsx         # Bento project card with stack tags & open spots
│   │   ├── ApplyModal.jsx          # Glass Tier 4 role application submission
│   │   ├── SubmitProjectModal.jsx  # New project intake dispatch modal
│   │   └── ProjectSpecsModal.jsx   # Architecture quick-spec viewer dialog
│   └── events/
│       ├── EventCard.jsx           # Workshop banner card with category & time metadata
│       └── PastEventCard.jsx       # Archived session card with stream watch & slide links
├── data/
│   └── mockData.js                 # Complete authoritative datasets matching Stitch specs
├── pages/
│   ├── HomePage.jsx
│   ├── AboutPage.jsx
│   ├── EventsPage.jsx
│   ├── EventDetailsPage.jsx
│   ├── CollaboratePage.jsx
│   ├── ProjectSpecsPage.jsx
│   ├── AdminPortalPage.jsx
│   └── NotFoundPage.jsx
├── App.jsx                         # React Router route registry with ScrollToTop
├── index.css                       # Tailwind directives, frosted glass tiers, specular highlights
└── main.jsx                        # React root entrypoint
```

---

## 🛠️ Technology Stack

- **React 19**
- **Vite 8**
- **Tailwind CSS 3** (configured with exact design tokens)
- **React Router 7**
- **Google Material Symbols & Google Fonts**
