# ⚡ The Code Vibe Platform — Full-Stack Monorepo

The Code Vibe is an engineering community and open-source project collaboration platform featuring an **Electric Glass & Precision Syntax** design system, a modern **React 19** frontend, and a high-performance **Python (FastAPI) & Supabase** backend.

---

## 📁 Repository Structure

```
Code Vibes/
├── frontend/                     # React 19 + Vite + Tailwind CSS frontend
│   ├── src/
│   │   ├── api/                  # Unified API client connecting to Python & Supabase
│   │   ├── components/           # UI components (modals, cards, layout, badges)
│   │   ├── data/                 # Mock data & initial states
│   │   ├── pages/                # Routes (Home, Collaborate, Specs, Admin, Events)
│   │   └── App.jsx
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── .env.example
│
├── backend/                      # Python (FastAPI) & Supabase backend
│   ├── routers/
│   │   ├── projects.py           # Projects & pod listings, specs, and submissions
│   │   ├── applications.py       # Contributor intake queue & status management
│   │   ├── events.py             # Event listings, deep dives & RSVP management
│   │   └── community.py          # Cohort onboarding intake & telemetry stats
│   ├── config.py                 # Pydantic & environment settings
│   ├── database.py               # Supabase client + resilient in-memory fallback
│   ├── models.py                 # Pydantic schemas (validation & typing)
│   ├── main.py                   # FastAPI server entry point
│   ├── supabase_schema.sql       # Production-ready PostgreSQL & Supabase DDL
│   ├── seed.py                   # Supabase cloud database seeder script
│   ├── requirements.txt          # Python dependencies
│   ├── test_api.py               # Backend endpoint test suite
│   ├── .env.example              # Template environment variables
│   └── README.md
│
└── README.md                     # Root documentation
```

---

## 🚀 Getting Started

### 1. Backend Setup (Python + Supabase)

1. **Navigate to the backend directory**:
   ```bash
   cd backend
   ```

2. **Create and activate a virtual environment**:
   ```bash
   # Windows (PowerShell)
   python -m venv venv
   .\venv\Scripts\Activate.ps1

   # Linux / macOS
   python -m venv venv
   source venv/bin/activate
   ```

3. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

4. **Configure Supabase**:
   - Create a project on [supabase.com](https://supabase.com).
   - In your Supabase dashboard, go to the **SQL Editor**, paste the contents of [`backend/supabase_schema.sql`](backend/supabase_schema.sql), and click **Run**.
   - Copy `backend/.env.example` to `backend/.env` and insert your Supabase URL and anon/service key:
     ```ini
     SUPABASE_URL=https://your-project.supabase.co
     SUPABASE_KEY=your-supabase-key
     PORT=8000
     HOST=0.0.0.0
     ```
   *(Note: If you leave `SUPABASE_URL` blank, the backend automatically operates in resilient local fallback mode with pre-seeded data, so you can develop immediately even without internet or keys).*

5. **Run the backend**:
   ```bash
   python main.py
   # Or using uvicorn directly:
   uvicorn main:app --reload --port 8000
   ```
   - API: [http://localhost:8000](http://localhost:8000)
   - Interactive Swagger Docs: [http://localhost:8000/docs](http://localhost:8000/docs)
   - Health Status: [http://localhost:8000/api/health](http://localhost:8000/api/health)

---

### 2. Frontend Setup (React + Vite)

1. **Navigate to the frontend directory**:
   ```bash
   cd frontend
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure API URL (optional)**:
   - Default is `http://localhost:8000` (pre-configured in `frontend/.env`).

4. **Start the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

5. **Build for production**:
   ```bash
   npm run build
   npm run preview
   ```

---

## 🌐 API Endpoints Overview

| Category | Endpoint | Method | Description |
| :--- | :--- | :--- | :--- |
| **System** | `/api/health` | `GET` | Health check & Supabase connection state |
| **Projects** | `/api/projects` | `GET` | Filter projects by category, search term |
| **Projects** | `/api/projects/{id}` | `GET` | Detailed specs & requirements for a pod |
| **Projects** | `/api/projects` | `POST` | Submit an open-source community project |
| **Intake Queue** | `/api/applications` | `GET` | View contributor applications (Admin portal) |
| **Intake Queue** | `/api/applications` | `POST` | Submit role application for a project pod |
| **Intake Queue** | `/api/applications/{id}/status` | `PATCH` | Approve (`Accepted`) or Reject application |
| **Intake Queue** | `/api/applications/{id}` | `DELETE` | Archive application |
| **Events** | `/api/events` | `GET` | Upcoming masterclasses & past sessions |
| **Events** | `/api/events/{id}` | `GET` | Event syllabus, speakers, and schedule |
| **Events** | `/api/events/{id}/rsvp` | `POST` | Reserve / RSVP a seat for an event |
| **Community** | `/api/community/join` | `POST` | Onboard builder into Cohort network |
| **Community** | `/api/community/stats` | `GET` | Platform telemetry & active builder metrics |
