# The Code Vibe - Python & Supabase Backend

FastAPI and Supabase-powered backend for **The Code Vibe** platform. Provides high-performance REST APIs for open-source engineering pods, contributor applications queue, event ticketing/RSVPs, telemetry metrics, and community onboarding.

---

## Architecture & Features

- **Framework**: Python 3.12+ / 3.14 with [FastAPI](https://fastapi.tiangolo.com/) and [Uvicorn](https://www.uvicorn.org/)
- **Database & Auth**: [Supabase](https://supabase.com/) (PostgreSQL with Row Level Security and Vector capabilities)
- **Data Validation**: Pydantic v2
- **Graceful Fallback**: If Supabase credentials are not set yet, the server automatically starts in local in-memory fallback mode so development and UI testing never break.

---

## Quick Start

### 1. Set Up Virtual Environment

```bash
# In the backend directory
python -m venv venv

# Activate virtual environment
# Windows (PowerShell):
.\venv\Scripts\Activate.ps1
# Windows (CMD):
.\venv\Scripts\activate.bat
# Linux/macOS:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 2. Configure Supabase

1. Create a free project at [supabase.com](https://supabase.com).
2. In the Supabase project dashboard, open the **SQL Editor** (`New query`).
3. Open [`backend/supabase_schema.sql`](./supabase_schema.sql), paste its entire contents into the SQL Editor, and click **Run**.
   - This creates tables (`projects`, `applications`, `events`, `event_rsvps`, `community_members`), sets up Row Level Security (RLS) policies, and inserts starter data.
4. Go to **Project Settings > API** in your Supabase dashboard to find:
   - **Project URL**
   - **anon / public key** (or `service_role` secret key for backend)
5. Copy `.env.example` to `.env` and fill in your keys:

```ini
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_KEY=your-supabase-key-here
PORT=8000
HOST=0.0.0.0
CORS_ORIGINS=http://localhost:5173,http://127.0.0.1:5173,http://localhost:3000
```

*(Optional)* Run the Python seeder if needed:
```bash
python seed.py
```

### 3. Start the Backend API Server

```bash
python main.py
# or using uvicorn directly:
uvicorn main:app --reload --port 8000
```

The API will be running at:
- **API Base**: `http://localhost:8000`
- **Interactive Swagger Docs**: `http://localhost:8000/docs`
- **ReDoc Docs**: `http://localhost:8000/redoc`
- **Health & Supabase status**: `http://localhost:8000/api/health`

---

## API Endpoints Reference

### Telemetry & Platform
- `GET /api/health` — Backend health and Supabase connection status.
- `GET /api/community/stats` — Platform stats and telemetry metrics.

### Projects & Pods
- `GET /api/projects` — List open collaboration projects (`?category=...&search=...`).
- `GET /api/projects/{slug_or_id}` — Get single project specs (e.g. `devpulse`).
- `POST /api/projects` — Submit a new open-source community project.

### Contributor Applications
- `GET /api/applications` — List intake applications for Admin Portal (`?status=...&pod=...`).
- `POST /api/applications` — Submit a new contributor application.
- `PATCH /api/applications/{id}/status` — Approve or reject an application (`Accepted`, `Rejected`, `Under Review`).
- `DELETE /api/applications/{id}` — Archive / delete an application.

### Events & RSVPs
- `GET /api/events` — List upcoming events and past technical sessions (`?category=...&is_past=...`).
- `GET /api/events/{id}` — Event details, agenda, and speakers.
- `POST /api/events/{id}/rsvp` — RSVP / register for an event.

### Community Onboarding
- `POST /api/community/join` — Submit join intake form (Cohort onboarding).
- `GET /api/community/members` — List community members.
