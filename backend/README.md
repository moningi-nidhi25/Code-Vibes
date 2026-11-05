# The Code Vibe - Python & Supabase Backend

FastAPI and Supabase-powered backend for **The Code Vibe** platform. Provides high-performance REST APIs for dual-persona authentication, operator event management, contributor intake queues, project pod specs, and community onboarding.

---

## 🏗️ Architecture & Features

- **Framework**: Python 3.12+ / 3.14 with [FastAPI](https://fastapi.tiangolo.com/) and [Uvicorn](https://www.uvicorn.org/)
- **Database & Auth**: [Supabase](https://supabase.com/) (PostgreSQL with Row Level Security)
- **Data Validation**: Pydantic v2
- **Graceful Fallback**: If Supabase credentials are not configured yet, the server automatically boots in local in-memory fallback mode with seeded events, projects, applications, and demo accounts so development and UI testing never break.

---

## ⚡ Quick Start

### 1. Set Up Virtual Environment

```bash
# In the backend directory
python -m venv venv

# Windows (PowerShell):
.\venv\Scripts\Activate.ps1
# Windows (CMD):
.\venv\Scripts\activate.bat
# Linux/macOS:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

### 2. Configure Supabase (Optional)

1. Create a project at [supabase.com](https://supabase.com).
2. Open the **SQL Editor** in your Supabase dashboard.
3. Paste the contents of [`backend/supabase_schema.sql`](./supabase_schema.sql) and run it.
4. Copy `.env.example` to `.env` and fill in your keys:

```ini
SUPABASE_URL=https://your-project-id.supabase.co
SUPABASE_KEY=your-supabase-key-here
PORT=8000
HOST=0.0.0.0
CORS_ORIGINS=http://localhost:5173,http://127.0.0.1:5173,http://localhost:3000
```

### 3. Start the Backend API Server

```bash
python main.py
# or using uvicorn directly:
uvicorn main:app --reload --port 8000
```

The API will be available at:
- **API Base**: `http://localhost:8000`
- **Interactive Swagger Docs**: `http://localhost:8000/docs`
- **Health Check & Supabase Status**: `http://localhost:8000/api/health`

### 4. Run Automated Test Suite

```bash
python test_api.py
```

---

## 📡 REST API Reference

### 🔐 Authentication (`/api/auth`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/auth/login` | Authenticate user (Builder or Operator Admin). Returns user profile & demo bearer token. |
| `POST` | `/api/auth/register` | Register new community member account. |
| `GET` | `/api/auth/me` | Fetch active authenticated user profile. |

> **Default Seed Accounts**:
> - **Operator / Admin**: `admin@thecodevibe.io` / `admin123`
> - **Builder / Member**: `builder@thecodevibe.io` / `builder123`

### 🎟️ Events & Admin Operations (`/api/events`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/events` | List all events with optional `category` and `is_past` query filters. |
| `GET` | `/api/events/{id}` | Retrieve full event details and live seat availability metrics. |
| `POST` | `/api/events` | **[Admin]** Deploy new event with capacity and initial status. |
| `PATCH` | `/api/events/{id}` | **[Admin]** Update event details, attendee count, or seat capacity. |
| `PATCH` | `/api/events/{id}/toggle-registration` | **[Admin]** Toggle event registration between Open and Closed. |
| `DELETE` | `/api/events/{id}` | **[Admin]** Remove an event from the registry. |
| `POST` | `/api/events/{id}/rsvp` | Register for an event spot (validates `registration_open` and capacity). |

### 👥 Contributor Applications (`/api/applications`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/applications` | **[Admin]** List pending applications with optional `status` or `pod` filters. |
| `POST` | `/api/applications` | Submit contributor intake profile with skills, roles, and goals. |
| `PATCH` | `/api/applications/{id}/status` | **[Admin]** Update intake status (`Under Review`, `Accepted`, `Archived`). |
| `DELETE` | `/api/applications/{id}` | **[Admin]** Archive/remove candidate application. |

### 🚀 Projects & Pods (`/api/projects`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `GET` | `/api/projects` | List active engineering pods (DevPulse, NeuroFlow, CloudMesh, etc.). |
| `GET` | `/api/projects/{slug}` | Get architecture specs and technical stack for a project pod. |
| `POST` | `/api/projects` | Submit new project pod proposal. |

### 🌐 Community & Telemetry (`/api/community`, `/api/health`)
| Method | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/community/join` | Onboard new developer to Discord and mailing list. |
| `GET` | `/api/community/stats` | Real-time community stats (members, active pods, merged RFCs). |
| `GET` | `/api/health` | Health check reporting FastAPI status, version, and Supabase connectivity. |
