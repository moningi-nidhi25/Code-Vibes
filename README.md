# ⚡ The Code Vibe Platform — Cyber-Modern Tech Frontend

A pixel-faithful, responsive React.js frontend built from **Google Stitch** design specs and the authoritative `design.md` design system ("Electric Syntax").

---

## 🚀 Quick Start

### 1. Installation
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Production Build
```bash
npm run build
npm run preview
```

---

## 🎨 Design System: "Electric Syntax"

- **Primary Colors**:
  - Cyan Accent: `#00E5FF` (Neon cyan glow, primary CTA, badges, highlights)
  - Blue Accent: `#2979FF` (Electric cobalt blue, gradients, interactive states)
  - Magenta Accent: `#B324E5` (Vibrant radiant purple-magenta accent)
  - Dark Magenta: `#55127D` / `#330A4B` (Rich atmospheric orbs and card borders)
- **Background & Surfaces**:
  - Deep Space Canvas: `#0A0915`
  - Elevated Glass/Surface: `#121124` / `#16132D` with subtle `rgba(255,255,255,0.08)` borders
  - Ambient Orbs: Multi-layered radial gradients with `filter: blur(120px)` and floating opacity
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
| `/about` | **About Us** | Manifesto bento, Origin telemetry pill, What We Stand For 3-pillar breakdown, Community Leadership maintainers, interactive FAQ accordion, and onboarding footer. |
| `/events` | **Events & Workshops** | Protocol header, live search filter, timeframe dropdown, category pills, upcoming workshops grid, and collapsible past recorded sessions archive. |
| `/events/:eventId` | **Event Details** | Deep dive into `WASM Memory Safety: Zero-Cost Abstractions`, interactive RSVP status toggle, calendar invite, share/bookmark toasts, host bio, syllabus timeline, and live attendee roster. |
| `/collaborate` | **Collaborate Pods** | Pod dispatch console, live telemetry counter, search & multi-tag tech stack filtering, Submit Project modal intake, and Bento project cards with maintainers and open roles. |
| `/projects/:projectId` | **Project Specs (DevPulse)** | Comprehensive system architecture breakdown for `DevPulse - Real-time Distributed Tracing Engine`, pipeline diagram, benchmark sparklines, sandbox terminals with copy actions, and Role Application modal. |
| `/admin` | **Admin Portal** | Operations dashboard for pod orchestration, live cluster telemetry, and applicant dispatch approval queue. |
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
│   │   ├── Button.jsx              # Gradient, secondary, glass, outline, ghost variants
│   │   ├── Badge.jsx               # Status indicators with ping radar animation
│   │   ├── StatCard.jsx            # High-impact metric card with subtle borders
│   │   ├── SearchBar.jsx           # Search input with keyboard ⌘K shortcut listener
│   │   ├── TerminalBlock.jsx       # Terminal with traffic light dots & 1-click clipboard copy
│   │   ├── FaqAccordion.jsx        # Smooth animated FAQ item expand/collapse
│   │   ├── Toast.jsx               # Floating telemetry toast notification system
│   │   └── JoinCommunityModal.jsx  # Multi-step developer onboarding dialog
│   ├── collaborate/
│   │   ├── ProjectCard.jsx         # Bento project card with stack tags & open spots
│   │   ├── ApplyModal.jsx          # Role application submission with tracking ID generator
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
├── index.css                       # Tailwind directives, custom scrollbars, cyber glows
└── main.jsx                        # React root entrypoint
```

---

## ⚡ Key Interactive Features

1. **Global "Join The Community" Modal**: Available from the top navbar button on all pages with multi-step developer intake and real-time validation.
2. **Interactive Search & Filtering**:
   - `/collaborate`: Filter by search query, tech stack (`Rust`, `TypeScript`, `Python`, `Go`, `Solidity`), and role availability (`Frontend`, `Systems`, `ML/AI`, `Design`).
   - `/events`: Filter by search query, timeframe (`upcoming`, `all`, `this-month`), and category tags.
3. **Role Application Flow**: Apply for open roles on any project (e.g. `DevPulse - eBPF Systems Engineer`) with simulated verification and instant application receipt (`VIBE-APP-8941`).
4. **Project Dispatch**: "Submit Project" modal on `/collaborate` for community members to launch new pods.
5. **Event RSVP & Attendance**: Toggle RSVP status (`Confirmed` / `RSVP Now`), copy `.ics` calendar invitation, and trigger share links.
6. **One-Click Terminal Copy**: All code blocks and terminal commands across Event Details, Project Specs, and FAQ have interactive copy buttons with instant feedback.
7. **Mobile Navigation**: Collapsible responsive glass drawer for smartphones and tablets.

---

## 🛠️ Technology Stack

- **React 19**
- **Vite 8**
- **Tailwind CSS 3** (configured with exact design tokens)
- **React Router 7**
- **Google Material Symbols & Google Fonts**
